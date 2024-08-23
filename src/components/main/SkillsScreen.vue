<script setup>
import AnimationComponent from '../AnimationComponent.vue'
</script>

<template>
  <div
    class="flex text-regular flex-col max-w-full min-h-screen bg-black z-10 relative p-5"
    id="skills"
  >
    <h1
      class="text-shade text-center text-4xl md:text-6xl mt-28 underline underline-offset-8 mb-10 title"
    >
      {{ $t('skills.title') }}
    </h1>
    <AnimationComponent :threshold="0.2">
      <h2 class="text-center font-bold text-xl mb-10">{{ $t('skills.subtitle1') }}</h2>
      <div class="grid md:grid-cols-3 gap-5 text-darkShade">
        <div class="text-center grid gap-y-3 gap-x-10 grid-cols-3 mx-auto mb-10">
          <h2 class="col-span-3 font-mono font-semibold">Web Development</h2>
          <div>
            <v-icon icon="fa-brands fa-html5" class="icon" />
            <br />
            <p>HTML</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-css3" class="icon" />
            <br />
            <p>CSS</p>
          </div>
          <div>
            <img src="../../assets/logos/tailwind.svg" class="mx-auto" />
            <p>TailwindCSS</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-bootstrap" class="icon" />
            <br />
            <p>Bootstrap</p>
          </div>
          <!-- <div>
          <v-icon icon="fa-brands fa-sass" class="icon"/>
          <br>
          SASS
        </div> -->
          <div>
            <img src="../../assets/logos/material-ui-1.svg" class="mx-auto" />
            <p>Material UI</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-square-js" class="icon" />
            <br />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="../../assets/logos/ts-logo-128.svg" class="mx-auto" />
            <p>Typescript</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-vuejs" class="icon" />
            <br />
            <p>Vue.js</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-react" class="icon" />
            <br />
            <p>React.js</p>
          </div>
          <div>
            <img src="../../assets/logos/next-js-seeklogo.com.svg" class="mx-auto" />
            <p>Next.js</p>
          </div>
          <div>
            <img src="../../assets/logos/koajs_logo_icon_168379.svg" class="mx-auto" />
            <p>Koa.js</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-node-js" class="icon" />
            <br />
            <p>Node.js</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-npm" class="icon" />
            <br />
            <p>NPM</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-yarn" class="icon" />
            <br />
            <p>Yarn</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-angular" class="icon" />
            <br />
            <p>Angular</p>
          </div>
        </div>

        <div class="text-center grid gap-y-3 gap-x-10 grid-cols-2 grid-rows-5 mx-auto">
          <h2 class="col-span-2 font-mono font-semibold">Mobile Development</h2>
          <div>
            <v-icon icon="fa-brands fa-react" class="icon" />
            <br />
            <p>React Native</p>
          </div>
          <div>
            <img src="../../assets/logos/icon_flutter.svg" class="mx-auto" />
            <p>Flutter</p>
          </div>
          <div class="">
            <img src="../../assets/logos/logo_dart_192px.svg" class="mx-auto" />
            <p>Dart</p>
          </div>
          <!-- <div class="">
          <img
            src="https://raw.githubusercontent.com/hivedb/hive/master/.github/logo_transparent.svg?sanitize=true"
            class="mx-auto w-16 h-16"
          />
          Hive
        </div> -->
          <div>
            <v-icon icon="fa-brands fa-android" class="icon" />
            <br />
            <p>Android</p>
          </div>
        </div>

        <div class="text-center grid gap-y-3 gap-x-10 grid-cols-3 mx-auto mb-10">
          <h2 class="col-span-3 font-mono font-semibold">{{ $t('skills.other') }}</h2>
          <div>
            <v-icon icon="fa-brands fa-python" class="icon" />
            <br />
            <p>Python</p>
          </div>
          <!-- <div>
          <v-icon icon="fa-brands fa-golang" class="icon" />
          <br />
          <p>GO</p>
        </div> -->
          <div>
            <v-icon icon="fa-brands fa-java" class="icon" />
            <br />
            <p>Java</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-java" class="icon" />
            <br />
            <p>JavaFX</p>
          </div>
          <div>
            <img src="../../assets/logos/icons8-spring-boot-64.svg" class="mx-auto" />
            <p>Spring</p>
          </div>
          <div>
            <v-icon icon="fa-solid fa-database" class="icon" />
            <br />
            <p>SQL</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-git-alt" class="icon" />
            <br />
            <p>Git</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-linux" class="icon" />
            <br />
            <p>Linux</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-docker" class="icon" />
            <br />
            <p>Docker</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-jira" class="icon" />
            <br />
            <p>Jira</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-trello" class="icon" />
            <br />
            <p>Trello</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-microsoft" class="icon" />
            <br />
            <p>Microsoft Office</p>
          </div>
          <div>
            <v-icon icon="fa-brands fa-markdown" class="icon" />
            <br />
            <p>Markdown</p>
          </div>
          <div>
            <v-icon icon="fa-solid fa-ban" class="icon" />
            <br />
            <p>SAPCC</p>
          </div>
          <div>
            <v-icon icon="fa-solid fa-ban" class="icon" />
            <br />
            <p>Alokai</p>
          </div>
          <div>
            <v-icon icon="fa-solid fa-ban" class="icon" />
            <br />
            <p>Databricks</p>
          </div>
        </div>
      </div>
    </AnimationComponent>

    <h2 class="text-center font-bold text-xl mt-10 mb-10">{{ $t('skills.subtitle2') }}</h2>
    <AnimationComponent>
      <div class="grid md:grid-cols-2 gap-5 mb-20">
        <div class="text-center grid gap-y-3 sm:gap-x-10 grid-cols-2 mx-auto">
          <h2 class="col-span-2 font-mono font-semibold">{{ $t('skills.languages') }}</h2>
          <div>{{ $t('skills.english') }}</div>
          <div>{{ $t('skills.french') }}</div>
          <div>{{ $t('skills.dutch') }}</div>
          <div>{{ $t('skills.japanese') }}</div>
        </div>
        <div class="text-center grid gap-y-3 sm:gap-x-10 grid-cols-2 mx-auto">
          <h2 class="col-span-2 font-mono font-semibold">{{ $t('skills.other') }}</h2>
          <div>{{ $t('skills.softSkill1') }}</div>
          <div>{{ $t('skills.softSkill3') }}</div>
          <div>{{ $t('skills.softSkill2') }}</div>
          <div>{{ $t('skills.softSkill4') }}</div>
        </div>
      </div>
    </AnimationComponent>
  </div>
</template>

<style scoped>
.icon {
  font-size: 64px;
}

p {
  color: #1fbf03;
}
</style>
