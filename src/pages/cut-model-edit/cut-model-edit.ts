import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CutModelProvider } from '../../providers/cut-model/cut-model';
import { ToastProvider } from '../../providers/toast/toast';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-cut-model-edit',
  templateUrl: 'cut-model-edit.html',
})
export class CutModelEditPage {
  title: string;
  cutModel: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private provider: CutModelProvider,
              private toast: ToastProvider,
              private camera: Camera) {

                this.cutModel = this.navParams.data.cutModel || { };

                this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando Modelo de Corte' : 'Novo Modelo de Corte';
  }

  uploadPhoto() {
    let base64Image;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     base64Image = 'data:image/jpeg;base64,' + imageData;
     this.cutModel.img = base64Image;
    }, (err) => {
     // Handle error
    });
  }

  onSubmit() {
      this.provider.save(this.cutModel)
        .then(() => {
          this.toast.showToast("cutModele salvo com sucesso");
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.showToast("Ocorreu um erro ao salvar o cutModele.")
          console.error(e);
        })
  }

}
