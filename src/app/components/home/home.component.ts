import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RealtimeDatabaseService } from './../../services/realtime-database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Card1: any[] = [];
  rowIndexArray: any[] = [];

  constructor(private service: RealtimeDatabaseService) { }

  ngOnInit(): void {

    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.Card1 = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.Card1.length+1) / 3)).keys());
      }
    );
  }

}
