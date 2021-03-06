import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BooksService } from '../../shared/books.service';
import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BooksService]
})
export class BookComponent implements OnInit {
  id: number;
  private sub: any;
  books: Book[] = [];

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {

    this.books = this.booksService.getBooks();

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });

  }

}