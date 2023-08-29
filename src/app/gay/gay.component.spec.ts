import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GayComponent } from './gay.component';

describe('GayComponent', () => {
  let component: GayComponent;
  let fixture: ComponentFixture<GayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GayComponent]
    });
    fixture = TestBed.createComponent(GayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
