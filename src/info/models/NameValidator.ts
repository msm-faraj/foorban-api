import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'nameValidator', async: false })
export class NameValidator implements ValidatorConstraintInterface {
  validate(name: string, args: ValidationArguments) {
    return name.length > 5 && name.length < 50;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Name must be between 5 and 50 characters in length.';
  }
}
