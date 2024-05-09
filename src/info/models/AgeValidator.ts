import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class AgeValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Your birth date does not align with your age.';
  }
}
