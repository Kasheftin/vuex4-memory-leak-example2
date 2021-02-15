import { createStore } from 'vuex'
import * as example from './example'

export default createStore({
  modules: {
    example: { ...example, namespaced: true }
  }
})
