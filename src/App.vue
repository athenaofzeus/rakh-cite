<template>
  <div class="container container_mrgn">
    <Navig/>
    <div class="mob-block">
      <Menu></Menu>
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
        <midMenu></midMenu>
      </div>
    </div>
  </div>
</template>

<script>
import styles from './styles/App.scss'
import Navig from './components/nav.vue'
import shortBio from './components/bio.vue'
import profile from './components/prof.vue'
import sections from './components/sections.vue'
import projects from './components/projects.vue'
import middle from './components/middle.vue'
import Menu from './components/menu.vue'
import midMenu from './components/mid-menu.vue'

export default {
  name: 'App',
  styles,
  components : {
    Navig,
    Menu,
    shortBio,
    profile,
    sections,
    projects,
    middle,
    midMenu
  }
}
</script>

<style>
</style>
