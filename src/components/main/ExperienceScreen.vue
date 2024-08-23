<template>
  <div
    id="experience"
    class="flex flex-col p-5 text-regular items-center min-h-screen max-w-full relative bg-black pb-20"
  >
  <h1
      class="text-shade text-center text-4xl md:text-6xl mt-28 underline underline-offset-8 mb-10 title"
    >
      {{ $t('experience.title') }}
    </h1>
  <AnimationComponent :threshold="0.2">
    <div class="mb-10">
      <div
        class="flex flex-row border-dark border-b-white items-center gap-5 bg-dark border-2 px-5 py-3 rounded cursor-pointer w-52 md:w-96 mx-auto"
        @click="hide"
      >
        <div class="flex flex-row gap-x-2 justify-start">
          <span
            v-for="filter in filters"
            :key="filter"
            class="bg-darker bg-opacity-70 text-regular rounded-full px-3 py-1"
            >{{ filter }}</span
          >
          <p v-if="filters.length === 0" class="text-white rounded-lg p-1">
            {{ $t('experience.filter') }}
          </p>
        </div>
        <div class="flex flex-row ms-auto items-center gap-2">
          <v-icon
            icon="fa-regular fa-circle-xmark"
            class="text-white"
            size="small"
            v-if="filters.length > 0"
            @click="clear"
          ></v-icon>

          <v-icon
            icon="fa-solid fa-angle-down"
            class="text-white"
            size="x-small"
            v-if="hidden"
          ></v-icon>

          <v-icon icon="fa-solid fa-angle-up" class="text-white" size="x-small" v-else></v-icon>
        </div>
      </div>
      <div v-if="!hidden" class="bg-darker rounded-b-lg flex flex-col p-5 w-52 md:w-96 mx-auto">
        <p
          v-for="(filterOption, index) in filterOptions"
          @click="() => filter(filterOption)"
          :key="index"
          class="hover:bg-dark p-2 rounded text-white cursor-pointer"
        >
          {{ filterOption }}
        </p>
      </div>
    </div>
    
      <v-timeline
        class=""
        align="start"
        line-color="white"
        line-inset="4"
        :side="isMobile ? 'end' : undefined"
      >
        <template v-for="(item, i) in items" :key="i">
          <v-timeline-item
            v-if="filters.includes(item.filter) || filters.length === 0"
            :icon="item.icon"
            dot-color="secondary"
            fill-dot
          >
            <div class="flex sm:flex-row flex-col gap-x-5 gap-y-2 mb-16 w-auto md:w-[560px]">
              <strong class="text-sm md:text-md min-w-[80px]">{{ item.year }}</strong>
              <div>
                <strong class="text-sm md:text-md">{{
                  $i18n.locale == 'nl' ? item.titleNl : item.titleEn
                }}</strong>
                <p>
                  {{ $i18n.locale == 'nl' ? item.descriptionNl : item.descriptionEn }}
                </p>
              </div>
            </div>
          </v-timeline-item>
        </template>
      </v-timeline>
    </AnimationComponent>
  </div>
</template>

<script setup>
import AnimationComponent from '../AnimationComponent.vue'
</script>

<script>
import { ref } from 'vue'
import items from '../../assets/experience.json'

const hidden = ref(true)

const filters = ref([])

function hide() {
  hidden.value = !hidden.value
}

function filter(filterOption) {
  if (filters.value.includes(filterOption.toLowerCase())) {
    filters.value = filters.value.filter((filter) => filter !== filterOption.toLowerCase())

    return
  }
  filters.value.push(filterOption.toLowerCase())
}

function clear() {
  filters.value = []
}

export default {
  data() {
    return {
      items: items,
      filters: filters,
      hidden: hidden,
      filterOptions: ['Job', 'Education']
    }
  },
  methods: {
    hide,
    filter,
    clear
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.mdAndDown
    }
  }
}
</script>
