import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntradasComponent } from './listado-entradas.component';

describe('ListadoEntradasComponent', () => {
  let component: ListadoEntradasComponent;
  let fixture: ComponentFixture<ListadoEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoEntradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
