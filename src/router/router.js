import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [{
        path: '/',
        // redirect重定向
        redirect: '/letters'
    },
    {
        // 发改经信局
        path: '/letters',
        name: "letters",
        component: resolve => require(["@/pages/letters"], resolve),
        meta: {
            title: "经信局",
            keepAlive: false //页面是否缓存
        }
    },
    {
        // 区发改经信局
        path: '/areamail',
        name: "areamail",
        component: resolve => require(["@/pages/areamail"], resolve),
        meta: {
            title: "区经信局",
            keepAlive: false //页面是否缓存
        }
    },
    {
        // 区财政局
        path: '/finance',
        name: "finance",
        component: resolve => require(["@/pages/finance"], resolve),
        meta: {
            title: "区财政局",
            keepAlive: false //页面是否缓存
        }
    },
    {
        // 区审管办
        path: '/regulatory',
        name: "regulatory",
        component: resolve => require(["@/pages/regulatory"], resolve),
        meta: {
            title: "区审管办",
            keepAlive: false //页面是否缓存
        }
    },
    {
        // 区城管局
        path: '/cityManage',
        name: "cityManage",
        component: resolve => require(["@/pages/cityManage"], resolve),
        meta: {
            title: "区城管局",
            keepAlive: false //页面是否缓存
        }
    },
    {
        // 区科技局
        path: '/science',
        name: "science",
        component: resolve => require(["@/pages/science"], resolve),
        meta: {
            title: "区科技局",
            keepAlive: false //页面是否缓存
        }
    },
    {
        // 区发改经信局-云创产业
        path: '/develref',
        name: "develref",
        component: resolve => require(["@/pages/develref"], resolve),
        meta: {
            title: "区发改经信局云创产业",
            keepAlive: false //页面是否缓存
        }
    },
]


const router = new Router({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'hash',
    linkActiveClass: 'active',
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})
router.beforeEach((to, from, next) => {
    next()
})

export default router