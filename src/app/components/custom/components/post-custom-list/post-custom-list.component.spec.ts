import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCustomListComponent } from './post-custom-list.component';

describe('PostCustomListComponent', () => {
  let component: PostCustomListComponent;
  let fixture: ComponentFixture<PostCustomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostCustomListComponent]
    });
    fixture = TestBed.createComponent(PostCustomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
