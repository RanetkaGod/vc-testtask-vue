<template>
  <div ref="tooltip" class="hint-modal">
    <a v-if="hint.link" :href="hint.link" target="_blank" class="hint-link">
      {{ hint.text }}
    </a>
    <span v-else>
      {{ hint.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: ['hint'],
  mounted() {
    let appElem = document.getElementById('app')
    const tooltipElem = this.$refs.tooltip
    const dropdownRect = tooltipElem.getBoundingClientRect()
    const dropdownRightX = dropdownRect.x + dropdownRect.width
    console.log(appElem.getBoundingClientRect(), dropdownRect)
    if (dropdownRect.x < appElem.getBoundingClientRect().x) {
      this.$refs.tooltip.style.left = '0';
      this.$refs.tooltip.style.right = 'auto';
    } else if (dropdownRightX > appElem.getBoundingClientRect().width + appElem.getBoundingClientRect().x) {
      this.$refs.tooltip.style.left = 'auto';
      this.$refs.tooltip.style.right = '0';
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.hint-modal
  position: absolute
  z-index: 99
  color: #ffffff
  background: $complementary-color
  border-radius: $border-radius-main
  padding: $tooltip-padding
  width: 300px
  box-shadow: 0 9px 10px 0 rgba(254, 77, 74, 0.1)
  left: 0
  bottom: 40px
  .hint-link
    text-decoration: none
    color: inherit

</style>