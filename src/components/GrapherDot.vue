<template>
  <span
    class="dot-wrapper"
    v-bind:class="{'selected': isSelected}"
    v-bind:style="{top: coord[1] + 'em', left: coord[0] + 'em'}"
    v-on:click="selectDot"
  >
    <span class="dot-label">{{key}}</span>
    <span class="dot-circle"/>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Dot from '@/models/Dot'

@Component
export default class GrapherDot extends Vue {
  @Prop(Dot) readonly dot!: Dot
  key = -1;

  get coord (): number[] {
    let selectedBeat: number = this.$store.state.selectedBeat
    if (this.dot.flow.length >= selectedBeat) {
      return this.dot.flow[selectedBeat]
    } else {
      return this.dot.flow[this.dot.flow.length - 1]
    }
  }

  get isSelected (): boolean {
    return this.$store.state.selectedDots.includes(this.dot)
  }

  selectDot () {
    this.$store.commit('setSelectedDots', [this.dot])
  }
}
</script>

<style scoped lang="scss">
.dot-wrapper {
  display: inline-block;
  position: absolute;
  transform: translate(-50%, -50%);

  &.selected {
    border: 0.125em solid aqua;
  }
}

.dot-wrapper, .dot-circle {
  width: 1em;
  height: 1em;
  border-radius: 0.5em;
}

.dot-circle {
  display: block;
  background: black;
}

.dot-label {
  display: none;
}
</style>
