import { Component, Input } from '@angular/core';
import { Stay } from 'src/app/models/stay.model';
import { StayService } from 'src/app/services/stay.service';
import * as mockResponseJSON from '../../../data/mockResponse.json';

@Component({
  selector: 'stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.scss']
})
export class StayListComponent {
  constructor(private stayService: StayService) { 
    //this.stays = mockResponse as unknown as Stay[];
    console.log("mockResponse", mockResponseJSON)

  }
  public mockResponse = mockResponseJSON;
  //public stays: Stay[] | null = mockResponse
  //@Input() stays!: Stay[] | null;
}
