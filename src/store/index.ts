import Vue from 'vue'
import Vuex from 'vuex';
import Common, { ICommonState } from './Modules/CommonModule'
import User, { IUserState } from './Modules/UserModule'

Vue.use(Vuex);

export interface IRootState {
    Common: ICommonState
    user: IUserState
}
// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store({
    modules: {
        Common,
        User,
    },
})
