import { createRouter, createWebHistory } from "vue-router";

//import website
import indexPage from "../views/index";
import productPage from "../views/product";

import NotFound from "../views/error";


const routes = [
    // Website routes
    { path: "/:name", component: indexPage, name: "index" },
    { path: "/:name/product/:id", component: productPage, name: "product" },
    { path: "/404", component: NotFound},
    { path: "/:catchAll(.*)", redirect: "/404"},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    hashbang: false,
    mode: 'html5',
    linkActiveClass: "active",
    // linkExactActiveClass: "exact-active",
    scrollBehavior(to) {
        if (to.hash) {
            return {
                // x, y are replaced with left/top to define position, but when used with an element selector (el) will be used as offset
                el: to.hash,
                // offset has to be set as left and top at the top level
                left: 0,
                top: 64,
            };
        }
    },
});


export default router;