import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CutModelsPage } from './cut-models';

@NgModule({
  declarations: [
    CutModelsPage,
  ],
  imports: [
    IonicPageModule.forChild(CutModelsPage),
  ],
})
export class CutModelsPageModule {}
