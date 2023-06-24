import { TaskService } from "../../services/taskService";
import { useTasks } from "../../store/taskStore";


class TaskDataManager {
  constructor() {
    this.state = useTasks.getState();
    this.isLoading = false;
    this.nextPages = Object.fromEntries(Object.keys(this.state.tasks).map(key => [key, 1]));  // {ppc: 1, web: 1, osint: 1, ...}
  }

  async getById(id) {
    return await TaskService.getTask(id);
  }

  getAll() {
    const cat = this.state.category;
    const nextPage = this.nextPages[cat];
    if (nextPage != null && !this.isLoading) {
      this.isLoading = true;
      return this.__getAll(cat, nextPage);
    }
  }

  async __getAll(cat, nextPage) {
    return await TaskService.getTasks(cat, nextPage)
      .then(response => {
        this.nextPages[cat] = response.nextPage;
        this.state.setTasks(cat, response.tasks);
      })
      .finally(() => this.isLoading = false)
  }

  async delete(cat, id) {
    return await TaskService.delTask(id)
      .then(() => this.state.delTask(cat, id))
  }

  async edit(newTask) {
    return await TaskService.editTask(newTask)
      .then(() => this.state.editTask(newTask))
  }

  async add(newTask) {
    return await TaskService.addTask(newTask)
      .then((response) => this.state.addTask({ id: response.id, ...newTask }))
  }
}


const taskDataManager = new TaskDataManager();
export default taskDataManager