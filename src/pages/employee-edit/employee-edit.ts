import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeProvider } from '../../providers/employee/employee';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-employee-edit',
  templateUrl: 'employee-edit.html',
})
export class EmployeeEditPage {
  title: string;
  form: FormGroup;
  employee: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private provider: EmployeeProvider,
              private toast: ToastProvider) {

                this.employee = this.navParams.data.employee || { };
                this.createForm();

                this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando Empregado' : 'Novo empregado';
  }
  
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.employee.key],
      name: [this.employee.name, Validators.required],
      bornDate: [this.employee.bornDate, Validators.required],
      salary: [this.employee.salary, Validators.required],
      phone: [this.employee.phone, Validators.required],
      address: [this.employee.address, Validators.required],
      cuts: [],
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.showToast("employeee salvo com sucesso");
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.showToast("Ocorreu um erro ao salvar o employeee.")
          console.error(e);
        })
    }
  }

}
