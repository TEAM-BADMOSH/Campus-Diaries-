package org.teambadmosh.campusdiaries.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection ="Reply" )
public class Reply {
    @Id
    private String replyId;
    private String queryId;
    private String userId;
    private String replyContent;
    private int upVoteCount=0;
    private LocalDateTime replyTime=LocalDateTime.now();
    public void upVote(){
       this.upVoteCount++;
    }
}
