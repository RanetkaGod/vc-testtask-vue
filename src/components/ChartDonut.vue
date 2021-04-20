<template>
  <svg height="160" width="160" viewBox="0 0 160 160">
    <g>
      <circle :cx="cx" :cy="cy" :r="circleRadius" fill="transparent" :stroke="circleColor"
              :stroke-width="circleWidth" :stroke-dasharray="circleLength"></circle>
    </g>
    <g>
      <circle :cx="cx" :cy="cy" :r="segmentRadius" fill="transparent" :stroke="segmentColor"
              :stroke-width="strokeWidth" :stroke-dasharray="circleLength" :stroke-dashoffset="strokeDashOffset"
              :transform="`rotate(-90, ${cx}, ${cy})`"></circle>
    </g>
  </svg>
</template>

<script>
export default {
  name: "ChartDonut",
  props: [
    'percent',
    'circleColor',
    'segmentColor'
  ],
  data() {
    return {
      cy: 80,
      cx: 80,
      circleWidth: 14,
      strokeWidth: 28,
      circleRadius: 56,
      segmentRadius: 63
    }
  },
  computed: {
    circleLength: function () {
      return 2 * Math.PI * this.segmentRadius
    },
    strokeDashOffset: function () {
      return this.circleLength - (this.circleLength * this.percent / 100)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>