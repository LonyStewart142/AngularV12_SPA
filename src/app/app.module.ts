import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingComponent } from './shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
