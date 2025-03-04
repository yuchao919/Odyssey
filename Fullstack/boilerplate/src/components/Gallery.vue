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
        <template #toolbarButtons>
          <vxe-button status="primary" icon="vxe-icon-add" @click="addEvent">新增</vxe-button>
        </template>
        <template #action="{ row }">
          <vxe-button mode="text" status="error" @click="saveEvent">保存</vxe-button>
          <vxe-button mode="text" status="error" @click="delEvent">删除</vxe-button>
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
  VxeGridListeners
} from 'vxe-table';
import { VxeUI } from 'vxe-table';
import { Search } from '@element-plus/icons-vue';

import * as userService from '../services/UserService.ts';
import { Row } from 'vxe-pc-ui';

type RowVO = UserInfo;

const gridRef = ref<VxeGridInstance<RowVO>>();


let searchKey = ref('');

const searchEvent = async () => {
  gridRef.value?.commitProxy('query');
};

const addEvent = async () => {
  const $grid = gridRef.value;
  if ($grid) {
    const record = {};
    const { row: newRow } = await $grid.insert(record);
    $grid.setEditRow(newRow);
  }
};

const delEvent = async () => {
  VxeUI.modal.confirm({
    title: '操作提示',
    content: '请您确认是否删除？'
  });
};

const saveEvent = async () => {

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


const gridOptions = reactive<VxeGridProps<RowVO> & { pagerConfig: VxeGridPropTypes.PagerConfig; }>({
  border: true,
  loading: false,
  stripe: true,
  showOverflow: true,
  showFooter: true,
  height: 'auto',
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
      tools: 'toolbarButtons'
    }
  },
  columns: [
    { field: 'checkbox', type: 'checkbox', width: 80 },
    { field: 'seq', type: 'seq', width: 80 },
    { field: 'id', title: 'ID', width: 100 },
    { field: 'name', title: '名称', width: 120, dragSort: true },
    { field: 'age', title: '年龄', width: 80 },
    { field: 'email', title: 'email', minWidth: 160 },
    { slots: { default: 'action' }, title: '操作', width: 120 }
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
