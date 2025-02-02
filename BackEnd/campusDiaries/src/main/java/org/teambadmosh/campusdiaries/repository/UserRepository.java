package org.teambadmosh.campusdiaries.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.teambadmosh.campusdiaries.model.User;

import java.util.Optional;

@Repository
public interface UserRepository  extends MongoRepository<User, String> {
    public Optional<User> findByUsername(String username);
}
