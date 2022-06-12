import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableVenueComponent } from './available-venue.component';

describe('AvailableVenueComponent', () => {
  let component: AvailableVenueComponent;
  let fixture: ComponentFixture<AvailableVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableVenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
