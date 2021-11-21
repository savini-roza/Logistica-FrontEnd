import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romaneio',
  templateUrl: './romaneio.component.html',
  styleUrls: ['./romaneio.component.css']
})
export class RomaneioComponent implements OnInit {
  public notafiscal: boolean = false;
  public transporte: boolean = false;
  public rota: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.notafiscal = true;
  }

  ativarNotaFiscal() {
    this.notafiscal = true;
    this.transporte = false;
    this.rota = false;
  }

  ativarTransporte() {
    this.notafiscal = false;
    this.transporte = true;
    this.rota = false;
  }

  ativarRota() {
    this.notafiscal = false;
    this.transporte = false;
    this.rota = true;
  }

}
