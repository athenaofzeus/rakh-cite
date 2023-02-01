<template>
  <div class="box">
    <div class="back-cont">
        <div class="circle"><img src="../assets/photo-wrapper-ellipse.png" alt="img" class="face"/></div>
        <div class="name name_pdng">{{ $store.state.ovnerName }}</div>
        <div class="email">{{ $store.state.email }}</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'prof-comp'
}
</script>

<style>
.back-cont {
    width: 248px;
    height: 214px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 13.15px;
    background-color: #fff;
    box-shadow: 0px 40px 30px rgba(25, 25, 46, 0.04);
}
.circle {
    position: relative;
    width: 88px;
    height: 88px;
    border-radius: 65.77px;
    background: linear-gradient(135deg, #CDE5F3 0%, #485C99 100%);
}
.face {
    position: absolute;
    top: -5px;
    bottom: 0;
    left: -2px;
    right: 0;
    margin: auto;
    width: 84px;
    height: 84px;
    mix-blend-mode: normal;
    filter: drop-shadow(0px 10px 20px rgba(0, 59, 108, 0.13));
}
.name {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.98rem;
}
.name_pdng {
    padding: 10px 0 5px;
}
.email {
    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 17px;
    color: #838785;
}
</style>