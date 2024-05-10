import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'age', async: false })
export class AgeValidator implements ValidatorConstraintInterface {
  validate(dateOfBirth: Date, args: ValidationArguments) {
    const object = args.object as any;
    const age = object.age;
    const today = new Date();
    const currentYear = today.getFullYear();
    const minBirthYear = currentYear - age - 1;
    const maxBirthYear = currentYear - age;
    const minDate = new Date(
      minBirthYear,
      today.getMonth(),
      today.getDate() + 1,
    );
    const maxDate = new Date(
      maxBirthYear,
      today.getMonth(),
      today.getDate() + 1,
    );
    const birthDay = new Date(dateOfBirth);
    return birthDay >= minDate && birthDay <= maxDate;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Your birth date does not align with your age.';
  }
}
