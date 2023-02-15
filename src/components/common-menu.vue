<template>
  <ul :class="['menu', className]">
        <li :class="['menu-line', menuLineMid, topMenuBorder]" v-for="[k, value] in Object.entries($store.state.sections)" :key="k">
            <div>
            <img :class="imgName" :src="require(`../assets/${value}.svg`)" alt="img" >
            <span class="menu-name">{{ k }}</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name : 'com-menu-comp',
    props : [
        'className',
        'menuLineMid',
        'imgName',
        'topMenuBorder'
    ]
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
    margin-top: 43px
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
</style>