<template>
    <div>
    <v-card >
        <v-container fluid>
        <v-card-title>
            <div>
                <h3 class="headline mb-0">
                    {{ question.title }}
                </h3>
                <div class="subtitle-2 grey--text ">
                    {{ question.user }} said

                    {{ question.created_at }}</div>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="teal" dark >{{ question.replies_count }} Replies</v-btn>
        </v-card-title>

        <v-card-text class="text--primary" v-html="body" v-if="question">
            <!-- {{  question.body }} -->
        </v-card-text>

        <v-card-actions v-if=" this.own == true ">
            <v-btn icon @click.prevent="editModal">
            <v-icon smaller color="blue"> edit </v-icon>
            </v-btn>
            <v-btn icon @click="deleteMethod()">
            <v-icon smaller color="red"> delete </v-icon>
            </v-btn>
        </v-card-actions>
        </v-container>

    </v-card>
   
    <reply-index :replies="replies"></reply-index>

</div>

</template>

<script>
	export default {
        data() {
            return {
                question: '',
                own:false,
                dialog: false,
                replies:'',

            }
        },
        computed:{
            body(){
                 return md.parse(this.question.body);
            },
            

        },
        created() {
            this.singleQuestion(); 
            this.eventListen();
           


        },
        methods: {
            singleQuestion() {
                 var vm = this;
                axios.get(`/api/question/${vm.$route.params.id}`)
                    .then(function(response) {
                        vm.question = response.data.data;
                        vm.editDelete(vm.question.user_id); 
                        vm.replies= vm.question.replies;
                        
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            },
            editDelete(val){
                // console.log("login user id",User.id() );
                // console.log(" user id",val );

                if( val ==User.id() ){
                    this.own= true;
                }
               
            },
            deleteMethod(){
                var vm = this;
                axios.delete(`/api/question/${vm.question.id}`)
                    .then(function(response) {
                        //this.$router.push('/forum');
                        vm.$router.push({name: 'forum'});
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            },
            editModal(){
                this.$router.push({name: 'edit-question'});
                
            },
            eventListen(){
                 EventBus.$on ('Reload',()=>{
                 this.singleQuestion(); 

            }); 
                

            }
        }
    }
</script>
