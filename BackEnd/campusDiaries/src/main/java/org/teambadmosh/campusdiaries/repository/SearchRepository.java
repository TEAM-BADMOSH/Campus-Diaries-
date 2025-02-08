package org.teambadmosh.campusdiaries.repository;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;
import org.teambadmosh.campusdiaries.model.Query;

import java.util.List;

@Repository
public interface SearchRepository {
    List<Query> findByTextSearch(String text);
}
