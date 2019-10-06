<template>
  <div>
    <h2>Stuntsheet Editor</h2>
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Beats</th>
          <th>Select</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-bind:class="{'selected': index === selectedSSIndex}"
        v-for="(stuntsheet, index) in stuntSheets"
        v-bind:key="index"
        >
          <td>{{index}}</td>
          <td>
            <input v-model.number="stuntsheet.beats" type="number" />
          </td>
          <td>
            <button v-on:click="selectSS(index)">Select</button>
          </td>
          <td>
            <button v-on:click="removeSS(index)">Remove</button>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label for="new-ss-beats">New Beats:</label>
            <input id="new-ss-beats" v-model.number="beats" type="number" />
          </td>
          <td colspan="2">
            <button v-on:click="addSS">Add Stuntsheet</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SSEditor extends Vue {
  beats = 32;

  get stuntSheets () {
    return this.$store.state.show.stuntSheets
  }

  get selectedSSIndex () {
    return this.$store.state.show.stuntSheets.indexOf(
      this.$store.state.selectedSS
    )
  }

  selectSS (index: number) {
    this.$store.commit('setSelectedSS', index)
  }

  removeSS (index: number) {
    alert('Not implemented')
  }

  addSS () {
    this.$store.state.show.addNewStuntsheet(this.beats)
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
