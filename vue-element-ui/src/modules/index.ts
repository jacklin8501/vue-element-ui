import Vue from 'vue';
import { CgobalRedirect } from './redirective/redirective';
import ELEMENT from 'ELEMENT';
import { Table1 } from './table/table1';
import {Form1} from './form/form1';
import 'css!/styles/style.css';
import 'css!/styles/layout.css';

CgobalRedirect.initialize();
Vue.use(ELEMENT);

export let instance;
if (!instance) {
    instance = new Vue({
        el: '#app',
        data: {
            collapse: true,
            asideWidth: 200,
            loading: true
        },
        methods: {
            toTable1: function () {
                Table1.render('workspace');
            },
            toForm1: function () {
                Form1.render();
            }
        },
        watch: {
            collapse: function (collapse) {
                if (collapse) {
                    this.asideWidth = 65;
                } else {
                    this.asideWidth = 200;
                }
            }
        },
        created: function () {
            this.$data.loading = false;
        }
    });
}