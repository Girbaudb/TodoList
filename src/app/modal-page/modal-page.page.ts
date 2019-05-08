import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

 pri: number;

  constructor(private storage: Storage, private modalController: ModalController) { }

  ngOnInit() {
  }

  setPri(pri){
    this.storage.set('prioriteit', pri);
    console.log('done');
    this.modalController.dismiss()

  }

  back(){
    this.modalController.dismiss()

  }
  getPri(){
    this.storage.get('prioriteit').then((val) => {
      console.log('Uw prioriteit is: ', val);
    });
  }


}
