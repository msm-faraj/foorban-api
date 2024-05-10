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
  @ValidateIf((o) => o?.age > 18)
  @IsNotEmpty()
  married: boolean;

  @IsNotEmpty()
  @Transform((o) => new Date(o.obj.dateOfBirth))
  @Validate(AgeValidator)
  dateOfBirth: string;
}
