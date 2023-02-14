<template>
  <div class="project-box">
    <a href="https://ruscorpora.ru/" target="_blank"><div class="rc">НКРЯ</div></a>
    <a href="http://rusgram.ru/" target="_blank"><div class="rus-corp">Русская корпусная грамматика</div></a>
    <a href="http://lextyp.org/" target="_blank"><div class="mlex">
      <img src="../assets/mlex.svg" alt="img">
    </div></a>
  </div>
</template>

<script>
export default {
    name: 'project-comp'
}
</script>

<style lang="scss">
.project-box {
  position: relative;
  top: -214px;
  @media (max-width: 1024px) {
    display: none;
  }
}
.rc, .rus-corp, .mlex {
  position: absolute;
  transition: 0.45s;
}
.rc:hover, .rus-corp:hover, .mlex:hover {
  transform: scale(1.08);
  cursor: pointer;
}
.rc {
  font-family: "CharisSIL",serif;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  width: 111px;
  height: 41px;
  background: #2D3B60;
  color: white;
  box-shadow: 2px 2px 2px rgba(25, 25, 46, 0.15);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -5px;
  left: -55px;
}
.rc-img {
    width: 80px;
    height: 40px;
}
.rus-corp {
  font-family: 'PT Serif';
  color: white;
  font-style: normal;
  font-weight: 100;
  padding: 10px 15px;
  white-space: nowrap;
  font-size: 1.1rem;
  letter-spacing: 0.04rem;
  background: #6699CC;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  top: 197px;
  left: clamp(-164px, -12vw, -90px);
}
.mlex {
  width: 57px;
  height: 76px;
  background: #502B5A;
  box-shadow: 2px 2px 2px rgba(25, 25, 46, 0.15);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 29px;
    left: 220px;
}
.mlex img {
  width: 31px;
  height: 59px;
}
</style>