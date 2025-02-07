package org.teambadmosh.campusdiaries.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.teambadmosh.campusdiaries.model.User;
import org.teambadmosh.campusdiaries.repository.UserRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }

    public void updateUser(String username) {
        User oldUser = getUserByUsername(username);
        if(oldUser != null) {
            oldUser.setUsername(username);
            userRepository.save(oldUser);
        }

    }

    public ResponseEntity<?> getAuthenticatedUser() {
        // Get the currently authenticated user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated");
        }

        // Fetch user details from the database
        String username = authentication.getName(); // Get username from security context
        Optional<User> user = userRepository.findByUsername(username);

        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        // Create JSON response with username and name
        Map<String, String> response = new HashMap<>();
        response.put("username", user.get().getUsername());
        response.put("name", user.get().getName());

        return ResponseEntity.ok(response);
    }
}
