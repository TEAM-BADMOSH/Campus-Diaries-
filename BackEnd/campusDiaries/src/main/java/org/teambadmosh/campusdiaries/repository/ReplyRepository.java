package org.teambadmosh.campusdiaries.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.teambadmosh.campusdiaries.model.Reply;

import java.util.List;
import java.util.Optional;
@Repository
public interface ReplyRepository extends MongoRepository<Reply,String> {
    public List<Reply> findRepliesByQueryId(String queryId);
    public void deleteRepliesByQueryId(String queryId);
}
