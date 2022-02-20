import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  titularAlerta:string='En breve te enviaremos un correo para que rellenes tus datos';
  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {
    swal.fire('Registro exitoso...', this.titularAlerta, 'success');
  }
}
