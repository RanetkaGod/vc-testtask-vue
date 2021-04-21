<template>
  <div class="deposit-result">
    <deposit-result-info :input-value="inputValue"/>
    <deposit-result-media :input-value="inputValue"/>
    <deposit-result-dropdown :input-value="inputValue"/>
    <deposit-result-about/>
  </div>
</template>

<script>
import DepositResultMedia from "@/components/DepositResultMedia";
import DepositResultDropdown from "@/components/DepositResultDropdown";
import DepositResultAbout from "@/components/DepositResultAbout";
import DepositResultInfo from "@/components/DepositResultInfo";

export default {
  name: "DepositResult",
  components: {
    DepositResultInfo,
    DepositResultAbout,
    DepositResultDropdown,
    DepositResultMedia
  },
  props: [
    'inputValue'
  ],
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"
.deposit-result
  width: 100%
  height: auto
</style>