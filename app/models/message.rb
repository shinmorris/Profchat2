class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  validates :content, presence: true, unless: :image?
  # contentカラムが空の場合は保存しない、というバリデーション
  mount_uploader :image, ImageUploader
end
