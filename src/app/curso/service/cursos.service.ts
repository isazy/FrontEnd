import { Injectable } from '@angular/core';
import { Icursos } from './icursos';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

    private readonly API="http://localhost:8080/cursos";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Icursos[]>(this.API);
  }

  listarPorId(id:object) {
    return this.http.get<Icursos>('${this.API}/${id}').pipe(take(1));
  }

  criar(cursos:object){
    return this.http.post(this.API, cursos).pipe(take(1));
  }

  atualizar(curso:any){
    return this.http.put('${this.API}/${id}', curso).pipe(take(1));
  }

  excluir(id: any){
    return this.http.delete('${this.API}/${id}').pipe(take(1));
  }
}
