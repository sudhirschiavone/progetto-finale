import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotoService } from 'src/app/Dati/moto.service';
@Component({
  selector: 'app-singolo',
  templateUrl: './singolo.component.html',
  styleUrls: ['./singolo.component.css']
})
export class SingoloComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:MotoService) { }
  getListinoId:any;
  listinoData:any;

  ngOnInit(): void {
    this.getListinoId = this.param.snapshot.paramMap.get('id');
    console.log(this.getListinoId,'getListino');
    if(this.getListinoId)
    {
      this.listinoData =  this.service.Moto.filter((value)=>{
          return value.id == this.getListinoId;
        });
        console.log(this.listinoData,'listinoData>>');
        
    }
    
  }

}