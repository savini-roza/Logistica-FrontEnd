import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EnderecoDto } from '../../model/endereco-dto';
import { NotaFiscalDto } from '../../model/nota-fiscal-dto';
import { LocatorService } from '../../services/locator.service';
import { RomaneioService } from '../../services/romaneio.service';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css']
})
export class RotasComponent implements OnInit {

  public notas: Array<NotaFiscalDto> = [];
  public enderecos: Array<EnderecoDto> = [];

  constructor(private http: HttpClient, private locator: LocatorService, private romaneio: RomaneioService) { }

  ngOnInit(): void {
    this.notas = this.romaneio.notas;
    for (let i = 0; i < this.notas.length; i++) {
      this.enderecos[i] = this.notas[i].endereco;
    }
  }

}
