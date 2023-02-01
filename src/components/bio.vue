<template>
  <ul class="ul_pdng">
    <li v-for="item in $store.state.shortBio" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
    name: 'bio-comp'
}
</script>

<style>
ul {
    font-size: 0.8rem;
    font-weight: 500;
    max-width: 510px;
    list-style-image: url(../assets/bookmark-regular.svg)
}
.ul_pdng {
  padding-left: 15px;
}
</style>