import { EntregaDto } from './entrega-dto';
import { FuncionarioDto } from './funcionario-dto';
import { NotaFiscalDto } from './nota-fiscal-dto';
import { VeiculoDto } from './veiculo-dto';

export class RomaneioDto {
  id: number = 0;
  dataCriacao: string = "";
  motorista: FuncionarioDto = new FuncionarioDto;
  veiculo: VeiculoDto = new VeiculoDto;
  latitudePartida: string = "";
  longitudePartida: string = "";
  notas: Array<EntregaDto> = [];
}
