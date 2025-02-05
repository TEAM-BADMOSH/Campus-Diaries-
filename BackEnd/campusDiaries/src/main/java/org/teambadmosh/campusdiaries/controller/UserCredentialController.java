package org.teambadmosh.campusdiaries.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.teambadmosh.campusdiaries.model.UserCredential;
import org.teambadmosh.campusdiaries.repository.UserCredentialRepo;
import org.teambadmosh.campusdiaries.repository.UserRepository;
import org.teambadmosh.campusdiaries.service.MyUserCredentialService;
import org.teambadmosh.campusdiaries.service.UserService;

@RestController
@RequestMapping("/")
public class UserCredentialController {

    @Autowired
    public MyUserCredentialService myUserCredentialService;


    // Register user
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserCredential userCredential) {
        return myUserCredentialService.registerUser(userCredential);
    }
    // Get current logged-in user's username
    @GetMapping("/user")
    public String getCurrentUser(Authentication authentication) {
        return "Logged in as: " + authentication.getName();
    }
}
