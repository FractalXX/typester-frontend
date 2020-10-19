import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthDto } from '../dtos/basic-auth.dto';
import { RegistrationDto } from '../dtos/registration.dto';
import { TokenDto } from '../dtos/token.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(data: BasicAuthDto): Observable<TokenDto> {
    return this.httpClient.post<TokenDto>('/api/auth/login', data);
  }

  register(data: RegistrationDto): Observable<void> {
    return this.httpClient.post<void>('/api/auth/register', data);
  }
}
