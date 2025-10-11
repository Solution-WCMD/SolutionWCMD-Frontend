import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerContentComponent } from './career-content.component';

describe('CareerContentComponent', () => {
  let component: CareerContentComponent;
  let fixture: ComponentFixture<CareerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
