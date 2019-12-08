
import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl): { [key: string]: any } | null {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(control.value).toLowerCase());
    return isValid ? null : { 'email': { value: control.value } };
}
