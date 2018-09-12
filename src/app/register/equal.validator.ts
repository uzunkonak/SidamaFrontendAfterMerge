import {Directive, forwardRef, Attribute, Input, HostListener} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS, ValidationErrors} from '@angular/forms';

@Directive({
    selector: '[validateEqual]',
    providers: [{provide: NG_VALIDATORS, useExisting: EqualValidator, multi: true}]
})
export class EqualValidator implements Validator {
    constructor(@Attribute('validateEqual') public comparer: string){}

    registerOnValidatorChange(fn: () => void): void {
    }

    validate(c: AbstractControl): {[key: string]: any} {
        let e = c.root.get(this.comparer);
        if(e && c.value !== e.value){
            return {"compare": true};
        }
        return null;
    }
}