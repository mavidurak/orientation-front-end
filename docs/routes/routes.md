# Authentication

## `POST` /authentication/register
### Request
```json
{
    "username": "String",
    "email": "String",
    "password": "String",
    "name": "String"
}
```
### Response
```json
{
    "username": "String",
    "email": "String",
    "name": "String",
    "created_at": "Date",
    "updated_at": "Date",
    "deleted_at": "Date"
}
```

## `POST` /authentication/login
### Request
```json
{
    "username": "String",
    "password": "String",
}
```
### Response
```json
{
    "token_id": "Number",
    "user_id": "Number",
    "token_value": "String",
    "created_at": "Date",
    "updated_at": "Date",
    "deleted_at": "Date"
}
```
## `GET` /authentication/me
### Request
### Response
```json
{
    "user_id": "Number",
    "username": "String",
    "email": "String",
    "name": "String",
    "created_at": "Date",
    "updated_at": "Date",
    "deleted_at": "Date"
}
```

# User

## `GET` /users/:id
### Request
### Response
```json
{
    "user_id":"Number",
    "username":"String",
    "email":"String",
    "name":"String",
    "friends":{
        "username":"String",
        "name":"String",
        "email":"String"
    },
    "wanted_list":[
        {
            "content_name":"String",
            "owner_name":"String",
            "status":"String",
            "my_rate":"Number",
            "created_at":"Date"
        }
    ],
    "comments":[
        {
            "id":"int",
            "discussion_id":"int",
            "parent_comment_id":"int",
            "text":"String",
            "is_spoiler":"bool",
            "created_at":"Date",
            "updated_at":"Date",
            "deleted_at":"Date"
        }
    ],
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `PUT` /users/:id
### Request
```json
{
    "updatable-key": "value"
}
```
### Response
```json
{
    "user_id": "Number",
    "username": "String",
    "email": "String",
    "name": "String",
    "created_at": "Date",
    "updated_at": "Date",
    "deleted_at": "Date"
}
```
## `DELETE` /users/:id
### Request
### Response
```json
{
    "message": "User `DELETE`d successfully!"
}
```

# Contents
## `POST` /contents/
### Request
```json
{
    "name":"String",
    "type":"String",
    "description":"String",
    "image":"String",
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "image":"String",
    "name":"String",
    "type":"String",
    "description":"String",
    "views":"Number",
    "rate":"Number",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `GET` /contents/:id
### Request
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "image":"String",
    "name":"String",
    "type":"String",
    "description":"String",
    "views":"Number",
    "rate":"Number",
    "my_score": "Number",
    "wanted_status":"String",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `PUT` /contents/:id
### Request
```json
{
    "updatable-key": "value"
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "image":"String",
    "name":"String",
    "type":"String",
    "description":"String",
    "views":"Number",
    "rate":"Number",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `DELETE` /contents/:id
### Request
### Response
```json
{
    "message": "User `DELETE`d successfully!"
}
```

# Comments
## `POST` /comments/
### Request
```json
{
    "content_review_id":"Number",
    "discussion_id":"Number",
    "parent_comment_id":"Number",
    "text":"String",
    "is_spoiler":"Bool",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "content_review_id":"Number",
    "discussion_id":"Number",
    "parent_comment_id":"Number",
    "text":"String",
    "is_spoiler":"Bool",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `PUT` /comments/:id
### Request
```json
{
    "updatable-key": "value"
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "content_review_id":"Number",
    "discussion_id":"Number",
    "parent_comment_id":"Number",
    "text":"String",
    "is_spoiler":"Bool",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `DELETE` /comments/:id
### Request
### Response
```json
{
    "message": "Comment `DELETE`d successfully!"
}
```
## `GET` /users/:userId/comments
### Request
### Response
```json
{
    "comments":[
        {
            "id":"Number",
            "content_review_id":"Number",
            "discussion_id":"Number",
            "parent_comment_id":"Number",
            "text":"String",
            "is_spoiler":"Bool",
            "created_at":"Date",
            "updated_at":"Date",
            "deleted_at":"Date"
        }
    ]
}
```
## `GET` /users/:userId/comments/:id
### Request
### Response
```json
 {
    "id":"Number",
    "content_review_id":"Number",
    "discussion_id":"Number",
    "parent_comment_id":"Number",
    "text":"String",
    "is_spoiler":"Bool",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```


# Wanted Lists
## `POST` /wanted-lists/
### Request
```json
{
    "content_id":"Number",
    "status":"String",
    "my_score":"Number"
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "content_id":"Number",
    "status":"String",
    "my_score":"Number",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `PUT` /wanted-lists/:contentId
### Request
```json
{
  "updatable-key": "value"
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "content_id":"Number",
    "status":"String",
    "my_score":"Number",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `GET` /users/:userId/wanted-lists
### Request
### Response
```json
{
    "wanted_lists":[
        {
            "id":"Integer",
            "content_id":"Integer",
            "status":"String",
            "my_score":"Number",
            "created_at":"Date",
            "updated_at":"Date",
            "deleted_at":"Date"
        }
    ]
}
```
## `GET` /users/:userId/wanted-lists
### Request
### Response
```json
{
    "message": "Comment `DELETE`d successfully!",
}
```

# Reviews
## `POST` /reviews/
### Request
```json
{
    "content_id":"Number",
    "text":"String",
    "status":"String",
    "score":"Number",
    "is_spoiler":"Bool",
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "content_id":"Number",
    "text":"String",
    "status":"String",
    "score":"Number",
    "is_spoiler":"Bool",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `PUT` /reviews/:id
### Request
```json
{
  "updatable-key": "value"
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "content_id":"Number",
    "text":"String",
    "status":"String",
    "score":"Number",
    "is_spoiler":"Bool",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `GET` /users/:userId/reviews
### Request
### Response
```json
{
    "wanted_lists":[
        {
            "id":"Integer",
            "content_id":"Integer",
            "status":"String",
            "my_score":"Number",
            "created_at":"Date",
            "updated_at":"Date",
            "deleted_at":"Date"
        }
    ]
}
```
## `GET` /contents/:contentId/reviews
### Request
### Response
```json
{
    "reviews":[
        {
            "id":"Number",
            "user_id":"Number",
            "image":"String",
            "name":"String",
            "type":"String",
            "description":"String",
            "views":"Number",
            "rate":"Number",
            "created_at":"Date",
            "updated_at":"Date",
            "deleted_at":"Date"
        }
    ]
}
```
## `DELETE` /reviews/:id
### Request
### Response
```json
{
    "message": "Review `DELETE`d successfully!",
}
```

# Communities
## `POST` /communities/
### Request
```json
{
    "organizers":[
        "Number"
    ],
    "image":"String",
    "name":"String",
    "content_types":[
        "String"
    ],
    "description":"String",
    "tags":[
        "String"
    ],
    "website":"String",
    "rules":"String",
}
```
### Response
```json
{
    "id":"Number",
    "organizers":[
        "Number"
    ],
    "image":"String",
    "name":"String",
    "content_types":[
        "String"
    ],
    "description":"String",
    "tags":[
        "String"
    ],
    "website":"String",
    "rules":"String",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `PUT` /communities/:id
### Request
```json
{
    "updatable-key": "value"
}
```
### Response
```json
{
    "id":"Number",
    "organizers":[
        "Number"
    ],
    "image":"String",
    "name":"String",
    "content_types":[
        "String"
    ],
    "description":"String",
    "tags":[
        "String"
    ],
    "website":"String",
    "rules":"String",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `GET` /communities/:id
### Request
### Response
```json
{
    "id":"Number",
    "organizers":[
        "Number"
    ],
    "image":"String",
    "name":"String",
    "content_types":[
        "String"
    ],
    "description":"String",
    "tags":[
        "String"
    ],
    "website":"String",
    "rules":"String",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `DELETE` /communities/:id
### Request
### Response
```json
{
    "message": "Community `DELETE`d successfully!",
}
```

# Discussions
## `POST` /discussions
### Request
```json
{
    "user_id":"Number",
    "community_id":"Number",
    "header":"String",
    "text":"String",
    "is_privite":"Bool",
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "community_id":"Number",
    "header":"String",
    "text":"String",
    "is_privite":"Bool",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `PUT` /discussions/:id
### Request
```json
{
  "updatable-key": "value"
}
```
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "community_id":"Number",
    "header":"String",
    "text":"String",
    "is_privite":"Bool",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `GET` /discussions/:id
### Request
### Response
```json
{
    "id":"Number",
    "user_id":"Number",
    "community_id":"Number",
    "header":"String",
    "text":"String",
    "is_privite":"Bool",
    "created_at":"Date",
    "updated_at":"Date",
    "deleted_at":"Date"
}
```
## `GET` /communities/discussions
### Request
### Response
```json
{
    "discussions":[
        {
            "id":"Number",
            "user_id":"Number",
            "header":"String",
            "text":"String",
            "is_privite":"Bool",
            "created_at":"Date",
            "updated_at":"Date",
            "deleted_at":"Date"
        }
    ]
}
```
## `GET` /communities/:id
### Request
### Response
```json
{
    "message": "Community deleted successfully!"
}
```