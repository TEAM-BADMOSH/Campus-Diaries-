package org.teambadmosh.campusdiaries.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.teambadmosh.campusdiaries.model.Query;
import org.teambadmosh.campusdiaries.service.QueryService;

import java.util.List;

@RestController
@RequestMapping("/query")
public class QueryController {
    @Autowired
    public QueryService queryServices;
    //to add query
    @PostMapping("/createQuery")
    public Query createQuery(@RequestBody Query query){
        return queryServices.createQuery(query);
    }
    //to get query by queryid
    @GetMapping("/getQuery/{id}")
    public Query getQueryById(@PathVariable String id){
        return queryServices.getQueryById(id);
    }
    //to get all queries of a particular user by userId
    @GetMapping("/getQueriesByUserId/{userId}")
    public List<Query> getQueriesByUserId(@PathVariable String userId){
        return queryServices.getQueriesByUserId(userId);
    }
    //to delete query by queryid
    @DeleteMapping("/deleteQuery/{id}")
    public void deleteQueryById(@PathVariable String id){
        queryServices.deleteQueryById(id);
    }
    //to update query by queryid
    @PutMapping("/updateQuery/{id}")
    public void updateQuery(@RequestBody Query newQuery, @PathVariable String id){
        queryServices.updateQuery(newQuery, id);
    }
    //to get all queries(just for testing database)
    @GetMapping("/getAllQueries")
    public List<Query> getAllQueries(){
        return queryServices.getAllQueries();
    }
}
