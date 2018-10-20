import { map } from 'rxjs/operators';
import { config } from './../app.config';
import { AppService } from './../app.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../app.model';


@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.css']
})
export class FirestoreComponent implements OnInit {

  tasks: Observable<any[]>;
  myTask: string;
  editMode = false;
  taskToEdit: any = {};
  task: Task;

  constructor(private db: AngularFirestore, private taskService: AppService) { }

  ngOnInit() {
    this.tasks = this.db.collection(config.collection_endpoint)
    .snapshotChanges()
    .pipe(
    map(actions => {
       return actions.map(a => {
         // Get document data
         const data = a.payload.doc.data() as Task;
         // Get document id
         const id = a.payload.doc.id;
         console.log(data);
         // Use spread operator to add the id to the document data
         return { id, data };
       });
    }));
  }

  saveTask() {
    if (this.myTask !== null) {
      // Get the input value
      const task = {
        description: this.myTask
      };

      if (!this.editMode) {
        console.log(task);
        this.taskService.addTask(task);
      } else {
        // Get the task id
        const taskId = this.taskToEdit.id;

        // update the task
        this.taskService.updateTask(taskId, task);
      }

      // set edit mode to false and clear form
      this.editMode = false;
      this.myTask = '';
    }
  } // saveTask

  edit(task) {
    console.log(task);

    // Set taskToEdit and editMode
    this.taskToEdit = task;
    this.editMode = true;

    // Set form value
    this.myTask = task.description;
  } // edit

  deleteTask(task) {
    // Get the task id
    const taskId = task.id;

    // delete the task
    this.taskService.deleteTask(taskId);
  } // deleteTask
}
