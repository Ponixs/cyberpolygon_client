import { create } from "zustand";


export const useTestState = create((set, get) => ({
  state_1: ["arr", "with", "strings"],
  state_2: [1, 2, 3, 4],
  setState_1: (elem) => { set({ state_1: [...get().state_1, elem] }) },
  setState_2: () => { set({ state_2: get().state_2.map(elem => elem + 1) }) },
}))
