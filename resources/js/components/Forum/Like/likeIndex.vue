<template>
	<div>
		<v-btn icon @click.prevent="likeIt()">
			<v-icon :color="color">favorite</v-icon> {{ count }}

		</v-btn>
	</div>
</template>

<script>

export default{
	props:['content','likeCount','userLiked','replyid'],
	data(){
		return {
			liked:'',
			data:{},
			count:'',
			replyId:'',

		}
	},
	created:function() {
		this.count= this.likeCount;
		this.liked = this.userLiked;
		this.replyId = this.replyid;
		//this.pusherListen();
		Echo.channel('likeChannel')
		.listen('LikeEvent', (e) => {
       		 console.log(e);
    });
    		
	},
	computed:{
		color(){
			return this.liked ? 'red' : 'red lighten-3'


		}
	},

	methods:{
		likeIt(){
			if(User.loggedIn()){
				this.liked ? this.dec() : this.inc();
				this.liked = !this.liked;


			}
		},
		inc(){
			var vm = this;
			axios.post(`/api/like/${vm.replyid}`)
                    .then(function(response) {
                    	vm.count ++ ;
                       // console.log(response);

                    })
                    .catch(function(error){
                        console.log(error);
                    })
		},
		dec(){

						var vm = this;
			axios.delete(`/api/like/${vm.replyid}`)
                    .then(function(response) {
                    	vm.count -- ;
                       // console.log(response);

                    })
                    .catch(function(error){
                        console.log(error);
                    })


		},
        // pusherListen(){
        //     Echo.channel('likeChannel')
        //         .listen('LikeEvent', (e) => {
        //             console.log(e);
        //         });

        // }
	}

}

</script>
