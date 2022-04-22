import { SorpriseComponent } from './Modules/sorprise/sorprise.component';
import { PokedexComponent } from './Modules/pokedex/pokedex.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { routes } from './app-routing.module';
import { LoadingComponent } from './shared/loading/loading.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PokedexComponent,
    SorpriseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    LayoutModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
