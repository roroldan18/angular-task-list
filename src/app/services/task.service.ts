import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TASK } from 'src/app/mock-task';
import { ITask } from 'src/app/Task';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:5001/tasks';


  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }
}
