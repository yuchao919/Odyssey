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
      <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue';
import type { VxeGridInstance, VxeGridProps, VxeGridPropTypes, VxeColumnPropTypes, VxeGridListeners } from 'vxe-table';
import { Search } from '@element-plus/icons-vue';

import * as userService from '../services/UserService.ts';
import { cellStarts } from 'element-plus/es/components/table/src/config.mjs';


const gridRef = ref<VxeGridInstance<UserInfo>>();

let searchKey = ref('');

function searchEvent() {
  gridRef.value?.commitProxy('query');
};


const loadData = async (page: VxeGridPropTypes.ProxyAjaxQueryPageParams) => {
  const queryParam: QueryParam = {
    pageSize: page.pageSize,
    currentPage: page.currentPage,
    searchKey: searchKey.value
  };

  const res: any = await userService.queryUsers(queryParam);

  const data: any = res.data;

  return {
    data: data.data,
    total: data.total
  };

  // return new Promise(resolve => {
  //   const start = (page.currentPage - 1) * page.pageSize;
  //   const end = start + page.pageSize;
  //   const data: UserInfo[] = tableData.slice(start, end);
  //   resolve({
  //     data,
  //     total: tableData.length
  //   });
  // });
};


const gridOptions = reactive<VxeGridProps<UserInfo> & { pagerConfig: VxeGridPropTypes.PagerConfig; }>({
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
  columns: [
    { field: 'seq', type: 'seq', width: 80 },
    { field: 'checkbox', type: 'checkbox', width: 80 },
    { field: 'id', title: 'id', width: 100 },
    { field: 'name', title: '名称', width: 120, dragSort: true },
    { field: 'age', title: '年龄', width: 80 },
    { field: 'email', title: 'email', minWidth: 160 },
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
