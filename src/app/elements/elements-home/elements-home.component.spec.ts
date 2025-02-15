import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsHomeComponent } from './elements-home.component';

describe('ElementsHomeComponent', () => {
  let component: ElementsHomeComponent;
  let fixture: ComponentFixture<ElementsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
