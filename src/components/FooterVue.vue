<template>
  <v-layout>
  <v-footer
    class="bg-dark text-center flex flex-col p-5"
  >
    <div class="pt-0">
      <h1 class="text-2xl font-bold">Contact me</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aspernatur fugiat pariatur repellendus voluptatem facilis, velit fugit nostrum ipsa sint ab sapiente minus ad nobis, illo nesciunt quia ea. Esse.</p>
    </div>
    <form action="" class="m-5">
      <input type="email" class="form-input rounded-full"/>
    </form>
    <v-divider class=" mt-2"></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Laurens De Maeyer</strong>
    </div>
  </v-footer>
</v-layout>
</template>