import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./vant.js";
import "./mock";
import VueLazyload from "vue-lazyload";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import axios from "axios";
// import VueAwesomeSwiper from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
Vue.prototype.$http = axios;
console.log(process.env);
// Vue.use(VueAwesomeSwiper);
NProgress.inc(0.2);
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });
Vue.use(VueLazyload, {
    loading: require("./assets/images/loading.png"), //加载中图片，一定要有，不然会一直重复加载占位图
    error: require("./assets/images/errorimg.png"), //加载失败图片
});
router.beforeEach((to, from, next) => {
    NProgress.start();
    document.title = to.meta.title;
    next();
    NProgress.done();
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
