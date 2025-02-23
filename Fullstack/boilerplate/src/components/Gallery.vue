<template>
  <div class="page-wrapper">
    <div class="header">
      <div>
        <el-input v-model="searchKey" style="width:600px;">
          <template #append>
            <el-button :icon="Search" />
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
import { type VxeGridInstance, type VxeGridProps, type VxeGridPropTypes, type VxeColumnPropTypes, type VxeGridListeners } from 'vxe-table';
import { Search } from '@element-plus/icons-vue';
import { type VxeFormItemPropTypes, type VxeSelectProps, type VxeFormProps, type VxeFormListeners, type VxeFormInstance } from 'vxe-pc-ui';
import XEUtils from 'xe-utils';

interface RowVO {
  id: number;
  name: string;
}

let searchKey = ref('');

const tableData: RowVO[] = [
  { id: 10001, name: 'Test1' },
  { id: 10002, name: 'Test2' },
  { id: 10003, name: 'Test3' },
  { id: 10004, name: 'Test4' },
  { id: 10005, name: 'Test5' },
  { id: 10006, name: 'Test6' },
  { id: 10007, name: 'Test7' },
  { id: 10008, name: 'Test8' }
];

const gridRef = ref<VxeGridInstance<RowVO>>();

const loadMockData = (rSize: number) => {
  return new Promise(resolve => {
    const data: RowVO[] = tableData.slice(0, rSize);
    resolve({
      data,
      total: data.length
    });
  });
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
  columns: [
    { field: 'seq', type: 'seq', width: 80 },
    { field: 'checkbox', type: 'checkbox', width: 80 },
    { field: 'name', title: '名字', minWidth: 200, dragSort: true }
  ],
  pagerConfig: {
    pageSize: 100,
    pageSizes: [2, 20, 100, 500]
  },
  proxyConfig: {
    response: {
      result: 'data',
      total: 'total'
    },
    ajax: {
      query({ page }) {
        return loadMockData(page.pageSize);
      }
    }
  },
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
