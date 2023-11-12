import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WspIconComponent } from './wsp-icon.component';

describe('WspIconComponent', () => {
  let component: WspIconComponent;
  let fixture: ComponentFixture<WspIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WspIconComponent]
    });
    fixture = TestBed.createComponent(WspIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
