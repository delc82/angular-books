import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './components/books/books.component';

const APP_ROUTER: Routes = [
    {path: '', redirectTo: 'books/:id', pathMatch: 'full'},
    {path: 'books/:id', component: BooksComponent}
];

export const router = RouterModule.forRoot(APP_ROUTER);