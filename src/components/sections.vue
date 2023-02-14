<template>
  <div class="sections-holder" v-if="sectVisib">
    <div class="section" v-for="[k, value] in Object.entries($store.state.sections)" :key="k">
      
      <img :src="require(`../assets/${value}.svg`)" alt="img" class="sect-icon">
      <span class="sect-name">{{ k }}</span>
    
    </div>
  </div>
</template>

<script>
import styles from '../styles/sections.scss'
export default {
  name: 'section-comp',
  styles,
  data () {
    return {
      sectVisib : false
    }
  },
  mounted () {
      if (this.$store.state.width > 1024) {
        this.sectVisib = true
      }
  },
  created() {
    window.addEventListener('resize', this.checkSectVisib);
  },
  methods : {
    checkSectVisib () {
      if (this.$store.state.width > 1024) {
        this.sectVisib = true
      } else {
        this.sectVisib = false
      }
    }
  }
}
</script>

