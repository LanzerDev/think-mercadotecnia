import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { PaginaAdminComponent } from './components/pagina-admin/pagina-admin.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    PaginaAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
