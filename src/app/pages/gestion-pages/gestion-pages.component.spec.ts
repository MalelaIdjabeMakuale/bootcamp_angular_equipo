import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPagesComponent } from './gestion-pages.component';

describe('GestionPagesComponent', () => {
  let component: GestionPagesComponent;
  let fixture: ComponentFixture<GestionPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
