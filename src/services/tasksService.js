import api from "../http/api"

export class TasksService {

  static async getTask(id) {
    return {id: 4656, category: 'ppc', difficulty: "hard", points: 100, title: "test task", description: "try to solve hard task and get 100 points", file: "path/to/task/file/id"}
    // return await api.get(`/tasks/${id}`)
    //   .then(response => response.data)
  }
  /** =>
  { "id": ...,
  "category": "...",
  "difficulty": "...",
  "points": ...,
  "title": "...",
  "description": "...",
  "file": "(название файла)"}
   */

  static async addTask(taskInfo) {
    api.post('/tasks', taskInfo).then(response => {
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
