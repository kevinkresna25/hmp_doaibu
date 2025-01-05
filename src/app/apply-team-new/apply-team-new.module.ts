import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyTeamNewPageRoutingModule } from './apply-team-new-routing.module';

import { ApplyTeamNewPage } from './apply-team-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyTeamNewPageRoutingModule
  ],
  declarations: [ApplyTeamNewPage]
})
export class ApplyTeamNewPageModule {}
