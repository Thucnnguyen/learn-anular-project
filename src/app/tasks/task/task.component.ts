import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  time: string;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;
    
}
