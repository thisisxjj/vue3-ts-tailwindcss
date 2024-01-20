import { FeedUser } from "./feeds"

export interface TagListItem {
  id: string
  name: string
  type: string
}

export interface ShareInfo {
  un_share: boolean
}

export interface InteractInfoDetail {
  followed: boolean
  relation: string
  liked: boolean
  liked_count: string
  collected: boolean
  collected_count: string
  comment_count: string
  share_count: string
}

export interface ImageInfoListItem {
  url: string
  image_scene: string
}

export interface ImageListItem {
  url_pre: string
  url_default: string
  file_id: string
  height: number
  width: number
  url: string
  trace_id: string
  info_list: ImageInfoListItem[]
}

export interface FeedVideoItem {}

export interface AtUserItem {
  user_id: string
  nickname: string
}

export interface FeedNoteCardDetail {
  time: number
  last_update_time: number
  note_id: string
  type: string
  desc: string
  tag_list: TagListItem[]
  ip_location: string
  share_info: ShareInfo
  title: string
  user: FeedUser
  interact_info: InteractInfoDetail
  image_list: ImageListItem[]
  video?: FeedVideoItem[]
  at_user_list?: AtUserItem[]
}

export interface FeedDataDetailItem {
  id: string
  model_type: string
  note_card: FeedNoteCardDetail
}

export interface FeedDataDetail {
  cursor_score: string
  items: FeedDataDetailItem[]
  current_time: number
}
