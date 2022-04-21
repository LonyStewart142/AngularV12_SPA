import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PokedexFavoriteService {
  constructor() {}

  items:any[] = [];
  addToFavorites(addedItem: any) {
    this.items.push(addedItem);
    this.saveFavorite();
  }

  getfavorites() {
    return this.items;
  }

  loadFavorites(): void {
    this.items = JSON.parse(sessionStorage.getItem("pokemon_favorites") || "") ?? [];
  }

  saveFavorite(): void {
    sessionStorage.setItem('pokemon_favorites', JSON.stringify(this.items));
  }

  clearFavorites(items=[]) {
    this.items = [];

    sessionStorage.removeItem("pokemon_favorites")
  }

  removeItem(id:number) {
    const index = this.items.findIndex(o => o.id === id);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveFavorite();
    }
  }

  itemInfavorites(item:any): boolean {
    return this.items.findIndex(o => o.id === item.id) > -1;
  }

  setItemInFavorites(id:number,alias:string){
    this.items.find(x=>x.id==id).alias=alias;
    this.saveFavorite();
  }
}
