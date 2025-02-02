package org.teambadmosh.campusdiaries.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.teambadmosh.campusdiaries.model.Reply;
import org.teambadmosh.campusdiaries.service.ReplyService;

import java.util.List;

@RestController
@RequestMapping("reply")
public class ReplyController {
    @Autowired
    private ReplyService replyService;
    @GetMapping("/getAllReply")
    public List<Reply> getAllReply() {
        return replyService.getAllReply();
    }
    @GetMapping("/getRepliesByQueryId/{queryId}")
    public List<Reply> getRepliesByQueryId(@PathVariable String queryId) {
        return replyService.getRepliesByQueryId(queryId);
    }

    @PostMapping("/addReply")
    public void addReply(@RequestBody Reply reply) {
        replyService.addReply(reply);
    }
    @DeleteMapping("/deleteReply/{replyId}")
    public void deleteReply(@PathVariable String replyId) {
        replyService.deleteReply(replyId);
    }
    @PutMapping("/updateReplyById/{replyId}")
    public void updateReplyById(@RequestBody Reply reply, @PathVariable String replyId) {
        replyService.updateReplyById(reply, replyId);
    }

}
