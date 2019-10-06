import Vue from 'vue';
import Router, {RouteConfig} from 'vue-router';

Vue.use(Router);
// 必要时，路由可以按照模块来区分具体的模块
// 定义主体的路由元信息备注
// const R = (name: string = 'tabbar/home') => {
//     return () => {
//         return import(`./../views/${name}.vue`);
//     }
// }

const GetRouter = (name: string) => () => import(`@/views/${name}.vue`)

const CHILD_ROUTE: RouteConfig[] = [{
    path: '/home',
    name: 'Home',
    component: GetRouter('NavigationBar/Home'),
    meta: {
        title: '首页',
    },
}, {
    path: '/cate',
    name: 'Cate',
    component: GetRouter('NavigationBar/Cate'),
    meta: {
        title: '分类',
    },
}, {
    path: '/seller',
    name: 'Seller',
    component: GetRouter('NavigationBar/Seller'),
    meta: {
        title: '商家',
    },
}, {
    path: '/cart',
    name: 'Cart',
    component: GetRouter('NavigationBar/Cart'),
    meta: {
        title: '购物车',
    },
}, {
    path: '/personal',
    name: 'Personal',
    component: GetRouter('NavigationBar/Personal'),
    meta: {
        title: '我的',
    },
}];

const ROUTES_LIST: RouteConfig[] = [
    {
        path: '/',
        name: 'Views',
        component: GetRouter('NavigationView'),
        redirect: '/home',
        children: CHILD_ROUTE,
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
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    },
    base: process.env.BASE_URL,
    routes: ROUTES_LIST,
});

const router = createRouter();

router.beforeEach((to: any, from: any, next: any): void => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export function resetRouter() {
    const newRouter = createRouter();
    (router as any).matcher = (newRouter as any).matcher; // reset router
}

export default router;
