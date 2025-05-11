import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecordClassComponent } from './add-record-class.component';

describe('AddRecordClassComponent', () => {
  let component: AddRecordClassComponent;
  let fixture: ComponentFixture<AddRecordClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRecordClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecordClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
