<template>
  <span class="hint-wrapper">
      <button id="hint-button" class="hint-button" :class="{ active: isActive }" @click="showTooltip($event)">
        ?
      </button>
    <tooltip v-if="isActive" :hint="hint"></tooltip>
  </span>
</template>

<script>


import Tooltip from "@/components/Tooltip";
export default {
  name: "ModalHints",
  components: {Tooltip},
  props: {
    hint: Object
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    document.addEventListener('click', this.documentClick)
  },
  methods: {
    showTooltip: function (event) {
      this.isActive = !this.isActive
      event.stopPropagation()
    },
    documentClick: function () {
        this.isActive = false
    }
  }
}
</script>

<style lang="sass">
@import "../styles/variables"

.hint-wrapper
  display: inline-block
  width: 20px
  height: 20px
  margin: 0 6px

  .hint-button
    border-radius: 100%
    width: 20px
    height: 20px
    border: none
    outline: none
    background: $background-color-accessory
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    font-size: 13px
    color: $complementary-color
    padding: 0
    transition: all .2s ease
    &.active
      background: $complementary-color
      color: white
      &:after
        content: ''
        position: absolute
        bottom: 36px
        background: $complementary-color
        width: 7px
        height: 7px
        transform: rotate(45deg)


</style>