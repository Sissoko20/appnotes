import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TailwindPageRoutingModule } from './tailwind-routing.module';

import { TailwindPage } from './tailwind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TailwindPageRoutingModule
  ],
  declarations: [TailwindPage]
})
export class TailwindPageModule {}
