export interface Pokemon {
  name:string;
  url:string;
  isFavorite:boolean;
}


export interface Pokedex {
  count:number;
  next:string;
  previous:string;
  results:Pokemon[];

}

