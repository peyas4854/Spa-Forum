<template>
	<div class="text-center">
    <v-menu offset-y>

      <template v-slot:activator="{ on }">

		<v-btn icon  v-on="on">
			<v-icon color="red" > add_alert </v-icon> {{ unreadCount }}
		</v-btn>

      </template>


      <v-list >
        <v-list-item v-for="unreadList in unread" :key="unreadList.id" >

        
<router-link :to="{ name: 'question', params: { id: unreadList.data.questionId }}" >

 <v-list-item-title @click.prevent="markAsRead(unreadList)">{{ unreadList.data.question }}</v-list-item-title>
</router-link>
        </v-list-item>


	        <v-list-item v-for="readList in read" :key="read.id">
	        	
				<v-list-item-title>
					{{ readList.data.question }}
				</v-list-item-title>
		

	</v-list-item>

        </v-list-item-title>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default{

	data(){
		return{
			read:{},
			unread:{},
			unreadCount:0,
		}
	},
	created(){
		if(User.loggedIn()){
			this.getNotification();

		}
	},
	methods:{
		getNotification(){
			
			var vm = this;
			axios.post('/api/notification/')
                    .then(function(response) {
                    	vm.read=response.data.read;
                    	vm.unread=response.data.unread;
                    	vm.unreadCount=response.data.unread.length;

                      

                    })
                    .catch(function(error){
                        console.log(error);
                    })
		},
		markAsRead(notification){
			
				this.$router.push({ name: 'question', params: { id: notification.data.questionId } })
			var vm = this;
			axios.post('/api/markasread/',{id:notification.id})
                    .then(function(response) {                
                       console.log(response);
                       vm.getNotification();
                    })
                    .catch(function(error){
                        console.log(error);
                    })

		}
	}

}

</script>
