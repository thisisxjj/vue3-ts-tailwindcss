export const formatDate = (timestamp: number) => {
  var date = new Date(timestamp)
  var year = date.getFullYear()
  var month = ("0" + (date.getMonth() + 1)).slice(-2) // 月份从0开始，需要加1
  var day = ("0" + date.getDate()).slice(-2) // 获取日期，如果是个位数，前面补0

  return year + "-" + month + "-" + day
}

export const formatCommentDate = (timeStamp: number) => {
  const date = new Date(timeStamp)
  const nowDate = new Date()
  const year = date.getFullYear()
  const nowYear = nowDate.getFullYear()

  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = date.getDate()
  const dayStr = String(day).padStart(2, "0")

  if (nowYear - year > 0) {
    return `${year}-${month}-${dayStr}`
  }
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const nowTimeStamp = date.getTime()
  const difference = Math.abs(nowTimeStamp - timeStamp)
  const daysDifference = Math.floor(difference / (1000 * 3600 * 24))

  if (daysDifference === 0) {
    return `今天 ${hours}:${minutes}`
  } else if (daysDifference === 1) {
    return `昨天 ${hours}:${minutes}`
  } else {
    return `${month}-${dayStr}`
  }
}
