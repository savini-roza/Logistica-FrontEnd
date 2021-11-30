import { ClienteDto } from './cliente-dto';
import { EnderecoDto } from './endereco-dto';
import { ProdutoDto } from './produto-dto';
import { ProdutoNotaEnviarDto } from './produto-nota-enviar-dto';

export class NotaFiscalEnvioDto {
  numero: string = "";
  endereco: EnderecoDto = new EnderecoDto;
  dtVencimento: string = "";
  clienteId: number = 0;
  formaPagamento: string = "";
  moeda: string = "";
  valor: number = 0;
  entregue: boolean = false;
  produtos: Array<ProdutoNotaEnviarDto> = [];
  notaEntregador: number = 0;
  notaTempo: number = 0;
  notaAtendimento: number = 0;
  observacaoPesquisa: string = "";
}
