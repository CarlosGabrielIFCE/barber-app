import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EmployeeProvider } from '../../providers/employee/employee';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
  employees: Observable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private provider: EmployeeProvider,
              private toast: ToastProvider) {

                this.employees = this.provider.getAll();
                this.provider.getAll()
                  .subscribe((data) => {
                    console.log(data);
                  })
  }

  newEmployee() {
    this.navCtrl.push('EmployeeEditPage');
  }

  editEmployee(employee: any) {
    this.navCtrl.push('EmployeeEditPage', {
      employee: employee
    })
  }

  removeEmployee(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.showToast("Empregado removido com sucesso");
        })
        .catch(() => {
          this.toast.showToast("Ocorreu um erro ao remover o empregado");
        })
    }
  }
}
