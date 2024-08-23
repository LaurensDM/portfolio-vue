<template>
  <nav class="flex bg-black fixed w-full text-regular items-center justify-between flex-wrap bg-gray-800 p-6 z-20 border-b-2 border-b-dark">
  <div class="flex items-center flex-shrink-0 text-white ">
    <span class="font-semibold text-xl tracking-tight">
      <a href="#">Laurens De Maeyer</a> </span>
  </div>
  <div class="block lg:hidden ms-auto">
    <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded bg-dark border-black hover:text-regular hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="nav-content">
    <div class="text-md lg:flex-grow lg:flex-row flex-col flex justify-center gap-5">

      <a href="#about" class="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4">
       {{ $t('navbar.about') }}
      </a>
      <a href="#experience" class="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4">
        {{ $t('navbar.experience') }}
      </a>
      <a href="#projects" class="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4">
        {{ $t('navbar.projects') }}
      </a>
      <a href="#skills" class="block mt-4 lg:inline-block lg:mt-0  hover:text-white">
        {{ $t('navbar.skills') }}
      </a>
      <!-- <a href="#" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
        {{ $t('navbar.certificates') }}
      </a> -->
    </div>
    <div style="width: 165.09px" class="lg:flex mt-5 lg:mt-0 gap-2">
      <select v-model="$i18n.locale" class="bg-black rounded-lg px-6 py-2 overflow-hidden">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" class=" p-5 text-white appearance-none hover:bg-dark focus:bg-dark">{{ locale }}</option>
      </select>
      <button @click.prevent="playMusic" href="#"  class="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-red mt-4 lg:mt-0">{{ $t('navbar.button') }}</button>
    </div>
    <audio ref="audio">
      <source src="../assets/hitting-hard-cinematic-rock-trailer-142396.mp3" />
    </audio>
  </div>
  <div>
    
  </div>
</nav>
</template>

<script>
 export default {
  name: 'NavbarVue',
  methods: {
    playMusic() {
      this.$refs.audio.play();
      alert('music player activated')
      // var audio = new Audio("../assets/hitting-hard-cinematic-rock-trailer-142396.mp3");
      // audio.play();
    }
  },
  data() {
    return {
      msg: 'Welcome to My Portfolio App'
    }

  },
  mounted() {
    const toggleButton = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');

    toggleButton.addEventListener('click', () => {
    navContent.classList.toggle('hidden');
  });
}

};

</script>

<style scoped>
/* * {
  box-sizing: border-box;
}

body {
  margin: 0px;
  font-family: 'segoe ui';
}

.nav {
  height: 50px;
  width: 100%;
  background-color: #4d4d4d;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
} */
</style>