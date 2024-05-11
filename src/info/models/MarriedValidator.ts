import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'marriedValidator', async: false })
export class MarriedValidator implements ValidatorConstraintInterface {
  validate(married: boolean, args: ValidationArguments) {
    const object = args.object as any;
    const age = object.age;
    return !(age >= 18 && married === undefined);
  }

  defaultMessage(args: ValidationArguments) {
    return 'You must answer the marriage question if you are older than 18 years old.';
  }
}
