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

/**
 * NOTE: форма ввода данных параметров(настроек) для провайдера данных - API Selectel(Vscale)
 */
const formFields: FormlyFieldConfig[] = [
  {
    key: 'url',
    type: 'input',
    templateOptions: {
      label: 'путь к серверу',
      placeholder: 'url размещения прокси ',
      required: true,
      // pattern:    "^(http(s)?://){1}[w.-]+(?:.[w.-]+)+[w-._~:/?#[]@!$&'()*+,;=.]+$",
    },
    validation: {
      messages: {
        required: () => `Является обязательным для заполнения`,
        pattern: (error, field: FormlyFieldConfig) =>
          `"${field.formControl?.value}" не является корректным значением`,
      },
    },
  },
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

@Component({
  selector: 'hc-selectel-settings-edit-form',
  templateUrl: './settings-edit-form.component.html',
  styleUrls: ['./settings-edit-form.component.scss'],
})
export class SettingsEditFormComponent implements OnInit, OnChanges {
  @Input() formData: any;

  @Output() submitData = new EventEmitter<any>();

  formGroup: FormGroup = new FormGroup({}); //this.fb.group({});

  model: any;

  fields: FormlyFieldConfig[] = formFields;

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
