import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { StartViewComponent } from './start-view/start-view.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'start',
	},
	{
		path: 'start',
		component: StartViewComponent,
	},
	{
		path: 'login',
		component: LoginViewComponent,
	},
	{
		path: 'user/profile',
		component: UserProfileComponent,
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
