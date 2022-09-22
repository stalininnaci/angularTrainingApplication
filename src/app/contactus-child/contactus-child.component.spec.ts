import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusChildComponent } from './contactus-child.component';

describe('ContactusChildComponent', () => {
  let component: ContactusChildComponent;
  let fixture: ComponentFixture<ContactusChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
