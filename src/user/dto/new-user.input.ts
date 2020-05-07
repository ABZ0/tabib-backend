import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { GenderEnum } from '../enums/gender.enum';

@InputType()
export class NewUserInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsDateString()
  dateOfBirth: string;

  @Field(() => GenderEnum)
  @IsEnum(GenderEnum)
  gender: GenderEnum;
}
