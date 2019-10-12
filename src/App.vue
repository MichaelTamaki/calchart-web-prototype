<template>
  <div id="app">
    <h2>{{showTitle}}</h2>
    <ControlMenu />
    <h2>Grapher</h2>
    <p>Click a dot to select it.</p>
    <p>Black dots reprsent a marcher at the current beat.</p>
    <p>Red dots represent the next stuntsheet's position.</p>
    <div
    class="grapher-container"
    v-bind:style="{fontSize: zoomLevel + '%'}"
    >
      <Grapher />
    </div>
    <div class="bottom-menu-container">
      <BottomMenu />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ControlMenu from './components/ControlMenu.vue'
import Grapher from './components/Grapher.vue'
import BottomMenu from './components/BottomMenu.vue'

@Component({
  components: {
    ControlMenu,
    Grapher,
    BottomMenu
  }
})
export default class App extends Vue {
  get showTitle () {
    return this.$store.state.show.title
  }

  get zoomLevel () {
    return this.$store.state.zoomLevel
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100%;
}

.grapher-container {
  padding: 2rem;
  border: 1px solid black;
  overflow: auto;
  max-height: 40rem;
}
</style>
