import { STORAGE_KEY } from "./config";
// Application state to store tasks
const state = {
  tasks: [], //Array to hold task objects
};

// Return the current tasks array
export const getTasks = function () {
  return state.tasks; // Always returns an array, even if empty
};

// Add a new task to the state
export const addTask = function (task) {
  const newTask = {
    id: Date.now(),
    title: task,
    completed: false, // Default to not completed
  };

  state.tasks.push(newTask);
  return newTask;
};

// Delete a task by its ID
export const deleteTask = function (taskId) {
  // Find the index of the task with the given ID
  const index = state.tasks.findIndex((task) => task.id === +taskId);
  if (index !== -1) state.tasks.splice(index, 1);
};

// Toggle the completed status of a task by its ID
export const completedTask = function (taskId) {
  // Find the index of the task with the given ID
  const index = state.tasks.findIndex((task) => task.id === +taskId);
  if (index !== -1)
    state.tasks[index].completed = !state.tasks[index].completed;
};

// Save tasks to local storage
export const setLocalStorage = function () {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
};

// Load tasks from local storage
export const getLocalStorage = function () {
  const storedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (Array.isArray(storedTasks)) state.tasks = storedTasks; // Update state if valid array
};
