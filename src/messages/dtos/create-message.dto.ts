import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessageDTO {
  @IsString()
  @IsNotEmpty()
  content: 'string';
}
