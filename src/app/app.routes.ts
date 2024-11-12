import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VotingComponent } from './pages/customer/voting/voting.component';
import { RegisteredComponent } from './pages/customer/registered/registered.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,

    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.routes').then(m=>m.adminRoutes),
    },
    {
        path: 'customer',
        loadChildren: () =>import('./pages/customer/customer.routes'). then(m=>m.customerRoutes),
    },
    {
        path: 'auth',
        loadChildren: () =>import('./pages/auth/auth.routes'). then(m=>m.authRoutes),
    },
    {
        path: 'voting/:id',
        component: VotingComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];
