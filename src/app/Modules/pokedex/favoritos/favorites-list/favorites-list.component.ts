import { FavoritesFormComponent } from './../favorites-form/favorites-form.component';
import { Favorite } from './../models/favorite';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokedexFavoriteService } from '../../pokedex_favorite.service';

@Component({
  selector: 'app-solicitud-compras-listado',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {


   favorites:Favorite[]=[]

  constructor(
    private modalService: NgbModal,
    private pokedexFavoriteService:PokedexFavoriteService,
  ) { }


  ngOnInit(): void {

     this.getFavorites()
  }

  //OBTIENE LOS FAVORITOS DEL SESION STORAGE
  getFavorites(){
    this.pokedexFavoriteService.loadFavorites();
    this.favorites=this.pokedexFavoriteService.getfavorites();
  }

  //ELIMINA EL FAVORITO DEL SESION STORAGE
  deleteFavorite(fav:Favorite){
    this.pokedexFavoriteService.removeFavorite(fav.name);
    this.getFavorites();
  }

 //ABRE EL MODAL DEL FORMULARIO ENVIANDO EL FAVORITO SELECCIONADO
  openModal(fav:Favorite) {
    const modalRef = this.modalService.open(FavoritesFormComponent);
    modalRef.componentInstance.favorite = fav;
  }
}



