import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoListPage } from './info-list';

@NgModule({
  declarations: [
    InfoListPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoListPage),
  ],
})
export class InfoListPageModule {}
