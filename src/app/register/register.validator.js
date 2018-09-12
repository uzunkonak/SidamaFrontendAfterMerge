"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterValidator = /** @class */ (function () {
    function RegisterValidator() {
    }
    RegisterValidator.validate = function (passwordFormGroup) {
        var password = passwordFormGroup.controls.password.value;
        var repeatPassword = passwordFormGroup.controls.repeatPassword.value;
        if (repeatPassword.length <= 0) {
            return null;
        }
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    };
    return RegisterValidator;
}());
exports.RegisterValidator = RegisterValidator;
//# sourceMappingURL=register.validator.js.map