<template>
 <div>
    <v-card >
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
                Update
            </v-btn>
            <v-btn
                color="primary"
                class="mr-4"
                @click.prvent="cancel()"
              
            >
                Cancel
            </v-btn>




        </v-form>
  </v-container>
    </v-card>

  
</div>
</template>

<script>
  export default{
    
    data(){
      return{
        question: '',
        form:{},
        categories:[],
        

      }
    },
     created(){
      this.singleQuestion();
      this.allCategory();
     
            
        },
      methods: {
          allCategory(){
        axios.get(`/api/category/`)
                    .then(response=> {
                        this.categories = response.data.data;
                    })
                    .catch(error=>{
                        console.log(error);
                    })

      },
            singleQuestion() {
                 var vm = this;
                axios.get(`/api/question/${this.$route.params.id}`)
                    .then(function(response) {
                        vm.form = response.data.data;
                        
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            },
            save(){
              this.inputfield={
                    title:this.form.title,
                    body:this.form.body,
                    category_id:this.form.category_id,

                };
            

               var vm = this;

                axios.patch(`/api/question/${vm.$route.params.id}`,vm.inputfield)
                    .then(function(response) {
                vm.$router.push({ name: 'question', params: { id: vm.form.id } })
                        
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            },
            cancel(){
                this.$router.push({ name: 'question', params: { id: this.form.id } })
               
            }
          }
  }
</script>