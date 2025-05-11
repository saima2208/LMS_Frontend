import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordClassComponent } from './record-class.component';

describe('RecordClassComponent', () => {
  let component: RecordClassComponent;
  let fixture: ComponentFixture<RecordClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
