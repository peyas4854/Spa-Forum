<template>
<div>
	<v-card >
		<v-toolbar class="mt-2" color="cyan " dark dense >
			<v-toolbar-title>Categories</v-toolbar-title>
		</v-toolbar>

		<v-list-item v-for=" category in categories" :key=" categories.id">

	      <v-list-item-content  >
	        <v-list-item-title>{{ category.name  }} </v-list-item-title>
	      </v-list-item-content>

    	</v-list-item>

	</v-card>
</div>
</template>
<script>
	export default{
		data(){
			return{
				categories:'',

			}
		},
		created(){
			this.allCategories();

		},
		methods:{
			allCategories(){
				console.log("cc");
				 axios.get('/api/category')
                    .then(response=> {
                       
                        this.categories=response.data.data;
                        
                        
                    })
                    .catch(error=>{
                        console.log(error);
                    })
			}

		}
	}
</script>