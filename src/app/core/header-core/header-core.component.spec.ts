import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCoreComponent } from './header-core.component';

describe('HeaderCoreComponent', () => {
  let component: HeaderCoreComponent;
  let fixture: ComponentFixture<HeaderCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
