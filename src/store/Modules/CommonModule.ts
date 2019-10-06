import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

export interface ICommonState {
    router: string
}

@Module({ namespaced: true, name: 'Common' })
export default class Common extends VuexModule implements ICommonState {
    public router: string = '';

    @Mutation
    private INIT_COMMON_ROUTER(name: string) {
        this.router = name
    }
}

// export const UserModule = getModule(User);
