/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpModule } from '@angular/http';
import { from } from 'rxjs';

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos fro the server', () => {
    const toDoService = TestBed.get(TodoService);
    spyOn(toDoService, 'getTodos').and.returnValue(from([[1, 2, 3]]));
    fixture.detectChanges();
    expect(component.todos).toBe([1, 2, 3]);
  });


  it('should load todos fro the server', () => {
    const toDoService = TestBed.get(TodoService);
    spyOn(toDoService, 'getTodos').and.returnValue(from([[1, 2, 3]]));
    fixture.detectChanges();
    expect(component.todos).toBe([1, 2, 3]);
  });


});
