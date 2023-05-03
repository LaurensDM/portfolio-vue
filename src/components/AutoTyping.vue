<template>
  <div class="autotyping bg-black">
    <span class="autotyping-text" v-html="currentText">
  </span>
  </div>
</template>

<style scoped>
.autotyping {
  font-size: 1.5rem;
  font-family: monospace;
  max-height: 100px;
  text-align: center;
  color: #1fbf03;
  border: 1px solid #1fbf03;
  padding: 1rem;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
}

.autotyping-text {
  display: inline-block;
  border-right: 0.15em solid #666;
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #666; }
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 100 // milliseconds per character
    }
  },
  data() {
    return {
      currentText: ''
    }
  },
  mounted() {
    this.typeText()
  },
  methods: {
    typeText() {
      let i = 0
      const typeInterval = setInterval(() => {
        this.currentText += this.text.charAt(i)
        i++
        if (i > this.text.length) {
          clearInterval(typeInterval)
        }
      }, this.speed)
    }
  }
}
</script>
