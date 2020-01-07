class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  validates :body, presence: true, unless: :image?
  # bodyカラムが空の場合は保存しない、というバリデーション
  mount_uploader :image, ImageUploader
end
