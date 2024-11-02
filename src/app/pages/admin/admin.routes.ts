import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';

export const adminRoutes: Routes = [
    {
        path:'',
        component: AdminLayoutComponent,
        children:[
            {path: 'events', component: EventListComponent},
            {path: 'events/add', component: EventFormComponent},
            {path: 'events/edit/:id', component: EventFormComponent},

        ]
    }
];
