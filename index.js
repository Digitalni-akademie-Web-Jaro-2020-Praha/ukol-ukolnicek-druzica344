'use strict';

const tasks = [
  'Když vstaneš, prosím choď se umýt',
  'Pak si dej snídani',
  'V 10h ti začína Online výuka, připrav si předtím věci na hodinu',
  'Oběd budeme mít spolu, prosím počkej na mně'
];

const updateTasks = () => {
  const listElm = document.querySelector(".todo__tasks");
  listElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    listElm.innerHTML += `<div class="task">${tasks[i]}</div>`;
  }
};
updateTasks()
const addTask = () => {
  const newTaskElm = document.querySelector(".new-task");
  tasks.push(newTaskElm.value);
  updateTasks();
  newTaskElm.value = '';
}
const btnElm = document.querySelector("button");
btnElm.addEventListener("click", addTask);



//console.log(newTaskElm.value);






