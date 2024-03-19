import BlogDatailsPage from "@/components/BlogDatailsPage.vue";
import BlogPage from "@/components/BlogPage.vue";
import IndexPage from "@/components/IndexPage.vue";
import LastPage from "@/components/LastPage.vue";
import NotFound from "@/components/NotFound.vue";
import ProjectPage from "@/components/ProjectPage.vue";
import Vue from "vue";
import Router from 'vue-router';

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/home',
            name: 'home',
            component: IndexPage
        }, {
            path: '/blog',
            component: BlogPage
        }, {
            path: '/blog_details',
            component: BlogDatailsPage
        }, {
            path: '/project',
            component: ProjectPage
        }, {
            path: '/project_details',
            component: LastPage
        }, {
            path: '/blog/:page',
            component: () =>
                import ('@/components/BlogPage.vue')
        }, {
            path: '/project/:page',
            component: () =>
                import ('@/components/ProjectPage.vue')
        },
        {
            path: '*',
            redirect: '/404',
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
        },
    ]
})