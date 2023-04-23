import api from "../../http/api"

export class ADMTasks {
  static async addTask(taskInfo) {
      api.post('/tasks',taskInfo ).then(response => {
        if(response.status === 200)
          console.log(response)
      }).catch(err => {
        console.log(err)
      })
  }

  static async changeTask(taskInfo) {
    console.log()
  }

  static async delTask(taskId) {
    console.log()
  }
}