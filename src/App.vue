<template>
  <div id="app">
    <deposit-select @valueChanged='valueChanged'/>
    <transition-collapse>
      <deposit-result id="deposit-result" v-if="showResult && Number(this.inputValue)!==0" :inputValue="inputValue"/>
    </transition-collapse>
  </div>
</template>

<script>
import DepositSelect from "@/components/DepositSelect";
import DepositResult from "@/components/DepositResult";
import smoothscroll from 'smoothscroll-polyfill'
import mixin from "@/mixins/mixins";
import TransitionCollapse from "@/components/TransitionCollapse";

export default {
  name: 'App',
  components: {
    TransitionCollapse,
    DepositResult,
    DepositSelect,
  },
  mixins: [mixin],
  data() {
    return {
      inputValue: 0,
      showResult: false,
      lastValue: 0
    }
  },
  mounted: function () {
    smoothscroll.polyfill()
    let vm = this
    this.$root.$on('inputDepositValue', function (value) {
      vm.inputValue = value
    })
  },
  methods: {
    valueChanged: function () {
      this.showResult = Number(this.inputValue) !== 0;
      if (!Number(this.lastValue) && Number(this.inputValue)) // Чтобы мягкий сколл работал только при прошлом значении 0
        this.scrollToElement('deposit-result', 600, 'center', 'start')
      this.lastValue = this.inputValue
    }
  }
}
</script>

<style lang="sass">
@import "styles/normalize.css"
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap')

body
  background: #e0e0e0
  position: relative
  display: flex
  flex-direction: row
  justify-content: center

#app
  font-family: 'Roboto', sans-serif
  max-width: 700px
  width: 100%
  background: white
  display: block

.collapse-enter-active, .collapse-leave-active
  transition: all 2s ease
  transform-origin: top

.collapse-enter, .collapse-leave-to
  max-height: 0

.collapse-enter-to, .collapse-leave
  max-height: 100%

</style>
