import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmoviewComponent } from './showmoview.component';

describe('ShowmoviewComponent', () => {
  let component: ShowmoviewComponent;
  let fixture: ComponentFixture<ShowmoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmoviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowmoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
