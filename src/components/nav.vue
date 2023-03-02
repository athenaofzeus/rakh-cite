<template>
    <div class="nav-panel">
      <img v-show="$store.state.menuVisib" @click="MenuList" class="menu-ico" src="../assets/bars-solid.svg" alt="img">
      <div class="lang-box">
          <span class="lang-name">{{$store.state.lang[1].toUpperCase()}}</span> <!-- тут сделать смену языка по клику -->
          <span class="lang-globe"></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'navigation-comp',
      data () {
          return {
              /* width: window.innerWidth, */
              /* menuVisib: false */
          }
      },
      mounted () {
          if (this.$store.state.width <= 540) {
              console.log('Mounted')
              this.$store.state.menuVisib = true
          }
      },
      created() {
          window.addEventListener('resize', this.updateWidth);
      },
      methods : {
          MenuList () {
              this.$store.dispatch('changeMenuState')
              this.$store.dispatch('getLength')
          },
          updateWidth () {
              this.$store.state.width = window.innerWidth;
              if (this.$store.state.width <= 540) {
                  console.log('Less than 540')
                  this.$store.state.menuVisib = true
              } else {
                  this.$store.state.menuVisib = false
                  console.log('More than 540')
              }
          }
      }
  }
  </script>
  
  <style lang="scss">
  .nav-panel {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-end;
      margin: 0 auto;
      padding-inline: clamp(30px, 7.5%, 89px);
      @media (max-width: 540px) {
          justify-content: space-between;
      }
  }
  .menu-ico {
      width: 16px;
      height: 22px;
  }
  .lang-box {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: nowrap;
  }
  .lang-box:hover .lang-globe {
      background-image: url(../assets/Vector.svg);
  }
  .lang-box:hover {
      color: rgba(71, 160, 244, 1);
  }
  .lang-box:hover {
      cursor: pointer;
  }
  .lang-globe {
      width: 22px;
      height: 22px;
      background-image: url(../assets/globe-solid.svg);
  }
  .lang-name {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 0.7rem;
      line-height: 14px;
      letter-spacing: -0.03em;
  }
  </style>