<template>
  <div class="container container_mrgn">
    <Navig/>
    <div class="top-land top-land_mrpd">
      <div>
        <div class="header">{{ $store.state.ovnerName }}</div>
        <shortBio/>
      </div>
      <div class="section-box section-box_mrpd">
        <profile/>
        <sections/>
        <projects/>
      </div>
    </div>
    <div class="mid-land">
      <middle/>
    </div>
  </div>
</template>

<script>
import Navig from './components/nav.vue'
import shortBio from './components/bio.vue'
import profile from './components/prof.vue'
import sections from './components/sections.vue'
import projects from './components/projects.vue'
import middle from './components/middle.vue'

export default {
  name: 'App',
  components : {
    Navig,
    shortBio,
    profile,
    sections,
    projects,
    middle
  }
}
</script>

<style lang="scss">
body {
  margin: 0 auto;
  background-color: #FAF8FC;
}
.section-box {
  position: relative;
  /* overflow: hidden; */
  padding-bottom: 95px;
  @media (max-width: 1024px) {
    padding-top: 102px;
  }
  @media (max-width: 540px) {
    position: absolute;
    right: clamp(24px, 8vw, 110px);
  }
}
.sections {
  position: absolute;
}
.projects {
  position: absolute;
}
.container{
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  border: 1px solid;
  font-family: 'Inter', sans-serif;
  flex-direction: column;
}
.container_mrgn {
  margin-top: 20px;
}
.top-land {
  display: flex;
  flex-direction: row;
  @media (max-width: 540px) {
    position: relative;
  }
}
.top-land_mrpd {
  margin: 0 auto;
  margin-top: 30px;
  padding-inline: clamp(5px, 2vw, 30px);
  /* padding-left: Min(89px, calc(15px + (89 - 15) * ((100vw - 320px) / (1280 - 320)))); */
}
.header {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: Min(3.1rem, clamp(1.15rem, 5vw, 3.1rem));
  line-height: 70px;
  letter-spacing: -0.04em;
  white-space: nowrap;
  color: #25323D;
  @media (max-width: 540px) {
    line-height: 46px;
  }
}
.section-box_mrpd {
  padding-top: 145px;
  /* padding-left: Min(183px, calc(5px + (183 - 5) * ((100vw - 320px) / (1280 - 320)))); */
  /* padding-right: Min(236px, calc(5px + (236 - 5) * ((100vw - 320px) / (1280 - 320)))); */
  padding-left: Min(205px, calc(120px + (205 - 120) * ((100vw - 1024px) / (1280 - 1024))));
  padding-right: Min(193px, calc(66px + (193 - 66) * ((100vw - 1024px) / (1280 - 1024))));
  /* padding-right: Min(193px, calc(86px + (193 - 86) * ((100vw - 1024px) / (1280 - 1024)))); */
  @media (max-width: 1024px) {
    padding-top: 100px;
    padding-left: Min(10px, calc(10px + (23 - 10) * ((100vw - 320px) / (834 - 320))));
    padding-right: Min(5px, calc(5px + (66 - 5) * ((100vw - 320px) / (834 - 320))));
  }
  @media (max-width: 540px) {
        padding: 0;
    }
}
.mid-land {
  display: flex;
  flex-direction: column;
}
</style>
