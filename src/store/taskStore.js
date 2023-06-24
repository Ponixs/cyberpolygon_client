import { create } from "zustand";

export const useTasks = create((set, get) => ({
  tasks: {},
  category: null,
  setTasks: (cat, tasks) => {
    set(state => ({
      ...state,
      tasks: {
        ...state.tasks,
        [cat]: [
          ...state.tasks[cat],
          ...tasks
        ]
      }
    }))
  },
  setCategory: (cat) => { set({ category: cat }) },
  delTask: (cat, id) => {
    set(state => ({
      ...state,
      tasks: {
        ...state.tasks,
        [cat]: state.tasks[cat]?.data.filter((elem) => elem.id != id)
      }
    }))
  },
  editTask: (newTask) => {
    set(state => ({
      ...state,
      tasks: {
        ...state.tasks,
        [newTask.category]: state.tasks[newTask.category]?.data.map((elem) => elem.id == newTask.id ? newTask : elem)
      }
    }))
  },
  addTask: (newTask) => {
    set(state => ({
      ...state,
      tasks: {
        ...state.tasks,
        [newTask.category]: [...state.tasks[newTask.category], newTask]
      }
    }))
  },
  // you must call `clearState` when user change params for sorting
  clearState: () => {
    set({
      tasks: {},
      category: null
    })
  }
}))
