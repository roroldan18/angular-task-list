import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TASK } from 'src/app/mock-task';
import { ITask } from 'src/app/Task';
import { routeIconType } from 'src/app/TypeTask';
import { convertMsToHours } from 'src/utils/convertMsToTime';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;
  overdue: boolean = false;
  nextToOverdue:boolean = false;
  taskIcon?:IconDefinition = undefined;

  @Input() task: ITask = TASK[0];
  @Output() onDeleteTask:EventEmitter<ITask> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<ITask> = new EventEmitter();

  constructor() {
  }
  
  ngOnInit(): void {
    // Check if task is overdue
    this.overdue = this.checkOverdueTask(this.task)<0;
    // Check if task will overdue in the next 72 hours and if not overdue yet.
    this.nextToOverdue = !this.overdue && this.checkOverdueTask(this.task)<72;

    if(this.task.type){
      this.taskIcon = routeIconType.filter(type => type.title === this.task.type)[0]?.icon;
    }

  }

  onDelete(task:ITask){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:ITask){
    this.onToggleReminder.emit(task);
  }

  checkOverdueTask(task:ITask){
    const now = new Date();
    const taskDate = new Date(task.day);
    
    const getDistance = taskDate.getTime() - now.getTime();

    return convertMsToHours(getDistance);
  }

}
