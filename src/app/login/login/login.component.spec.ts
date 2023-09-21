import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { validate } from 'uuid';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the loginform with values', () => {
    expect(component.loginForm.get('email')?.value).toEqual('');
    expect(component.loginForm.get('password')?.value).toEqual('');
    expect(component.loginForm.get('rememberMe')?.value).toBeFalsy();
  });

  it('should have rememberMe initially set to true', () => {
    component.loginForm.get('rememberMe')?.setValue(true);
    expect(component.loginForm.get('rememberMe')?.value).toBeTrue();
  });
  it('should have rememberMe initially set to false', () => {
    expect(component.loginForm.get('rememberMe')?.value).toBeFalse();
  });

  it('', () => {
    const value = undefined;
    expect(value).toBeFalsy();
  });


  it('should should have been called with this data', () => {
    spyOn(console, 'log');
    component.loginForm.controls['email'].setValue('test@example.com');
    component.loginForm.controls['password'].setValue('password');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
      rememberMe: false
    })
  });

  it('should initialize rememberMe as false', () => {
    expect(component.loginForm.get('rememberMe')?.value).toBe(false);
  });

  it('should initialize the form correctly', () => {
    const expectFormValue = {
      email: '',
      password: '',
      rememberMe: false
    }
    expect(component.loginForm.value).toEqual(expectFormValue);
  });

  it('should initialize email as null', () => {
    component.loginForm.controls['email'].setValue(null);
    const email = component.loginForm.get('email')?.value;
    expect(email).toBeNull();
  });

  it('should initialize password as null', () => {
    component.loginForm.controls['password'].setValue(undefined);
    const password = component.loginForm.get('password')?.value;
    expect(password).toBeUndefined();
  });

  it('should contain a password field', () => {
    const formControls = Object.keys(component.loginForm.controls);
    expect(formControls).toContain('password'); 
  });

  it('should have a loginForm property', () => {
    expect(component.loginForm).toBeDefined();
  });
  
  it('Should login with valid credentials', () => {
    const loginForm = { username: "user", password: "password"};
    const message = login(loginForm);
    expect(message).toMatch("Welcome, user");
  });

  it('Should search for a term in the text', () => {
    const text = "This is a text search test";
    const term = "test"
    expect(text).toContain(term);
  });

  
  afterEach(() => {
    fixture.destroy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
  

});



function login(loginForm: { username: string; password: string; }) {
  if (loginForm.username === "user" && loginForm.password === "password"){
    return "Welcome, user"
  } else {
    return "Invalid crredentials"
  }
}

