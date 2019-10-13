<template>
  <div>
    <h2>Dot Type Editor</h2>
    <p>After configuring continuities, click "Generate Flows."</p>
    <div v-for="(dotType, dotTypeIndex) in dotTypes" v-bind:key="dotTypeIndex">
      <h3>Dot Type: {{dotTypeIndex}}</h3>
      <button v-on:click="removeDotType(dotTypeIndex)">Remove Dot Type</button>
      <table>
        <thead>
          <tr>
            <th>Human Readable</th>
            <th>March Type</th>
            <th>Direction</th>
            <th>Beats</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for="(continuity, continuityIndex) in dotType"
          v-bind:key="continuityIndex"
          >
            <td>{{continuity.toString()}}</td>
            <td>
              <select v-model="continuity.marchType" v-on:change="generateFlowHelper(dotTypeIndex)">
                <option
                v-for="(marchType, marchTypeIndex) in marchTypes"
                v-bind:key="marchTypeIndex"
                >
                  {{marchType}}
                </option>
              </select>
            </td>
            <td>
              <select v-model="continuity.direction" v-on:change="generateFlowHelper(dotTypeIndex)">
                <option
                v-for="(direction, directionIndex) in directions"
                v-bind:key="directionIndex"
                >
                  {{direction}}
                </option>
              </select>
            </td>
            <td>
              <input v-model.number="continuity.beats" type="number" />
            </td>
            <td>
              <button
                v-on:click="removeContinuity(dotTypeIndex, continuityIndex)"
              >
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <button v-on:click="addContinuity(dotTypeIndex)">Add Continuity</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button v-on:click="addDotType">Add Dot Type</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Continuity, MarchTypes, Directions } from '@/models/Continuity'
import Dot from '@/models/Dot'
import generateFlow from '@/logic/GenerateFlow'

@Component
export default class BottomMenu extends Vue {
  get dotTypes (): Continuity[][] {
    return this.$store.getters.getSelectedSS.dotTypes
  }

  get marchTypes () {
    return MarchTypes
  }

  get directions () {
    return Directions
  }

  generateFlowHelper (dotTypeIndex: number) {
    let dotTypeDots: Dot[] = this.$store.getters.getSelectedSS.dots
      .filter((dot: Dot) => {
        return dotTypeIndex === dot.dotType
      })
    generateFlow(this.$store.state.show, this.$store.state.selectedSSIndex, dotTypeDots)
  }

  addContinuity (dotTypeIndex: number) {
    this.$store.getters.getSelectedSS.dotTypes[dotTypeIndex]
      .push(new Continuity(undefined, undefined, undefined))
    this.generateFlowHelper(dotTypeIndex)
  }

  removeContinuity (dotTypeIndex: number, continuityIndex: number) {
    this.$store.getters.getSelectedSS.dotTypes[dotTypeIndex]
      .splice(continuityIndex, 1)
    this.generateFlowHelper(dotTypeIndex)
  }

  addDotType () {
    this.$store.getters.getSelectedSS.dotTypes
      .push([new Continuity(undefined, undefined, undefined)])
  }

  removeDotType (dotTypeIndex: number) {
    this.$store.getters.getSelectedSS.dotTypes.splice(dotTypeIndex, 1)
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
