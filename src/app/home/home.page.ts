import { Component, OnInit } from '@angular/core';
import { Todo, TodoService} from '../services/todo.service';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

import * as moment from 'moment';
import { Router } from '@angular/router';

moment.locale('nl-be');
moment().format('LLL');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {
  
tijdStip: any;

  todos: Todo[];
  constructor(private router: Router ,private todoService: TodoService, public modalController: ModalController) {
    this.tijdStip = moment().format('LLL');
      }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  
  todoDet(){
    this.router.navigateByUrl('/todo-details');
    this.todoService.removeImage();
  }
 
  

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}
