import { Injectable } from '@angular/core';
import { ApiService } from 'app/shared/services/api.service';
import { Observable } from 'rxjs';
import { BasicAuthDto } from '../dtos/basic-auth.dto';
import { RegistrationDto } from '../dtos/registration.dto';
import { TokenDto } from '../dtos/token.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(data: BasicAuthDto): Observable<TokenDto> {
    return this.apiService.post<TokenDto>('/auth', data);
  }

  register(data: RegistrationDto): Observable<void> {
    return this.apiService.post<void>('/auth/register', data);
  }
}
