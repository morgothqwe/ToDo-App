class View {
  // DOM elements cached for performance
  _submitTask = document.querySelector(".todo-submit-btn");
  _inputTask = document.querySelector(".todo-input");
  _taskListWrapper = document.querySelector(".todo-list-wrapper");

  addHandlerAddTask(handler) {
    this._submitTask.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskValue = this._inputTask.value;
      if (!taskValue || taskValue.length < 3) return;

      handler(taskValue);

      this._inputTask.value = "";
    });
  }

  // addHandlerDeleteTask(handler) {
  //   this._taskListWrapper.addEventListener("click", (e) => {
  //     const deleteBtn = e.target.closest(".todo-delete-btn");
  //     if (!deleteBtn) return;

  //     const parentEl = deleteBtn.closest(".todo-item");
  //     if (!parentEl) return;

  //     const taskId = parentEl.dataset.id;
  //     if (taskId) handler(taskId);
  //   });
  // }

  // addHandlerCompleted(handler) {
  //   this._taskListWrapper.addEventListener("click", (e) => {
  //     const checkbox = e.target.closest(".todo-checkbox");
  //     if (!checkbox) return;

  //     const parentEl = checkbox.closest(".todo-item");
  //     if (!parentEl) return;

  //     const taskId = parentEl.dataset.id;
  //     if (taskId) handler(taskId);
  //   });
  // }

  // Combined handler for delete and complete actions
  addHandlerTaskAction(deleteHandler, completeHandler) {
    this._taskListWrapper.addEventListener("click", (e) => {
      const target = e.target.closest(".todo-delete-btn,.todo-checkbox");
      if (!target) return;

      const parentEl = target.closest(".todo-item");
      if (!parentEl) return;

      const taskId = parentEl.dataset.id;
      if (!taskId) return;

      if (target.matches(".todo-delete-btn, .todo-delete-btn *")) {
        deleteHandler(taskId);
      } else if (target.matches(".todo-checkbox")) {
        completeHandler(taskId);
      }
    });
  }

  renderTask(task) {
    if (Array.isArray(task)) return;

    const markup = `
      <div class="todo-item" data-id="${task.id}">
        <input type="checkbox" class="todo-checkbox" ${
          task.completed ? "checked" : ""
        } />
        <label class="todo-label ${task.completed ? "line-through" : "none"}">${
      task.title
    }</label>
        <span class="todo-delete-btn">
          <i class="ph ph-x"></i>
        </span>
      </div>
    `;
    if (this._taskListWrapper)
      this._taskListWrapper.insertAdjacentHTML("afterbegin", markup);
  }

  renderDeleteTask(taskId) {
    const task = document.querySelector(`.todo-item[data-id="${taskId}"]`);
    if (!task) return;
    task.remove();
  }

  renderCompleted(taskId) {
    const task = document.querySelector(`.todo-item[data-id="${taskId}"]`);
    if (!task) return;
    task.querySelector(".todo-checkbox").checked
      ? (task.querySelector(".todo-label").style.textDecoration =
          "line-through")
      : (task.querySelector(".todo-label").style.textDecoration = "none");
  }
}

export default new View();
