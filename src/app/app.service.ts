import { Injectable } from '@angular/core';
import { config } from './app.config';
import { Task } from './app.model';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  tasks: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;
  myTask: string;
  editMode = false;
  taskToEdit: any = {};

  constructor(private db: AngularFirestore, private taskService: AppService) {
    this.tasks = db.collection<Task> (config.collection_endpoint);
   }

   addTask(task) {
     this.tasks.add(task);
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

  updateTask(id, update) {
    // Get the task document
    this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);

    this.taskDoc.update(update);
  } // updateTask

  deleteTask(id) {
    // Get the task document
    this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);

    // Delete the document
    this.taskDoc.delete();
  } // deleteTask
}
