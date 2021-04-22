<template>
  <div class="deposit-select">
    <div class="content">
      <p class="content__item content-title">Сколько денег вы откладываете в месяц?</p>
      <p class="content__item content-subtitle">Ответьте и узнаете, сколько копят другие.</p>
    </div>
    <input-range class="input-form" @valueChanged="$emit('valueChanged')"/>
  </div>
</template>

<script>
import InputRange from "@/components/InputRange";

export default {
  name: "DepositSelect",
  components: {InputRange}
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.deposit-select
  width: 100%
  padding: $padding-main
  .content
    color: $font-color
    margin-bottom: 48px
    .content__item
      margin: 0
    .content-title
      @extend %title
      margin-bottom: 11px
    .content-subtitle
      @extend %regular-text

</style>