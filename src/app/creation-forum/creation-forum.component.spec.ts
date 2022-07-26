import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationForumComponent } from './creation-forum.component';

describe('CreationForumComponent', () => {
  let component: CreationForumComponent;
  let fixture: ComponentFixture<CreationForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
