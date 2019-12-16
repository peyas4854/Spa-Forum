/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
//veetify 
import Vuetify from 'vuetify'
Vue.use(Vuetify);

//markdown editor  
import VueSimplemde from 'vue-simplemde'
Vue.component('vue-simplemde', VueSimplemde)

import md from 'marked'
window.md = md;




import User from './helper/User.js'
window.User = User;
console.log("login",User.loggedIn());
//User.logout();
//console.log(User.id());


//event bus

window.EventBus = new Vue();


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app_home', require('./components/AppHome.vue').default);
Vue.component('toolbar', require('./components/Toolbar.vue').default);
Vue.component('app_footer', require('./components/AppFooter.vue').default);
Vue.component('app_notification', require('./components/AppNotification.vue').default);

Vue.component('login', require('./components/Login/login.vue').default);
Vue.component('signup', require('./components/Login/signup.vue').default);
Vue.component('forum', require('./components/Forum/forum.vue').default);
Vue.component('logout', require('./components/Logout/logout.vue').default);

//question
Vue.component('question', require('./components/Forum/Question/questionIndex.vue').default);
Vue.component('single-question', require('./components/Forum/Question/singleQuestion.vue').default);
Vue.component('ask-question', require('./components/Forum/Question/createQuestion.vue').default);
Vue.component('edit-question', require('./components/Forum/Question/editQuestion.vue').default);

//category 
Vue.component('category-sidebar', require('./components/Forum/Category/categorySidebar.vue').default);
Vue.component('category-create', require('./components/Forum/Category/categoryCreate.vue').default);

//reply
Vue.component('reply-index', require('./components/Forum/Reply/replyIndex.vue').default);

//like 
Vue.component('like-index', require('./components/Forum/Like/likeIndex.vue').default);











import router from './Router/router.js';
import CommonMethod from './helper/CommonMethod';

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),

});
