import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from './core/service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private cureService: CrudService) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      message: '',
    });
  }
  onSubmit(form: FormGroup) {
    console.log(this.myForm.value);
    this.cureService.postUser(this.myForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
