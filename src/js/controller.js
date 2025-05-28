import view from "./view";
import * as model from "./model";

const controlAddTask = function (task) {
  const newTask = model.addTask(task);

  view.renderTask(newTask);

  model.setLocalStorage();
};

const controlDeleteTask = function (taskId) {
  model.deleteTask(taskId);

  view.renderDeleteTask(taskId);

  model.setLocalStorage();
};

const controlCompleted = function (taskId) {
  model.completedTask(taskId);

  view.renderCompleted(taskId);

  model.setLocalStorage();
};

const init = function () {
  // localStorage.clear();
  model.getLocalStorage();
  const tasks = model.getTasks();
  if (Array.isArray(tasks)) tasks.forEach((task) => view.renderTask(task));
  view.addHandlerAddTask(controlAddTask);
  view.addHandlerTaskAction(controlDeleteTask, controlCompleted);
};

init();
