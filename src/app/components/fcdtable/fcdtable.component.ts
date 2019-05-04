import {Component, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Student } from '../../models/student.model';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-fcd-table',
  templateUrl: './fcdtable.component.html',
  styleUrls: ['./fcdtable.component.css']
})
export class FCDtableComponent implements OnInit {
  dataSource;
  private serviceUrl = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'usn', 'intmarks', 'extmarks', 'totalmarks', 'fcd'];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.serviceUrl = 'http://127.0.0.1:8000/getfcd/?sc=17MAT21&batch=2017';
    this.getStudent().subscribe((students: Student[]) => {
      this.dataSource = new MatTableDataSource(students);
      this.dataSource.paginator = this.paginator;
   });
  }
  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.serviceUrl);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
