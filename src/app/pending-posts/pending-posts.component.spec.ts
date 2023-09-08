import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPostsComponent } from './pending-posts.component';

describe('PendingPostsComponent', () => {
  let component: PendingPostsComponent;
  let fixture: ComponentFixture<PendingPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingPostsComponent]
    });
    fixture = TestBed.createComponent(PendingPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
