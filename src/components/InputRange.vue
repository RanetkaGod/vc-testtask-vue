<template>
  <div class="input-form">
    <span class="label label_from">0 &#8381;</span>
    <div class="input-range-wrapper">
      <div id="tooltip" class="tooltip" v-show="inputValue && inputValue !== '0'">
          <span class="tooltip__content">
            {{ inputValue | addNumberSpaces }} &#8381;
          </span>
      </div>
      <input v-model="inputValue" @change="$emit('valueChanged')" @input="input($event)" class="input-range" type="range" :min="inputMinValue" :max="inputMaxValue" value="0"/>
    </div>
    <span class="label label_to">50 000 &#8381;</span>
  </div>
</template>

<script>
export default {
  name: "InputRange",
  data() {
    return {
      inputValue: 0,
      inputMaxValue: 50000,
      inputMinValue: 0
    }
  },
  watch: {
    inputValue: function () {
      let multiplier = (this.inputValue - this.inputMinValue) / (this.inputMaxValue - this.inputMinValue) * 100
      document.getElementById('tooltip').style.left = `calc(${multiplier}% - ${multiplier*0.25}px)`
    }
  },
  methods: {
    input: function (event) {
      this.styleProgress(event)
      this.$root.$emit('inputDepositValue', this.inputValue)
    },
    styleProgress: function (event) {
      let value = (this.inputValue - this.inputMinValue) / (this.inputMaxValue - this.inputMinValue) * 100
      event.target.style.background = 'linear-gradient(to right, #FF9796 0%, #FE4D4A ' + value + '%, #E2E2E2 ' + value + '%, #E2E2E2 100%)'
    }
  },
}

</script>

<style scoped lang="sass">
@import "../styles/variables"

.input-form
  position: relative
  display: flex

  .label
    font-weight: 500
    font-size: 18px
    white-space: nowrap

  .tooltip
    position: absolute
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    border-radius: 5px
    height: 26px
    padding: 0 7px
    background: $complementary-color
    width: auto
    color: white
    font-size: 16px
    font-weight: 500
    bottom: 28px
    left: 0
    transform-origin: 50% 50%
    transform: translateX(calc(-50% + 12.5px))

    &:after
      content: ''
      position: absolute
      bottom: -3px
      background: $complementary-color
      width: 7px
      height: 7px
      transform: rotate(45deg)

    &__content
      width: auto
      white-space: nowrap

  .input-range-wrapper
    position: relative
    width: 100%
    margin: 0 18px
    .input-range
      -webkit-appearance: none
      width: $track-width
      height: $track-height
      border-radius: $border-radius-main
      background: $track-color

      &:focus
        outline: none

      &::-moz-range-track
        @extend %moz-track

      &::-moz-range-thumb
        @extend %moz-thumb

      &::-webkit-slider-runnable-track
        @extend %webkit-track

      &::-webkit-slider-thumb
        @extend %webkit-thumb

      &:focus::-webkit-slider-runnable-track
        background: transparent
</style>