import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { RatingModule } from 'ng-starrating';
import { CadastroVeiculosComponent } from '../components/cadastro-veiculos/cadastro-veiculos.component';
import { ImportacaoNotasComponent } from '../components/importacao-notas/importacao-notas.component';
import { LoginComponent } from '../components/login/login.component';
import { MenuComponent } from '../components/menu/menu.component';
import { NotaFiscalComponent } from '../components/nota-fiscal/nota-fiscal.component';
import { PesquisaComponent } from '../components/pesquisa/pesquisa.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import { RastreabilidadeComponent } from '../components/rastreabilidade/rastreabilidade.component';
import { RomaneioComponent } from '../components/romaneio/romaneio.component';
import { RotasComponent } from '../components/rotas/rotas.component';
import { TransporteComponent } from '../components/transporte/transporte.component';
import { AlertService } from '../services/alert.service';
import { LocatorService } from '../services/locator.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroVeiculosComponent,
    ImportacaoNotasComponent,
    LoginComponent,
    MenuComponent,
    NotaFiscalComponent,
    PesquisaComponent,
    RastreabilidadeComponent,
    RomaneioComponent,
    RotasComponent,
    TransporteComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    RatingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    LocatorService,
    HttpClient,
    AlertService,
    TranslateService,
    TranslateStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
