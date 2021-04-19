<template>
  <div class="deposit-result">
    <div class="content">
      <p class="content__item content-title">Вы откладываете {{ inputValue }} &#8381; в месяц.</p>
      <p class="content__item content-title"> За три года вы бы заработали:</p>
    </div>
    <div class="deposit-media">
      <div class="deposit-media-result" v-for="(type, key) in depositTypes" :key="key">
        <coins-counter :calculated-income="calculatedIncome(key)"/>
        <div class="sum-wrapper">
          <p class="sum"> {{type.sumPrefix}}{{ calculatedIncome(key) | addNumberSpaces }} &#8381;</p>
        </div>
        <p class="deposit-media-result__condition">{{ type.description }}</p>
      </div>
    </div>
    <div class="dropdown">
      <p class="dropdown__text">А как в среднем у читателей vc.ru?</p>
      <img class="dropdown__icon" src="../assets/down.png"/>
    </div>
    <div class="about">
      <p class="about__text">Как начать инвестировать?</p>
      <button class="about__button" @click="redirectToAlfa">Узнать</button>
    </div>
  </div>
</template>

<script>
import CoinsCounter from "@/components/CoinsCounter";
export default {
  name: "DepositResult",
  components: {CoinsCounter},
  props: [
    'inputValue'
  ],
  data() {
    return {
      depositTypes: {
        save: {
          description: 'если откладывать под матрас',
          sumPrefix: '~'
        },
        deposit: {
          description: 'если откладывать на депозит',
          sumPrefix: '~'
        },
        alfa: {
          description: 'если инвестировать в ПИФ «Альфа-Капитала»',
          sumPrefix: 'до ~'
        }
      }
    }
  },
  methods: {
    calculatedIncome: function (depositType) {
      let income = 0
      const months = 36,
          depositMultiplier  = 1.224,
          alfaMultiplier = 1.7121
      switch (depositType) {
        case 'save':
          income = this.inputValue * 36
          break
        case 'deposit':
          income =  Math.floor(this.inputValue * months * depositMultiplier) // Годовая капитализация при 6.98% годовых
          break
        case 'alfa':
          income = Math.floor(this.inputValue * months * alfaMultiplier) // 71.21 процент дохода
          break
      }
      return income
    },
    redirectToAlfa: function () {
      window.open('https://alfabank.ru/make-money/investments/')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"


.deposit-result
  width: 100%
  .content, .deposit-media
    padding: 0 0 0 25px
  .content
    margin-bottom: 24px
    .content__item
      margin: 6px 0

    .content-title
      @extend %title
  .deposit-media
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 10px
    &-result
      position: relative
      .sum-wrapper
        display: flex
        flex-direction: row
        justify-content: center
        margin-top: 15px
      .sum
        margin: 0
        font-size: 25px
        font-weight: 700
        color: $complementary-color
      &__condition
        @extend %regular-text
        margin: 8px 0
        display: inline-block
  .dropdown
    height: 67px
    background: $background-color-accessory
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    &__text
      color: $complementary-color
      font-weight: 400
      font-size: 16px
    &__icon
      margin: 15px
  .about
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    height: 95px
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
      color: white
      font-weight: 500
      font-size: 16px
      margin-left: 30px
      cursor: pointer
      transition: background-color .2s ease
      &:hover
        background: #ef3124
      &:focus
        outline: none
      &::-moz-focus-inner
        border: 0
@include tablet
  .deposit-result
    .deposit-media
      grid-template-columns: 1fr
      .deposit-media-result
        .sum-wrapper
          justify-content: flex-start
</style>