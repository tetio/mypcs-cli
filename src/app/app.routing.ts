import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);