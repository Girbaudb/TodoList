import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { TodoService } from '../app/services/todo.service';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ImageProviderService {

  

  constructor(private ts : TodoService, private loadingCtrl: LoadingController) {  }

  async uploadImage(image: string) {

    let loading = await this.loadingCtrl.create({
      message: 'Even geduld...'
    })

    loading.present().then(_=>{
      return new Promise<any>((resolve, reject) => {      
        let storageRef = firebase.storage().ref();
        let imageName = this.generateUUID();
        let imageRef = storageRef.child(`${imageName}.jpg`);
        imageRef.putString(image, 'data_url')
        .then(snapshot => {
          this.ts.setImage(imageName);

          resolve(snapshot.downloadURL)
          return imageName;}, err => {
            reject(err);
          })
        })
    }) .then(_=>{
      alert("Uploaded!")
      loading.dismiss();

    })

  }



  private generateUUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}
