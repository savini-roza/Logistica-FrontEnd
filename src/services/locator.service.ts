import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocatorService {

  public services: any = {};
  public urlBase: string;

  constructor() {

    this.urlBase = "/api/";

    this.services.LiberarVeiculo = this.urlBase + "veiculos/${veiculoId}/liberar";
    this.services.Veiculos = this.urlBase + "veiculos";
    this.services.Veiculo = this.urlBase + "veiculos/";

    this.services.LiberarMotorista = this.urlBase + "funcionarios/${funcionarioId}/liberar";
    this.services.Funcionarios = this.urlBase + "funcionarios";
    this.services.Funcionario = this.urlBase + "funcionarios/";

    this.services.Romaneios = this.urlBase + "romaneios";
    this.services.RegistrarEntrega = this.urlBase + "romaneios/${romaneioId}/notas/";
    this.services.Romaneio = this.urlBase + "romaneios/";
    this.services.ObterCoordenadas = this.urlBase + "romaneios/coordenadas/";

    this.services.RegistrarUsuario = this.urlBase + "register";
    this.services.ObterUsuario = this.urlBase + "usuarios/";

    this.services.Produtos = this.urlBase + "produtos";
    this.services.Produto = this.urlBase + "produtos/";

    this.services.Notas = this.urlBase + "notas/";
    this.services.Nota = this.urlBase + "nota/";

    this.services.Cliente = this.urlBase + "clientes/";
  }
}
