import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachDeleteComponent } from './serach-delete.component';

describe('SerachDeleteComponent', () => {
  let component: SerachDeleteComponent;
  let fixture: ComponentFixture<SerachDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
