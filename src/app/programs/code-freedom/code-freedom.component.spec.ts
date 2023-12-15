import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFreedomComponent } from './code-freedom.component';

describe('CodeFreedomComponent', () => {
  let component: CodeFreedomComponent;
  let fixture: ComponentFixture<CodeFreedomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeFreedomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeFreedomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
