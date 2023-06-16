import api from "../../http/api";


export class ADMMaterials {
  static async addMaterial(materialInfo) {
    return api.post('materials', materialInfo);
  }

  static async changeMaterial(materialInfo) {
    return api.put('materials', materialInfo);
  }

  static async delMaterial(materialId) {
    return api.delete(`materials/${materialId}`);
  }
}