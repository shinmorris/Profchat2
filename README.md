# ProfChat DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|tel_number|integer|null: false|
|profile_image|integer||
### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages
- has_many :messages_likes
- has_many :forum_posts
- has_many :forum_posts_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :users, through: :groups_users
- has_many :messages, through: :groups_messages
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups_messagesテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :messages
- belongs_to :group


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
### Association
- belongs_to :user
- has_many :groups, through: :groups_messages
- has_many :messages_users_like

## messages_users_likeテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :message
- belongs_to :user

## forum_postsテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
### Association
- belongs_to :user
- has_many :groups, through: :groups_messages
- has_many :messages_users_like

## forum_posts_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|forum_post_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :forum_post
- belongs_to :user
