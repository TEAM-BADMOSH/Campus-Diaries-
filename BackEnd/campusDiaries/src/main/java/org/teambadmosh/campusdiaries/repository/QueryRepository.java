package org.teambadmosh.campusdiaries.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.teambadmosh.campusdiaries.model.Query;

import java.util.List;
@Repository
public interface QueryRepository extends MongoRepository<Query,String> {
    List<Query> findQueriesByUsername(String username);
}
