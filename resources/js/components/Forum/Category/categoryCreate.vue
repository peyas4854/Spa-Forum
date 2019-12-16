<template>
	<v-container fluid>
 		<v-form>
            <v-text-field
                v-model="form.name"
                label="Name"
                type="text"
                required
            >
            </v-text-field>

				 <v-btn v-if="updatebutton == true" dark
                color="teal"
                class="mr-4"
                @click.prvent="update()"
              
           		 >
                update
           		 </v-btn>


          
            <v-btn v-else
                color="success"
                class="mr-4"
                @click.prvent="save()"
              
            >
                Save
            </v-btn>
        </v-form>
<v-card>
        
        	<v-toolbar class="mt-2" color="cyan " dark dense >
			<v-toolbar-title>Categories</v-toolbar-title>
		</v-toolbar>
	<div v-for=" category in categories" :key=" categories.id">
		<v-list-item >

			<v-list-item-icon>

	        <v-btn icon small @click.prevent="editMethod(category.name,category.id)">
                  <v-icon  color="blue"> edit </v-icon>
            </v-btn>



	          </v-list-item-icon>

	      <v-list-item-content  >
	      	
	        <v-list-item-title>{{ category.name  }} </v-list-item-title>
	      </v-list-item-content>

	      <v-list-item-icon>

	           <v-btn icon small @click.prevent="deleteMethod(category.id)">
                  <v-icon  color="red"> delete </v-icon>
            	</v-btn>

	          </v-list-item-icon>

    	</v-list-item>
    	<v-divider></v-divider>
        </div>
            	

    </v-card>
	</v-container>
</template>
<script>

	export default{
		data(){
			return{
				form:{},
				inputfield:{},
				categories:'',
				updatebutton:false,
				updateId:'',
			}
		},
		created(){
			this.allCategories();

		},
		methods:{
			save(){
				this.inputfield={
					name:this.form.name,

				}
				console.log("data", this.inputfield);
				   axios.post('api/category',this.inputfield)
                    .then(response=> {
                    	//this.categories.unshift(response.data);
                    	this.allCategories();
                    	
                    	this.form.name=null;

                        
                        //this.$router.push({ name: 'question', params: { id: response.data.id } })
                    })
                    .catch(error=>{
                        console.log(error);
                    })

			},
			allCategories(){
				
				 axios.get('/api/category')
                    .then(response=> {                  
                     this.categories=response.data.data;
                        
                    })
                    .catch(error=>{
                        console.log(error);
                    })
			},
			deleteMethod(id,index){
				console.log("id",id);
				var vm = this;
                axios.delete(`/api/category/${id}`)
                    .then(function(response) {
                        console.log("ko",vm.categories); 
                        //vm.categories.splice(index,1);
                        vm.allCategories();
                       
                    })
                    .catch(function(error){
                        console.log(error);
                    })
			},
			editMethod(name,id){
				this.form.name = name;
				this.updateId =id;
				this.updatebutton= true;
				console.log("name",name);
				console.log("id",id);
				console.log("form name ",this.form.name);

			},
			update(){
				this.inputfield={
					name:this.form.name,

				}
				console.log("up id",this.updateId)
				axios.patch(`/api/category/${this.updateId}`,this.inputfield)
                    .then(response=> {
                    	console.log(response)
                    	this.updatebutton=false;
                    	this.allCategories();
                    })
                    .catch(error=>{
                        console.log(error);
                    })
			}
		}
	}
</script>