import { Component, OnInit } from '@angular/core';
import { MotoService } from 'src/app/Dati/moto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    MotoData:any;
    constructor(private service:MotoService){

    }
    ngOnInit():void{
      this.MotoData=this.service.Moto;
    }
}
