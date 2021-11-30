import { Component, OnInit } from '@angular/core';
import { NotaFiscalDto } from '../../model/nota-fiscal-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocatorService } from '../../services/locator.service';
import { AlertService } from '../../services/alert.service';
import { ProdutoDto } from '../../model/produto-dto';
import { ProdutoNotaDto } from '../../model/produto-nota-dto';
import { ProdutoNotaPK } from '../../model/produto-nota-pk';
import { formatDate } from '@angular/common';
import { ClienteDto } from '../../model/cliente-dto';
import { NotaFiscalEnvioDto } from '../../model/nota-fiscal-envio-dto';
import { ProdutoNotaEnviarDto } from '../../model/produto-nota-enviar-dto';

@Component({
  selector: 'app-nota-fiscal',
  templateUrl: './nota-fiscal.component.html',
  styleUrls: ['./nota-fiscal.component.css']
})
export class NotaFiscalComponent implements OnInit {

  constructor(private http: HttpClient, private locator: LocatorService, private alert: AlertService) { }

  public notaSelecionada: NotaFiscalDto = new NotaFiscalDto;
  public nNotaConsultar: string = "";
  public notasListaGeral: Array<NotaFiscalDto> = [];
  public volumes: number = 0;
  public produtosNota: Array<ProdutoNotaPK> = [];
  public produtos: Array<ProdutoDto> = [];
  public produtoSelecionado: ProdutoDto = new ProdutoDto;
  public produtoNotaAColocar: ProdutoNotaDto = new ProdutoNotaDto;
  public vezes: Array<ProdutoNotaDto> = [];
  public novaNota: NotaFiscalEnvioDto = new NotaFiscalEnvioDto;
  public clientes: Array<ClienteDto> = [];
  public clienteSelecionado: string = "";

  ngOnInit(): void {
    this.vezes = [new ProdutoNotaDto];
    const $api = this.http.get(this.locator.services.Notas, { withCredentials: true });

    $api.subscribe((result: any) => {
      this.notasListaGeral = result;
    });

    const $api2 = this.http.get(this.locator.services.Produtos, { withCredentials: true });

    $api2.subscribe((result: any) => {
      this.produtos = result;
    });

    const $api3 = this.http.get(this.locator.services.Cliente, { withCredentials: true });

    $api3.subscribe((result: any) => {
      this.clientes = result;
    });
  }

  adicionarProduto() {
    this.vezes.push(new ProdutoNotaDto);
  }

  removerProduto(i: number) {
    this.vezes.splice(i, 1);
  }

  cadastrarNota() {
    this.novaNota.moeda = "REAL";
    this.novaNota.clienteId = this.clientes.find(s => s.nome == this.clienteSelecionado)?.id!;
    let now = new Date;
    this.novaNota.dtVencimento = formatDate(now, 'yyyy-MM-ddThh:mm:ss.0000-03:00', 'en-US');

    for (let i = 0; i < this.vezes.length; i++) {
      let a = new ProdutoNotaEnviarDto;
      a.id = this.produtos.findIndex(s => s.descricao == this.vezes[i].nome) + 1;
      a.quantidade = this.vezes[i].quantidade;
      this.novaNota.produtos.push(a);
      this.novaNota.valor += this.vezes[i].valorUnitario * this.vezes[i].quantidade;
    }

    const headers = new HttpHeaders({
    'Content-Type': 'application/json'})

    const $api = this.http.post<NotaFiscalDto>(this.locator.services.Notas, this.novaNota);

    $api.subscribe((result: any) => {
    });
  }

  buscarNota() {

    let nota = this.notasListaGeral.findIndex(a => a.numero == (<HTMLInputElement>document.getElementById("nNotaFiscalPesquisa")).value);
    let idNota = nota + 1;

    if (idNota != 0) {
      const $api = this.http.get(this.locator.services.Notas + idNota, { withCredentials: true });

      $api.subscribe((result: any) => {
        this.notaSelecionada = result;
        for (let i = 0; i < this.notaSelecionada.produtos.length; i++) {
          this.produtoNotaAColocar = this.notaSelecionada.produtos[i];
          this.volumes = this.volumes + this.notaSelecionada.produtos[i].quantidade;
          this.produtosNota[i] = new ProdutoNotaPK;
          this.produtosNota[i].produtoNota = this.notaSelecionada.produtos[i];
          this.produtosNota[i].produto = this.produtos.find(s => s.descricao === this.notaSelecionada.produtos[i].nome)!;
        }
      });
    }
    else {
      this.alert.error("Ops, não foi encontrada nenhuma nota!");
    }
  }

}
