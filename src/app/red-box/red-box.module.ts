import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedBoxComponent } from './red-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RedBoxComponent],
  exports: [RedBoxComponent]
})
export class RedBoxModule { }