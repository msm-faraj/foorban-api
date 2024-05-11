import { UpdateInfoRequest as UpdateInfoRequestInterface } from '../interfaces';
import { Validate } from 'class-validator';
import { NameValidator } from './NameValidator';
import { AgeValidator } from './AgeValidator';
import { MarriedValidator } from './MarriedValidator';
import { DateValidatr } from './DateValidator';

export class UpdateInfoRequest implements UpdateInfoRequestInterface {
  @Validate(NameValidator)
  name: string;

  @Validate(AgeValidator)
  age: number;

  @Validate(MarriedValidator)
  married: boolean;

  @Validate(DateValidatr)
  dateOfBirth: string;
}
