import { Component } from '@angular/core';

@Component({
  selector: 'app-snack-bar-component',
  templateUrl: './snack-bar.component.html',
  styles: [
    `
      .snack-bar {
        color: hotpink;
      }
    `,
  ],
  standalone: true,
})
export class SnackBarComponent {}
