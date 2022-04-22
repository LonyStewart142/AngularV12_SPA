import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PokedexFavoriteService {
  constructor() {}

  items:any[] = [];

  //AGREGA A FAVORITO
  addToFavorites(addedItem: any) {
    this.items.push(addedItem);
    this.saveFavorite();
  }

  getfavorites() {
    return this.items;
  }

  //OBTIENE DEL SESION STORAGE LOS FAVORITOS
  loadFavorites(): void {
    this.items = JSON.parse(sessionStorage.getItem('pokemon_favorites')||'[]') ?? [];
  }

  //GUARDA EL FAVORITO EN EL SESSION STORAGE
  saveFavorite(): void {
    sessionStorage.setItem('pokemon_favorites', JSON.stringify(this.items));
  }

  //LIMPIA LOS FAVORITOS DEL SESSION STORAGE
  clearFavorites(items=[]) {
    this.items = [];
    sessionStorage.removeItem("pokemon_favorites")
  }

  //REMUEVE UN FAVORITO DEL SESSION STORAGE
  removeFavorite(name:string) {
    const index = this.items.findIndex(o => o.name == name);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveFavorite();
    }
  }


  //MODIFICA EL ALIAS DEL POKEMON FAVORITO
  setItemInFavorites(item:any){
    console.log(item)
    this.items.find(x=>x.name==item.name).alias=item.alias;
    this.saveFavorite();
  }
}
