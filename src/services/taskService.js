import api from "../http/api"
import { SERVER_PATHS } from "../utils/serverUrls"

export class TaskService {

  static async getTasks(category, page) {
    return await api.get(SERVER_PATHS.getTasks(category, page))
      .then(response => response.data)
      .catch(err => { throw { errMessage: err.message, errStatus: err.response.status } })
  }
  /** =>
  { "id": ...,
  "category": "...",
  "difficulty": "...",
  "points": ...,
  "title": "...",
  "description": "..."
   */
  static async getTask(id) {
    return await api.get(SERVER_PATHS.getTask(id))
      .then(response => response.data)
      .catch(err => { throw { errMessage: err.message, errStatus: err.response.status } })
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
    return await api.post(SERVER_PATHS.postTask, taskInfo)
      .then(response => response.data)
      .catch(err => { throw { errMessage: err.message, errStatus: err.response.status } })
  }

  static async changeTask(taskInfo) {
    return await api.put(SERVER_PATHS.putTask, taskInfo)
      .then(response => response.data)
      .catch(err => { throw { errMessage: err.message, errStatus: err.response.status } })
  }

  static async delTask(taskId) {
    return await api.delete(SERVER_PATHS.deleteTask(taskId))
      .then(response => response.data)
      .catch(err => { throw { errMessage: err.message, errStatus: err.response.status } })
  }
  // -----------------------------------------
  static async checkFlag(taskId) {
    return await api.post(SERVER_PATHS.checkTaskFlag(taskId))
      .then(response => response.data)
      .catch(err => { throw { errMessage: err.message, errStatus: err.response.status } })
  }

  static async downloadTaskFile(taskFileName) {
    /* тут не все так просто. скачивание файлов чуть по другому происходит. надо реализовать.
    return await api.get(SERVER_PATHS.downloadTask + taskFileName)
      .then(response => response.data)
      .catch(err => { throw { errMessage: err.message, errStatus: err.response.status } })
      */
    return SERVER_PATHS.downloadTask(taskFileName);
  }

  static async getAnswer(taskId) {
    return await api.get(SERVER_PATHS.getTaskAnswer(taskId))
      .then(response => response.data)
      .catch(err => { throw { errMessage: err.message, errStatus: err.response.status } })
  }
}
