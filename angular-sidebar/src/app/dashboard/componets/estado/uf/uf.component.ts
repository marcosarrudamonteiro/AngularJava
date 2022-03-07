import { UfModel } from './../uf-model';
import { UfService } from './../uf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['./uf.component.scss']
})
export class UfComponent implements OnInit
{
  ufmodel: UfModel[] = [];

  constructor(private service: UfService)
  {   }
  ngOnInit(): void {
    this.listarTodos();
    }
  listarTodos()
  {
    this.service.getAll().subscribe(dados=>{
      this.ufmodel;
      console.log(dados);
    })
  }
}
