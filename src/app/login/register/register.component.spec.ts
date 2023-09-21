import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should be greater than", () => {
    expect(5).toBeGreaterThan(3);
  })
  
  it("should be less than", () => {
    expect(3).toBeLessThan(5);
  })

  it("should be greater than or equal to", () => {
    expect(5).toBeGreaterThanOrEqual(5);
  })

  it("should be less than or equal to", () => {
    expect(2).toBeLessThanOrEqual(5);
  })

  it("Should be of legal age or exactly 18", () => {
    const age = 19;
    expect(age).toBeGreaterThanOrEqual(18);
  });

  
});
