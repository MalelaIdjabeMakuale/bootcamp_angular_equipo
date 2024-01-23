import { FilterComponent } from './../../components/filter/filter.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorsComponent } from '../../components/form-errors/form-errors.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FilterComponent, FormErrorsComponent, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  isSubmitted:boolean = false;
  contactForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.contactForm = this.formBuilder.group(
     {
       name: ["", [Validators.required, Validators.minLength(5)]],
       email: ["", [Validators.required]],
       info: ["", [Validators.required]],
     }
    )
  }

  onSubmit(){
    this.isSubmitted= true;
    console.log(this.contactForm)
    console.log(this.contactForm.value)
  }

}
