import { NotaFiscalDto } from './nota-fiscal-dto';
import { ProdutoDto } from './produto-dto';
import { ProdutoNotaDto } from './produto-nota-dto';

export class ProdutoNotaPK {
  produtoNota: ProdutoNotaDto = new ProdutoNotaDto;
  produto: ProdutoDto = new ProdutoDto;
}
