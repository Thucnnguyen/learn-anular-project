import { Component, Input, SimpleChanges } from '@angular/core';
import { TaskComponent } from './task/task.component';
interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  time: string;
}
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) userId!: string;
  tasks = [
    {
      id: '1',
      title: 'Complete Project Report',
      description: 'Prepare and submit the final project report.',
      userId: 'u1',
      time: '2023-10-01T10:00:00Z',
    },
    {
      id: '2',
      title: 'Team Meeting',
      description: 'Attend the weekly team meeting to discuss progress.',
      userId: 'u2',
      time: '2023-10-02T11:00:00Z',
    },
    {
      id: '3',
      title: 'Code Review',
      description: 'Review the code changes submitted by the team.',
      userId: 'u3',
      time: '2023-10-03T12:00:00Z',
    },
    {
      id: '4',
      title: 'Client Presentation',
      description: 'Present the project updates to the client.',
      userId: 'u4',
      time: '2023-10-04T13:00:00Z',
    },
    {
      id: '5',
      title: 'Update Documentation',
      description: 'Update the project documentation with recent changes.',
      userId: 'u4',
      time: '2023-10-04T13:00:00Z',
    },
    {
      id: '6',
      title: 'Bug Fixing',
      description: 'Fix the reported bugs in the application.',
      userId: 'u5',
      time: '2023-10-05T14:00:00Z',
    },
    {
      id: '7',
      title: 'Feature Implementation',
      description: 'Implement the new feature as per the requirements.',
      userId: 'u5',
      time: '2023-10-06T15:00:00Z',
    },
  ];
  get getTasksForUser() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
}
