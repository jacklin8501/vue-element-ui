var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vue", "./redirective/redirective", "ELEMENT", "./table/table1", "./form/form1", "css!/styles/style.css", "css!/styles/layout.css"], function (require, exports, vue_1, redirective_1, ELEMENT_1, table1_1, form1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vue_1 = __importDefault(vue_1);
    ELEMENT_1 = __importDefault(ELEMENT_1);
    redirective_1.CgobalRedirect.initialize();
    vue_1.default.use(ELEMENT_1.default);
    if (!exports.instance) {
        exports.instance = new vue_1.default({
            el: '#app',
            data: {
                collapse: true,
                asideWidth: 200,
                loading: true
            },
            methods: {
                toTable1: function () {
                    table1_1.Table1.render('workspace');
                },
                toForm1: function () {
                    form1_1.Form1.render();
                }
            },
            watch: {
                collapse: function (collapse) {
                    if (collapse) {
                        this.asideWidth = 65;
                    }
                    else {
                        this.asideWidth = 200;
                    }
                }
            },
            created: function () {
                this.$data.loading = false;
            }
        });
    }
});
//# sourceMappingURL=index.js.map