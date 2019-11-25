import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CutProvider {
  private PATH = 'cuts/';

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

  save (cut: any) {
    return new Promise((resolve, reject) => {
      if (cut.key) {
        this.db.list(this.PATH)
          .update(cut.key, cut)
          .then(() => resolve())
          .catch((e) => reject(e)); 
      } else {
        this.db.list(this.PATH)
          .push(cut)
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
