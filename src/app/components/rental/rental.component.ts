import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalDtoService } from 'src/app/services/rental-dto.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDtos:RentalDto[] = [];

  constructor(private rentalDtoService:RentalDtoService) { }

  ngOnInit(): void {
    this.getRentalDtos();
  }

  getRentalDtos(){
    this.rentalDtoService.getRentalDtos().subscribe(response=>{this.rentalDtos=response.data});
  }
}
