import {
  SAVE_USERINFO,
  SAVE_PROJECT,
  SAVE_MODEL
} from './mutation-types'
import {setStore} from '../util/appUtils'
import constant from '../config/constant'

export default {
  [SAVE_USERINFO] (state, userInfo) {
    setStore(constant.UID, userInfo.id)
    state.userInfo = userInfo
  },
  [SAVE_PROJECT] (state, project) {
    state.project = project
  },
  [SAVE_MODEL] (state, model) {
    state.model = model
  }
}
