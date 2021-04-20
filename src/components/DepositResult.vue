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
          <p class="sum"> {{ type.sumPrefix }}{{ calculatedIncome(key) | addNumberSpaces }} &#8381;</p>
        </div>
        <p class="deposit-media-result__condition">{{ type.description }}</p>
      </div>
    </div>
    <div class="dropdown">
      <transition-collapse>
        <div id="dropdown-content" class="dropdown-content" v-if="dropdownShown">
          123
        </div>
      </transition-collapse>
      <div class="dropdown-navigation" @click="showDropdown">
        <p class="dropdown-navigation__text">
          <span v-if="!dropdownShown">А как в среднем у читателей vc.ru?</span>
          <span v-else>Скрыть</span>
        </p>
        <img class="dropdown-navigation__icon" :src="dropdownIcon"/>
      </div>
    </div>
    <div class="about">
      <p class="about__text">Как начать инвестировать?</p>
      <button class="about__button" @click="redirectToAlfa">Узнать</button>
    </div>
  </div>
</template>

<script>
import CoinsCounter from "@/components/CoinsCounter";
import mixin from "@/mixins/mixins";
import TransitionCollapse from "@/components/TransitionCollapse";

export default {
  name: "DepositResult",
  components: {TransitionCollapse, CoinsCounter},
  props: [
    'inputValue'
  ],
  mixins: [mixin],
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
      },
      dropdownShown: false
    }
  },
  methods: {
    calculatedIncome: function (depositType) {
      let income = 0
      const months = 36,
          depositMultiplier = 1.224,
          alfaMultiplier = 1.7121
      switch (depositType) {
        case 'save':
          income = this.inputValue * 36
          break
        case 'deposit':
          income = Math.floor(this.inputValue * months * depositMultiplier) // Годовая капитализация при 6.98% годовых
          break
        case 'alfa':
          income = Math.floor(this.inputValue * months * alfaMultiplier) // 71.21 процент дохода
          break
      }
      return income
    },
    redirectToAlfa: function () {
      window.open('https://alfabank.ru/make-money/investments/')
    },
    showDropdown: function () {
      this.dropdownShown = !this.dropdownShown
      if (this.dropdownShown) {
        this.scrollToElement('dropdown-content', 600)
      }
    },
  },
  computed: {
    dropdownIcon: function () {
      return this.dropdownShown ? require('../assets/up.png') : require('../assets/down.png')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"


.deposit-result
  width: 100%
  height: auto
  overflow: hidden

  .content, .deposit-media
    padding: 0 25px 25px 25px

  .content
    .content__item
      margin: 6px 0

    .content-title
      @extend %title

  .deposit-media
    display: grid
    grid-template-columns: 1fr 1fr 1fr

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
    position: relative

    .dropdown-content
      overflow: hidden
      background: $background-color-accessory

    .dropdown-navigation
      background: $background-color-accessory
      height: 67px
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
    padding: 0 25px 0 25px

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

.collapse-enter-active, .collapse-leave-active
  transition: all .2s ease
  transform-origin: top

.collapse-enter, .collapse-leave-to
  max-height: 0

.collapse-enter-to, .collapse-leave
  max-height: 400px


@include tablet
  .deposit-result
    .deposit-media
      grid-template-columns: 1fr

      .deposit-media-result
        .sum-wrapper
          justify-content: flex-start
</style>