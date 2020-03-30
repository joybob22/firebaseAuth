import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { ContactListComponent } from './contact/company-list/contact-list.component';
import { ContactEditComponent } from './contact/company-edit/contact-edit.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'company/all', component: CompanyListComponent },
  { path: 'company/:id', component: CompanyEditComponent },
  { path: 'contact/all', component: ContactListComponent },
  { path: 'contact/:id', component: ContactEditComponent },
  { path: '**', redirectTo: 'company/all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
