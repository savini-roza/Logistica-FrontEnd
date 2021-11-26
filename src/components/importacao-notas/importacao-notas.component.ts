import { HttpClient } from '@angular/common/http';
import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ClienteDto } from '../../model/cliente-dto';
import { EnderecoDto } from '../../model/endereco-dto';
import { NotaFiscalDto } from '../../model/nota-fiscal-dto';
import { ProdutoDto } from '../../model/produto-dto';
import { ProdutoNotaDto } from '../../model/produto-nota-dto';
import { ProdutoNotaPK } from '../../model/produto-nota-pk';
import { VeiculoDto } from '../../model/veiculo-dto';
import { AlertService } from '../../services/alert.service';
import { LocatorService } from '../../services/locator.service';
import { RomaneioService } from '../../services/romaneio.service';

@Component({
  selector: 'app-importacao-notas',
  templateUrl: './importacao-notas.component.html',
  styleUrls: ['./importacao-notas.component.css']
})
export class ImportacaoNotasComponent implements OnInit {

  constructor(private http: HttpClient, private locator: LocatorService, private romaneio: RomaneioService, private alert: AlertService) { }

  public notas: Array<NotaFiscalDto> = [];
  public notasListaGeral: Array<NotaFiscalDto> = []
  public veiculo: VeiculoDto = new VeiculoDto;
  public notaSelecionada: NotaFiscalDto = new NotaFiscalDto;
  public novaNota: NotaFiscalDto = new NotaFiscalDto;
  public novoCliente: ClienteDto = new ClienteDto;
  public novoEndereco: EnderecoDto = new EnderecoDto;
  public produtosNota: Array<ProdutoNotaDto> = [];
  public produtos: Array<ProdutoDto> = [];
  public unidades: number = 0;
  public pesoTotal: number = 0;
  public volumeTotal: number = 0;
  public produtoNotaJunto: ProdutoNotaPK = new ProdutoNotaPK;

  ngOnInit(): void {
    this.unidades = this.romaneio.unidades;
    this.pesoTotal = this.romaneio.pesoTotal;
    this.volumeTotal = this.romaneio.volumeTotal;
    this.notas = this.romaneio.notas;
    this.novaNota = this.romaneio.novaNota;
    this.novoCliente = this.romaneio.novoCliente;
    this.novoEndereco = this.romaneio.novoEndereco;
    this.produtosNota = this.romaneio.produtosNota;
    this.produtos = this.romaneio.produtos;
    this.veiculo = this.romaneio.veiculo;

    const $api = this.http.get(this.locator.services.Notas, { withCredentials: true });

    $api.subscribe((result: any) => {
      this.notasListaGeral = result;
    });

    const $api2 = this.http.get(this.locator.services.Produtos, { withCredentials: true });

    $api2.subscribe((result: any) => {
      this.produtos = result;
    });

  }

  importarNota() {
    let nota = this.notasListaGeral.findIndex(a => a.numero == (<HTMLInputElement>document.getElementById("numeroNota")).value);
    let idNota = nota + 1;

    const $api = this.http.get(this.locator.services.Notas + idNota, { withCredentials: true });

    $api.subscribe((result: any) => {
      if (result == null) {
        this.alert.error("Ops, não foi encontrada nenhuma nota");
      }
      else {
        this.novaNota = result;
        this.novoCliente = this.novaNota.cliente;
        this.novoEndereco = this.novaNota.endereco;
        this.produtosNota = this.novaNota.produtos;
        let produtoPNota: any;
        for (let i = 0; i < this.novaNota.produtos.length; i++) {
          this.unidades = this.unidades + this.novaNota.produtos[i].quantidade;
          produtoPNota = (this.produtos.find(s => s.descricao == this.produtosNota[i].nome));
          this.pesoTotal = this.pesoTotal + produtoPNota.peso;
          this.volumeTotal = this.volumeTotal + produtoPNota.volume;
        }
        this.romaneio.notas.push(this.novaNota);
      }
    });
  }

  selectNota(index: number) {
    this.notaSelecionada = this.notas[index];
    this.novaNota = this.notaSelecionada;
    this.novoCliente = this.notaSelecionada.cliente;
    this.novoEndereco = this.notaSelecionada.endereco;
    this.produtosNota = this.notaSelecionada.produtos;
    for (let i = 0; i < this.notaSelecionada.produtos.length; i++) {
      this.unidades = this.unidades + this.notaSelecionada.produtos[i].quantidade;
    }
  }

  removerNota() {
    this.notas.splice((this.notas.findIndex(s => s.numero == this.notaSelecionada.numero), 1));
  }

}
