import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layaout/customer-layaout.component';
import { EventCatalogComponent } from './event-catalog/event-catalog.component';
import { EventDetailFreeComponent } from './event-detail-free/event-detail-free.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { InscribeFormComponent } from './inscribe-form/inscribe-form.component';
import { VotingComponent } from './voting/voting.component'; // Agrega esta ruta de votacion

export const customerRoutes: Routes = [
    {
        path: '',
        component: CustomerLayoutComponent,
        children: [
            { path: 'catalog', component: EventCatalogComponent },
            { path: 'catalog/:id', component: EventDetailFreeComponent },
            { path: 'catalog/:id', component: EventDetailComponent },
            { path: 'inscribe', component: InscribeFormComponent },
            { path: 'voting/:id', component: VotingComponent } // Ruta para la página de votación
        ]
    }
];
