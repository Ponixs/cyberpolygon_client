import { create } from "zustand";
import api from "../http/api";


// dev mode without server
export const useMaterials = create((set, get) => ({
    isLoading: false,
    category: 'all',
    materials: {
        stegano: {
            data: [{ id: 0, title: "TITLE", description: "description" }, { id: 1, title: "TITLE", description: "description" }, { id: 2, title: "TITLE", description: "description" }, { id: 3, title: "TITLE", description: "description" }, { id: 4, title: "TITLE", description: "description" }, { id: 5, title: "TITLE", description: "description" }],
            nextPage: null
        },
        ppc: {
            data: [{ id: 0, title: "TITLE", description: "description" }, { id: 1, title: "TITLE", description: "description" }, { id: 2, title: "TITLE", description: "description" }, { id: 3, title: "TITLE", description: "description" }, { id: 4, title: "TITLE", description: "description" }, { id: 5, title: "TITLE", description: "description" }],
            nextPage: null
        },
    },

    loadMaterials: async () => {
        const cat = get().category;
        if (get().materials[cat]?.nextPage !== null && !get().isLoading) {
            set({ isLoading: true });
            api.get(`/materials?category=${cat}&page=${get().materials[cat]?.nextPage || 1}`)
                .then(response => {
                    set({ materials: { ...get().materials, [cat]: { data: [...(get().materials[cat]?.data ?? []), ...response.data.materials], nextPage: response.data.nextPage } } })
                })
                .catch(error => console.log("error when fetch materials", error))
                .finally(() => { set({ isLoading: false }) })
        }
    },
    setCategory: (cat) => { set({ category: cat }) }
}))

/**     with server

export const useMaterials = create((set, get) => ({
    isLoading: false,
    materials: {},
    category: 'all',
        loadMaterials: async () => {
        const cat = get().category;
        if (get().materials[cat]?.nextPage !== null && !get().isLoading) {
            set({ isLoading: true });
            api.get(`/materials?category=${cat}&page=${get().materials[cat]?.nextPage || 1}`)
                .then(response => {
                    set({ materials: { ...get().materials, [cat]: { data: [...(get().materials[cat]?.data ?? []), ...response.data.materials], nextPage: response.data.nextPage } } })
                })
                .catch(error => console.log("error when fetch materials", error))
                .finally(() => { set({ isLoading: false }) })
        }
    },
    setCategory: (cat) => { set({ category: cat }) }
}))
 */