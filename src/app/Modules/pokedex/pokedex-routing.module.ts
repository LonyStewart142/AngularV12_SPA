import { FavoritesFormComponent } from './favoritos/favorites-form/favorites-form.component';
import { FavoritesListComponent } from './favoritos/favorites-list/favorites-list.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokedexComponent } from './pokedex.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '', component: PokedexComponent,
    children: [

      {
        path: 'pokemons', component: PokemonListComponent, data: {
          title: 'Listado de Pokemon',
         }
      },

      {
        path: 'favorites', component: FavoritesListComponent, data: {
          title: 'Listado de Favoritos',
        }
      },

    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
