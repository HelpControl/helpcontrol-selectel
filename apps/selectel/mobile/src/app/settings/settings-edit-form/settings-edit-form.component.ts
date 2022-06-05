import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'hc-selectel-settings-edit-form',
  templateUrl: './settings-edit-form.component.html',
  styleUrls: ['./settings-edit-form.component.scss'],
})
export class SettingsEditFormComponent implements OnInit, OnChanges {
  @Input() formData: any;

  @Output() submitData = new EventEmitter<any>();

  formGroup: FormGroup =  new FormGroup({});//this.fb.group({});

  model: any;

  fields: FormlyFieldConfig[] = [
    {
      key: 'token',
      type: 'input',
      templateOptions: {
        label: 'Токен',
        placeholder: 'укажите активный токен',
        required: true,
        maxLength: 64,
        minLength: 64,
        pattern: '[A-Za-z0-9]{64}',
      },
      validation: {
        messages: {
          pattern: (error, field: FormlyFieldConfig) =>
            `"${field.formControl?.value}" не является корректным значением`,
        },
      },
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges({ formData }: SimpleChanges): void {
    if (formData) {
      this.formGroup.setValue(this.formData);
    }
  }

  onSubmit(event: Event) {
    if (this.formGroup.valid) {
      this.submitData.next(this.formGroup.value);
    }
  }
}
