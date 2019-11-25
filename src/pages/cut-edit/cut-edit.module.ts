import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CutEditPage } from './cut-edit';

@NgModule({
  declarations: [
    CutEditPage,
  ],
  imports: [
    IonicPageModule.forChild(CutEditPage),
  ],
})
export class CutEditPageModule {}
