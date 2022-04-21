
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'pokedex', loadChildren: () => import('./Modules/pokedex/pokedex.module').then(m => m.PokedexModule),
  },
 //ADD ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
