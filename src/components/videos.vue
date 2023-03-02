<template>
  <div class="video-box">
    <iframe class="video-slide" v-for="item, idx in $store.state.videoLinks" :key="idx"
     type="video/mp4" :src="`https://www.youtube.com/embed/${item}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
    name : 'videos-comp'
}
</script>

<style>
.video-box {
    margin-inline: auto;
    display: grid;
    grid-gap: 15px clamp(10px, 7vw, 63px);
    grid-template-columns: repeat(2, 1fr);
    margin-top: 43px;
    padding: 0;
}
.video-slide {
    width: 8rem;
}
</style>