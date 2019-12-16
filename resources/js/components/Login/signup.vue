<template>
    <v-container>
        <v-form>
            <v-text-field
                v-model="form.name"
                label="Name"
                type="text"
                required
            >
            </v-text-field>
            <span class="red--text caption " v-if="errors.name" >  {{ errors.name[0] }}   </span>


            <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
                required
            ></v-text-field>
            <span class="red--text caption " v-if="errors.email" >  {{ errors.email[0] }}   </span>


            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
            ></v-text-field>
            <span class="red--text caption " v-if="errors.password" >  {{ errors.password[0] }}   </span>
            <v-text-field
                v-model="form.password_confirmation"
                label="Confirm Password"
                type="password"
                required
            ></v-text-field>
            <v-btn
                color="success"
                class="mr-4"
                @click.prevemt="save()"
            >
                Submit
            </v-btn>
            <router-link to="/login">
                <v-btn  color="primary" dark>LOGIN</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>
<script>
import Token from '../../helper/Token.js'
    export default {
        data(){
            return{
                form:{},
                inputfield:{},
                errors:{},
            }
        },
        created(){
          if(User.loggedIn()){
              this.$router.push({name: 'forum'});

          }
          
        },
        methods:{
            save: function () {
                this.inputfield = {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password,
                    password_confirmation: this.form.password_confirmation,

                };
                    //console.log("data",this.inputfield);
                    axios.post('/api/auth/signup', this.inputfield)
                        .then(response=> {
                            Token.afterLogin(response.data);
                            this.$router.push({name: 'forum'});
                        })
                        .catch(error => this.errors = error.response.data.errors)
            }
        }
    }

</script>


