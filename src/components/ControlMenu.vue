<template>
  <div id="control-menu">
    <SSEditor />
    <h2>Control Menu</h2>
    <div>
      <label for="zoom-level">Zoom Level</label>
      <input id="zoom-level" v-model.number="zoomLevel" type="number" min="1" />
    </div>
    <div>
      <label for="beat-selector">Beat:</label>
      <input id="beat-selector" v-model.number="selectedBeat" type="number" min="0" v-bind:max="selectedSSBeats-1" />
      <span>of {{selectedSSBeats}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SSEditor from './SSEditor.vue'

@Component({
  components: {
    SSEditor
  }
})
export default class BottomMenu extends Vue {
  get zoomLevel () {
    return this.$store.state.zoomLevel
  }

  set zoomLevel (level) {
    this.$store.commit('setZoomLevel', level)
  }

  get selectedBeat () {
    return this.$store.state.selectedBeat
  }

  set selectedBeat (beat) {
    this.$store.commit('setSelectedBeat', beat)
  }

  get selectedSSBeats () {
    return this.$store.getters.getSelectedSS.beats
  }
}
</script>

<style scoped lang="scss">

</style>
