import { BasicAuthDto } from './basic-auth.dto';

export interface RegistrationDto extends BasicAuthDto {
  email: string;
}
