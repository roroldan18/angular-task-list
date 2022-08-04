import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: ITask|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
