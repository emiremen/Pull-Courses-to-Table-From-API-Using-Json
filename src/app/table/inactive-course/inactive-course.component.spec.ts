import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveCourseComponent } from './inactive-course.component';

describe('InactiveCourseComponent', () => {
  let component: InactiveCourseComponent;
  let fixture: ComponentFixture<InactiveCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
