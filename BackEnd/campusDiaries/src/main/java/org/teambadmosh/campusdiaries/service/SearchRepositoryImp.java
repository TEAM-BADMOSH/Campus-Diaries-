package org.teambadmosh.campusdiaries.service;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;
import org.teambadmosh.campusdiaries.model.Query;
import org.teambadmosh.campusdiaries.repository.SearchRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class SearchRepositoryImp implements SearchRepository {

    @Autowired
    MongoClient mongoClient;
    @Autowired
    MongoConverter mongoConverter;

    @Override
    public List<Query> findByTextSearch(String text){
        final List<Query> query = new ArrayList<Query>();
        MongoDatabase database = mongoClient.getDatabase("CAMPUSDIARIES");
        MongoCollection<Document> collection = database.getCollection("Query");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                        new Document("text",
                                new Document("query", text)
                                        .append("path", "queryContent"))),
                new Document("$sort",
                        new Document("upvote", 1L)),
                new Document("$limit", 10L)));
        result.forEach(document -> query.add(mongoConverter.read(Query.class , document)));
        return query;
    }
}
