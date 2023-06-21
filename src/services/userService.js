import api from "../http/api"
import { SERVER_PATHS } from "../utils/serverUrls"

export class UserService {
  static async createUser(userInfo){
    await api.post(`${SERVER_PATHS.register}`, {
      email: userInfo.email,
      nickname: userInfo.nickname,
      name: userInfo.name,
      surname: userInfo.surname,
      categories: userInfo.categories,
      studentCard: userInfo.studentCard
    }).then(res => console.log(res))

  }

  static async getUsers(){
    let users
    await api.get(`${SERVER_PATHS.users}`).then((res) => {
      users = res.data
      console.log(res)
    }).catch(err => console.error(err))
    return users
  }

  static async verifyUser(userInfo) {
    await api.post(`${SERVER_PATHS.activation}/${userInfo.id}`,{
      email: userInfo.email,
      solved: true,
      comment: userInfo.comment
    }).then(res => console.log(res)).catch(err => console.error(err))
  }

  static async updateUser(userInfo) {
    await api.put(`${SERVER_PATHS.user}`, {
      nickname: userInfo.nickname,
      password: userInfo.password,
      delCategories: userInfo.delCategories,
      addCategories: userInfo.addCategories
    }).then(res=>console.log(res.data)).catch(err => console.error(err))
  
  }

  static async delUser(userId) {
    await api.delete(`${SERVER_PATHS.users}/${userId}`).then(res => console.log(res.data)).catch(err=>console.error(err))
    
  }
}