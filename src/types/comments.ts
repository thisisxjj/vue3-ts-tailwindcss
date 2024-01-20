import { AtUserItem } from "./feed-detail"

export interface CommentItemPicture {}

export type CommentItemTag = "is_author" | "user_top"

export interface CommentUser {
  user_id: string
  nickname: string
  image: string
}

export interface TargetComment {
  id: string
  user_info: CommentUser
}

export interface CommentItem {
  at_users: AtUserItem[]
  content: string
  create_time: number
  id: string
  ip_location: string
  like_count: string
  liked: false
  note_id: string
  pictures?: CommentItemPicture[]
  show_tags: CommentItemTag[]
  status: 0 | 1 | 2 | 3 | 4
  sub_comment_count?: string
  sub_comment_cursor?: string
  sub_comment_has_more?: boolean
  sub_comments?: CommentItem[]
  user_info?: CommentUser
  target_comment?: TargetComment
  loading?: boolean
}

export interface Comments {
  comments: CommentItem[]
  cursor: string
  has_more: boolean
  time: number
  user_id: string
}

export interface CommentsRequestParams {
  note_id: string
  cursor: string
  root_comment_id?: string
  top_comment_id?: string
  image_formats: string[]
  num?: number
}
