<template>
	<div>
		<v-container >
	<v-card class="mt-3" v-for="reply in replies" :key="replies.id">
			
				<v-card-title>
					<div class="headline">
						{{ reply.user }}  
					</div>
					<div class=" ml-2 subtitle-2">
						 said  {{ reply.created_at }}
					</div>
					 <v-spacer></v-spacer>
				 <like-index 
				 :content="replies" 
				 :likeCount="reply.like_count"
				 :userLiked="reply.liked"
				 :replyid="reply.id"

				 >
				 	
				 </like-index>
				
				</v-card-title>
				<v-divider></v-divider>
				<v-card-text>
					{{ reply.body }}
				</v-card-text>	

				<v-divider></v-divider>
				<v-card-actions v-if="reply.user_id == login_user">
					<v-btn  icon>
						<v-icon color="blue"> edit </v-icon>
					</v-btn>
					<v-btn  icon @click.prevent="deleteMethod( reply.id)">
						<v-icon color="red"> delete </v-icon>
					</v-btn>
					
				</v-card-actions>

	</v-card>
	<v-card class="mt-3">
		<div>
			<vue-simplemde  v-model="newReply" ref="markdownEditor" />
		</div>
			<v-btn
                color="success"
               
                
                @click.prvent="reply(replies.question_id)"
              
            >
                Reply
            </v-btn>


	</v-card>
	</v-container>
	</div>
</template>

<script>
export default{
	props:['replies'],
	data(){
		return{
			login_user:User.id(),
			newReply:'',
			inputfield:{},

		}
	},

	 // computed:{
  //           body(){
  //                return md.parse(this.question.body);
  //           },
            

  //       },
	methods:{
		reply(question_id){
			this.inputfield={
				body:this.newReply,
			}
			var vm = this;
			axios.post(`/api/question/${vm.$route.params.id}/reply`,vm.inputfield)
                    .then(function(response) {
                    	vm.newReply='';
                    	EventBus.$emit('Reload');
                       
                        
                    })
                    .catch(function(error){
                        console.log(error);
                    })

		},
		deleteMethod(reply_id){
			console.log("reply_id",reply_id);
			var vm = this;
			 axios.delete(`/api/question/${vm.$route.params.id}/reply/${reply_id}`)
                    .then(function(response) {
                        console.log("delete"); 
                       	EventBus.$emit('Reload');
                       
                       
                    })
                    .catch(function(error){
                        console.log(error);
                    })

		}
	}
	
}

	
</script>