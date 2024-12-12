import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  constructor() {
    // Bind the class context to the event handler
    this.init();
  }

  private init(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('settings-form') as HTMLFormElement;

      if (form) {
        form.addEventListener('submit', (event: Event) => {
          event.preventDefault(); // Prevent the default form submission behavior

          // Create an object to hold the form data
          const formData = new FormData(form);
          const settingsData: { [key: string]: string | boolean } = {};

          // Populate the settingsData object with form values
          formData.forEach((value, key) => {
            // Check if the field is a checkbox
            if (key === 'email_notifications') {
              settingsData[key] = (value as string) === 'on'; // Convert checkbox value
            } else {
              settingsData[key] = value.toString(); // Convert other values to string
            }
          });

          // Log the collected data (for debugging or future use)
          console.log('Settings data:', settingsData);

          // Simulate saving data (e.g., display an alert or send an AJAX request)
          alert('Settings have been saved successfully!');
        });
      }
    });
  }
}

// Initialize the SettingsComponent instance
new SettingsComponent();
