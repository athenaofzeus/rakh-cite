<template>
  <footer>
    <div class="footer__content">{{ $store.state.ovnerName }}</div>
  </footer>
</template>

<script>
export default {
    name : 'foot-comp'
}
</script>

<style lang="scss">
footer {
    width: 100%;
    height: 55px;
    background-color: #E7EFF4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-top: 30px;

}
.footer__content {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.02em;
    color: #5D87A8;
}
</style>