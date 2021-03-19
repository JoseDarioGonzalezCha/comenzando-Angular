import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosapiComponent } from '../componentes/usuariosapi/usuariosapi.component';

@NgModule({
  declarations: [
    UsuariosapiComponent
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    UsuariosapiComponent
  ]

})
export class UsuariosModule {}
