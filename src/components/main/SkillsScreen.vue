<template>
  <div class="flex text-dark flex-col  max-w-full min-h-screen  bg-white z-10 relative p-5" id="skills">
    <h1 class="text-dark text-center text-6xl mt-20 underline underline-offset-8 mb-10 title">Skills</h1>
    <h2 class="text-center font-bold text-xl mb-10">Technical skills</h2>
    <div class="grid md:grid-cols-3 gap-5 text-darkShade">
      <div class="text-center grid gap-y-3 gap-x-10 grid-cols-2 mx-auto mb-10">
        <h2 class="col-span-2 font-mono font-semibold">Web Development</h2>
        <div>
          <v-icon icon="fa-brands fa-html5" class="icon"/>
          <br>
          HTML
        </div>
        <div>
          <v-icon icon="fa-brands fa-css3" class="icon"/>
          <br>
          CSS
        </div>
        <div >
          <img src="../../assets/logos/tailwind.svg" class="mx-auto">
          TailwindCSS</div>
        <div>
          <v-icon icon="fa-brands fa-bootstrap" class="icon"/>
          <br>
          Bootstrap
        </div>
        <div>
          <v-icon icon="fa-brands fa-sass" class="icon"/>
          <br>
          SASS
        </div>
        <div>
          <img src="../../assets/logos/material-ui-1.svg" class="mx-auto">
          Material UI</div>
        <div>
          <v-icon icon="fa-brands fa-square-js" class="icon"/>
          <br>
          JavaScript
        </div>
        <div>
          <img src="../../assets/logos/ts-logo-128.svg" class="mx-auto">
          Typescript
        </div>
        <div>
          <v-icon icon="fa-brands fa-vuejs" class="icon"/>
          <br>
          Vue.js
        </div>
        <div>
          <v-icon icon="fa-brands fa-react" class="icon"/>
          <br>
          React.js
        </div>
        <div>
          <img src="../../assets/logos/next-js-seeklogo.com.svg" class="mx-auto">
          Next.js
        </div>
        <div>
          <img src="../../assets/logos/koajs_logo_icon_168379.svg" class="mx-auto">
          Koa.js
        </div>
        <div class="col-span-2">
          <v-icon icon="fa-brands fa-node-js" class="icon"/>
          <br>
          Node.js
        </div>
      </div>
      <div class="text-center grid gap-y-3 gap-x-10 grid-cols-2 grid-rows-5 mx-auto">
        <h2 class="col-span-2 font-mono font-semibold">Mobile Development</h2>
        <div >
          <v-icon icon="fa-brands fa-react" class="icon"/>
          <br>
          React Native
        </div>
        <div>
          <img src="../../assets/logos/icon_flutter.svg" class="mx-auto">
          Flutter
        </div>
        <div class="col-span-2">
          <img src="../../assets/logos/logo_dart_192px.svg" class="mx-auto">
          Dart
        </div>
      </div>
      <div class="text-center grid gap-y-3 gap-x-10 grid-cols-2 grid-rows-7 mx-auto">
        <h2 class="col-span-2 font-mono font-semibold">Other</h2>
        <div >
          <v-icon icon="fa-brands fa-python" class="icon"/>
          <br>
          Python
        </div>
        <div>
          <v-icon icon="fa-brands fa-golang" class="icon"/>
          <br>
          GO
        </div>
        <div >
          <v-icon icon="fa-brands fa-java" class="icon"/>
          <br>
          Java
        </div>
        <div>
          <v-icon icon="fa-brands fa-java" class="icon"/>
          <br>
          JavaFX
        </div>
        <div>
          <img src="../../assets/logos/icons8-spring-boot-64.svg" class="mx-auto">
          Spring
        </div>
        <div >
          <v-icon icon="fa-solid fa-database" class="icon"/>
          <br>  
          SQL
        </div>
        <div >
          <v-icon icon="fa-brands fa-git-alt" class="icon"/>
          <br>  
          Git
        </div>
        <div>
          <v-icon icon="fa-brands fa-linux" class="icon"/>
          <br>
          Linux
        </div>
        <div>
          <v-icon icon="fa-brands fa-docker" class="icon"/>
          <br>
          Docker
        </div>
        <div>
          <v-icon icon="fa-brands fa-jira" class="icon"/>
          <br>
          Jira
        </div>
        <div>
          <v-icon icon="fa-brands fa-trello" class="icon"/>
          <br>
          Trello
        </div>
        <div >
          <v-icon icon="fa-brands fa-microsoft" class="icon"/>
          <br>
          Microsoft Office
        </div>
      </div>
    </div>
    <h2 class="text-center font-bold text-xl mt-10 mb-10">Soft Skills</h2>
    <div class="grid md:grid-cols-2 gap-5 mb-20">
      <div class="text-center grid gap-y-3 gap-x-10 grid-cols-2 mx-auto">
        <h2 class="col-span-2 font-mono font-semibold">Languages</h2>
        <div >English (fluent)</div>
        <div >French (minimal)</div>
        <div >Dutch (fluent)</div>
        <div >Japanese (minimal)</div>
      </div>
      <div class="text-center grid gap-y-3 gap-x-10 grid-cols-2 mx-auto">
        <h2 class="col-span-2 font-mono font-semibold">Other</h2>
        <div >Communication</div>
        <div >Problem Solving</div>
        <div >Time Management</div>
        <div >Adaptability</div>
        </div>
      </div>
  </div>
</template>


<style scoped>
  .icon {
    font-size: 64px;
  }
</style>
