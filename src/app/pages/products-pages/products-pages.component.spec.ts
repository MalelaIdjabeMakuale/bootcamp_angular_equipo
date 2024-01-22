import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPagesComponent } from './products-pages.component';

describe('ProductsPagesComponent', () => {
  let component: ProductsPagesComponent;
  let fixture: ComponentFixture<ProductsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
