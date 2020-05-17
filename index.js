'use strict';

const taskElm = document.querySelector(".todo__tasks");

const tasks = [
  'Když vstaneš, choď se umýt',
  'Pak si dej snídani',
  'V 10h ti začína Online výuka, připrav si předtím věci na hodinu',
  'Oběd budeme mít spolu, prosím počkej na mně'
];

const updateTasks = () => {
  taskElm.innerHTML = "";
  const newTaskElm = document.querySelector(".new-task");
  tasks.push(newTaskElm.value);

  for (let i = 0; i < tasks.length; i += 1) {
    taskElm.innerHTML += `<div class="task">${tasks[i]}</div>`;
  }
};
updateTasks();

const btnElm = document.querySelector('button');
btnElm.addEventListener('click', updateTasks);



//console.log(newTaskElm.value);






