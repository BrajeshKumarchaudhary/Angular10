import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TwoWayBindingComponent } from './practices/two-way-binding/two-way-binding.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms'
import {ProductService} from './product.service';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwoWayBindingComponent,
    ProductComponent,
    AgePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
