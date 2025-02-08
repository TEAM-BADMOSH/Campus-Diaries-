package org.teambadmosh.campusdiaries.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authorization.method.AuthorizeReturnObject;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.teambadmosh.campusdiaries.model.Query;
import org.teambadmosh.campusdiaries.repository.QueryRepository;
import org.teambadmosh.campusdiaries.repository.ReplyRepository;

import java.util.List;


@Service
public class QueryService {
    @Autowired
    private QueryRepository queryRepository;

    @Autowired
    private ReplyRepository replyRepository;

    //add query
    public Query createQuery(Query query){
        return queryRepository.save(query);
    }
    //get query
    public Query getQueryById(String id){
        return queryRepository.findById(id).orElse(null);
    }
    //get all queries of a user
    public List<Query> getQueriesByUsernname(String username){
        return queryRepository.findQueriesByUsername(username);
    }
    //delete a query
    public void deleteQueryById(String id){
        replyRepository.deleteRepliesByQueryId(id);
        queryRepository.deleteById(id);
    }
    //update a query
    public void updateQuery(Query newQuery, String id){
        Query oldQuery = getQueryById(id);
        if(oldQuery != null){
            oldQuery.setQueryContent(newQuery.getQueryContent());
            queryRepository.save(oldQuery);
        }
        else{
            System.out.println("Query not found");
        }
    }
    //get all data-
    public List<Query> getAllQueries(){
        return queryRepository.findAll();
    }
}
