import { Component, OnInit } from '@angular/core';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private principal: PrincipalComponent) { }

  ngOnInit(): void {
  }

  rastreabilidade() {
    this.principal.rastreabilidade = true;
    this.principal.cadastroVeiculos = false;
    this.principal.notaFiscal = false;
    this.principal.pesquisa = false;
    this.principal.romaneio = false;
  }

  cadastroVeiculos() {
    this.principal.rastreabilidade = false;
    this.principal.cadastroVeiculos = true;
    this.principal.notaFiscal = false;
    this.principal.pesquisa = false;
    this.principal.romaneio = false;
  }

  notaFiscal() {
    this.principal.rastreabilidade = false;
    this.principal.cadastroVeiculos = false;
    this.principal.notaFiscal = true;
    this.principal.pesquisa = false;
    this.principal.romaneio = false;
  }

  pesquisa() {
    this.principal.rastreabilidade = false;
    this.principal.cadastroVeiculos = false;
    this.principal.notaFiscal = false;
    this.principal.pesquisa = true;
    this.principal.romaneio = false;
  }

  romaneio() {
    this.principal.rastreabilidade = false;
    this.principal.cadastroVeiculos = false;
    this.principal.notaFiscal = false;
    this.principal.pesquisa = false;
    this.principal.romaneio = true;
  }

}
