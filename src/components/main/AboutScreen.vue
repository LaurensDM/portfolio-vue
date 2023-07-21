<template>
  <div class="flex text-dark flex-col justify-center  min-h-screen bg-white z-10 relative p-5" id="about">
    <h1 class="text-dark text-center text-6xl mt-20 underline underline-offset-8 mb-20 title">About me</h1>
    <h3 class="text-center text-xl">Bachelor Applied Informatics</h3>
    <div class="grid gap-20 md:grid-cols-2  p-10 justify-center">
      <div class="flex justify-center">
        <img src="../../assets/profile.jpeg" class="rounded max-w-sm max-h-96">
      </div>
      <div class="flex flex-col gap-5  justify-center mb-10">
        <h3 class="text-center font-bold">Hello there!</h3>
        <p>My name is Laurens De Maeyer, I was born in 'Oost-Vlaanderen', Belgium in 2001.
          Currently I'm studying Applied Informatics at the University College Ghent (HOGent).
          Before I started studying Applied Informatics, I studied Chemistry at the same school.
          I started studying this course in 2021. I'm currently in my last year. 
          I have a deep passion for programming and I'm always eager to learn new things.
          Currently my main focus is on software development and web development.
          Mainly I'm working with the following technologies: javascript, java, html, css.
          For the full list of technologies I'm working with, check out my skills page.
        </p>
        <p>
          You can contact me via mail at laurensdm@outlook.com or through phone at +32 478 77 27 95.
          Or you can fill out the <a>contact form</a>  at the bottom of the website.
        </p>
      </div>
    </div>
    <div class="flex justify-center mb-10">
      <span class="underline hover:text-lg">
        <a :href="pdf" target="_blank">
          View my resume
        </a>
      </span>
    </div>
    <div class="flex flex-row md:gap-32 gap-10 justify-center text-darker fill-darker mb-5">
        <!-- <a href="https://facebook.com" target="_blank">
          <v-icon icon="fa-brands fa-facebook"/> 
        </a> -->
        <a href="https://github.com/LaurensDM" target="_blank">
          <v-icon icon="fa-brands fa-github"/> 
        </a>
        <a href="https://www.linkedin.com/in/laurens-de-maeyer-218085282/" target="_blank">
          <v-icon icon="fa-brands fa-linkedin"/> 
        </a>

    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: 'AboutScreen',
    data : () => ({
      pdf: window.location.origin + '/CV_De_Maeyer_Laurens.pdf'
    })
  }
</script>
