import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'dateValidator', async: false })
export class DateValidatr implements ValidatorConstraintInterface {
  validate(dateOfBirth: Date, args: ValidationArguments) {
    const object = args.object as any;
    const age = object.age;
    const now = new Date();
    const currentYear = now.getFullYear();
    const minBirthYear = currentYear - age - 1;
    const maxBirthYear = currentYear - age;
    const minDate = new Date(minBirthYear, now.getMonth(), now.getDate() + 1);
    const maxDate = new Date(maxBirthYear, now.getMonth(), now.getDate() + 1);
    const birthDay = new Date(dateOfBirth);
    return birthDay >= minDate && birthDay <= maxDate;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Your birth date does not align with your age.';
  }
}
