import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import{ConexionService}from'./service/conexion.service';
import { ListaComponent } from './compomentes/lista/lista.component';
import { AddlistaComponent } from './compomentes/addlista/addlista.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AddlistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule 
  ],
  providers: [ ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
