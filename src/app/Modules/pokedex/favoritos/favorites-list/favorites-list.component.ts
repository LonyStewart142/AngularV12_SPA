import { FavoritesFormComponent } from './../favorites-form/favorites-form.component';
import { Favorite } from './../models/favorite';
import { HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokedexFavoriteService } from '../../pokedex_favorite.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solicitud-compras-listado',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {


   favorites:Favorite[]=[]

  constructor(
    // private toastService: ToastrService,
    private modalService: NgbModal,
    private pokedexFavoriteService:PokedexFavoriteService,
    private router: Router,
  ) { }


  ngOnInit(): void {

     this.getFavorites()
  }


  getFavorites(){
    this.pokedexFavoriteService.loadFavorites();
    this.favorites=this.pokedexFavoriteService.getfavorites();
  }
  deleteFavorite(fav:Favorite){
    this.pokedexFavoriteService.removeFavorite(fav.name);
    this.getFavorites();
  }

  openModal(fav:Favorite) {
    const modalRef = this.modalService.open(FavoritesFormComponent);
    modalRef.componentInstance.favorite = fav;
  }
}



