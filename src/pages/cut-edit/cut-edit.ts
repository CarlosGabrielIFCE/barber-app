import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeProvider } from '../../providers/employee/employee';
import { ToastProvider } from '../../providers/toast/toast';
import { ClientProvider } from '../../providers/client/client';
import { CutProvider } from '../../providers/cut/cut';
import { CutModelProvider } from '../../providers/cut-model/cut-model';
import { Cut } from '../../models/cut';

@IonicPage()
@Component({
  selector: 'page-cut-edit',
  templateUrl: 'cut-edit.html',
})
export class CutEditPage {
  title: string;
  cut: Cut;
  clients: any;
  employees: any;
  cutModels: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private clientProvider: ClientProvider,
              private employeeProvider: EmployeeProvider,
              private cutProvider: CutProvider,
              private cutModelProvider: CutModelProvider,
              private toast: ToastProvider) {

                this.cut = this.navParams.data.cut || { };

                //Carregando os Clientes
                this.clientProvider.getAll()
                  .subscribe((data) => {
                    this.clients = data;
                  })

                //Carregando os Empregados
                this.employeeProvider.getAll()
                  .subscribe((data) => {
                    this.employees = data;
                  })

                //Carregando os Modelos de Corte
                this.cutModelProvider.getAll()
                  .subscribe((data) => {
                    this.cutModels = data;
                  })
                this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando Corte' : 'Novo Corte';
  }

  onSubmit() {
      this.cutProvider.save(this.cut)
        .then(() => {
          this.toast.showToast("Corte salvo com sucesso");
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.showToast("Ocorreu um erro ao salvar o Corte.")
          console.error(e);
        })
    }
}
