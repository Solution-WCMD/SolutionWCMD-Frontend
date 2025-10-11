import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFooterComponent } from './info-footer.component';

describe('InfoFooterComponent', () => {
  let component: InfoFooterComponent;
  let fixture: ComponentFixture<InfoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
