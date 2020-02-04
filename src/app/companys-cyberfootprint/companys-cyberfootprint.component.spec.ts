import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysCyberfootprintComponent } from './companys-cyberfootprint.component';

describe('CompanysCyberfootprintComponent', () => {
  let component: CompanysCyberfootprintComponent;
  let fixture: ComponentFixture<CompanysCyberfootprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanysCyberfootprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanysCyberfootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
