import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PaginaAdminComponent } from './components/pagina-admin/pagina-admin.component';

const routes: Routes = [
  {
    path:'pagina-admin',
    component:PaginaAdminComponent
  },
  {
    path:'',
    component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
