import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CutModelEditPage } from './cut-model-edit';

@NgModule({
  declarations: [
    CutModelEditPage,
  ],
  imports: [
    IonicPageModule.forChild(CutModelEditPage),
  ],
})
export class CutModelEditPageModule {}
