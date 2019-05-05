import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule, MatPaginatorModule, MatSelectModule, MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FCDtableComponent} from './components/fcdtable/fcdtable.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DataService } from './services/data.service';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { GraphComponent } from './components/graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    FCDtableComponent,
    MenuComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
