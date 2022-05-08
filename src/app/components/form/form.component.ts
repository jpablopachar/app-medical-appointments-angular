import { Component, Input } from '@angular/core';
import { Patient } from 'src/app/models/Patient';

@Component({
  selector: 'app-form',
  template: `
    <div class="md:w-1/2 lg:w-auto">
      <h2 class="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p class="text-lg mt-5 text-center mb-10">
        Añade pacientes y
        <span class="text-indigo-600 font-bold">Administra</span>
      </p>
      <form
        class="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        (ngSubmit)="handlerSubmit()"
      >
        <app-error
          [message]="'Todos los campos son requeridos'"
          *ngIf="error"
        ></app-error>
        <div class="mb-5">
          <label class="block text-gray-700 uppercase font-bold">Mascota</label>
          <input
            type="text"
            class="border-2 w-full p-2 pt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la mascota"
            [(ngModel)]="patient.name"
            [ngModelOptions]="{standalone: true}"
          />
        </div>
        <div class="mb-5">
          <label class="block text-gray-700 uppercase font-bold"
            >Propietario</label
          >
          <input
            type="text"
            class="border-2 w-full p-2 pt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietario"
            [(ngModel)]="patient.owner"
            [ngModelOptions]="{standalone: true}"
          />
        </div>
        <div class="mb-5">
          <label class="block text-gray-700 uppercase font-bold">Email</label>
          <input
            type="email"
            class="border-2 w-full p-2 pt-2 placeholder-gray-400 rounded-md"
            placeholder="Email del propietario"
            [(ngModel)]="patient.email"
            [ngModelOptions]="{standalone: true}"
          />
        </div>
        <div class="mb-5">
          <label class="block text-gray-700 uppercase font-bold">Alta</label>
          <input
            type="date"
            class="border-2 w-full p-2 pt-2 placeholder-gray-400 rounded-md"
            placeholder="Fecha del alta"
            [(ngModel)]="patient.date"
            [ngModelOptions]="{standalone: true}"
          />
        </div>
        <div class="mb-5">
          <label class="block text-gray-700 uppercase font-bold"
            >Síntomas</label
          >
          <textarea
            class="border-2 w-full p-2 pt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            [(ngModel)]="patient.symptoms"
            [ngModelOptions]="{standalone: true}"
          ></textarea>
        </div>
        <input type="submit" class="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" [value]="patient.id ? 'Editar paciente' : 'Agregar paciente'">
      </form>
    </div>
  `,
})
export class FormComponent {
  @Input() patient: Patient;

  public error: boolean;

  constructor() {
    this.patient = {
      name: '',
      owner: '',
      email: '',
      date: '',
      symptoms: '',
    };
    this.error = false;
  }

  public handlerSubmit(): void {
    if([this.patient.name, this.patient.owner, this.patient.email, this.patient.date, this.patient.symptoms].includes('')) {
      this.error = true;

      return;
    }

    this.error = false;
  }
}
