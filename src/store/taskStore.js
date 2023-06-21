import { create } from "zustand";
import { TaskService } from "../services/taskService";


export const useTasks = create((set, get) => ({
    isLoading: false,
    tasks: {},
    category: 'all',
    loadTasks: async () => {
        const cat = get().category;
        const nextPage = get().tasks[cat]?.nextPage;
        if (nextPage !== null && !get().isLoading) {
            set({ isLoading: true });
            TaskService.getTasks(cat, nextPage || 1)
                .then(response => {
                    set({ tasks: { ...get().tasks, [cat]: { data: [...(get().tasks[cat]?.data ?? []), ...response.tasks], nextPage: response.nextPage } } })
                })
                .catch(error => console.log("error when fetch tasks", error))
                .finally(() => { set({ isLoading: false }) })
        }
    },
    setCategory: (cat) => { set({ category: cat }) }
}))
