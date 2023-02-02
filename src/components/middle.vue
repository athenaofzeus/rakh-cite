<template>
  <div class="mid-box">
    <div class="mid-header">Области научных интересов</div>
  </div>
</template>

<script>
export default {
    name: 'middle-comp'
}
</script>

<style>
.mid-box {
    padding-inline: min(89px, calc(15px + (89 - 15) * ((100vw - 320px) / (1280 - 320))));;
}
.mid-header {
    font-family: 'Poppins', sans-serif;
    white-space: nowrap;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #25323D;
}
</style>