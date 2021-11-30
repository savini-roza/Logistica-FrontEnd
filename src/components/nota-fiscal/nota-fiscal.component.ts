import { Component, OnInit } from '@angular/core';
import { NotaFiscalDto } from '../../model/nota-fiscal-dto';
import { HttpClient } from '@angular/common/http';
import { LocatorService } from '../../services/locator.service';
import { AlertService } from '../../services/alert.service';
import { ProdutoDto } from '../../model/produto-dto';
import { ProdutoNotaDto } from '../../model/produto-nota-dto';
import { ProdutoNotaPK } from '../../model/produto-nota-pk';
import { formatDate } from '@angular/common';

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
  public produtosNaNota: Array<ProdutoDto> = [];
  public produtoNotaAColocar: ProdutoNotaDto = new ProdutoNotaDto;
  public produtoSelecionado: ProdutoDto = new ProdutoDto;
  public vezes: Array<ProdutoNotaDto> = [];
  public novaNota: NotaFiscalDto = new NotaFiscalDto;

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
  }

  adicionarProduto() {
    this.vezes.push(new ProdutoNotaDto);
  }

  removerProduto(i: number) {
    this.vezes.splice(i, 1);
  }

  cadastrarNota() {
    this.novaNota.produtos = this.vezes;
    this.novaNota.moeda = "REAL";
    let now = new Date;
    this.novaNota.dtEmissao = formatDate(now, 'dd-MM-yyyyThh:mm:ss.0000-03:00', 'en-US');
    this.novaNota.dtVencimento = formatDate(now.getDate() + 30, 'dd-MM-yyyyThh:mm:ss.0000-03:00', 'en-US');

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
          this.produtoSelecionado = new ProdutoDto;
          this.produtosNota[i].produto = this.produtos.find(s => s.descricao === this.notaSelecionada.produtos[i].nome)!;
        }
      });
    }
    else {
      this.alert.error("Ops, não foi encontrada nenhuma nota!");
    }
  }

}
