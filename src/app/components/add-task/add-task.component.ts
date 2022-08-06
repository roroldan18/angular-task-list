import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter;


  text:string = "";
  day:string = "";
  reminder:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Please, add text")
    }

    const {text, day, reminder} = this;
    const newTask = {text, day, reminder};

    this.onAddTask.emit(newTask);

  }

}
