package org.teambadmosh.campusdiaries.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.teambadmosh.campusdiaries.model.Reply;
import org.teambadmosh.campusdiaries.repository.ReplyRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ReplyService {
    @Autowired
    private ReplyRepository replyRepository;
    //to get all replies its just temporary
    public List<Reply> getAllReply() {
        return replyRepository.findAll();
    }
    //to get all replies of a query id
    public List<Reply> getRepliesByQueryId(String queryId)
    {
        return replyRepository.findRepliesByQueryId(queryId);
    }
    //to add reply
    public void addReply(Reply reply)
    {
        replyRepository.save(reply);
    }
    //to delete reply
    public void deleteReply(String replyId)
    {
        replyRepository.deleteById(replyId);
    }
    //to update reply
    public void updateReplyById(Reply newReply,String replyId)
    {
        Reply oldReply = replyRepository.findById(replyId).orElse(null);
        if(oldReply!=null)
        {
            oldReply.setReplyContent(newReply.getReplyContent());
            replyRepository.save(oldReply);
        }else{
            System.out.println("Reply not found");
        }
    }


}
