import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [

	{ path: '', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'logout', component: LogoutComponent},
	{ path: 'dashboard/upload', component: UploadComponent},
	{ path: 'dashboard/rules', component: RulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
