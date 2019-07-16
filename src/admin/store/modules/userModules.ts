import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
// import { login, logout, getUserInfo } from '@I/api/users'
// import { getToken, setToken, removeToken } from '@I/utils/cookies'
import router, { resetRouter } from '@/index/route/index'
import store from '@/index/store/index'

export interface IUserState {
    token: string
    name: string
    avatar: string
    introduction: string
    roles: string[]
    email: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
    public token = ''
    public name = ''
    public avatar = ''
    public introduction = ''
    public roles: string[] = []
    public email = ''

    @Action
    public ResetToken() {
        this.SET_TOKEN('')
    }

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }

    @Mutation
    private SET_EMAIL(email: string) {
        this.email = email
    }
}

export const UserModule = getModule(User)
