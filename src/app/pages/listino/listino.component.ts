import { Component, OnInit } from '@angular/core';
import { MotoService } from 'src/app/Dati/moto.service';

@Component({
  selector: 'app-listino',
  templateUrl: './listino.component.html',
  styleUrls: ['./listino.component.css']
})
export class ListinoComponent implements OnInit{
  MotoData:any;
  constructor(private service:MotoService){

  }
  ngOnInit():void{
    this.MotoData=this.service.Moto;

  }
}
