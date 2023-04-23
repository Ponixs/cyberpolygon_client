import api from "../../http/api";
import { ADMMaterials } from "./ADMMaterials";
import { ADMTasks } from "./ADMTasks";
import { ADMUsers } from "./ADMUsers";


export class ADMService {
    static async addMaterial(materialInfo) {
        ADMMaterials.addMaterial(materialInfo)
    }

    static async changeMaterial(materialInfo) {
        ADMMaterials.changeMaterial(materialInfo)
    }

    static async delMaterial(materialId) {
        ADMMaterials.delMaterial(materialId)
    }

    static async addTask(taskInfo) {
        ADMTasks.addTask(taskInfo)
    }

    static async changeTask(taskInfo) {
        ADMTasks.changeTask(taskInfo)
    }

    static async delTask(taskId) {
        ADMTasks.delTask(taskId)
    }

    static async verifyUser(userId) {
        ADMUsers.updateUser(userId)
    }

    static async updateUser(userInfo) {
        ADMUsers.updateUser(userInfo)
    }

    static async delUser(userId) {
        ADMUsers.delUser(userId)
    }
}