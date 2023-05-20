import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1 } from './task1.component';

describe('Task1', () => {
  let component: Task1;
  let fixture: ComponentFixture<Task1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task1 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
