import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EntregaDto } from '../../model/entrega-dto';
import { EntregaPK } from '../../model/entrega-pk';
import { FuncionarioDto } from '../../model/funcionario-dto';
import { RomaneioDto } from '../../model/romaneio-dto';
import { AlertService } from '../../services/alert.service';
import { LocatorService } from '../../services/locator.service';
import { RomaneioService } from '../../services/romaneio.service';

@Component({
  selector: 'app-romaneio',
  templateUrl: './romaneio.component.html',
  styleUrls: ['./romaneio.component.css']
})
export class RomaneioComponent implements OnInit {
  public notafiscal: boolean = false;
  public transporte: boolean = false;
  public rota: boolean = false;
  public novoRomaneio: RomaneioDto = new RomaneioDto;
  public motoristas: Array<FuncionarioDto> = [];
  public entregasNota: Array<EntregaDto> = [];

  constructor(private http: HttpClient, private romaneio: RomaneioService, private locator: LocatorService, private alert: AlertService) { }

  ngOnInit(): void {
    const $api = this.http.get(this.locator.services.Funcionarios, { withCredentials: true });

    $api.subscribe((result: any) => {
      this.motoristas = result;
    });

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

  recalcular() {

  }

  gerarRomaneio() {
    if (this.romaneio.notas.length == 0 || this.romaneio.veiculo.id == 0) {
      this.alert.error("Não há notas e/ou veículo selecionados");
    }
    else {
      let now = new Date();
      this.novoRomaneio.dataCriacao = formatDate(now, 'dd-MM-yyyyThh:mm:ss.0000-03:00', 'en-US');
      this.novoRomaneio.motorista = this.motoristas[0];
      for (let i = 0; i < this.romaneio.notas.length; i++) {
        this.entregasNota[i] = new EntregaDto;
        this.entregasNota[i].entregaPK.nota = this.romaneio.notas[i];
        this.novoRomaneio.notas.push(this.entregasNota[i]);
      }
      this.novoRomaneio.veiculo = this.romaneio.veiculo;

      const $api = this.http.post(this.locator.services.Romaneios, { withCredentials: true });

      $api.subscribe((result: any) => {
      });
    }
  }

}
