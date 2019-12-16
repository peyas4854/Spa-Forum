import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import login from "../components/Login/login";
import signup from "../components/Login/signup";
import forum from "../components/Forum/forum";
import logout from "../components/Logout/logout";

//question 
import singleQuestion from "../components/Forum/Question/singleQuestion";
import editQuestion from "../components/Forum/Question/editQuestion";
import askQuestion from "../components/Forum/Question/createQuestion";

//category
import categoryCreate from "../components/Forum/Category/categoryCreate";

const routes = [
    { path: '/login', component: login },
    { path: '/signup', component: signup },
    { path: '/forum', component: forum, name :'forum'},
    { path: '/logout', component: logout, name :'logout'},
    { path: '/question/:id', component: singleQuestion, name: 'question' },
    { path: '/edit-question/:id', component: editQuestion, name: 'edit-question' },
    { path: '/ask', component: askQuestion },
     { path: '/category', component: categoryCreate }

];


const router = new VueRouter({
    routes,
    hasbang:false,
    mode:'history',
});
export default router
