import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmultipleimagesComponent } from './showmultipleimages.component';

describe('ShowmultipleimagesComponent', () => {
  let component: ShowmultipleimagesComponent;
  let fixture: ComponentFixture<ShowmultipleimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmultipleimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowmultipleimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
