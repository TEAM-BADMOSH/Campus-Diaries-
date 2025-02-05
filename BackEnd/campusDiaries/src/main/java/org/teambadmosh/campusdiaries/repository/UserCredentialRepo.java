package org.teambadmosh.campusdiaries.repository;

import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.teambadmosh.campusdiaries.model.UserCredential;

@Repository
public interface UserCredentialRepo extends MongoRepository<UserCredential, String> {
    public UserCredential findByUsername(String username);
}
