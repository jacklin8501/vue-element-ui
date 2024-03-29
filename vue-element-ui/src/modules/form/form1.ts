import Vue from 'vue';
import form1_tpl from 'text!/tpls/form/form1.html';

export namespace Form1 {
    export function render(): void {
        document.getElementById('workspace').innerHTML = form1_tpl;
        new Vue({
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
                }
            },
            methods: {
                submitForm: function(formName) {
                    console.log(formName)
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            alert('submit!');
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                },
                resetForm: function(formName) {
                    this.$refs[formName].resetFields();
                }
            }
        })
    }
}