<template>
	<v-container fluid>
 		<v-form>
            <v-text-field
                v-model="form.title"
                label="Title"
                type="text"
                required
            >
            </v-text-field>
            <v-autocomplete
	          :items="categories"
	          label="Category"
	          v-model="form.category_id"
	          item-value="id"
	          item-text="name"
	        >
        	
        </v-autocomplete>

          <vue-simplemde  v-model="form.body" ref="markdownEditor" />

            <v-btn
                color="success"
                class="mr-4"
                @click.prvent="save()"
              
            >
                Save
            </v-btn>
        </v-form>
	</v-container>
</template>
<script>

	export default{
		data(){
			return{
				form:{},
				categories:[],
                inputfield:{},

			}
		},
		created(){
			this.allCategory();

		},
		methods:{
			allCategory(){
				axios.get(`/api/category/`)
                    .then(response=> {
                        this.categories = response.data.data;
                    })
                    .catch(error=>{
                        console.log(error);
                    })

			},
            save(){
                this.inputfield={
                    title:this.form.title,
                    body:this.form.body,
                    category_id:this.form.category_id,

                };
                axios.post('api/question',this.inputfield)
                    .then(response=> {
                        
                        this.$router.push({ name: 'question', params: { id: response.data.id } })
                    })
                    .catch(error=>{
                        console.log(error);
                    })

            }
		}



	}
</script>