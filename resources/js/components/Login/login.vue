<template>
    <v-container>
        <v-form>
            <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
                required
            ></v-text-field>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
            ></v-text-field>
            <v-btn
                color="success"
                class="mr-4"
                @click.prevent="login()"
            >
                Login
            </v-btn>

            <router-link to="/signup">

                <v-btn  color="primary" dark>SIGN uP</v-btn>

            </router-link>


        </v-form>

    </v-container>

</template>

<script>
    //import CommonMethod from "../../helper/CommonMethod.js";
    export default{

        data(){
            return{
                form:{},
                inputField:{},

            }
        },
        mounted(){

        },
        created(){
            if(User.loggedIn()){
                this.$router.push({name: 'forum'});

            }
        },
        methods:{
            login(){
                this.inputField={
                    email:this.form.email,
                    password:this.form.password,

                };

               User.login(this.inputField)
                this.$router.push({name:'forum'});

            }
        }
    }
</script>


