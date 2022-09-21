import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusChildComponent } from './aboutus-child.component';

describe('AboutusChildComponent', () => {
  let component: AboutusChildComponent;
  let fixture: ComponentFixture<AboutusChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
