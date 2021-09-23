import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  countryOfIncorporation: string = '';
  otherBusinessName: string = '';
  fundInput: string = '';
  legalEntityName = '';
  businessDescInput: string = '';
  numberEmployees: string = '';
  typeOfbusiness: string = '';
  placeOfBusinessOperation: string = '';
  bool: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
