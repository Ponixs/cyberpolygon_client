import $api from "../../http/api";
import { useTasks } from "../../store/taskStore";


class TaskDataManager {
  constructor() {
    this.state = useTasks.getState();
  }

  
}


const taskDataManager = new TaskDataManager();
export default taskDataManager