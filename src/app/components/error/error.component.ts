import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div
      className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"
    >
      {{ message }}
    </div>
  `
})
export class ErrorComponent {
  @Input() message!: string;
}
