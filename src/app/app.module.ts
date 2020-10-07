import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateWaybillsComponent } from './components/generate-waybills/generate-waybills.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    AppComponent,
    GenerateWaybillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBarcodeModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
