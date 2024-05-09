import { Transform } from 'class-transformer';
import { UpdateInfoRequest as UpdateInfoRequestInterface } from '../interfaces';
import { Validate } from 'class-validator';
import { AgeValidator } from './AgeValidator';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class UpdateInfoRequest implements UpdateInfoRequestInterface {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(150)
  age: number;

  @IsBoolean()
  @ValidateIf((o) => o.age && o.age > 18)
  @IsNotEmpty()
  married: boolean;

  @IsNotEmpty()
  @Transform((o) => new Date(o.obj.dateOfBirth))
  @ValidateIf((o) => {
    const age = o.age;
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
    const birthDay = new Date(o.dateOfBirth);
    return birthDay < minDate || birthDay > maxDate;
  })
  @Validate(AgeValidator)
  dateOfBirth: string;
}
