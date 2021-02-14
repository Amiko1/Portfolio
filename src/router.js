import { createRouter, createWebHistory } from "vue-router";

import AboutMe from "./pages/AboutMe.vue";
import Contact from "./pages/Contact.vue";
import MyProjects from "./pages/MyProjects.vue";
import Main from "./pages/Main.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main'},
        { path: "/main", component: Main },
        { path: '/about', component: AboutMe },
        { path: '/contact', component: Contact },
        { path: '/myprojects', component: MyProjects }
    ]
  });



export default router;
