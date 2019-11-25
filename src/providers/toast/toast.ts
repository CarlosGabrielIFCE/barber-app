import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(private toast: ToastController) {
  }

  showToast(message) {
    this.toast.create({message: message, duration: 3000}).present();
  }


}
