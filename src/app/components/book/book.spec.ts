import { RouterTestingModule } from '@angular/router/testing';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ BookComponent ],
        imports: [ RouterTestingModule ],
        providers: [
        {
            provide: ActivatedRoute,
            useValue: {
            params: Observable.of({id:0})
            }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Create component with first book information', () => {
    expect(component).toBeTruthy();
  });
});