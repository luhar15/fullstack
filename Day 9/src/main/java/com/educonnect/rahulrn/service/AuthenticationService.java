package com.educonnect.rahulrn.service;

import com.educonnect.rahulrn.dto.request.LoginRequest;
import com.educonnect.rahulrn.dto.request.RegisterRequest;
import com.educonnect.rahulrn.dto.response.LoginResponse;
import com.educonnect.rahulrn.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}