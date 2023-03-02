<template>
  <div class="contact-box">
    <div class="contact__header">Контакты</div>
    <ul>
        <li><b>Email:</b> {{ $store.state.email }}</li>
        <li><b>Адрес:</b> Старая Басманная ул., д. 21/4, стр. 1, каб. 520</li>
        <li>119019 Москва, Г-19, Волхонка, 18/2, Институт русского языка им. В. В. Виноградова РАН, Е. В. Рахилиной</li>
    </ul>
  </div>
</template>

<script>
export default {
    name : 'contact-comp',
}
</script>

<style>
.contact-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin-top: 40px;
    margin-inline: auto;
}
.contact__header {
    font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: #25323D;
}
.contact-box li {
  list-style-type: none;
  font-size: 0.8rem;
  line-height: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  letter-spacing: -0.02em;
  color: #2D3B60;
}
.contact-box ul {
  margin-inline-end: 40px;
}
</style>