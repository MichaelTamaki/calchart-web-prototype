<template>
  <div>
    <div>
      <h2>Selected Dot Editor</h2>
      <p>Selected dots in the Grapher show up here.</p>
      <table>
        <thead>
          <tr>
            <th>From X/Y</th>
            <th>To X/Y</th>
            <th>Dot Type</th>
            <th>Flow</th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for="(dotPair, index) in dotsPairs"
          v-bind:key="index"
          >
            <td>
              <input v-model.number="dotPair[0].coord[0]" v-on:change="generateFlowHelper(index)" type="number" />
              <input v-model.number="dotPair[0].coord[1]" v-on:change="generateFlowHelper(index)" type="number" />
            </td>
            <td>
              <input v-if="dotPair[1]" v-model.number="dotPair[1].coord[0]" v-on:change="generateFlowHelper(index)" type="number" />
              <input v-if="dotPair[1]" v-model.number="dotPair[1].coord[1]" v-on:change="generateFlowHelper(index)" type="number" />
            </td>
            <td>
              <input v-model.number="dotPair[0].dotType" v-on:change="generateFlowHelper(index)" type="number" min="0" v-bind:max="dotTypesLength-1" />
            </td>
            <td>{{dotPair[0].flow}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Stuntsheet from '@/models/Stuntsheet'
import Dot from '@/models/Dot'
import generateFlow from '@/logic/GenerateFlow'

@Component
export default class DotEditor extends Vue {
  get dotsPairs (): [Dot, Dot|null][] {
    let fromDots: Dot[] = this.$store.getters.getSelectedFromDots
    let toDots: Array<Dot|null> = this.$store.getters.getSelectedToDots
    return fromDots.map((dot: Dot, index: number) => [dot, toDots.length > index ? toDots[index] : null])
  }

  get dotTypesLength (): number {
    return this.$store.getters.getSelectedSS.dotTypes.length
  }

  generateFlowHelper (index: number) {
    generateFlow(
      this.$store.state.show,
      this.$store.state.selectedSSIndex,
      [this.$store.getters.getSelectedFromDots[index]]
    )
  }
}
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;
  border: 1px solid gray;
}

th {
  border: 1px solid gray;
}
</style>
