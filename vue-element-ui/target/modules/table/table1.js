var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vue", "text!/tpls/table1/table1_layout.html", "text!/tpls/table1/table1.html", "text!/tpls/table1/pagination.html", "text!/tpls/table1/table1.json", "../index"], function (require, exports, vue_1, table1_layout_html_1, table1_html_1, pagination_html_1, table1_json_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vue_1 = __importDefault(vue_1);
    table1_layout_html_1 = __importDefault(table1_layout_html_1);
    table1_html_1 = __importDefault(table1_html_1);
    pagination_html_1 = __importDefault(pagination_html_1);
    table1_json_1 = __importDefault(table1_json_1);
    var Table1;
    (function (Table1) {
        function createTable() {
            return new vue_1.default({
                el: '#tableApp',
                template: table1_html_1.default,
                data: {
                    tableData: []
                },
                methods: {
                    handleClick: function (row) {
                        console.log(row.address);
                        index_1.instance.$data.loading = true;
                    }
                },
                created: function () {
                    this.tableData = JSON.parse(table1_json_1.default);
                }
            });
        }
        function createPagination() {
            return new vue_1.default({
                el: '#pageApp',
                template: pagination_html_1.default,
                data: {
                    currentPage: 3
                }
            });
        }
        function render(el) {
            document.getElementById(el).innerHTML = table1_layout_html_1.default;
            var table = createTable();
            var pagination = createPagination();
        }
        Table1.render = render;
    })(Table1 = exports.Table1 || (exports.Table1 = {}));
});
//# sourceMappingURL=table1.js.map