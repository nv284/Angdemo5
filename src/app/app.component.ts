import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';
import { NgFor } from '@angular/common';
import { CalculatorService } from './calculator.service';
import { DataService } from './data.service';
import { EInfoComponent } from './e-info/e-info.component';
import { MyServiceService } from './my-service.service';
import { response } from 'express';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,EInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
private calculateService = inject(CalculatorService);
totalValue = this.calculateService.add(234,556);

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
/*my-service 
data: string[];
  newItem!: string;
constructor(private myService: MyServiceService) {
  this.data = myService.getData();
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
addItem() {
  this.myService.addData(this.newItem);
  this.newItem = '';
}

  title = 'service1';
private cal = inject(CalculatorService);
totalValue =this.cal.add(45,30);}

 /* products: Product[] | undefined;
  productService;
  constructor(){
    this.productService=new ProductService();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getProducts(){
    this.products=this.productService.getProducts();
  }
  ==========================
data service 
infoReceived1: string[]=[];

infoReceived2: string[]=[];

infoReceived3: string[]=[]; 

getInfoFromService1(){

  this.infoReceived1 = this.dservice.getInfo1()

}

getInfoFromService2(){

  this.infoReceived2 = this.dservice.getInfo2()

}

getInfoFromService3(){

  this.infoReceived3 = this.dservice.getInfo3()

}

constructor(private dservice: DataService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
*/