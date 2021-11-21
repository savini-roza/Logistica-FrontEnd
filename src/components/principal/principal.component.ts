import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public romaneio: boolean = false;
  public notaFiscal: boolean = false;
  public pesquisa: boolean = false;
  public rastreabilidade: boolean = false;
  public cadastroVeiculos: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.romaneio = true;
  }

}
