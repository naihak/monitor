import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollersComponent } from './pollers.component';

describe('PollersComponent', () => {
  let component: PollersComponent;
  let fixture: ComponentFixture<PollersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
