import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VeiculoDto } from '../../model/veiculo-dto';
import { LocatorService } from '../../services/locator.service';
import { RomaneioService } from '../../services/romaneio.service';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent implements OnInit {

  public listaVeiculosGeral: Array<VeiculoDto> = [];
  public listaVeiculos: Array<VeiculoDto> = [];
  public statusFiltrar: string = '';
  public veiculoSelecionado: VeiculoDto = new VeiculoDto;

  constructor(private http: HttpClient, private locator: LocatorService, private romaneio: RomaneioService) { }

  ngOnInit(): void {
    const $api = this.http.get(this.locator.services.Veiculos, { withCredentials: true });

    $api.subscribe((result: any) => {
      this.listaVeiculosGeral = result;
      this.listaVeiculos = this.listaVeiculosGeral;
    });
    this.veiculoSelecionado = this.romaneio.veiculo;
  }

  filtrarStatus() {
    if (this.statusFiltrar == 'Livre') {
      this.listaVeiculos = this.listaVeiculosGeral.filter(s => s.disponivel === true);
    }
    else {
      this.listaVeiculos = this.listaVeiculosGeral.filter(s => s.disponivel === false);
      console.log(this.listaVeiculos);
    }
  }

  checkL() {
    this.statusFiltrar = 'Livre';
  }
  checkB() {
    this.statusFiltrar = 'Bloqueado';
  }
  checkO() {
    this.statusFiltrar = 'Oficina';
  }

  selecionar(index: number) {
    this.veiculoSelecionado = this.listaVeiculos[index];
  }

  selecionarPRomaneio() {
    this.romaneio.veiculo = this.veiculoSelecionado;
  }

}
