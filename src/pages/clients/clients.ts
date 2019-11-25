import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';
import { ToastProvider } from '../../providers/toast/toast';
import { Client } from '../../models/client';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {
  clients: Observable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private provider: ClientProvider,
              private toast: ToastProvider) {

                this.clients = this.provider.getAll();
                this.provider.getAll()
                  .subscribe((data) => {
                    console.log(data);
                  })
  }

  newClient() {
    this.navCtrl.push('ClientEditPage');
  }

  editClient(client: any) {
    this.navCtrl.push('ClientEditPage', {
      client: client
    })
  }

  removeClient(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.showToast("Cliente removido com sucesso");
        })
        .catch(() => {
          this.toast.showToast("Ocorreu um erro ao remover o cliente");
        })
    }
  }
} 
