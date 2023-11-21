import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { JsonToTableModule } from 'json-to-table-com';

@Component({
  selector: 'app-view-saved-forms',
  standalone: true,
  imports: [CommonModule,JsonToTableModule],
  templateUrl: './view-saved-forms.component.html',
  styleUrl: './view-saved-forms.component.css'
})
export class ViewSavedFormsComponent {

  data = []
  error = null;

  constructor() {
    axios.get('http://localhost:4201/getData').then((response) => {
      this.data = response.data;
    }).catch((error) => {
      this.error = error;
    })
  }

  stringify(obj:any) {
    return JSON.stringify(obj);
  }

}
