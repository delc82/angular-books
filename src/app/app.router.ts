import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './components/book/book.component';

const APP_ROUTER: Routes = [
    {path: '', redirectTo: 'book/1', pathMatch: 'full'},
    {path: 'book/:id', component: BookComponent}
];

export const router = RouterModule.forRoot(APP_ROUTER);