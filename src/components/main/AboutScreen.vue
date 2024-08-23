<template>
  <div class="flex flex-col p-5 text-dark  items-center min-h-screen max-w-full relative bg-white" id="about">
    <AnimationComponent>
    <h1 class="text-dark text-center text-4xl md:text-6xl mt-28 underline underline-offset-8 mb-20 title">{{ $t('about.title') }}</h1>
    <h3 class="text-center text-xl sm:mb-0 mb-6">{{ $t('about.bachelor') }}</h3>
    <div class="grid gap-20 md:grid-cols-2 p-2 sm:p-10 justify-center">
      <div class="flex justify-center my-auto">
        <img src="../../assets/profile.jpeg" class="rounded max-w-sm max-h-96 imgAnimation shadow-black shadow-lg">
      </div>
      <div class="flex flex-col gap-5  justify-center mb-10">
        <h3 class="text-center font-bold">{{ $t('about.subtitle') }}</h3>
        <p>
          {{ $t('about.description') }} 
          <a href="#skills" class="underline">{{ $t('about.descriptionLink') }}</a> 
          {{ $t('about.descriptionSuffix') }}
        </p>
        <p>
          {{ $t('about.contact') }}
          <a href="#contact" class="underline">{{ $t('about.contactLink') }}</a> 
          {{ $t('about.contactSuffix') }}
        </p>
      </div>
    </div>
    <div class="flex justify-center mb-10">
        <a :href="`${origin}/${$i18n.locale == 'nl' ? 'CV_LDM_NL.pdf' : 'CV_LDM.pdf'}`" target="_blank" class="underline font-bold  hover:text-regular hover:animate-none animate-pulse focus:animate-none focus:text-regular">
          {{ $t('about.resume') }}
        </a>
    </div>
    <div class="flex flex-row md:gap-x-64 lg:gap-x-96 gap-x-16 sm:gap-x-32  justify-center text-darker fill-darker mb-5">
        <!-- <a href="https://facebook.com" target="_blank">
          <v-icon icon="fa-brands fa-facebook"/> 
        </a> -->
        <a href="https://github.com/LaurensDM" target="_blank">
          <v-icon icon="fa-brands fa-github"/> 
        </a>
        <a href="https://www.linkedin.com/in/laurens-de-maeyer-218085282/" target="_blank">
          <v-icon icon="fa-brands fa-linkedin"/> 
        </a>
        <form action="mailto:laurensdm@outlook.com">
          <button type="submit">
            <v-icon icon="fa-solid fa-envelope"/> 
          </button>
          
        </form>
    </div>
  </AnimationComponent>
  </div>
</template>

<script setup lang="js">
  import AnimationComponent from '../AnimationComponent.vue';
</script>

<script lang="js">

  export default {
    name: 'AboutScreen',
    data : () => ({
      origin: window.location.origin,
    })
  }
</script>

<style scoped>

@keyframes movingImg {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
}

.imgAnimation {
  animation-name: movingImg;
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: 5;
}

</style>
