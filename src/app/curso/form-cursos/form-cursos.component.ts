import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CursosService } from '../service/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap} from 'rxjs';
import { Icursos } from '../service/icursos';

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.scss']
})
export class FormCursosComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
  });

  constructor(
    private service: CursosService,
    private route:ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void { this.ListarPorId(); }

  Salvar() {
   if(this.form.value.id){
    this.service.atualizar(this.form.value).subscribe(
      success => {
        alert("Curso atualizado com sucesso!");
        this.router.navigate(['']);
      },
      Error => alert("erro ao atualizar o curso")
    );
   }

   else{
    this.service.criar(this.form.value).subscribe(
      success => {
        alert("curso cadastrado com sucesso");
        this.router.navigate(['']);
      },
      Error => alert("erro ao cadastrar o curso")
    );
   }
   this.form.reset();
  }
  ListarPorId(){
    this.route.params
    .pipe(
      map((params: any) => params ['id']),
      switchMap(id => this.service.listarPorId(id))


    ).subscribe(curso => this.atualizarForm(curso));
  }

  atualizarForm(curso: Icursos){
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome,
    });

  }

  Cancelar(){
    this.form.reset();
    console.log('Cancelado')
  }
}
