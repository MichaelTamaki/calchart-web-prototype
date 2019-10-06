<template>
  <div id="grapher">
    <GrapherDot v-for="(dot, index) in dots" v-bind:dot="dot" v-bind:key="index" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import GrapherDot from './GrapherDot.vue'
import Dot from '@/models/Dot'
import Stuntsheet from '@/models/Stuntsheet'

@Component({
  components: {
    GrapherDot
  }
})
export default class Grapher extends Vue {
  get dots () {
    let stuntsheet: Stuntsheet = this.$store.state.selectedSS
    return stuntsheet.dots
  }
}
</script>

<style scoped lang="scss">
// Length: An 8-to-5 step is equal to 1em.

#grapher {
  position: relative;
  width: 40em;
  height: 24em;
  border: 0.0675em solid gray;
}
</style>
