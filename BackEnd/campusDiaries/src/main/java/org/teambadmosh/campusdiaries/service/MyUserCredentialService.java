package org.teambadmosh.campusdiaries.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.teambadmosh.campusdiaries.model.User;
import org.teambadmosh.campusdiaries.model.UserCredential;
import org.teambadmosh.campusdiaries.repository.UserCredentialRepo;
import org.teambadmosh.campusdiaries.repository.UserRepository;

import java.util.Collections;

@Service
public class MyUserCredentialService implements UserDetailsService {
    @Autowired
    private UserCredentialRepo userCredentialRepo;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserCredential user = userCredentialRepo.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), Collections.emptyList());
    }

    public ResponseEntity<String> registerUser(@RequestBody UserCredential userCredential) {
        if (userCredentialRepo.findByUsername(userCredential.getUsername()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already taken!");
        }
        userCredential.setPassword(passwordEncoder.encode(userCredential.getPassword())); // Hash password
        userCredentialRepo.save(userCredential);

        User user = new User();
        user.setUsername(userCredential.getUsername());
        user.setName(userCredential.getName());
        user.setId(userCredential.getId());
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
    }
}
