import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // útil para directivas básicas como *ngIf
import { UtilService } from '../../services/validations/util.service';
import { TemperaturaService } from '../../services/temperatura.service';

@Component({
  selector: 'app-tiempo',
  standalone: true, // ← MUY importante si estás usando standalone components
  imports: [CommonModule, ReactiveFormsModule], // ← Aquí importa ReactiveFormsModule
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private _util: UtilService, private _tiempo: TemperaturaService) {
    this.iniciaFormulario();
  }

  ngOnInit(): void {}

  iniciaFormulario(): void {
    this.formulario = this.fb.group({
      ciudad: ['', Validators.required, , Validators.pattern('ˆ[a-zA-Z]*$')],
      codigo: ['', Validators.required, Validators.pattern('ˆ[a-zA-Z]*$')]
    });
  }

  consultar(): void {
    console.log(this.formulario.value);

    this._tiempo.getEstadoTiempo(this.formulario.get('ciudad')?.value, this.formulario.get('codigo')?.value)
      .subscribe((respuesta: any) => {
        console.log("respuesta: ", respuesta);
         })
  }
}
