<template>
  <div class="deposit-media">
    <div class="deposit-media--inner" v-for="(type, key) in depositTypes" :key="key">
      <coins-counter :calculated-income="calculatedIncome(key)"/>
      <div class="sum-wrapper">
        <p class="sum"> {{ type.sumPrefix }}{{ calculatedIncome(key) | addNumberSpaces }} &#8381;</p>
      </div>
      <p class="deposit-media--inner__info">{{ type.description }}
        <media-hints :hint="type.hint"/>
      </p>
    </div>
  </div>
</template>

<script>
import CoinsCounter from "@/components/CoinsCounter";
import MediaHints from "@/components/DepositResultMediaHints";

export default {
  name: "DepositResultMedia",
  components: { CoinsCounter, MediaHints },
  props: [
      'inputValue'
  ],
  data() {
    return {
      depositTypes: {
        save: {
          description: 'если складывать под матрас',
          hint: {
            text: 'В этом мало смысла — такие накопления «съедает» инфляция',
            link: ''
          } ,
          sumPrefix: '~'
        },
        deposit: {
          description: 'если откладывать на депозит',
          hint: {
            text: 'Ставки по вкладам различны в разных банках и зависят от многих факторов,' +
                ' в частности, от ключевой ставки Центрального банка РФ¹',
            link: 'https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#1'
          },
          sumPrefix: '~'
        },
        alfa: {
          description: 'если инвестировать в ПИФ «Альфа-Капитала»',
          hint: {
            text: 'Вы становитесь инвестором набора компаний, который определяют профессиональные управляющие. ' +
                'Они решают, когда покупать и продавать ценные бумаги, чтобы обеспечить инвестиционный доход. ' +
                'Купить или продать паи фонда можно в любой момент²',
            link: 'https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#2 '
          },
          sumPrefix: 'до ~'
        }
      },
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
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.deposit-media
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  padding: 0 $padding-main $padding-main $padding-main

  &--inner
    position: relative
    .sum-wrapper
      display: flex
      flex-direction: row
      justify-content: center
      margin-top: 15px

    .sum
      @extend %highlight-text
      margin: 0
      font-size: 25px

    &__info
      @extend %regular-text
      margin: 8px 0
      white-space: normal
      display: inline-block

@include tablet
  .deposit-media
    grid-template-columns: 1fr

    &--inner
      display: flex
      flex-direction: column
      align-items: center
      .sum-wrapper
        justify-content: center
      &__info
        text-align: center
</style>