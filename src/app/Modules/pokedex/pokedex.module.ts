import { FavoritesListComponent } from './favoritos/favorites-list/favorites-list.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';



@NgModule({
  declarations: [ PokemonListComponent,
                  FavoritesListComponent,
                  FavoritesListComponent ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
  ]
})
export class PokedexModule { }
