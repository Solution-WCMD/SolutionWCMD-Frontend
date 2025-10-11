import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingDialogueComponent } from './funding-dialogue.component';

describe('FundingDialogueComponent', () => {
  let component: FundingDialogueComponent;
  let fixture: ComponentFixture<FundingDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingDialogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
