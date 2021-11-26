import { Injectable } from '@angular/core';
import swal, { SweetAlertOptions } from "sweetalert2";
import { TranslateService } from "@ngx-translate/core";


@Injectable()
export class AlertService {

  private traducaoConfirmacao: string = 'Confirmacao';
  private traducaoAlerta: string = 'Alerta';
  private traducaoSim: string = 'Sim';
  private traducaoNao: string = 'Nao';
  private traducaoSucesso: string = 'Sucesso';
  private traducaoVoltar: string = 'Voltar';
  private menssagemOK: string = 'Ok';

  constructor(private translateService: TranslateService) {
  }

  swal(args: SweetAlertOptions) {
    return swal.fire(args);
  }

  public confirm(text: string, title?: string, confirmButtonText?: string, cancelButtonText?: string, callback?: any ): Promise<any> {
    const baseOptions = {
      confirmButtonText: confirmButtonText == '' || confirmButtonText == null ? this.traducaoSim : confirmButtonText,
      cancelButtonText: cancelButtonText == '' || cancelButtonText == null ? this.traducaoNao : cancelButtonText,
      title: title == '' || title == null ? this.traducaoConfirmacao : title,
      text: text
    };

    return this.swal({
      title: baseOptions.title,
      html: baseOptions.text,
      confirmButtonText: baseOptions.confirmButtonText,
      cancelButtonText: baseOptions.cancelButtonText,
      showCancelButton: true
    }).then( () => {console.log(213)}, function (dismiss) {
        return false;
    });
  }

  public success(text: string, title?: string, confirmButtonText?: string): Promise<any> {
    const baseOptions = {
      showCancelButton: false,
      cancelButtonText: this.traducaoNao,
      confirmButtonText: confirmButtonText == '' || confirmButtonText == null ? this.menssagemOK : confirmButtonText,
      title: title == '' || title == null ? this.traducaoSucesso : title,
      text: text
    };

    return this.swal({
      title: baseOptions.title,
      html: baseOptions.text,
      confirmButtonText: baseOptions.confirmButtonText
    });
  }

  public warning(text: string, title?: string, confirmButtonText?: string): Promise<any> {
    const baseOptions = {
      showCancelButton: false,
      cancelButtonText: this.traducaoNao,
      confirmButtonText: confirmButtonText == "" || confirmButtonText == null ? this.menssagemOK : confirmButtonText,
      title: title == '' || title == null ? this.traducaoAlerta : title,
      text: text
    };

    return this.swal({
      title: baseOptions.title,
      html: baseOptions.text,
      confirmButtonText: baseOptions.confirmButtonText
    });
  }

  public error(text: string, title?: string, confirmButtonText?: string): Promise<any> {
    
    const baseOptions = {
      showCancelButton: false,
      cancelButtonText: this.traducaoNao,
      confirmButtonText: confirmButtonText == '' || confirmButtonText == null ? this.menssagemOK : confirmButtonText,
      title: title == '' || title == null ? this.traducaoAlerta : title,
      text: text
    };

    return this.swal({
      title: baseOptions.title,
      html: baseOptions.text,
      confirmButtonText: baseOptions.confirmButtonText
    });
  }

}
