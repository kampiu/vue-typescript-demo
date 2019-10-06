import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators';

export interface IUserState {
    token: string
    name: string
    avatar: string
    email: string
}

@Module({ namespaced: true, name: 'User' })
export default class User extends VuexModule implements IUserState {
    public token: string = '';
    public name: string = '';
    public avatar: string = '';
    public email: string = '';

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

