import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/Task';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];
  noTask:boolean = false;
  

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((param: Params) => {
      this.getTaskComp(parseInt(param["id"]));
    })
  };

  getTaskComp(id?:number){
    if(!id){
      this.taskService.getTasks().subscribe((task)=>{
        this.tasks = task;
      })
    }else{
      this.taskService.getTasks().subscribe((task)=>{
        this.tasks = task.filter(t => t.id === id);

        if (this.tasks.length === 0){
          this.noTask = true;
        }

      }); 
    }
  }

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

  addTask(task:ITask){
    this.taskService.addTask(task).subscribe(() => this.getTaskComp());
  }

}
