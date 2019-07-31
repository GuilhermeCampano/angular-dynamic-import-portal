import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
// import { RedBoxModule, RedBoxComponent } from './red-box';
// import { BlueBoxModule, BlueBoxComponent } from './blue-box';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    PortalModule,
  ],
  declarations: [ AppComponent],
  bootstrap:  [AppComponent],
  entryComponents: []
})
export class AppModule { }
