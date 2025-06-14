import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksFormComponent } from './marks-form.component';

describe('MarksFormComponent', () => {
  let component: MarksFormComponent;
  let fixture: ComponentFixture<MarksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarksFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
