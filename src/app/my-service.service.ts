import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  private data: string[] = [];
  getData(): string[] {
    return this.data;}
    addData(newData: string) {
      this.data.push(newData);
    }
}
