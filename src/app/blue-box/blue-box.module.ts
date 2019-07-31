import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlueBoxComponent } from './blue-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlueBoxComponent],
  exports: [BlueBoxComponent],
  entryComponents: [BlueBoxComponent]
})
export class BlueBoxModule { }