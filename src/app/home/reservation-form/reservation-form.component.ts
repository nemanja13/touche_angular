import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IReservationRequest } from 'src/app/interfaces/i-reservation';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  public form: FormGroup;
  public howMany: any[] = [
    {
      value: 0,
      title: "How Many"
    },
    {
      value: 1,
      title: "One Person"
    },
    {
      value: 2,
      title: "Two Person"
    },
    {
      value: 3,
      title: "Three Person"
    },
    {
      value: 4,
      title: "Four Person"
    },
    {
      value: 5,
      title: "Five Person"
    },
    {
      value: 6,
      title: "Six Person"
    }
  ]


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control("", [Validators.required]),
      lastName: this.formBuilder.control("", [Validators.required]),
      email: this.formBuilder.control("", [Validators.required, Validators.email]),
      phoneNumber: this.formBuilder.control("", [Validators.required, Validators.pattern("[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")]),
      howMany: this.formBuilder.control("0", [Validators.required, Validators.min(1)]),
      date: this.formBuilder.control("", [Validators.required]),
      message: this.formBuilder.control("", [Validators.required])
    });
  }

  prepareDataToSend(){
    let formValue: IReservationRequest = this.form.getRawValue();

    let dataToSend: IReservationRequest = {
      firstName : formValue.firstName,
      lastName : formValue.lastName,
      email : formValue.email,
      phoneNumber : formValue.phoneNumber,
      date : formValue.date,
      howMany : formValue.howMany,
      message : formValue.message
    };

    return dataToSend;
  }

  save(){
    if(this.form.valid){
      let data = this.prepareDataToSend();
      console.log(data)
      alert('I wrote the data in the console');
      this.init();
    }
    else{
      alert("Form is not valid!");
    }
  }



}
