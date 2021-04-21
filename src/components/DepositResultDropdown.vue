<template>
  <div class="dropdown">
    <transition-collapse>
      <readers-statistic v-if="dropdownShown" :average-deposit="Number(inputValue)"/>
    </transition-collapse>
    <div class="dropdown-navigation" @click="showDropdown">
      <p class="dropdown-navigation__text">
        <span v-if="!dropdownShown">А как в среднем у читателей vc.ru?</span>
        <span v-else>Скрыть</span>
      </p>
      <img class="dropdown-navigation__icon" :src="dropdownIcon" alt="Навигация"/>
    </div>
  </div>
</template>

<script>
import TransitionCollapse from "@/components/TransitionCollapse";
import ReadersStatistic from "@/components/DepositResultDropdownStatistic";
import mixin from "@/mixins/mixins";

export default {
  name: "DepositResultDropdown",
  components: {
    ReadersStatistic,
    TransitionCollapse
  },
  mixins: [mixin],
  props: [
    'inputValue'
  ],
  data() {
    return {
      dropdownShown: false
    }
  },
  methods: {
    showDropdown: function () {
      this.dropdownShown = !this.dropdownShown
      if (this.dropdownShown) {
        this.scrollToElement('dropdown-content', 600, 'center', 'start')
      }
    }
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

.dropdown
  position: relative

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
</style>