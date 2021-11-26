import { ClienteDto } from './cliente-dto';
import { EnderecoDto } from './endereco-dto';
import { ProdutoDto } from './produto-dto';
import { ProdutoNotaDto } from './produto-nota-dto';

export class NotaFiscalDto {
  id: number = 0;
  numero: string = "";
  endereco: EnderecoDto = new EnderecoDto;
  dtEmissao: string = "";
  dtVencimento: string = "";
  cliente: ClienteDto = new ClienteDto;
  formaPagamento: string = "";
  moeda: string = "";
  valor: number = 0;
  entregue: boolean = false;
  produtos: Array<ProdutoNotaDto> = [];
  notaTempoDeEntrega: number = 0;
  notaAtendimento: number = 0;
  observacaoPesquisa: string = "";
}
