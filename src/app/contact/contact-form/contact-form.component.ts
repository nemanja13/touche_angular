import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMessageRequest } from 'src/app/interfaces/i-message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  public form: FormGroup;


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control("", [Validators.required]),
      lastName: this.formBuilder.control("", [Validators.required]),
      email: this.formBuilder.control("", [Validators.required, Validators.email]),
      subject: this.formBuilder.control("", [Validators.required]),
      message: this.formBuilder.control("", [Validators.required])
    });
  }

  prepareDataToSend(){
    let formValue: IMessageRequest = this.form.getRawValue();

    let dataToSend: IMessageRequest = {
      firstName : formValue.firstName,
      lastName : formValue.lastName,
      email : formValue.email,
      subject : formValue.subject,
      message : formValue.message
    };

    return dataToSend;
  }

  save(){
    if(this.form.valid){
      let data = this.prepareDataToSend();
      console.log(data)
      alert('I wrote the data in the console')
    }
    else{
      alert("Form is not valid!");
    }
  }

}
