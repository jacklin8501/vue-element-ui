import Vue from 'vue';
import tpl_layout from 'text!/tpls/table1/table1_layout.html';
import tpl_table from 'text!/tpls/table1/table1.html';
import tpl_pagination from 'text!/tpls/table1/pagination.html';
import table1_json from 'text!/tpls/table1/table1.json';
import {instance} from '../index';

export namespace Table1 {
    function createTable() {
        return new Vue({
            el: '#tableApp',
            template: tpl_table,
            data: {
                tableData: []
            },
            methods: {
                handleClick: function(row) {
                    console.log(row.address);
                    instance.$data.loading = true;
                }
            },
            created: function() {
                this.tableData= JSON.parse(table1_json)
            }
        })
    }

    function createPagination() {
        return new Vue({
            el: '#pageApp',
            template: tpl_pagination,
            data: {
                currentPage: 3
            }
        });
    }
    export function render(el: string) {
        document.getElementById(el).innerHTML = tpl_layout;
        let table = createTable();
        let pagination = createPagination();
    }
}