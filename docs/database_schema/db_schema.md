```js
table users{
  id int [pk, increment]
  friend_ids int [not null, ref: > users.id] // User id, array
  username varchar
  email varchar
  full_name varchar
  password_salt varchar
  password_hash varchar
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

table contents{
  id int [pk, increment]
  user_id int [not null, ref: > users.id]
  image_id int [not null, ref: - images.id]
  name varchar [not null]
  type varchar [not null] // Game, movie, series, book
  description varchar [not null]
  views int [default: 0]
  rate int [default: null]
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

table comments{
  id int [pk, increment]
  user_id int [not null, ref: > users.id]
  content_review_id int [default: null, ref: > content_reviews.id]
  discussion_id int [default: null, ref: > discussions.id]
  parent_comment_id int [default: null, ref: > comments.id] // For nested comments
  text varchar [not null]
  is_spoiler bool [default: false]
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

table wanted_contents{ // 'my list' items 
  id int [pk, increment]
  user_id int [not null, ref: > users.id]
  content_id int [not null, ref: > contents.id]
  status varchar [not null] // Want to read, reading, readed, ...
  my_score int
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

table content_reviews{
  id int [pk, increment]
  user_id int [not null, ref: > users.id]
  content_id int [not null, ref: > contents.id]
  text varchar
  score int
  is_spoiler bool [default: false]
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

table images{
  id int [pk, increment]
  name varchar [not null]
  path varchar [not null]
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

table messages{
  id int [pk, increment]
  from int [not null, ref: - users.id]
  to int [not null, ref: - users.id]
  text varchar [not null]
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

table communities{
  id int [pk, increment]
  organizers int [not null, ref: > users.id] // user id array
  members int [not null, ref: > users.id] // user id array
  content_types varchar [not null] // String array
  description varchar [not null]
  image varchar // image url
  tags varchar // varchar array
  website varchar
  rules varchar
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

table discussions{ 
  id int [pk, increment]
  user_id int [not null, ref: > users.id]
  community_id int [not null, ref: > communities.id]
  header varchar [not null]
  text varchar [not null]
  is_privite boolean [default: 0]
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}
```