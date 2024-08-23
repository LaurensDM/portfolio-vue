<template>
  <div
    id="projects"
    class="flex flex-col p-5 text-dark  items-center min-h-screen max-w-full max-h-full relative bg-white"
  >
    <h1 class="text-4xl md:text-6xl text-dark underline mt-28 mb-20 underline-offset-8 title">
      {{ $t('projects.title') }}
    </h1>
    
    <div
      class="grid grid-rows-4 grid-cols-1 gap-8 lg:gap-16 justify-center text-center md:grid-cols-2"
    >
      <div v-for="project in projects" :key="project.name" class="">
        <AnimationComponent>
          <ProjectItem :project="project" />
        </AnimationComponent>
      </div>
    </div>
  
  </div>
</template>

<script setup>
import AnimationComponent from '../AnimationComponent.vue';

</script>

<script>
import projects from '../../assets/projects.json'
import ProjectItem from '../ProjectItem.vue'

export default {
  components: {
    ProjectItem
  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>
