import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {

  constructor(private dataService: DataServiceService) { }

  logout() {
    localStorage.clear;
  }

  searchBook(event: any) {
    this.dataService.sendSearchValue(event.target.value)
  }

}
