import { Favorite } from './../favoritos/models/favorite';
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
  pokemonsFavStorage:Pokemon[]=[];

  pokedex :Pokedex | undefined;
  urlHttp:string='https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

  loadingListado=true;

  constructor(
    // private toastService: ToastrService,
    private http:  HttpClient,
    private pokedexFavoriteService:PokedexFavoriteService,

  ) { }


  ngOnInit(): void {
      this.loadSessionStorage();
      this.getData()
  }

loadSessionStorage(){
  this.pokedexFavoriteService.loadFavorites();
  this.pokemonsFavStorage= this.pokedexFavoriteService.getfavorites();
  console.log( this.pokemonsFavStorage)

}
  getData(){
    this.pokemons=[];

    this.loadingListado=true;
    this.http.get<Pokedex>(this.urlHttp).subscribe(response => {

      setTimeout(() => {
        this.pokedex=response;
        this.pokemons= this.pokedex.results;
        this.pokemons.forEach(x=>{
         x.isFavorite= this.isPokemonFavorite(x);
        })
        console.log(this.pokemons)
        this.loadingListado=false;
      }, 400);

    }, err=>{
      this.loadingListado=false;
      console.log(err)
    })
  }


addPokemonToFavorite(pokemon:Pokemon){
  let fav: Favorite ={name:pokemon.name,alias:'',createdAt: new Date()}
  this.pokedexFavoriteService.addToFavorites(fav);
  pokemon.isFavorite=true;
}


previousPage(){
  this.urlHttp=this.pokedex?.previous || this.urlHttp;
  this.getData();
}
nextPage(){
  this.urlHttp=this.pokedex?.next || this.urlHttp;
  this.getData()
}


isPokemonFavorite(pokemon:Pokemon):boolean {
 if(this.pokemonsFavStorage?.find(p=>p.name==pokemon.name)){
   return true;
 }
  return false;
}
}



