<template>
  <span
    class="dot-wrapper"
    v-bind:class="{'selected': isSelected(), 'is-to': isTo}"
    v-bind:style="{top: coord[1] + 'em', left: coord[0] + 'em'}"
    v-on:click="selectDot"
  >
    <span class="dot-label">{{index}}</span>
    <span class="dot-circle"/>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Dot from '@/models/Dot'

@Component
export default class GrapherDot extends Vue {
  @Prop(Dot) readonly dot!: Dot
  @Prop(Boolean) readonly isTo!: boolean
  @Prop(Number) readonly index!: number

  get coord (): number[] {
    let selectedBeat: number = this.$store.state.selectedBeat
    if (selectedBeat >= 0 && selectedBeat < this.dot.flow.length) {
      return this.dot.flow[selectedBeat]
    } else {
      return this.dot.flow[this.dot.flow.length - 1]
    }
  }

  selectDot () {
    this.$store.commit('setSelectedDotsIndex', [this.index])
  }

  isSelected (): boolean {
    return this.$store.state.selectedDotsIndex.includes(this.index)
  }
}
</script>

<style scoped lang="scss">
.dot-wrapper {
  display: inline-block;
  position: absolute;
  transform: translate(-50%, -50%);
  opacity: 0.3;

  &.selected {
    border: 0.125em solid aqua;
    opacity: 1.0;
  }

  &.is-to .dot-circle {
    background: red;
  }

}

.dot-wrapper, .dot-circle {
  width: 1em;
  height: 1em;
  border-radius: 1em;
}

.dot-circle {
  display: block;
  background: black;
}

.dot-label {
  display: none;
}
</style>
