import api from "../../http/api"
import { PATHS } from "../../utils/urls"

export class ADMUsers {
  static async createUser(userInfo){
    await api.post(`${PATHS.register}`, {
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
    await api.get(`${PATHS.users}`).then((res) => {
      users = res.data
      console.log(res)
    }).catch(err => console.error(err))
    return users
  }

  static async verifyUser(userInfo) {
    await api.post(`${PATHS.activation}/${userInfo.id}`,{
      email: userInfo.email,
      solved: true,
      comment: userInfo.comment
    }).then(res => console.log(res)).catch(err => console.error(err))
  }

  static async updateUser(userInfo) {
    await api.put(`${PATHS.user}`, {
      nickname: userInfo.nickname,
      password: userInfo.password,
      delCategories: userInfo.delCategories,
      addCategories: userInfo.addCategories
    }).then(res=>console.log(res.data)).catch(err => console.error(err))
  
  }

  static async delUser(userId) {
    await api.delete(`${PATHS.users}/${userId}`).then(res => console.log(res.data)).catch(err=>console.error(err))
    
  }
}