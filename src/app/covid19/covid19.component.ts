import { Component, OnInit, ViewChild } from '@angular/core';
import { Trackercovid19Service } from '../trackercovid19.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface covid19reports{
  date: string;
  state: string;
  fips: string;
  cases: number;
  deaths:number;
  updated: number;
}

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  ELEMENT_DATA : covid19reports [];
  displayedColumns: string[] = ['date','state','fips','cases','deaths','updated'];
  dataSource = new MatTableDataSource<covid19reports>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator,{static : true}) paginator : MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
 

  constructor(private service:Trackercovid19Service) { }

  ngOnInit(){
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllreports();
  }

  public getAllreports(){
let resp=this.service.covid19reports();
    resp.subscribe(report=>this.dataSource.data=report as covid19reports[]);
  }
  applyFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
