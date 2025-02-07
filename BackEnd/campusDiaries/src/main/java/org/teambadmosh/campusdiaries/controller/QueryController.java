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
    //to get query by username
    @GetMapping("/getQuery/{username}")
    public Query getQueryByUsername(@PathVariable String username){
        return queryServices.getQueryById(username);
    }
    //to get all queries of a particular user by username
    @GetMapping("/getQueriesByUsername/{username}")
    public List<Query> getQueriesByUserId(@PathVariable String username){
        return queryServices.getQueriesByUsernname(username);
    }
    //to delete query by username
    @DeleteMapping("/deleteQuery/{username}")
    public void deleteQueryById(@PathVariable String username){
        queryServices.deleteQueryById(username);
    }
    //to update query by username
    @PutMapping("/updateQuery/{username}")
    public void updateQuery(@RequestBody Query newQuery, @PathVariable String username){
        queryServices.updateQuery(newQuery, username);
    }
    //to get all queries(just for testing database)
    @GetMapping("/getAllQueries")
    public List<Query> getAllQueries(){
        return queryServices.getAllQueries();
    }
}
