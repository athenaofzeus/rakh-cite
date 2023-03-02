<template>
  <div class="slider-container" >
  <Splide :options="options">
    <SplideSlide v-for="item, idx in gallery" :key="idx">
      <img class="gal-img" :src="require(`../assets/gallery/${item}`)" :data-splide-lazy="item" alt="img">
    </SplideSlide>
  </Splide>
  </div>
</template>


<script>
/* import axios from 'axios' */
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';
import data from '../../public/static/listImg.json';


export default defineComponent( {
  name : 'gallery-comp',
  components: {
    Splide,
    SplideSlide
  },
  data () {
    return {
      gallery : []
    }
  },
  mounted () {
    this.gallery = data
  },
  setup() {
    const options = {
      /* gap: '1px', */
      focus: 'center',
      perPage: 1,
      /* height: '15rem', */
      rewind: true
    };
    return { options };
  },
} );
</script>

<style lang="scss">
.slider-container {
  margin-top: 40px;
  min-height: 275px;
  /* overflow-x: hidden; */
  width: clamp(980px, 86vw, 1076px);
  margin-inline: auto;
  @media (max-width: 1024px) and (min-width: 540px) {
    width: clamp(446px, 82vw, 984px);
  }
  @media (max-width: 540px) {
    width: clamp(280px, 80%, 500px);
    min-height: unset;
  }
 /*  @media (max-width: ) */
 }
.gal-img {
  object-fit: contain;
  height: 100%;
}
li.is-active {
  @media(max-width: 540px) {
    margin-inline: 0 auto;
  }
}
li.splide__slide:not(.is-active) {
  z-index: 10;
  transform: scale(0.9);
  @media(max-width: 840px) {
    overflow: hidden;
    filter: blur(2px);
  }
}
li.splide__slide {
  height: 15rem;
  @media (max-width: 540px) {
    height: calc(11rem + (240 - 176) * ((100vw - 320px) / (540 - 320)))
  }
}
.splide__track {
  overflow-y: visible;
}
</style>