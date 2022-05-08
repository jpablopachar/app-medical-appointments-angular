import { Component } from '@angular/core';
import { Patient } from './models/Patient';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mx-auto mt-20">
      <app-header></app-header>
      <div class="mt-12 md:flex">
        <app-form></app-form>
        <app-patient-list></app-patient-list>
      </div>
    </div>
  `
})
export class AppComponent {
  private _patients: Patient[];

  constructor(private readonly _appService: AppService) {
    this._patients = this._appService.getPatients() ?? [];
  }
}
