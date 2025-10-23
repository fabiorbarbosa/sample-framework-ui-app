import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@sample-framework-ui/button';
import { CardComponent } from '@sample-framework-ui/card';
import { InputComponent } from '@sample-framework-ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CardComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sample-framework-ui-app';
}
