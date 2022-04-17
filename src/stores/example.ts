import { defineStore } from 'pinia';

interface UserProps {
  name: string;
}

interface UserState {
  userInfo: NonNullable<UserProps>;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: {
      name: ''
    }
  }),
  getters: {
    getUser(): NonNullable<UserProps> {
      return this.userInfo || null;
    }
  },
  actions: {
    setUserInfo(info: NonNullable<UserProps>) {
      this.userInfo = info ?? null;
    }

    // 接口请求
    // async fetchUserInfo(params: ReqParams){
    //     const {data} = await api.getUserInfo(params)
    //     this.setUserInfo(data)
    // }
  }
});
