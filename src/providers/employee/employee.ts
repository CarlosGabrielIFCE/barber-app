import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class EmployeeProvider {
  private PATH = 'employees/';

  constructor(private db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val( )}));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.payload.key, ...c.payload.val()};
      })
  }

  save (employee: any) {
    return new Promise((resolve, reject) => {
      if (employee.key) {
        this.db.list(this.PATH)
          .update(employee.key, employee)
          .then(() => resolve())
          .catch((e) => reject(e)); 
      } else {
        this.db.list(this.PATH)
          .push(employee)
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
