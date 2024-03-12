import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWrapperComponent } from './custom-wrapper.component';

describe('CustomWrapperComponent', () => {
  let component: CustomWrapperComponent;
  let fixture: ComponentFixture<CustomWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomWrapperComponent]
    });
    fixture = TestBed.createComponent(CustomWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
