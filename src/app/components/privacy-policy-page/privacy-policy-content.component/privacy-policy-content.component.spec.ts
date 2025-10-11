import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyContentComponent } from './privacy-policy-content.component';

describe('PrivacyPolicyContentComponent', () => {
  let component: PrivacyPolicyContentComponent;
  let fixture: ComponentFixture<PrivacyPolicyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
