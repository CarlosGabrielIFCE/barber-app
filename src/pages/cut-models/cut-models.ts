import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { CutModelProvider } from '../../providers/cut-model/cut-model';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-cut-models',
  templateUrl: 'cut-models.html',
})
export class CutModelsPage {
  cutModels: Observable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private provider: CutModelProvider,
              private toast: ToastProvider,
              private actionSheet: ActionSheetController) {

                this.cutModels = this.provider.getAll();
                this.provider.getAll()
                  .subscribe((data) => {
                    console.log(data);
                  })
  }

  newCutModel() {
    this.navCtrl.push('CutModelEditPage');
  }

  editCutModel(cutModel: any) {
    const actionSheet = this.actionSheet.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => {
            this.removeCutModel(cutModel.key);
          }
        },{
          text: 'Editar',
          handler: () => {
            this.navCtrl.push('CutModelEditPage', {
              cutModel: cutModel
            })
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeCutModel(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.showToast("Modelo de Corte removido com sucesso");
        })
        .catch(() => {
          this.toast.showToast("Ocorreu um erro ao remover o modelo de corte");
        })
    }
  }
}
