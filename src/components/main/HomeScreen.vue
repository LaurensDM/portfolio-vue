<template>
  <div id="home" class="flex justify-center items-center max-w-full h-screen">
  <AutoTyping :text="'Laurens De Maeyer <br/> ' + $t('home.title')"  class="z-10"/>
  <div id="particle-pointer"></div>
</div>
</template>

<script>
  import AutoTyping from '../AutoTyping.vue'
  import { particlesCursor } from 'threejs-toys';

  export default{
    components: {
      AutoTyping
    },
    mounted() {
     

particlesCursor({
  // options
  el: document.getElementById('particle-pointer'),
  gpgpuSize: 256,
  innerWidth: window.innerWidth,
  colors: [0x1fbf03, 0x22a20b],
  color: 0x131c11,
  coordScale: 1.5,
  noiseIntensity: 0.001,
  noiseTimeCoef: 0.0001,
  pointSize: 5,
  pointDecay: 0.005,
  sleepRadiusX: 250,
  sleepRadiusY: 250,
  sleepTimeCoefX: 0.001,
  sleepTimeCoefY: 0.002
});
    }
  }
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

#particle-pointer {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  z-index: 0;
}


</style>

