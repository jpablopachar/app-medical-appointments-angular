import { Injectable } from '@angular/core';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public setPatients(patients: string): void {
    localStorage.setItem('patients', patients);
  }

  public getPatients(): Patient[] {
    return JSON.parse(localStorage.getItem('patients') as string) as Patient[];
  }
}
