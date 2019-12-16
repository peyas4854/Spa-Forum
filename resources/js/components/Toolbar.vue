<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>Vue Forum</v-toolbar-title>

            <v-spacer></v-spacer>

            <app_notification v-if="notification"></app_notification>

            <div class="hidden-sm-and-down">          
                <router-link v-for="item in tab"
                    :key="item.title"
                     v-if="item.show"
                    :to="item.to">
                    <v-btn text>{{ item.title}}</v-btn>
                </router-link>

            </div>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                notification:User.loggedIn(),
                tab:[
                    {title: 'Forum', to : '/forum',show :true},
                    {title: 'Ask Question', to :'/ask',show :User.loggedIn()},
                    {title: 'Category', to :'/category',show :User.loggedIn()},
                    {title: 'Login', to :'/login',show :!User.loggedIn()},
                    {title: 'Log Out ', to :'/logout',show :User.loggedIn()},

                ],
            }
        },
        created(){
            EventBus.$on('logout',()=>{
                User.logout();
            });
        }
    }
</script>


