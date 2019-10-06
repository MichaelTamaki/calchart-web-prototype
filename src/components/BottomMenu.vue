<template>
  <div id="bottom-menu">
    <DotEditor />
    <DotTypeEditor />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DotEditor from './DotEditor.vue'
import DotTypeEditor from './DotTypeEditor.vue'

@Component({
  components: {
    DotEditor,
    DotTypeEditor
  }
})
export default class BottomMenu extends Vue {
}
</script>

<style scoped lang="scss">

</style>
