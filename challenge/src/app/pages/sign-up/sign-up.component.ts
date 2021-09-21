import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  placeOfBusiness: string = '';
  fundInput: string = '';
  binding: string = '';
  errorMsg: string;
  businessDescInput: string = '';

  constructor() {
    this.errorMsg = 'Complete this field.';
  }

  ngOnInit(): void {}

  Validar() {
    



  }
}
