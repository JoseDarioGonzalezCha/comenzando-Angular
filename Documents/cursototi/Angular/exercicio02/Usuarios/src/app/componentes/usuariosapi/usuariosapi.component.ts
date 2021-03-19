import { Component, OnInit } from '@angular/core';
import { UsuariostbmService} from '../../service/usuariostbm.service'

@Component({
  selector: 'app-usuariosapi',
  templateUrl: './usuariosapi.component.html',
  styleUrls: ['./usuariosapi.component.css']
})
export class UsuariosapiComponent implements OnInit {

  usuarios: any = []

  constructor(usuariosServ: UsuariostbmService) {

    //this.usuarios = usuariosServ.getTodos();

    usuariosServ.getTodos()
    .subscribe(usuarios => this.usuarios = usuarios);
   

   }

  ngOnInit(): void {
  }

}
