import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImageProviderService } from '../../image-provider-service.service';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  
  todo: Todo = {
    task: '',
    createdAt: new Date().getTime(),
    Prioriteit: '',
    imageName:  '',
  };
  pripri: number;

  todoId = null;

  cameraOptions: CameraOptions = {
    quality: 100,
    targetWidth: 900,
    targetHeight: 600,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(private imageSrv: ImageProviderService,
    private camera: Camera,
    private route: ActivatedRoute, 
    private storage: Storage,
    private nav: NavController, 
    private todoService: TodoService, 
    private loadingController: LoadingController) {
     }

 

  getPicture() {
    this.camera.getPicture(this.cameraOptions)
      .then(data => {
        let base64Image = 'data:image/jpeg;base64,' + data;
  
        return this.imageSrv.uploadImage(base64Image)
        .then((name) =>{ 


          this.todo.imageName = name;

          console.log(name);
        
        })
        //this.router.navigateByUrl('/bedankt'); 
      })

  }
  
 
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
    this.getPri();
  }

  getPri(){
    this.storage.get('prioriteit').then((val) => {
      console.log('Uw prioriteit is: ', val);
      this.pripri = val;
    });

  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'ToDo Laden..'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
      console.log(this.todo.imageName);
    });
  }

  async saveTodo(){

    const loading = await this.loadingController.create({
      message: 'ToDo Opslaan..'
    });
    await loading.present();

    if (this.todoId){
      this.todo.imageName = this.todoService.getImage();
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.todo.imageName = this.todoService.getImage();
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }


}
