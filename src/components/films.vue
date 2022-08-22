<template>
  <div class="hello">
    <b-row>
      <b-col v-for="(item, index) in filmlist" :key="index">
        <div class="box">
          <!-- <p>{{ item }}</p> -->
          <img :src="item.Poster" />
          <p>{{ item.Title }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return {
      searcText: 'forrest',
      filmlist1: '',
    };
  },
  props: {
    msg: String,
  },
  computed: {
    filmlist() {
      return this.$store.state.filmList;
    },
  },
  created() {
    this.getFilmList();
  },
  methods: {
    getFilmList() {
      axios
        .get(`http://www.omdbapi.com/?t=${this.searcText}&apikey=2b2204cb`)
        .then(res => {
          // this.filmlist1 = Object.values(res);
          this.$store.commit('filmMutation', Object.values(res));
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
