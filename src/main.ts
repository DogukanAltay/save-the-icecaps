import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required, min_value } from "vee-validate/dist/rules";
import BootstrapVue from "bootstrap-vue";

extend("required", required);
extend("min_value", min_value);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.use(BootstrapVue);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
