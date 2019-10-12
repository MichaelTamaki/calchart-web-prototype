<template>
  <div id="grapher">
    <GrapherDot v-for="(dot, index) in toDots" v-bind:dot="dot" v-bind:key="-index - 1" v-bind:index="index" isTo />
    <GrapherDot v-for="(dot, index) in fromDots" v-bind:dot="dot" v-bind:key="index" v-bind:index="index" />
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
  get fromDots (): Dot[] {
    return this.$store.getters.getSelectedSSDots
  }

  get toDots (): Array<Dot|null> {
    return this.$store.getters.getSelectedSSNextDots
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
