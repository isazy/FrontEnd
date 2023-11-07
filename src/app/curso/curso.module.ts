import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { FormCursosComponent } from './form-cursos/form-cursos.component';


@NgModule({
  declarations: [
    FormCursosComponent
  ],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
