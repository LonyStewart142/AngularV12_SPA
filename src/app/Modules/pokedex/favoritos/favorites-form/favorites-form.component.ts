import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favorites-form',
  templateUrl: './favorites-form.component.html',
  styleUrls: ['./favorites-form.component.scss']
})
export class FavoritesFormComponent implements OnInit {


  constructor(
    // private toastService: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.CreateForm();
  }


  private CreateForm() {

    // this.Formulario = this.formBuilder.group({
    //   id: [0],
    //   codigoReferencia: [null,],
    //   tipoSolicitudID: [1, [Validators.required]],
    //   comentario: [null,],
    //   solicitanteDepartamentoID: [0,],
    //   solicitanteSucursalID: [0,],
    // });
  }





}
