package com.educonnect.rahulrn.service.impl;

import static com.educonnect.rahulrn.enumerated.TokenType.BEARER;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.educonnect.rahulrn.dto.request.LoginRequest;
import com.educonnect.rahulrn.dto.request.RegisterRequest;
import com.educonnect.rahulrn.dto.response.LoginResponse;
import com.educonnect.rahulrn.dto.response.RegisterResponse;
import com.educonnect.rahulrn.enumerated.Role;
import com.educonnect.rahulrn.model.Token;
import com.educonnect.rahulrn.model.User;
import com.educonnect.rahulrn.repository.TokenRepository;
import com.educonnect.rahulrn.repository.UserRepository;
import com.educonnect.rahulrn.service.AuthenticationService;
import com.educonnect.rahulrn.utils.JwtUtil;

import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

        private final PasswordEncoder passwordEncoder;
        private final AuthenticationManager authenticationManager;
        private final JwtUtil jwtUtil;
        private final UserRepository userRepository;
        private final TokenRepository tokenRepository;
        

        


        @Override
        public RegisterResponse register(RegisterRequest request) {
                var user = User.builder()
                                .username(request.getName())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .phone(request.getPhone())
                                .role(Role.valueOf(request.getRole().toUpperCase()))
                                .build();
                userRepository.save(user);
                return RegisterResponse.builder()
                                .message("User registered successfully")
                                .build();
        }

        @Override
        public LoginResponse login(LoginRequest request) {
                authenticationManager
                                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                                                request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                Map<String, Object> claims = new HashMap<>();
                claims.put("role", user.getRole().toString());
                claims.put("role", user.getId());
                var accessToken = jwtUtil.generateToken(claims, user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);
                return LoginResponse.builder()
                                .message("Logged in successfully.")
                                .accessToken(accessToken)
                                .build();
        }

        private void saveUserToken(User user, String accessToken) {
                var token = Token.builder()
                                .user(user)
                                .token(accessToken)
                                .tokenType(BEARER)
                                .expired(false)
                                .revoked(false)
                                .build();
                tokenRepository.save(token);
        }

        private void revokeAllUserTokens(User user) {
                var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
                if (validUserTokens.isEmpty())
                        return;
                validUserTokens.forEach(token -> {
                        token.setExpired(true);
                        token.setRevoked(true);
                });
                tokenRepository.saveAll(validUserTokens);
        }

}