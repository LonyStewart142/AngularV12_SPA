import { HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solicitud-compras-listado',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {




  constructor(
    // private toastService: ToastrService,
    private modalService: NgbModal,
    private router: Router,
  ) { }


  ngOnInit(): void {
    // this.getData()
  }

}




