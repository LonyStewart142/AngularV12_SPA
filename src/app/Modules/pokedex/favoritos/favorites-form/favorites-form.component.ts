import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Favorite } from './../models/favorite';
import { Component, Input, OnInit } from '@angular/core';
import { PokedexFavoriteService } from '../../pokedex_favorite.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favorites-form',
  templateUrl: './favorites-form.component.html',
  styleUrls: ['./favorites-form.component.scss']
})
export class FavoritesFormComponent implements OnInit {

  //ESTA VARIABLE RECIBE EL FAVORITO ENVIADO DESDE EL LISTADO
  @Input() public favorite: Favorite ={name:'',alias:''};

  errValidation= false;

  constructor(
    private pokedexFavoriteService:PokedexFavoriteService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {

  }




//GUARDAMOS LOS CAMBIOS REALIZADOS EN EL MODELO, EN ESTE CASO SOLO ES ALIAS
saveChanges(){
  if(this.favorite.alias=='') {this.errValidation=true ;return;}

  this.pokedexFavoriteService.setItemInFavorites(this.favorite)
  this.closeModal()
}

//CIERRE DE MODAL
closeModal(){
  this.modalService.dismissAll();
}

}
