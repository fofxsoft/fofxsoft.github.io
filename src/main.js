import Vue from "vue";
import Router from "vue-router";

import {
    MdApp,
    MdIcon,
    MdButton,
    MdContent,
    MdToolbar,
} from "vue-material/dist/components";

import app from "./app.vue";
import home from "./components/home.vue";
import projects from "./components/projects.vue";
import docs from "./components/docs.vue";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/black-green-light.css";

Vue.use(Router);
Vue.use(MdApp);
Vue.use(MdIcon);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdToolbar);

Vue.config.productionTip = false;

const router = new Router({
    mode: "history",
    routes: [{
        path: "/",
        component: home,
    },
    {
        path: "/projects",
        component: projects,
    },
    {
        path: "/docs",
        component: docs,
    }],
});

(() => new Vue({
    router,
    el: "#app",
    render: h => h(app),
}))();
