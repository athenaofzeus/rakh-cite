<template>
  <ul :class="[menuTM, className, sectHold]">
        <li :class="[menuLine, menuLineMid, topMenuBorder, section]" v-for="[k, value] in array" :key="k" @click="ChooseSect($event)">
            <div>
            <img :class="imgName" :src="require(`../assets/${value}.svg`)" alt="img" >
            <span :class="[menuName, sectName]">{{ k }}</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name : 'com-menu-comp',
    data () {
        return {
            /* focusOn : NaN */
        }
    },
    props : [
        'menuTM',
        'className',
        'menuLineMid',
        'imgName',
        'topMenuBorder',
        'sectHold',
        'section',
        'menuLine',
        'sectName',
        'menuName',
        'array'
    ],
  methods : {
    ChooseSect(event) {
      if (this.$store.state.chosenSect === event.target.textContent) {
        this.$store.state.chosenSect = NaN
      }else {
        this.$store.state.chosenSect = event.target.textContent
      }
    }
  }
}
</script>

<style lang="scss">
.menu {
    margin: 0 auto;
    padding: 0;
}
.top-menu {
    display: flex;
    flex-direction: column;
    height: 290px;
    margin-top: 25px;
    width: clamp(220px, 51vw, 270px);
}
.mid-menu {
    display: grid;
    grid-gap: 21px clamp(10px, 7vw, 63px);
    grid-template-columns: repeat(2, 1fr);
    margin-top: 43px;
    margin-inline: auto;
    padding: 0;
}
.sections-holder {
    position: relative;
    top: -214px;
}
.menu-line {
    list-style: none;
    padding: 14px 0;
    & div {
        display: flex;
        align-items: center;
    }
}
.menu-line-mid {
    background: #FFFFFF;
    box-shadow: 2px 2px 2px rgba(25, 25, 46, 0.15);
    border-radius: 16px;
    padding: 13.5px clamp(40px, 8vw, 80px) 13.5px 0;
}
.top-menu-img {
    padding: 0 10px 0 24px;
}
.mid-menu-img {
    padding: 0 18px 0 37px;
}
.menu-name {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.03em;
    color: #5D87A8;
    white-space: nowrap;
}
.top-menu-border:not(:last-child) {
    border-bottom: 1px solid #BABABA;
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
      left: 153px;
  }
  .section:nth-child(3) {
    position: absolute;
    width: 137px;
    left: clamp(-130px, -11vw, -105px);
      top: 93px;
  }
  .section:nth-child(4) {
    position: absolute;
    width: 123px;
      top: 141px;
      /* left: max(210px, calc(210px + (235 - 210) * ((100vw - 834px) / (1280 - 834)))); */
    left: clamp(210px, 20vw, 253px);
  }
  .section:nth-child(5) {
    position: absolute;
    width: 148px;
    top: 245px;
    left: 137px;
  }
  .section {
    height: 56px;
    cursor: pointer;
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
    width: auto;
    height: 18px;
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