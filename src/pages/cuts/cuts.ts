import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { CutProvider } from '../../providers/cut/cut';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-cuts',
  templateUrl: 'cuts.html',
})
export class CutsPage {
  cuts: Observable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private provider: CutProvider,
              private toast: ToastProvider) {

                this.cuts = this.provider.getAll();
                this.provider.getAll()
                  .subscribe((data) => {
                    console.log(data);
                  })
  }

  newCut() {
    this.navCtrl.push('CutEditPage');
  }

  editCut(cut: any) {
    this.navCtrl.push('CutEditPage', {
      cut: cut
    })
  }

  removeCut(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.showToast("Corte removido com sucesso");
        })
        .catch(() => {
          this.toast.showToast("Ocorreu um erro ao remover o Corte");
        })
    }
  }

}
