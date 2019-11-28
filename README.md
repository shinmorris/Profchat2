# chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :groups
- has_many :group_members

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|
|chat_member|text||
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :posts
- has_many :group_members

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|text|null: false|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
