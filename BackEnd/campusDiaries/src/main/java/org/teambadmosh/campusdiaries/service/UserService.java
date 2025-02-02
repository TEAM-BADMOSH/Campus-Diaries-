package org.teambadmosh.campusdiaries.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.teambadmosh.campusdiaries.model.User;
import org.teambadmosh.campusdiaries.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }
    public void deleteUserById(String id) {
        userRepository.deleteById(id);
    }
    public void updateUser(String username) {
        User oldUser = getUserByUsername(username);
        if(oldUser != null) {
            oldUser.setUsername(username);
            userRepository.save(oldUser);
        }

    }
}
