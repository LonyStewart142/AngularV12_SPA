export interface Pokemon {
  name:string;
  url:string;
}


export interface Pokedex {
  count:number;
  next:string;
  previous:string;
  results:Pokemon[];

}

