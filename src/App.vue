<template>
  <div id="app">
    <deposit-select/>
    <deposit-result :inputValue="inputValue"/>
  </div>
</template>

<script>
import DepositSelect from "@/components/DepositSelect";
import DepositResult from "@/components/DepositResult";

export default {
  name: 'App',
  components: {
    DepositResult,
    DepositSelect
  },
  data() {
    return {
      inputValue: 0
    }
  },
  mounted: function () {
    let vm = this
    this.$root.$on('inputDepositValue', function (value) {
      vm.inputValue = value
    })
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

#app
  font-family: 'Roboto', sans-serif
  max-width: 680px
  background: white
</style>
