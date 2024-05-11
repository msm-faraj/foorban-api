import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'ageValidator', async: false })
export class AgeValidator implements ValidatorConstraintInterface {
  validate(age: number, args: ValidationArguments) {
    return age > 1 && age < 150;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Age must be between 1 and 150.';
  }
}
