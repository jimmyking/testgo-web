import {
  SAVE_USERINFO
} from './mutation-types'
import {setStore} from '../util/appUtils'
import constant from '../config/constant'

export default {
  [SAVE_USERINFO] (state, userInfo) {
    setStore(constant.UID, userInfo.id)
    state.userInfo = userInfo
  }
}
