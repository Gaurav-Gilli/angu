import { Component, OnInit } from '@angular/core';
import { PansexualService } from '../pansexual.service';
import { IEmployee } from './gay';

@Component({
  selector: 'app-gay',
  templateUrl: './gay.component.html',
  styleUrls: ['./gay.component.css']
})
export class GayComponent  implements OnInit{
  public employees:any = [];
  constructor(private pan:PansexualService){}
   ngOnInit(): void {
     this.pan.something()
     .subscribe((data:any) => this.employees = data.users);
   }
   i:number = 10 ;
   fruit:boolean = false;
   fruits:string[] = ["raju", "shyam" , "mangal"]
   trans(){
    console.log("trans here")
    this.i = 11;
    this.fruit = !this.fruit;
   }
   

}
