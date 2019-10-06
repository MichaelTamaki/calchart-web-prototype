import Vue from 'vue'
import Vuex from 'vuex'
import { Show, ShowLabels } from '@/models/Show'
import Dot from '@/models/Dot'

Vue.use(Vuex)

const defaultShow = new Show('Example Show', 10, ShowLabels[0])

export default new Vuex.Store({
  state: {
    selectedDots: [defaultShow.stuntSheets[0].dots[0]],
    selectedSS: defaultShow.stuntSheets[0],
    selectedDotType: 0,
    selectedBeat: 0,
    show: defaultShow,
    zoomLevel: 100
  },
  mutations: {
    setSelectedDots (state, dots: Dot[]) {
      state.selectedDots = dots
    },
    setSelectedSS (state, index: number) {
      state.selectedSS = state.show.stuntSheets[index]
      state.selectedDots = [state.selectedSS.dots[0]]
      state.selectedDotType = 0
      state.selectedBeat = 0
    },
    setZoomLevel (state, level: number) {
      state.zoomLevel = level
    },
    setSelectedBeat (state, beat: number) {
      state.selectedBeat = beat
    }
  },
  actions: {
  }
})
