import { create } from "zustand";
import api from "../http/api";

// dev mode without server
export const useTasks = create((set, get) => ({
    isLoading: false,
    tasks: { stegano: { data: [{ id: 0, title: "TITLE", description: "description", points: 123, }, { id: 1, title: "TITLE", description: "description", points: 123, }, { id: 2, title: "TITLE", description: "description", points: 123, }, { id: 3, title: "TITLE", description: "description", points: 123, }, { id: 4, title: "TITLE", description: "description", points: 123, }, { id: 5, title: "TITLE", description: "description", points: 123, }], nextPage: null } },
    category: 'stegano',
    loadTasks: async () => {
        const cat = get().category;
        if (get().tasks[cat]?.nextPage !== null && !get().isLoading) {
            set({ isLoading: true });
            api.get(`/tasks?category=${cat}&page=${get().tasks[cat]?.nextPage || 1}`)
                .then(response => {
                    set({ tasks: { ...get().tasks, [cat]: { data: [...(get().tasks[cat]?.data ?? []), ...response.data.tasks], nextPage: response.data.nextPage } } })
                })
                .catch(error => console.log("error when fetch tasks", error))
                .finally(() => { set({ isLoading: false }) })
        }
    },
    setCategory: (cat) => { set({ category: cat }) }
}))


/**     with server
export const useTasks = create((set, get) => ({
    isLoading: false,
    tasks: {},
    category: 'all',
    loadTasks: async () => {
        const cat = get().category;
        if (get().tasks[cat]?.nextPage !== null && !get().isLoading) {
            set({ isLoading: true });
            api.get(`/tasks?category=${cat}&page=${get().tasks[cat]?.nextPage || 1}`)
                .then(response => {
                    set({ tasks: { ...get().tasks, [cat]: { data: [...(get().tasks[cat]?.data ?? []), ...response.data.tasks], nextPage: response.data.nextPage } } })
                })
                .catch(error => console.log("error when fetch tasks", error))
                .finally(() => { set({ isLoading: false }) })
        }
    },
    setCategory: (cat) => { set({ category: cat }) }
}))
 */