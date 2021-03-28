import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarComponent } from '../app/buscar/buscar.component';
import { GifsComponent } from '../app/gifs/gifs.component';

const routes: Routes = [

  { path: '', component: BuscarComponent},
  { path: 'buscar/:q', component: GifsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
