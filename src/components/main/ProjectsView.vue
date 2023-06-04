<template>
  <div id="projects" class="flex flex-col p-5 text-regular justify-center items-center min-h-screen max-w-full max-h-full relative bg-black">
    <h1 class="text-5xl text-shade  mt-20 mb-20 title">Projects</h1>
      <div class="grid grid-rows-4 grid-cols-1 gap-5 justify-center text-center md:grid-cols-2">
        <div v-for="project in projects" :key="project.name" class="">
            <ProjectItem :project="project"/>
        </div>
      </div>
  </div>
</template>

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