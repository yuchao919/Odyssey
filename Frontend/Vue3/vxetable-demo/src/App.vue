<script setup>
import { reactive, ref } from 'vue';
import XEUtils from 'xe-utils';
import _ from "lodash";

const xGrid = ref();
const formData = reactive({
    searchName: ''
});

// 模拟分页接口
const findPageList = ({ searchName, currentPage, pageSize }) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = [
                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
                { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
                { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
                { id: 100011, name: 'Test11', nickname: 'T11', role: 'Test', sex: 'Women', age: 26, address: 'test abc' },
                { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Man', age: 34, address: 'Guangzhou' },
                { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 22, address: 'Shenzhen' }
            ];
            let list = data;
            if (!!searchName) {
                list = list.filter(x => x.name.indexOf(searchName) > -1);
            }

            resolve({
                page: {
                    total: list.length
                },
                result: list.slice((currentPage - 1) * pageSize, currentPage * pageSize)
            });
        }, 100);
    });
};

const gridOptions = reactive({
    border: true,
    height: "1000",
    loading: false,
    rowConfig: {
        keyField: 'id'
    },
    columnConfig: {
        resizable: true
    },
    pagerConfig: {
        enabled: true,
        pageSize: 10,
        pageSizes: [10, 50, 100, 1000]
    },
    toolbarConfig: {
        slots: {
            tools: 'toolbar_tools'
        }
    },
    columns: [
        { type: 'seq', width: 60 },
        // { type: 'checkbox', width: 50 },
        { field: 'name', title: 'Name' },
        { field: 'nickname', title: 'Nickname' },
        { field: 'role', title: 'Role' },
        { field: 'address', title: 'Address', showOverflow: true }
    ],
    proxyConfig: {
        seq: true,
        sort: true,
        filter: true,
        ajax: {
            query: ({ page, sorts, filters }) => {
                var queryParam = Object.assign({
                    currentPage: page.currentPage,
                    pageSize: page.pageSize
                }, formData);

                return findPageList(queryParam);
            }
        }
    }

});


const searchEvent = () => {
    const $grid = xGrid.value;
    if ($grid) {
        $grid.commitProxy('query');
    }
};
const resetEvent = () => {
    formData.searchName = "";
    const $grid = xGrid.value;
    if ($grid) {
        $grid.commitProxy('reload');
    }
}


/*

const searchKey = ref("");

const findList = () => {
    gridOptions.loading = true;
    setTimeout(() => {
        gridOptions.loading = false;
        tablePage.total = 10;
        gridOptions.data = [
            { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
            { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
            { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },
            { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
            { id: 10006, name: 'Test6', nickname: 'T6', role: 'Develop', sex: '0', age: 27, address: 'Shanghai' },
            { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '1', age: 29, address: 'Shenzhen' },
            { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '0', age: 32, address: 'Shanghai' },
            { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: '1', age: 30, address: 'Shenzhen' },
            { id: 10010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '0', age: 34, address: 'Shanghai' }
        ];
    }, 300);
};

const handleSearchClick = _.debounce((e) => {
    if (!e || !e.$event || e.$event.code !== 'Enter') {
        return;
    }
    tablePage.currentPage = 1;
    findList();
}, 100);

const handlePageChange = ({ currentPage, pageSize }) => {
    tablePage.currentPage = currentPage;
    tablePage.pageSize = pageSize;
    findList();
};
*/

</script>

<template>
    <div>
        <VxeGrid ref="xGrid" v-bind="gridOptions">
            <template #toolbar_tools>
                <VxeForm :data="formData" @submit="searchEvent" @reset="resetEvent">
                    <VxeFormItem field="name">
                        <template #default>
                            <VxeInput v-model="formData.searchName" type="text" placeholder="请输入名称"></VxeInput>
                        </template>
                    </VxeFormItem>
                    <VxeFormItem>
                        <template #default>
                            <VxeButton type="submit" status="primary" content="查询"></VxeButton>
                            <VxeButton type="reset" content="重置"></VxeButton>
                        </template>
                    </VxeFormItem>
                </VxeForm>
            </template>

            <!--自定义空数据模板-->
            <template #empty>
                <span style="color: red;">
                    <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">
                    <p>没有更多数据了！</p>
                </span>
            </template>
        </VxeGrid>
    </div>
</template>

<style scoped></style>
