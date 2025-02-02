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
    @PostMapping("/createQuery")
    public Query createQuery(@RequestBody Query query){
        return queryServices.createQuery(query);
    }
    @GetMapping("/getQuery/{id}")
    public Query getQueryById(@PathVariable String id){
        return queryServices.getQueryById(id);
    }
    @GetMapping("/getQueriesByUserId/{userId}")
    public List<Query> getQueriesByUserId(@PathVariable String userId){
        return queryServices.getQueriesByUserId(userId);
    }
    @DeleteMapping("/deleteQuery/{id}")
    public void deleteQueryById(@PathVariable String id){
        queryServices.deleteQueryById(id);
    }
    @PutMapping("/updateQuery/{id}")
    public void updateQuery(@RequestBody Query newQuery, @PathVariable String id){
        queryServices.updateQuery(newQuery, id);
    }
    @GetMapping("/getAllQueries")
    public List<Query> getAllQueries(){
        return queryServices.getAllQueries();
    }
}
