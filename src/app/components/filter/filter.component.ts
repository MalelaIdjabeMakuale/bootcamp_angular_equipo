import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Output() filterEmitter = new EventEmitter();

  filterForm:any;

  constructor(private builder: FormBuilder){
    this.filterForm = this.builder.group({
      name: [""],
      price: [""],
      size: [""],
      color: [""],
      material: [""],
    })
  }


  filter(){
    this.filterEmitter.emit(this.filterForm.value);
  }

}
