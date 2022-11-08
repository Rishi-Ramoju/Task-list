let task_list;
      const savedList = JSON.parse(localStorage.getItem("task-list"));
      if (Array.isArray(savedList)) {
        task_list = savedList;
      } else {
        task_list = [
          {
            task: "task1",
            dueDate: "2000-01-01",
            id: "id1",
          },
          {
            task: "task2",
            dueDate: "2000-01-02",
            id: "id2",
          },
          {
            task: "task3",
            dueDate: "2000-01-03",
            id: "id3",
          },
        ];
      }
      task_list.forEach(createTask);
      function saveTasks() {
        localStorage.setItem("task-list", JSON.stringify(task_list));
      }
      function addTask() {
        let textbox = document.getElementById("task-input");
        let deadline = document.getElementById("due-date");
        let idByDate = new Date().getTime() + "";
        task_list.push({
          task: textbox.value,
          dueDate: deadline.value,
          id: idByDate,
        });
        createTask({
          task: textbox.value,
          dueDate: deadline.value,
          id: idByDate,
        });
        saveTasks();
      }
      function createTask(task) {
        let element = document.createElement("div");
        let delElement = document.createElement("button");
        element.innerText = task.task + " -----by----- " + task.dueDate;
        delElement.innerText = "Delete";
        delElement.id = task.id;
        delElement.onclick = deleteTask;
        let container = document.getElementById("task-container");
        container.appendChild(element).appendChild(delElement);
      }
      function deleteTask(event) {
        task_list = task_list.filter(function (task) {
          if (task.id === event.target.id) return false;
          else return true;
        });
        let container = document.getElementById("task-container");
        container.innerHTML = "";
        task_list.forEach(createTask);
        saveTasks();
      }
