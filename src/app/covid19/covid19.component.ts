import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import {CountryReports} from 'src/CountryReports';
import { Covid19Service } from '../covid19.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  ELEMENT_DATA: CountryReports[] = [];

  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths','todayDeaths','recovered','todayRecovered','active','critical','tests'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private service:Covid19Service) { 

  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getReports();
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getReports(){

    let res = this.service.getCovid19ServiceReport();
    res.subscribe((report) => this.dataSource.data=report as CountryReports[]);
  }
}
 
