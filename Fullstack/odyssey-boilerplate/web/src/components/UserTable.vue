<template>
  <div class="page-wrapper">
    <div class="header">
      <div>
        <el-input v-model="searchKey" style="width:600px;" @keyup.enter="searchEvent" clearable>
          <template #append>
            <el-button :icon="Search" @click.stop.prevent="searchEvent" />
          </template>
        </el-input>
      </div>
    </div>
    <div class="content">
      <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents">
        <template #leftButtons>
          <vxe-button status="danger" icon="vxe-icon-delete" @click="deleteRowsEvent">删除</vxe-button>
        </template>
        <template #toolbarButtons>
          <vxe-button status="primary" icon="vxe-icon-add" @click="addRowEvent">新增</vxe-button>
        </template>
        <template #action="{ row }">
          <template v-if="hasEditStatus(row)">
            <vxe-button @click="cancelRowEvent(row)">取消</vxe-button>
            <vxe-button status="primary" @click="saveRowEvent(row)">保存</vxe-button>
          </template>
          <template v-else>
            <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
            <vxe-button status="error" @click="delRowEvent(row)">删除</vxe-button>
          </template>
        </template>
      </vxe-grid>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type {
  VxeGridInstance,
  VxeGridProps,
  VxeGridPropTypes,
  VxeGridListeners,
  VxeTablePropTypes
} from 'vxe-table';
import { VxeUI } from 'vxe-table';
import { Search } from '@element-plus/icons-vue';

import * as userService from '../services/UserService.ts';

type RowVO = UserInfo;

const gridRef = ref<VxeGridInstance<RowVO>>();


let searchKey = ref('');

const searchEvent = async () => {
  gridRef.value?.commitProxy('query');
};

const isCanEdit = ($grid: VxeGridInstance) => {
  const editingRecord = $grid.getEditRecord();
  if (editingRecord) {
    VxeUI.modal.message({ content: '请先保存编辑中的数据！', status: 'warning' });
    return false;
  }

  return true;
};

const reload = async () => {
  gridRef.value?.commitProxy('query');
};

const addRowEvent = async () => {
  const $grid = gridRef.value;
  if (!$grid) {
    return;
  }

  if (!isCanEdit($grid)) {
    return;
  }

  const record = {};
  const { row: newRow } = await $grid.insert(record);
  $grid.setEditRow(newRow);
};

const hasEditStatus = (row: RowVO) => {
  const $grid = gridRef.value;
  if ($grid) {
    return $grid.isEditByRow(row);
  }
  return false;
};

const saveRowEvent = async (row: RowVO) => {
  const $grid = gridRef.value;
  if (!$grid) {
    return;
  }
  await $grid.clearEdit();

  const result = !row.id
    ? await userService.addUser(row)
    : await userService.updateUser(row);

  VxeUI.modal.message({ content: 'success', status: 'success' });

  await reload();

  // // 重新加载行
  // await $grid.reloadRow(row, {});
};

const cancelRowEvent = async (row: RowVO) => {
  const $grid = gridRef.value;
  if ($grid) {
    await $grid.clearEdit();
    // 新增的数据没有id，直接删除
    if (!row.id) {
      await $grid.remove(row);
      return;
    }

    // 还原数据
    await $grid.revertData(row);
  }
};

const editRowEvent = async (row: RowVO) => {
  const $grid = gridRef.value;
  if (!$grid) {
    return;
  } if (!isCanEdit($grid)) {
    return;
  }

  await $grid.setEditRow(row);
};

const deleteUsersByIds = async (ids: number[]) => {
  const code = await VxeUI.modal.confirm({
    title: '操作提示',
    content: '请您确认是否删除？',
    status: 'warning'
  });
  if (code === 'confirm') {
    await userService.deleteUsers(ids);
    await reload();
  }
}

const getSelectRows = async () => {
  const $grid = gridRef.value;
  if (!$grid) {
    return;
  }
  const selectRecords = $grid.getCheckboxRecords();
  return selectRecords;
}

const deleteRowsEvent = async () => {
  const selectRows = await getSelectRows();
  if (!selectRows || !selectRows.length) {
    return;
  }
  return await deleteUsersByIds(selectRows.map(x => x.id));
}

const delRowEvent = async (row: RowVO) => {
  return await deleteUsersByIds([row.id]);
};



const loadData = async (page: VxeGridPropTypes.ProxyAjaxQueryPageParams) => {
  const queryParam: QueryParam = {
    pageSize: page.pageSize,
    currentPage: page.currentPage,
    searchKey: searchKey.value
  };

  const res = await userService.queryUsers(queryParam);
  const data = res.data;

  return {
    data: data.data,
    total: data.total
  };
};


const gridOptions = reactive<VxeGridProps<RowVO> & { pagerConfig: VxeGridPropTypes.PagerConfig; } & { editConfig: VxeTablePropTypes.EditConfig<RowVO>; }>({
  border: true,
  loading: false,
  stripe: true,
  showOverflow: true,
  showFooter: true,
  height: 'auto',
  keepSource: true,
  editConfig: {
    trigger: 'manual',
    mode: 'row',
    autoClear: false,
    showStatus: true
  },
  columnConfig: {
    resizable: true,
  },
  columnDragConfig: {
    trigger: 'cell',
    showIcon: false,
    showGuidesStatus: true
  },

  rowConfig: {
    isHover: true
  },
  toolbarConfig: {
    slots: {
      buttons: 'leftButtons',
      tools: 'toolbarButtons'
    }
  },
  columns: [
    { field: 'checkbox', type: 'checkbox', width: 80 },
    { field: 'seq', type: 'seq', width: 80 },
    { field: 'id', title: 'ID', width: 100 },
    { field: 'name', title: '名称', width: 120, editRender: { name: 'VxeInput' }, dragSort: true },
    { field: 'age', title: '年龄', width: 80, editRender: { name: 'VxeInput' } },
    { field: 'email', title: 'email', minWidth: 160, editRender: { name: 'VxeInput' } },
    { slots: { default: 'action' }, title: '操作', width: 160 }
  ],
  pagerConfig: {
    pageSize: 20,
    pageSizes: [2, 20, 100, 500]
  },
  proxyConfig: {
    seq: true,
    response: {
      result: 'data',
      total: 'total'
    },
    ajax: {
      query({ page }) {
        return loadData(page);
      }
    }
  },
  footerData: []
});

const gridEvents: VxeGridListeners = {
  pageChange({ pageSize }) {
    gridOptions.pagerConfig.pageSize = pageSize;
  },
  proxyQuery() {

  }
};

</script>

<style scoped>
.page-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
}

.header {
  height: 40px;
  display: flex;
  align-items: center;
}

.content {
  flex-grow: 1;
}
</style>
