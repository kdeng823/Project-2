document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#new-task").onsubmit = function (){
    var tasks_array = [];
      const li = document.createElement('li');
      let task_text = document.querySelector('#task-title').value;
      let task_priority = document.querySelector('#task-priority').value;
      let task_status = document.querySelector('input[name=task-status]:checked').value;
      let new_task_html = `
    <div class = "task-title"> <span> ${task_text} </span>  </div> <div class = "task-priority"> <span> - Priority: ${task_priority} </span> </div> <div class = "task-status"> <span> - Status: ${task_status} </span>  </div>
     <button class="btn btn-outline-success"> Completed </button>
      <button class="btn btn-outline-danger"> Remove </button> 
        `;

      li.innerHTML = new_task_html
      tasks_array.push(task_text);

      document.querySelector("#tasks_list").append(li);
      document.querySelector("#task-title").value = '';
    
      return false;
  }

  document.addEventListener('click', function(event){
    element = event.target;
    if (element.className === 'btn btn-outline-danger'){
        element.parentElement.remove();
    }
    if (element.className === 'btn btn-outline-success'){
        element.parentElement.querySelector('.task-title').style.textDecoration = "line-through";
        element.parentElement.querySelector('.task-priority').style.textDecoration = "line-through";
        element.parentElement.querySelector('.task-status').style.textDecoration = "line-through";
        element.task_status = "btn btn-outline-success";
    }
  })
  });
