import { Injectable } from '@angular/core';
import { ClienteDto } from '../model/cliente-dto';
import { EnderecoDto } from '../model/endereco-dto';
import { NotaFiscalDto } from '../model/nota-fiscal-dto';
import { ProdutoDto } from '../model/produto-dto';
import { ProdutoNotaDto } from '../model/produto-nota-dto';
import { RomaneioDto } from '../model/romaneio-dto';
import { VeiculoDto } from '../model/veiculo-dto';

@Injectable({
  providedIn: 'root'
})
export class RomaneioService {

  constructor() { }

  public notas: Array<NotaFiscalDto> = [];
  public notasListaGeral: Array<NotaFiscalDto> = []

  public veiculo: VeiculoDto = new VeiculoDto;

  public notaSelecionada: NotaFiscalDto = new NotaFiscalDto;
  public novaNota: NotaFiscalDto = new NotaFiscalDto;
  public novoCliente: ClienteDto = new ClienteDto;
  public novoEndereco: EnderecoDto = new EnderecoDto;
  public novoVeiculo: VeiculoDto = new VeiculoDto;
  public unidades: number = 0;
  public pesoTotal: number = 0;
  public volumeTotal: number = 0;
  public produtosNota: Array<ProdutoNotaDto> = [];
  public produtos: Array<ProdutoDto> = [];

  public veiculosListaGeral: Array<VeiculoDto> = [];
  public veiculosFiltrados: Array<VeiculoDto> = [];

}
