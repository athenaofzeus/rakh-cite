<template>
  <div class="sections-holder">
    <div class="section" v-for="(obj, index) in $store.state.sections" :key="index">
      <div v-for="(value, k) in obj" :key="k">
      <img :src="require(`../assets/${value}.svg`)" alt="img" class="sect-icon">
      <span class="sect-name">{{ k }}</span>
    </div>
    </div>
  </div>
</template>

<script>
import styles from '../styles/sections.scss'
export default {
    name: 'section-comp',
    styles
}
</script>

