<template>
  <v-card
    class="mx-auto rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-black  shadow-lg shadow-black"
    max-width="600"
    max-height="568"
  >
    <v-img
      class="align-end text-regular rounded bg-dark bg-opacity-70"
      height="300"
      :src="`${project.img}`"
      cover
    >
    </v-img>
    <v-card-title class="text-white">{{ project.name }}</v-card-title>
    <v-card-subtitle class="pt-4">
      <a :href="`${project.url}`" class="text-regular hover:underline" target="_blank"
        >{{ $t('projects.link') }}</a
      >
    </v-card-subtitle>

    <v-card-text class="v-text text-white">
      <div>{{ $i18n.locale == 'nl' ? project.descriptionNl : project.descriptionEn}}</div>
    </v-card-text>
    <v-card-subtitle>
      <span class="text-regular font-bold uppercase">Status: {{ project.status }}</span>
    </v-card-subtitle>
    <v-card-actions class="flex gap-5 justify-center">
      <v-btn
        v-for="tag in project.tags"
        :key="tag"
        variant="plain"
        class="text-regular hover:bg-dark cursor-default"
        :ripple="false"
        :text="tag"
        readonly
      >
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

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.v-text {
  min-height: 92px;
}
</style>
