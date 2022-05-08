import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientComponent } from './components/patient/patient.component';
import { AppService } from './services/app.service';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FormComponent,
    HeaderComponent,
    PatientComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
