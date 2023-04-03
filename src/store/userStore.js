import { create } from 'zustand';

// dev mode without server
export const useUser = create((set, get) => ({
    id: true,
    name: 'null',
    surname: 'null',
    categories: ['stegano'],
    role: 'admin',
    setUser: () => {
        set({
            id: true,
            name: 'user.name',
            surname: 'user.surname',
            categories: ['stegano'],
            role: 'admin'
        })
    },
    clearUser: () => {
        set({
            id: null,
            name: null,
            surname: null,
            categories: [],
            role: 'guest',
        })
    }
}))


/**     with server

export const useUser = create((set, get) => ({
    id: null,
    name: null,
    surname: null,
    categories: [],
    role: 'guest',
    setUser: (user) => {
        set({
            id: user.id ?? null,
            name: user.name ?? null,
            surname: user.surname ?? null,
            categories: Object.entries(user.categories).reduce((i, j) => { if (j[1]) return [...i, j[0]]; return i }, []) ?? [],
            role: user.role ?? 'guest'
        })
    },
    clearUser: () => {
        set({
            id: null,
            name: null,
            surname: null,
            categories: [],
            role: 'guest',
        })
    }
}))
*/