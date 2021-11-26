import { EntregaPK } from './entrega-pk';

export class EntregaDto {
  entregaPK: EntregaPK = new EntregaPK;
  dataChegada: string = "";
  sequencia: number = 0;
  latitude: string = "";
  longitude: string = "";
}
