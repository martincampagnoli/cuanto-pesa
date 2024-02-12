import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  firstFormGroup = this._formBuilder.group({
    gameTitle: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    target: [''],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
