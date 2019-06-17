var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vue", "text!/tpls/form/form1.html"], function (require, exports, vue_1, form1_html_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vue_1 = __importDefault(vue_1);
    form1_html_1 = __importDefault(form1_html_1);
    var Form1;
    (function (Form1) {
        function render() {
            document.getElementById('workspace').innerHTML = form1_html_1.default;
            new vue_1.default({
                el: '#workspace',
                data: function () {
                    return {
                        ruleForm: {
                            name: '',
                            region: '',
                            date1: '',
                            date2: '',
                            delivery: false,
                            type: [],
                            resource: '',
                            desc: ''
                        },
                        rules: {
                            name: [
                                { required: true, message: '请输入活动名称', trigger: 'blur' },
                                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                            ],
                            region: [
                                { required: true, message: '请选择活动区域', trigger: 'change' }
                            ],
                            date1: [
                                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                            ],
                            date2: [
                                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                            ],
                            type: [
                                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                            ],
                            resource: [
                                { required: true, message: '请选择活动资源', trigger: 'change' }
                            ],
                            desc: [
                                { required: true, message: '请填写活动形式', trigger: 'blur' }
                            ]
                        }
                    };
                },
                methods: {
                    submitForm: function (formName) {
                        console.log(formName);
                        this.$refs[formName].validate(function (valid) {
                            if (valid) {
                                alert('submit!');
                            }
                            else {
                                console.log('error submit!!');
                                return false;
                            }
                        });
                    },
                    resetForm: function (formName) {
                        this.$refs[formName].resetFields();
                    }
                }
            });
        }
        Form1.render = render;
    })(Form1 = exports.Form1 || (exports.Form1 = {}));
});
//# sourceMappingURL=form1.js.map