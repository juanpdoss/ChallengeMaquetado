import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  countryOfIncorporation = '';
  placeOfBusiness: string = '';
  fundInput: string = '';
  binding: string = '';
  errorMsg: string = '';
  legalEntityName = '';
  businessDescInput: string = '';

  constructor() {}

  ngOnInit(): void {}
}
