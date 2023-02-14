<template>
  <ul class="bio bio_pdng">
    <li v-for="item in $store.state.shortBio" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
    name: 'bio-comp'
}
</script>

<style lang="scss">
.bio {
  font-size: 0.8rem;
  font-weight: 500;
  max-width: 510px;
  list-style-image: url(../assets/bookmark-regular.svg);
}
.bio_pdng {
  padding-left: 15px;
}
.bio li {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  margin-bottom: 1.12rem;
  letter-spacing: -0.02em;
  color: #2D3B60;
  &:first-child  {
    @media (max-width: 360px) {
      max-width: 154px;
    }
  }
}
</style>