<template>
  <div class="container container_mrgn">
    <Navig/>
    <div class="mob-block">
      <comMenu 
      v-if="($store.state.menuVisib) && ($store.state.listMenuShown)"
      :className="'top-menu'"
      :menuTM="'menu'"
      :menuLine="'menu-line'"
      :menuName="'menu-name'"
      :imgName="'top-menu-img'"
      :topMenuBorder="'top-menu-border'"
      :array="Object.entries($store.state.sections)">
    </comMenu>
      <div class="top-land top-land_mrpd">
        <div>
          <div class="header">{{ $store.state.ovnerName }}</div>
          <shortBio/>
        </div>
        <div class="section-box section-box_mrpd">
          <profile/>
          <comMenu
          v-if="this.$store.state.width > 1024"
          :className="'section-menu'"
          :sectHold="'sections-holder'"
          :section="'section'"
          :sectName="'sect-name'"
          :array="Object.entries($store.state.sections).slice(0, -1)"
          />
          <projects/>
        </div>
      </div>
      <div class="mid-land">
        <middle/>
        <comMenu 
        v-if="($store.state.width > 540) && ($store.state.width <= 1024)"
        :className="'mid-menu'"
        :menuLine="'menu-line'"
        :menuLineMid="'menu-line-mid'"
        :menuName="'menu-name'"
        :imgName="'mid-menu-img'"
        :array="Object.entries($store.state.sections)">
      </comMenu>
      </div>
    </div>
  <Gallery v-if="$store.state.chosenSect == 'Галерея' ? true  : false"/>
  <contact v-if="$store.state.chosenSect == 'Контакты' ? true : false"/>
  <videos v-if="$store.state.chosenSect == 'Видео' ? true : false"/>
  </div>
  <Footer></Footer>
</template>

<script>
import styles from './styles/App.scss'
import Navig from './components/nav.vue'
import shortBio from './components/bio.vue'
import profile from './components/prof.vue'
import projects from './components/projects.vue'
import middle from './components/middle.vue'
import comMenu from './components/common-menu.vue'
import Gallery from './components/gallery.vue'
import Footer from './components/footer.vue'
import contact from './components/contacts.vue'
import videos from './components/videos.vue'

export default {
  name: 'App',
  styles,
  components : {
    Navig,
    shortBio,
    profile,
    projects,
    middle,
    comMenu,
    Gallery,
    Footer,
    contact,
    videos
  }
}
</script>

<style>
</style>
