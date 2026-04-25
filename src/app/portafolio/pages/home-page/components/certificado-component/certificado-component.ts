import { Component } from '@angular/core';
import { InfoCertificadosComponent } from "../info-certificados-component/info-certificados-component";

@Component({
  selector: 'certificado-component',
  imports: [InfoCertificadosComponent],
  templateUrl: './certificado-component.html',
})
export class CertificadoComponent { }
