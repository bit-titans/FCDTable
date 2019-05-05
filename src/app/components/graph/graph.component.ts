import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  seriesData: number[];
  public categories: string[] = ['FCD', 'FC', 'SC', 'P'];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => { this.seriesData = message.split(',').map(Number); console.log(this.seriesData) });
  }

}
