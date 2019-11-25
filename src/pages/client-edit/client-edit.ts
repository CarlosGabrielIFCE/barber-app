import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../models/client';
import { ClientProvider } from '../../providers/client/client';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-client-edit',
  templateUrl: 'client-edit.html',
})
export class ClientEditPage {
  title: string;
  form: FormGroup;
  client: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private provider: ClientProvider,
              private toast: ToastProvider) {

                this.client = this.navParams.data.client || { };
                this.createForm();

                this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando cliente' : 'Novo cliente';
  }
  
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.client.key],
      name: [this.client.name, Validators.required],
      bornDate: [this.client.bornDate, Validators.required],
      phone: [this.client.phone, Validators.required],
      address: [this.client.address, Validators.required],
      cuts: [],
      login: [this.client.login, Validators.required],
      password: [this.client.password, Validators.required]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.showToast("Cliente salvo com sucesso");
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.showToast("Ocorreu um erro ao salvar o Cliente.")
          console.error(e);
        })
    }
  }

}
