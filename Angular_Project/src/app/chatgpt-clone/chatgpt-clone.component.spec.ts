import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatgptCloneComponent } from './chatgpt-clone.component';

describe('ChatgptCloneComponent', () => {
  let component: ChatgptCloneComponent;
  let fixture: ComponentFixture<ChatgptCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatgptCloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatgptCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
