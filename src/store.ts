import Vue from 'vue'
import Vuex from 'vuex'
import { Show, ShowLabels } from '@/models/Show'
import Dot from '@/models/Dot'
import Stuntsheet from '@/models/Stuntsheet'

Vue.use(Vuex)

const defaultShow = new Show('Example Show', 10, ShowLabels[0])

export default new Vuex.Store({
  state: {
    selectedDotsIndex: [0],
    selectedSSIndex: 0,
    selectedBeat: 0,
    show: defaultShow,
    zoomLevel: 100
  },
  mutations: {
    setSelectedDotsIndex (state, dots: number[]) {
      state.selectedDotsIndex = dots
    },
    setSelectedSSIndex (state, index: number) {
      state.selectedSSIndex = index
      state.selectedDotsIndex = []
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
  },
  getters: {
    getSelectedFromDots: state => {
      return state.show.stuntSheets[state.selectedSSIndex].dots
        .filter((dot: Dot, index: number) => state.selectedDotsIndex.includes(index))
    },
    getSelectedToDots: state => {
      console.log(state.selectedSSIndex + 1)
      console.log(state.show.stuntSheets.length)
      if (state.show.stuntSheets.length <= state.selectedSSIndex + 1) {
        return []
      }
      return state.show.stuntSheets[state.selectedSSIndex + 1].dots
        .filter((dot: Dot, index: number) => state.selectedDotsIndex.includes(index))
    },
    getSelectedSS: state => {
      return state.show.stuntSheets[state.selectedSSIndex]
    },
    getSelectedSSDots: state => {
      return state.show.stuntSheets[state.selectedSSIndex].dots
    },
    getSelectedSSNextDots: state => {
      if (state.show.stuntSheets.length <= state.selectedSSIndex + 1) {
        return []
      }
      return state.show.stuntSheets[state.selectedSSIndex + 1].dots
        .map((dot: Dot, index: number) => {
          return (state.show.stuntSheets[state.selectedSSIndex].dots[index].hasNextDot) ? dot : null
        })
    }
  }
})
