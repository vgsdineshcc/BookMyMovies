import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleformvalidatorComponent } from './sampleformvalidator.component';

describe('SampleformvalidatorComponent', () => {
  let component: SampleformvalidatorComponent;
  let fixture: ComponentFixture<SampleformvalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleformvalidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleformvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
