import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { TASK } from 'src/app/mock-task';
import { ITask } from 'src/app/Task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;

  @Input() task: ITask = TASK[0];
  @Output() onDeleteTask:EventEmitter<ITask> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<ITask> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:ITask){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:ITask){
    this.onToggleReminder.emit(task);
  }

}
