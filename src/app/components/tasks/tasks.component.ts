import { Component, OnInit } from '@angular/core';
import { TASK } from 'src/app/mock-task';
import { ITask } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = TASK;

  constructor() {}

  ngOnInit(): void {
  }

}
