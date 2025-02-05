package org.teambadmosh.campusdiaries.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "usercredential")
public class UserCredential {
    @Id
    private String id;
    @Indexed(unique = true)
    private String username;
    private String password;
    private String name;
}
