<template>
  <div class="statistic">
    <div class="statistic-visualisation">
      <div class="statistic-visualisation-graph">
        <div class="statistic__filler"></div>
        <img class="statistic__image" :src="statisticImageUrl" alt="Средний вклад читателей"/>
        <span class="statistic__money">~ {{ averageDeposit | addNumberSpaces }} &#8381;</span>
      </div>
      <div class="statistic-description">
        <p>в среднем откладывают читатели vc.ru</p>
      </div>
    </div>
    <div class="statistic-donuts">
      <div class="statistic-donuts__item" v-for="(value, key) in readersStatistic" :key="key">
        <chart-donut :percent="value.percent" circle-color="#fff" segment-color="#FE4D4A"/>
        <span class="percentage">{{ value.percent }}%</span>
        <span class="description">{{ value.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ChartDonut from "@/components/ChartDonut";

export default {
  name: "ReadersStatistic",
  components: {ChartDonut},
  props: {
    averageDeposit: Number, // Средний депозит
    depositThousand: Number, // Процент людей, откладывающих 1000 и более
    depositTenThousand: Number // Процент людей, откладывающих 10000 и более
  },
  data() {
    return {
      readersStatistic: {
        oneThousand: {
          percent: 50,
          description: 'читателей откладывают\n' +
              'больше 1000 ₽ в месяц'
        },
        tenThousand: {
          percent: 10,
          description: 'читателей откладывают\n' +
              'больше 10 000 ₽ в месяц'
        }
      }
    }
  },
  computed: {
    statisticImageUrl: function () {
      let imageUrl
      if (this.averageDeposit < 11000) {
        imageUrl = require('../assets/money-1.png')
      }
      if (11000 <= this.averageDeposit && this.averageDeposit < 21000) {
        imageUrl = require('../assets/money-2.png')
      }
      if (21000 <= this.averageDeposit && this.averageDeposit < 31000) {
        imageUrl = require('../assets/money-3.png')
      }
      if (31000 <= this.averageDeposit && this.averageDeposit < 41000) {
        imageUrl = require('../assets/money-4.png')
      }
      if (41000 <= this.averageDeposit && this.averageDeposit <= 50000) {
        imageUrl = require('../assets/money-5.png')
      }
      return imageUrl
    }
  },
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.statistic
  display: flex
  width: 100%
  flex-direction: column
  align-items: center
  padding: 20px 80px

  .statistic-visualisation
    display: flex
    flex-direction: column
    align-items: center

    .statistic-visualisation-graph
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center
      padding: 20px
      width: 200px
      height: 200px
      border-radius: 100%
      background-color: $background-color-accessory-light

      .statistic__money
        @extend %highlight-text
        font-size: 22px
        margin-top: 14px
  .statistic-donuts
    display: flex
    width: 100%
    flex-direction: row
    justify-content: space-between
    align-items: center
    margin-top: 10px
    .statistic-donuts__item
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      max-width: 190px
      .percentage
        @extend %highlight-text
        font-size: 22px
        margin: 10px 0
@include tablet
  .statistic
    .statistic-donuts
      flex-direction: column
      .statistic-donuts__item
        margin-bottom: 20px
        &:last-child
          margin-bottom: 0
</style>