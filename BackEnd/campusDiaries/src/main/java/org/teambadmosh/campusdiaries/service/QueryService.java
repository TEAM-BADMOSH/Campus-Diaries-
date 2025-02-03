package org.teambadmosh.campusdiaries.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.teambadmosh.campusdiaries.model.Query;
import org.teambadmosh.campusdiaries.repository.QueryRepository;

import java.util.List;


@Service
public class QueryService {
    @Autowired
    private QueryRepository queryRepository;

    //add query
    public Query createQuery(Query query){
        return queryRepository.save(query);
    }
    //get query
    public Query getQueryById(String id){
        return queryRepository.findById(id).orElse(null);
    }
    //get all queries of a user
    public List<Query> getQueriesByUserId(String userId){
        return queryRepository.findQueriesByUserId(userId);
    }
    //delete a query
    public void deleteQueryById(String id){
        queryRepository.deleteById(id);
    }
    //update a query
    public void updateQuery(Query newQuery, String id){
        Query query = getQueryById(id);
        if(query != null){
            query.setQueryContent(newQuery.getQueryContent());
            queryRepository.save(query);
        }
        else{
            System.out.println("Query not found");
        }
    }
    //get all data
    public List<Query> getAllQueries(){
        return queryRepository.findAll();
    }

    //All the for one user
    public List<Query> getAllQueriesByUserId(String userId){
        return queryRepository.findQueriesByUserId(userId);
    }
}
