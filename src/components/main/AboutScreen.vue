<template>
  <div class="flex text-dark flex-col  max-w-full h-screen  bg-white z-10 relative p-5" id="about">
    <h1 class="text-dark text-center text-6xl mt-10 underline underline-offset-8 mb-20 title">About me</h1>
    <h3 class="text-center text-xl">Bachelor Applied Informatics</h3>
    <div class="grid gap-20 grid-cols-2 grid-rows-1 p-20 justify-center">
      <div class="flex justify-center">
        <img src="https://picsum.photos/200" class="rounded" alt="">
      </div>
      <div class="flex flex-col gap-5 justify-center text-center">
        <p>Home</p>
        <p>Birth</p>
        <p>Phone</p>
        <p>Mail</p>
        <p>Description</p>
      </div>
    </div>
    <div class="flex flex-row gap-32 justify-center text-darker fill-darker">
        <a href="https://facebook.com" target="_blank">
          <v-icon icon="fa-brands fa-facebook"/> 
        </a>
        <a href="https://github.com/LaurensDM" target="_blank">
          <v-icon icon="fa-brands fa-github"/> 
        </a>
        <a href="https://linkedin.com" target="_blank">
          <v-icon icon="fa-brands fa-linkedin"/> 
        </a>

    </div>
  </div>
</template>

