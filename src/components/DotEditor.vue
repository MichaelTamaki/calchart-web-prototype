<template>
  <div>
    <div>
      <h2>Dot Editor</h2>
      <p>Click a row to select a dot.</p>
      <table>
        <thead>
          <tr>
            <th>X / Y</th>
            <th>Dot Type</th>
            <th>Flow</th>
            <th>Flow is valid</th>
          </tr>
        </thead>
        <tbody>
          <tr
          v-for="(dot, index) in dots"
          v-bind:class="{'selected': isSelected(dot)}"
          v-on:click="setSelectedDots([dot])"
          v-bind:key="index"
          >
            <td>
              <input v-model.number="dot.coord[0]" type="number" />
              <input v-model.number="dot.coord[1]" type="number" />
            </td>
            <td>
              <input v-model.number="dot.dotType" type="number" />
            </td>
            <td>{{dot.flow}}</td>
            <td>{{dot.flowIsValid()}}</td>
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

@Component
export default class DotEditor extends Vue {
  get dots (): Dot[] {
    let stuntsheet: Stuntsheet = this.$store.state.selectedSS
    return stuntsheet.dots
  }

  isSelected (dot: Dot) {
    return this.$store.state.selectedDots.includes(dot)
  }

  setSelectedDots (dots: Dot[]) {
    this.$store.commit('setSelectedDots', dots)
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

.selected {
  background: aqua;
}
</style>
