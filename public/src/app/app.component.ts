import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Restful Task API';
  tasks = [];
  task: any;
  newTask: any;
  selectedTask: any;
  //updateTask: any;

  constructor(private _httpService: HttpService){}
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    //this.getTasksFromService();
    this.newTask = { title: "", description: "" }
  }
  getTasksFromService(){
    // let observable = this._httpService.getTasks();
    // observable.subscribe(data => {
    //   console.log("Got our tasks!", data)
    //   this.tasks = data['data'];
    // });
  }
  onButtonClick(): void { 
    //console.log(`Click event is working`);
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data['data'];
    });
  }
  onButtonClickEvent(id) { 
    console.log(id)
    let observable = this._httpService.getOneTask(id);
    observable.subscribe(data => {
      console.log("Got one task!", data)
      this.selectedTask = data;
  });
  }
  onSubmit() {
    //console.log(this.newTask)
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back!", data);
      this.newTask = {title: "", description: ""}
      
    });
  }
  onButtonClickParams(id) {
    let observable = this._httpService.getOneTask(id);
    observable.subscribe(data => {
      console.log("got my data!", data);
      //this.updateTask = data["data"];
      this.task = data;
    });
  }
  onEdit(id){
    console.log(id)
    console.log(this.task)
    let observable = this._httpService.editTask(id, this.task.data);
    observable.subscribe(data => {
      console.log('Updated data', data);
      
      
    });
  }
  delete(id) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("Got data to delete!", data);
    })
  }
}

// onButtonClickParam(num: Number): void { 
//   console.log(`Click event is working with num param: ${num}`);
//   let observable = this._httpService.postToServer({data: num});
//     observable.subscribe(data => console.log("Got our data!", data));
// }
//export class AppComponent {
  //title = 'Restful Task';

  //constructor(private _httpService: HttpService){}
//}
