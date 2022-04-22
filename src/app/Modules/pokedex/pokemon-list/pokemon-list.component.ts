import { Favorite } from './../favoritos/models/favorite';
import { Pokemon, Pokedex } from './models/pokemon';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokedexFavoriteService } from '../pokedex_favorite.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons:Pokemon[]=[];

  //ARRAY QUE ALMACENA LOS POKEMONES FAVORITOS
  pokemonsFavStorage:Pokemon[]=[];

  //MODELO QUE RETORNA EL API
  pokedex :Pokedex | undefined;

  //URL
  urlHttp:string='https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

  loadingListado=true;

  constructor(
    private http:  HttpClient,

    //SERVICIO ENCARGADO DE MANEJAR TODO LO RELACIONADO AL SESSION STORAGE
    private pokedexFavoriteService:PokedexFavoriteService,

  ) { }


  ngOnInit(): void {
      this.getFavorites();
      this.getData()
  }

//GET FAVORITOS DEL SESSION STORAGE
getFavorites(){
  this.pokedexFavoriteService.loadFavorites();
  this.pokemonsFavStorage= this.pokedexFavoriteService.getfavorites();
}

//PETICION AL API DE POKEMON
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
        this.loadingListado=false;
      }, 400);

    }, err=>{
      this.loadingListado=false;
      console.log(err)
    })
  }


// AGREGA A FAVORITO EL POKEMON
addPokemonToFavorite(pokemon:Pokemon){
  let fav: Favorite ={name:pokemon.name,alias:`${pokemon.name+'Alias'}`,createdAt: new Date()}
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

//VALIDA SI EL POKEMON SE ENCUENTRA EN EL LISTADO DE FAVORITOS
isPokemonFavorite(pokemon:Pokemon):boolean {
 if(this.pokemonsFavStorage?.find(p=>p.name==pokemon.name)){
   return true;
 }
  return false;
}
  //ELIMINA EL FAVORITO DEL SESION STORAGE
  deleteFavorite(pokemon:Pokemon){
    this.pokedexFavoriteService.removeFavorite(pokemon.name);
    pokemon.isFavorite=false;
    this.getFavorites();
  }
}



