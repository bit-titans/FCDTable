import {Component, OnInit, ViewChild} from '@angular/core';
import { Student } from '../../models/student.model';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-fcd-table',
  templateUrl: './fcdtable.component.html',
  styleUrls: ['./fcdtable.component.css']
})
export class FCDtableComponent implements OnInit {
  dataSource;
  new;
  private serviceUrl = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'usn', 'intmarks', 'extmarks', 'totalmarks', 'fcd'];
  constructor(private http: HttpClient, private data: DataService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.data.currentMessage.subscribe(message => {this.serviceUrl = message; console.log(this.serviceUrl);   this.getStudent().subscribe((students: Student[]) => {
      this.dataSource = new MatTableDataSource(students);
      this.dataSource.paginator = this.paginator;
    }); });
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
