export interface SuccessResponse<T> {
  code: 0
  success: true
  msg: "成功"
  data: T
}

export interface FailResponse<E> {
  code: -1
  success: false
  msg: string
  error: E
}
