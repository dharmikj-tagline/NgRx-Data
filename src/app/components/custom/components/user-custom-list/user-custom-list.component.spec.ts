import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomListComponent } from './user-custom-list.component';

describe('UserCustomListComponent', () => {
  let component: UserCustomListComponent;
  let fixture: ComponentFixture<UserCustomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserCustomListComponent]
    });
    fixture = TestBed.createComponent(UserCustomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
