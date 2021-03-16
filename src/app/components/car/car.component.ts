import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car-dto.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cardtos:CarDto[] = [];
  dataLoaded = false;

  constructor(private carDtoService:CarDtoService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarDtos();
  }

  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response=>{
      this.cardtos=response.data;
      this.dataLoaded=true;
    });
  }

  getCarsByBrand(id:number){
    this.carDtoService.getCarsByBrand(id).subscribe(response=>{
      this.cardtos=response.data
      this.dataLoaded=true;
    })
  }
  getCarsByColor(id:number){
    this.carDtoService.getCarsByColor(id).subscribe(response=>{
      this.cardtos=response.data
      this.dataLoaded=true;
    })
  }
}
