<template>
  <main>
    <header class="header">
      <img src="../public/logo.svg" alt="logo" class="header-logo">
      <h2>My favorite Movies</h2>
    </header>
    <div class="tabs">
      <button
          :class="['btn', {'btn_green': moviesStore.activeTab === 1}]"
          @click="setTab(1)"
      >
        Favorite
      </button>
      <button
          :class="['btn', {'btn_green': moviesStore.activeTab === 2}]"
          @click="setTab(2)"
      >
        Search
      </button>
    </div>
    <div class="movies" v-if="moviesStore.activeTab === 1">
      <div>
        <h3>Watched movies (count: {{moviesStore.watchedMovies.length}})</h3>
        <Movie v-for="movie of moviesStore.watchedMovies" :key="movie.id" :movie="movie"/>
      </div>
      <h3>All movies (count: {{moviesStore.totalCountMovies}})</h3>
      <Movie v-for="movie of moviesStore.movies" :key="movie.id" :movie="movie"/>
    </div>
    <div class="search" v-else-if="moviesStore.activeTab === 2">
      <Search/>
    </div>
  </main>
</template>

<script setup>
import {useMovieStore} from "./stores/MovieStore.js";
import Movie from "./components/Movie.vue";
import Search from "./components/Search.vue";
const moviesStore = useMovieStore();

const setTab = (id) => {
  moviesStore.setActiveTab(id);
}
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
