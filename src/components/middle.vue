<template>
  <div class="mid-box">
    <div class="mid-header">Области научных интересов</div>
    <div class="interests interests_mrpd">
      <span class="iter-slot iter-slot_mrpd" v-for="item in $store.state.tagInterests" :key="item">#{{ item }}</span>
    </div>
  </div>
</template>

<script>
import styles from '../styles/mid.scss'
export default {
    name: 'middle-comp',
    styles
}
</script>

<style>
</style>