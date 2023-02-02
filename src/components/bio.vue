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

<style lang="scss">
ul {
  font-size: 0.8rem;
  font-weight: 500;
  max-width: 510px;
  list-style-image: url(../assets/bookmark-regular.svg);
}
.ul_pdng {
  padding-left: 15px;
}
li {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  margin-bottom: 1.12rem;
  letter-spacing: -0.02em;
  color: #2D3B60;
}
@media (max-width: 360px) {
    li:first-child {
      max-width: 154px;
    }
}
</style>