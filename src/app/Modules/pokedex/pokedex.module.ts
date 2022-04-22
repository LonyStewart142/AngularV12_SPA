import { FavoritesFormComponent } from './favoritos/favorites-form/favorites-form.component';
import { LoadingComponent } from './../../shared/loading/loading.component';
import { FavoritesListComponent } from './favoritos/favorites-list/favorites-list.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ PokemonListComponent,
                  FavoritesListComponent,
                  FavoritesFormComponent,
                  LoadingComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule,
  ]
})
export class PokedexModule { }
