import { create } from 'zustand';
import api from "../http/api"


export const useUser = create((set, get) => ({
    id: null,
    name: null,
    surname: null,
    categories: [],
    role: 'user',
    setUser: (user) => {
        set({
            id: user.id,
            name: user.name,
            surname: user.surname,
            categories: Object.entries(user.categories).reduce((i, j) => { if (j[1]) return [...i, j[0]]; return i }, []),
            role: user.role
        })
    },
    clearUser: () => {
        set({
            id: null,
            name: null,
            surname: null,
            categories: [],
            role: 'user',
        })
    }
}))

export const useMaterials = create((set, get) => ({
    isLoading: false,
    materials: {},
    category: 'all',
    loadMaterials: async () => {
        try {
            const cat = get().category;
            if (get().materials[cat]?.nextPage !== null && !get().isLoading) {
                set({isLoading: true});
                await api.get(`/materials?category=${cat}&page=${get().materials[cat]?.nextPage || 1}`)
                .then(response => {
                    set({ materials: { ...get().materials, [cat]: { data: [...(get().materials[cat]?.data ?? []), ...response.data.materials], nextPage: response.data.nextPage } } })
                })
                .finally(() => {set({isLoading: false})})
            }
        } catch (error) {
            console.log("error when fetch materials", error)
        }
    },
    setCategory: (cat) => { set({ category: cat }) }
}))

export const useTasks = create((set, get) => ({
    isLoading: false,
    tasks: {},
    category: 'all',
    loadTasks: async () => {
        try {
            const cat = get().category;
            if (get().tasks[cat]?.nextPage !== null && !get().isLoading) {
                set({isLoading: true});
                await api.get(`/tasks?category=${cat}&page=${get().tasks[cat]?.nextPage || 1}`)
                .then(response => {
                    set({ tasks: { ...get().tasks, [cat]: { data: [...(get().tasks[cat]?.data ?? []), ...response.data.tasks], nextPage: response.data.nextPage } } })
                })
                .finally(() => {set({isLoading: false})})
            }
        } catch (error) {
            console.log("error when fetch tasks", error)
        }
    },
    setCategory: (cat) => { set({ category: cat }) }
}))
