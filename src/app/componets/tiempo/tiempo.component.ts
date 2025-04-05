import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // útil para directivas básicas como *ngIf

@Component({
  selector: 'app-tiempo',
  standalone: true, // ← MUY importante si estás usando standalone components
  imports: [CommonModule, ReactiveFormsModule], // ← Aquí importa ReactiveFormsModule
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.iniciaFormulario();
  }

  ngOnInit(): void {}

  iniciaFormulario(): void {
    this.formulario = this.fb.group({
      ciudad: ['Santiago'],
      codigo: ['CL']
    });
  }

  consultar(): void {
    console.log(this.formulario.value);
  }
}
