import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layaout/customer-layaout.component';
import { EventCatalogComponent } from './event-catalog/event-catalog.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { InscribeFormComponent } from './inscribe-form/inscribe-form.component';
import { VotingComponent } from './voting/voting.component';

export const customerRoutes: Routes = [
    {
        path: '',
        component: CustomerLayoutComponent,
        children:[
            {path: 'catalog', component: EventCatalogComponent},
            {path: 'catalog/event/details/:id', component: EventDetailComponent},
            {path: 'inscribe-form', component: InscribeFormComponent},
            {path: 'voting', component: VotingComponent},
            
        ]

        
    }
];