<template>
  <div class="content">
    <p class="content__item content-title">Вы откладываете {{ inputValue | addNumberSpaces }} &#8381; в месяц.</p>
    <p class="content__item content-title"> За три года вы бы заработали:</p>
  </div>
</template>

<script>
export default {
  name: "DepositResultInfo",
  props: [
      'inputValue'
  ]
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.content, .deposit-media
  padding: 0 25px 25px 25px

.content
  overflow: auto

  .content__item
    margin: 6px 0

  .content-title
    @extend %title
</style>