<template>
  <div class="box">
    <div class="back-cont">
        <div class="circle"><img src="../assets/photo-wrapper-ellipse.png" alt="img" class="face"/></div>
        <div class="name name_pdng">{{ $store.state.ovnerName }}</div>
        <div class="email">{{ $store.state.email }}</div>
    </div>
  </div>
</template>

<script>
import styles from '../styles/prof.scss'
export default {
    name: 'prof-comp',
    styles
}
</script>

<style>

</style>