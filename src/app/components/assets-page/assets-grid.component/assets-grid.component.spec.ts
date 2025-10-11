import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsGridComponent } from './assets-grid.component';

describe('AssetsGridComponent', () => {
  let component: AssetsGridComponent;
  let fixture: ComponentFixture<AssetsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
