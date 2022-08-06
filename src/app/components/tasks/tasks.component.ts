import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task)=>{
      this.tasks = task;
    })
  };

  deleteTask(task:ITask){
   this.taskService.deleteTask(task)
   .subscribe( () => {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
   }) 
  }

  toggleReminder(task:ITask){
    task.reminder = !task.reminder;
    this.taskService.onToggleReminder(task).subscribe();
  }

}
