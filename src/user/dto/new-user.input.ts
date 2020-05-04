import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsEmail, IsNotEmpty } from 'class-validator';
import { Gender } from '../enums/gender.enum';

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

  @Field(() => Gender)
  gender: Gender;
}