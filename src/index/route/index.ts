import Vue from 'vue';
import Router, {RouteConfig} from 'vue-router';
import Home from '@/admin/views/Home.vue';

Vue.use(Router);
// 必要时，路由可以按照模块来区分具体的模块
// 定义主体的路由元信息备注
const R = (name: string) => () => import(`@/admin/views/${name}.vue`);

const ROUTESLIST: RouteConfig[] = [
    {
        path: '/',
        name: 'Views',
        component: R('view'),
        redirect: '/home',
        children: [{
            path: '/home',
            name: 'Home',
            component: R('tabbar/home'),
            meta: {
                title: '首页',
            },
        }, {
            path: '/cate',
            name: 'Cate',
            component: R('tabbar/cate'),
            meta: {
                title: '分类',
            },
        }, {
            path: '/seller',
            name: 'Seller',
            component: R('tabbar/seller'),
            meta: {
                title: '商家',
            },
        }, {
            path: '/cart',
            name: 'Cart',
            component: R('tabbar/cart'),
            meta: {
                title: '购物车',
            },
        }, {
            path: '/personal',
            name: 'Personal',
            component: R('tabbar/personal'),
            meta: {
                title: '我的',
            },
        }],
    },
    {
        path: '*',
        redirect: '/home',
    },
];

const createRouter = () => new Router({
    // mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    base: process.env.BASE_URL,
    routes: ROUTESLIST
})

const router = createRouter()

router.beforeEach((to: any, from: any, next: any): void => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export function resetRouter() {
    const newRouter = createRouter();
    (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
