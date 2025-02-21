<template>
  <div class="page-wrapper">
    <div class="header">
      <vxe-form ref="formRef" v-bind="formOptions" v-on="formEvents"></vxe-form>
    </div>
    <div class="content">
      <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue';
import { type VxeGridInstance, type VxeGridProps, type VxeGridPropTypes, type VxeColumnPropTypes, type VxeGridListeners } from 'vxe-table';
import { type VxeFormItemPropTypes, type VxeSelectProps, type VxeFormProps, type VxeFormListeners, type VxeFormInstance } from 'vxe-pc-ui';
import XEUtils from 'xe-utils';

interface RowVO {
  id: number;
  name: string;
}

interface FormDataVO {
  searchKey: string;
}

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

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  data: { searchKey: '' },
  items: [
    { field: 'searchKey', span: 8, itemRender: { name: 'VxeInput' } },
    {
      span: 8,
      itemRender: {
        name: 'VxeButtonGroup',
        options: [
          { type: 'submit', content: '搜索', status: 'primary' },
          { type: 'reset', content: '重置' }
        ]
      }
    }
  ]
});

const formEvents: VxeFormListeners = {
  submit() {
    console.log('form submit');
  },
  reset() {
    console.log('form reset');
  }
};


const formRef = ref<VxeFormInstance<FormDataVO>>();
const gridRef = ref<VxeGridInstance<RowVO>>();

const loadMockData = (rSize: number, searchKey: string) => {
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
  height: '100%',
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
        return loadMockData(page.pageSize, "");
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
}

.header {
  flex: 1 100px;
}
</style>
