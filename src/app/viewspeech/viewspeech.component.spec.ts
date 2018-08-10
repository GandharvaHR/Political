import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspeechComponent } from './viewspeech.component';

describe('ViewspeechComponent', () => {
  let component: ViewspeechComponent;
  let fixture: ComponentFixture<ViewspeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
