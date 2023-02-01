<template>
  <div class="sections-holder">
    <div class="section" v-for="item, idx in $store.state.sectionIcon" :key="idx">
      <img :src="require(`../assets/${item}.svg`)" alt="" class="sect-icon">
      <span class="sect-name">{{ $store.state.sections[idx] }}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'section-comp'
}
</script>

<style>
.sections-holder {
  position: relative;
  top: -214px;
}
.section:first-child {
  position: absolute;
  width: 203px;
    top: -106px;
    left: -66px;
}
.section:nth-child(2) {
  position: absolute;
  width: 168px;
    top: -75px;
    right: -153px;
}
.section:nth-child(3) {
  position: absolute;
  width: 137px;
    left: -130px;
    top: 93px;
}
.section:nth-child(4) {
  position: absolute;
  width: 123px;
    top: 141px;
    left: 253px;
}
.section:nth-child(5) {
  position: absolute;
  width: 148px;
  top: 245px;
  left: 137px;
}
.section {
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 2px 2px 2px rgba(25, 25, 46, 0.15);
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1);
  transition: 0.45s;
}
.section:hover {
  cursor: pointer;
  transform: scale(1.06);
}
.section img {
  padding: 0 10px 0 24px;
}
.sect-name {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: -0.03em;
    color: #5D87A8;
    flex: none;
    order: 1;
    flex-grow: 0;
}
</style>