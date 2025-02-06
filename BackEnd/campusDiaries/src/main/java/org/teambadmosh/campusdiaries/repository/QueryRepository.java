package org.teambadmosh.campusdiaries.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.teambadmosh.campusdiaries.model.Query;

import java.util.List;

public interface QueryRepository extends MongoRepository<Query,String> {
    public List<Query> findQueriesByUserId(String userId);
}
