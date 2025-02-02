package org.teambadmosh.campusdiaries.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Query")
public class Query {

   @Id
   private String queryId;
   private String userId;
   @NonNull
   private String queryContent;
   private LocalDateTime queryTime = LocalDateTime.now();
   private int upvote=0;

   public void upvote(){
       this.upvote++;
   }

}
