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
  </div>
</template>

<script>
import Navig from './components/nav.vue'
import shortBio from './components/bio.vue'
import profile from './components/prof.vue'
import sections from './components/sections.vue'
import projects from './components/projects.vue'

export default {
  name: 'App',
  components : {
    Navig,
    shortBio,
    profile,
    sections,
    projects
  }
}
</script>

<style>
body {
  margin: 0 auto;
  background-color: #FAF8FC;
}
.section-box {
  position: relative;
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
  background-color: aquamarine;
  font-family: 'Inter', sans-serif;
  flex-direction: column;
}
.container_mrgn {
  margin-top: 20px;
}
.top-land {
  display: flex;
  flex-direction: row;
}
.top-land_mrpd {
  margin-top: 30px;
  padding-left: min(89px, calc(15px + (89 - 15) * ((100vw - 320px) / (1280 - 320))));
}
.header {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3.1rem;
  line-height: 70px;
  letter-spacing: -0.04em;
  white-space: nowrap;
  color: #25323D;
}
.section-box_mrpd {
  padding-top: 145px;
  padding-left: min(183px, calc(5px + (183 - 5) * ((100vw - 320px) / (1280 - 320))));
  padding-right: min(236px, calc(5px + (236 - 5) * ((100vw - 320px) / (1280 - 320))));
}
</style>
