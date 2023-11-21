import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { backendURL } from '../app.config';
import axios from 'axios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-form',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.css',
})
export class DetailsFormComponent {

  @Input() state = 'inactive';
  @Input() error: any;
  
  constructor(private http: HttpClient) {}

    onSubmit(form: NgForm) {

      if (form.invalid) {
        this.state = 'error';
        this.error = 'Please fill in all the fields';
        return;
      }

      this.state = 'active';
      axios.post(backendURL + '/saveData', form.value).then((response) => {
        this.state = 'submitted';
        form.reset();
      }).catch((error) => {
        this.state = 'error';
        this.error = error;
      })
  }
}
