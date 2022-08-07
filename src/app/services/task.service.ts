import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from 'src/app/Task';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

  deleteTask(task:ITask):Observable<ITask> {
    return this.http.delete<ITask>(`${this.apiUrl}/${task.id}`);
  }

  addTask(task:ITask):Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task, httpOptions);
  }

  onToggleReminder(task:ITask):Observable<ITask>{
    return this.http.put<ITask>(`${this.apiUrl}/${task.id}`, task, httpOptions);
  }

}
