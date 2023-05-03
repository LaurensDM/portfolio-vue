<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HomeScreen from './components/main/HomeScreen.vue'
import About from './components/main/AboutScreen.vue';
import ProjectsView from './components/main/ProjectsView.vue';
import Navbar from './components/NavbarVue.vue';
import FooterVue from './components/FooterVue.vue';
</script>

<template>
  <div id="root" class="w-full h-full -z-20">
    <Navbar />
    <HomeScreen />
    <About />
    <ProjectsView />
    <FooterVue />
  </div>
    
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Quicksand:wght@400;500&display=swap');
#about{
  font-family: 'Quicksand', sans-serif;
}

.title{
  font-family: 'Bruno Ace SC', cursive;
}


</style>
