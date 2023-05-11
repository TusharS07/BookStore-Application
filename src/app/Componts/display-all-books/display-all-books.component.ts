import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-display-all-books',
  templateUrl: './display-all-books.component.html',
  styleUrls: ['./display-all-books.component.scss']
})
export class DisplayAllBooksComponent implements OnInit {


  @Input() AllBooksData: any

  SearchText: any;

  constructor(
    private dataService: DataServiceService,
    private route: Router
  ) { }

  
  ngOnInit(): void {
    this.filterBooksAsPerSearch();
  }

  filterBooksAsPerSearch() {
    this.dataService.receiveSearchValue.subscribe((res) => {
      this.SearchText = res;
    })
  }

  showBookDetails(book:any){
    this.dataService.sendSearchValue(book);
    this.route.navigateByUrl('/dashboard/quickView');
  }
}
