<template>
  <div class="coins">
    <img v-for="key in calculatedCoins" :style="{ marginLeft: (key-1)*18+'px'}" :key="key" class="coins__item"
         src="../assets/Money.png"/>
  </div>
</template>

<script>
export default {
  name: "CoinsCounter",
  props: {
    calculatedIncome: Number
  },
  computed: {
    calculatedCoins: function () {
      const alfaStep = 308178
      return Math.ceil(this.calculatedIncome / alfaStep)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "src/styles/variables"

.coins
  height: 55px
  position: relative
  display: grid
  grid-template-columns: min-content
  justify-content: center
  grid-template-rows: 1fr

  .coins__item
    grid-area: 1 / 1

@include tablet
  .coins-wrapper
    .coins
      justify-content: start
</style>