import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueerComponent } from './queer.component';

describe('QueerComponent', () => {
  let component: QueerComponent;
  let fixture: ComponentFixture<QueerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueerComponent]
    });
    fixture = TestBed.createComponent(QueerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
