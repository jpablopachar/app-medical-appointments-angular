import { Component, Input } from '@angular/core';
import { Patient } from 'src/app/models/Patient';

@Component({
  selector: 'app-patient-list',
  template: `
    <div class="md:w-1/2 lg:w-auto md:h-screen overflow-y-scroll">
      <ng-container *ngIf="patients && patients.length > 0 else noPatients">
        <h2 class="font-black text-3xl text-center">Listado de pacientes</h2>
        <p class="text-lg mt-5 text-center">Administra tus <span class="text-indigo-600 font-bold">Pacientes y Citas</span></p>
      </ng-container>
      <ng-template #noPatients>
      <h2 class="font-black text-3xl text-center">No hay pacientes</h2>
        <p class="text-lg mt-5 text-center">
          Comienza agregando pacientes 
          <span class="text-indigo-600 font-bold">
            y aparecerán en este lugar
          </span>
        </p>
      </ng-template>
    </div>
  `,
  styles: [
  ]
})
export class PatientListComponent {
  @Input() patients!: Patient[];

  constructor() { }
}
