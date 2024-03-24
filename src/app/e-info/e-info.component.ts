import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../data.service';
@Component({
  selector: 'app-e-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './e-info.component.html',
  styleUrl: './e-info.component.css',
  providers:[DataService]
})
export class EInfoComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  infoReceived1: string[]=[];

  infoReceived2: string[]=[];

  infoReceived3: string[]=[];
  dservice:undefined;
  constructor(private dataService:DataService){}

  getInfoFromService1(){

    this.infoReceived1 = this.dataService.getInfo1();

  }
  getInfoFromService2(){

    this.infoReceived2 = this.dataService.getInfo2();

  }

  getInfoFromService3(){

    this.infoReceived3 = this.dataService.getInfo3()

  }
}
