import { Pokemon, Pokedex } from './models/pokemon';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { PokedexFavoriteService } from '../pokedex_favorite.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons:Pokemon[]=[];
  pokedex :Pokedex | undefined;

  constructor(
    // private toastService: ToastrService,
    private http:  HttpClient,
    private pokedexFavoriteService:PokedexFavoriteService,
    private modalService: NgbModal,

  ) { }


  ngOnInit(): void {
      this.getData()
      this.pokedexFavoriteService.loadFavorites();
  }


  getData(){
    this.http.get<Pokedex>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0').subscribe(response => {
      this.pokedex=response;
      this.pokemons= this.pokedex.results;
    }, err=>{
      console.log(err)
    })
  }


addPokemonToFavorite(pokemon:Pokemon){
//
this.pokedexFavoriteService.addToFavorites(pokemon);
console.log(pokemon)
}


}




