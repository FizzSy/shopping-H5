import Vue from "vue";
import VueRouter from "vue-router";
import main from "@/views/main.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        component: main,
        children: [
            {
                path: "/",
                name: "shopping-mall",
                component: () => import(/* webpackChunkName: "shoppingMall" */ "../views/shoppingMall.vue"),
                meta: {
                    title: "首页",
                },
            },
            {
                path: "/goods",
                name: "goods",
                component: () => import(/* webpackChunkName: "goods" */ "../views/goods.vue"),
                meta: {
                    title: "商品详情页",
                },
            },
            {
                path: "/categoryList",
                name: "categoryList",
                component: () => import(/* webpackChunkName: "categoryList" */ "../views/categoryList.vue"),
                meta: {
                    title: "商品列表",
                },
            },
            {
                path: "/cart",
                name: "cart",
                component: () => import(/* webpackChunkName: "cart" */ "../views/cart.vue"),
                meta: {
                    title: "购物车",
                },
            },
            {
                path: "/member",
                name: "member",
                component: () => import(/* webpackChunkName: "member" */ "../views/member.vue"),
                meta: {
                    title: "会员中心",
                },
            },
        ],
    },
    {
        path: "/register",
        name: "register",
        component: () => import(/* webpackChunkName: "register" */ "../views/register.vue"),
        meta: {
            title: "注册",
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "../views/login.vue"),
        meta: {
            title: "登录",
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
