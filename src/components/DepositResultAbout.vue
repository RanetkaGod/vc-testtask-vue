<template>
  <div class="about">
    <p class="about__text">Как начать инвестировать?</p>
    <button class="about__button" @click="redirectToAlfa">Узнать</button>
  </div>
</template>

<script>
export default {
  name: "DepositResultAbout",
  methods: {
    redirectToAlfa: function () {
      window.open('https://alfabank.ru/make-money/investments/')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.about
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  height: 95px
  padding: 0 $padding-main

  &__text
    font-weight: 500
    font-size: 16px

  &__button
    background: $complementary-color
    border: 0
    outline: none
    height: 45px
    width: 134px
    border-radius: $border-radius-main
    color: $font-reverse-color
    font-weight: 500
    font-size: 16px
    margin-left: 30px
    cursor: pointer
    transition: background-color .2s ease

    &:hover
      background: $complementary-hover-color

    &:focus
      outline: none

</style>