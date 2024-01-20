export interface FeedUser {
  nick_name?: string
  avatar: string
  user_id: string
  nickname: string
}

export interface FeedInteractInfo {
  liked: boolean
  liked_count: string
}

export interface FeedCoverInfoItem {
  image_scene: string
  url: string
}

export interface FeedCover {
  info_list: FeedCoverInfoItem[]
  url_pre: string
  url_default: string
  file_id: string
  height: number
  width: number
  url: string
}

export interface FeedNoteCard {
  type: string
  display_title: string
  user: FeedUser
  interact_info: FeedInteractInfo
  cover: FeedCover
}

export interface FeedDataItem {
  id: string
  ignore: boolean
  model_type: string
  note_card: FeedNoteCard
  track_id: string
}

export interface HomeFeedData {
  cursor_score: string
  items: FeedDataItem[]
}
