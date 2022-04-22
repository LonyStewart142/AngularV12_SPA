import { Favorite } from './../models/favorite';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexFavoriteService } from '../../pokedex_favorite.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favorites-form',
  templateUrl: './favorites-form.component.html',
  styleUrls: ['./favorites-form.component.scss']
})
export class FavoritesFormComponent implements OnInit {
  @Input() public favorite: Favorite ={name:'',alias:''};


  constructor(
    private route: ActivatedRoute,
    private pokedexFavoriteService:PokedexFavoriteService,
    private modalService: NgbModal,
    private router: Router
    ) { }

  ngOnInit(): void {

  }


saveChanges(){
  this.pokedexFavoriteService.setItemInFavorites(this.favorite)
  this.closeModal()
}

closeModal(){
  this.modalService.dismissAll();
}


}
