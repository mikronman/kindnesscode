import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BennyWallComponent } from './benny-wall.component';

describe('BennyWallComponent', () => {
  let component: BennyWallComponent;
  let fixture: ComponentFixture<BennyWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BennyWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BennyWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
