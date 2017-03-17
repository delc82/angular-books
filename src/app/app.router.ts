import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './components/book/book.component';

const APP_ROUTER: Routes = [
    {path: '', redirectTo: 'book/0', pathMatch: 'full'},
    {path: 'book/:id', component: BookComponent}
];

export const routes = RouterModule.forRoot(APP_ROUTER);