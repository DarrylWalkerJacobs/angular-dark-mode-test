import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}

  title = 'Angular Dark Mode Test';
  darkMode = false;

  demoForm = this.formBuilder.group({
    name: '',
    select: '',
  });

  public toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  public onSubmit() {
    // Process checkout data here
    console.warn('Your order has been submitted', this.demoForm.value);
  }
}
