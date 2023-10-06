import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { RegistroComponent } from './registro/registro.component';
import { LocalComponent } from './local/local.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreComponent,
    PalestrantesComponent,
    PatrocinadoresComponent,
    RegistroComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
