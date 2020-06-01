<template>
  <div>
    <v-card class="mt-2" v-for="question in questions" :key="question.id">
      <v-card-title>
        <div>
          <h3 class="headline mb-0">
            <router-link :to="{ name: 'question', params: { id: question.id }}">{{ question.title }}</router-link>
          </h3>
          <div class="subtitle-2 grey--text">{{ question.created_at }}</div>
        </div>
      </v-card-title>
      <v-card-text class="text--primary">{{ question.body }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: "",
      baseUrl: "127.0.0:8000"
    };
  },
  created() {
    this.getAllQuestion();
  },
  methods: {
    getAllQuestion() {
      axios
        .get("/api/question")
        .then(response => {
          this.questions = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


