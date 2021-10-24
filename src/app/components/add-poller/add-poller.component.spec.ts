import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPollerComponent } from './add-poller.component';

describe('AddPollerComponent', () => {
  let component: AddPollerComponent;
  let fixture: ComponentFixture<AddPollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
