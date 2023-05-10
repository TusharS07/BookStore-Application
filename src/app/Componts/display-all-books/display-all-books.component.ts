import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-all-books',
  templateUrl: './display-all-books.component.html',
  styleUrls: ['./display-all-books.component.scss']
})
export class DisplayAllBooksComponent {

  @Input() AllBooksData:any
}
