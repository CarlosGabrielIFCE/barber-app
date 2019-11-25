import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class ImageProvider {

  constructor(private camera: Camera) {

  }

  uploadPhoto(image: any) {
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
     image = base64Image;
    }, (err) => {
     // Handle error
    });
  }

}
