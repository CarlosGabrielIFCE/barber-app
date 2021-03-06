import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CutModelProvider {
  private PATH = 'cutModels/';

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

  save (cutModel: any) {
    return new Promise((resolve, reject) => {
      if (cutModel.key) {
        this.db.list(this.PATH)
          .update(cutModel.key, cutModel)
          .then(() => resolve())
          .catch((e) => reject(e)); 
      } else {
        this.db.list(this.PATH)
          .push(cutModel)
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
