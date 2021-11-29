import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EnderecoDto } from '../../model/endereco-dto';
import { NotaFiscalDto } from '../../model/nota-fiscal-dto';
import { LocatorService } from '../../services/locator.service';
import { RomaneioService } from '../../services/romaneio.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css']
})
export class RotasComponent implements OnInit {

  public notas: Array<NotaFiscalDto> = [];
  public enderecos: Array<EnderecoDto> = [];
  public url: SafeResourceUrl = "";
  constructor(private http: HttpClient, private locator: LocatorService, private romaneio: RomaneioService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.notas = this.romaneio.notas;
    for (let i = 0; i < this.notas.length; i++) {
      this.enderecos[i] = this.notas[i].endereco;
      console.log(this.enderecos);
    }
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + encodeURIComponent(this.enderecos[0].logradouro) + "%20" + encodeURIComponent(this.enderecos[0].numero) + "%20" + encodeURIComponent(this.enderecos[0].cidade) + "%20" + encodeURIComponent(this.enderecos[0].estado) + "&t=&z=13&ie=UTF8&iwloc=&output=embedmarginheight=");
  }

  selecionarEndereco(i: number) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + encodeURIComponent(this.enderecos[i].logradouro) + "%20" + encodeURIComponent(this.enderecos[i].numero) + "%20" + encodeURIComponent(this.enderecos[i].cidade) + "%20" + encodeURIComponent(this.enderecos[i].estado) + "&t=&z=13&ie=UTF8&iwloc=&output=embedmarginheight=");
  }

}
