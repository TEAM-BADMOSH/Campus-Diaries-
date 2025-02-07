package org.teambadmosh.campusdiaries.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.teambadmosh.campusdiaries.model.User;
import org.teambadmosh.campusdiaries.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/getAllUser")
    public List<User> getAllUser() {
        return userService.getAllUsers();
    }


    @PutMapping("/updateUser/{username}")
    public void updateUser(@PathVariable String username) {
         userService.updateUser(username);
    }

    @GetMapping("/userDetails")
    public ResponseEntity<?> getUserDetails() {
        return userService.getAuthenticatedUser();
    }
}
