<template>
    <v-card
    class="mx-auto rounded hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    max-width="600"
    min-height="500"
  >
    <v-img
      class="align-end text-regular rounded bg-repeat-round"
      height="300"
      :src="`${project.img}`"
      cover
    >
     
    </v-img>
    <v-card-title>{{project.name}}</v-card-title>
    <v-card-subtitle class="pt-4">
      <a :href="`${project.url}`" class="text-regular hover:underline">Link to project</a>
    </v-card-subtitle>

    <v-card-text>
      <div>{{ project.description }}</div>
    </v-card-text>
    <v-card-subtitle>
      <span class="text-darkShade font-bold uppercase">Status: {{ project.status }}</span>
    </v-card-subtitle>
    <v-card-actions class="flex gap-1 justify-center">
      <v-btn v-for="tag in project.tags" :key="tag">
        {{ tag }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
//define prop project
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>