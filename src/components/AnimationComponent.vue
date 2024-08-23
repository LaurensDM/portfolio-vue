<template>
  <div ref="target" class="animated-component">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{ threshold?: number }>(), { threshold: 0.3 })

const target = ref<Element>()

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in')
    }
  },
  {
    threshold: props.threshold
  }
)

onMounted(() => {
  observer.observe(target.value as Element)
})
</script>

<style scoped>
.animated-component {
  opacity: 0;
  transition: opacity 1500ms ease; /* Fade in duration */
}

.animated-component.fade-in {
  opacity: 1;
}
</style>
