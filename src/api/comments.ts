import { Comments, CommentsRequestParams } from "@/types/comments"
import { SuccessResponse } from "@/types/response"

export const getComments: (
  params: CommentsRequestParams
) => Promise<SuccessResponse<Comments>> = ({
  note_id,
  root_comment_id,
  cursor,
}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 第一次加载
      if (
        note_id === "65879a2d000000003c01202b" &&
        !cursor &&
        !root_comment_id
      ) {
        resolve({
          code: 0,
          success: true,
          msg: "成功",
          data: {
            user_id: "60569e0300000000010075d9",
            comments: [
              {
                id: "6587a6f20000000016025335",
                status: 3,
                user_info: {
                  user_id: "6481b29f000000000f005d5a",
                  nickname: "罐装快乐水",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                },
                ip_location: "福建",
                sub_comment_count: "322",
                sub_comments: [
                  {
                    status: 0,
                    content: "不吃香菜的在这里[惊恐R][惊恐R]",
                    liked: false,
                    like_count: "2036",
                    user_info: {
                      user_id: "5a92f26511be106e64a82153",
                      nickname: "小米酱～香饼",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/6458c363fe6243cd283f14f1.jpg?imageView2/2/w/120/format/jpg",
                    },
                    show_tags: [],
                    id: "6587b1260000000017029065",
                    note_id: "65879a2d000000003c01202b",
                    pictures: [],
                    create_time: 1703391526000,
                    ip_location: "广东",
                    at_users: [],
                    target_comment: {
                      user_info: {
                        nickname: "罐装快乐水",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                        user_id: "6481b29f000000000f005d5a",
                      },
                      id: "6587a6f20000000016025335",
                    },
                  },
                ],
                liked: false,
                sub_comment_has_more: true,
                pictures: [],
                at_users: [],
                like_count: "8799",
                create_time: 1703388914000,
                sub_comment_cursor: "6587b1260000000017029065",
                note_id: "65879a2d000000003c01202b",
                content: "吃香菜和不吃香菜的都沉默了[doge]",
                show_tags: [],
              },
              {
                note_id: "65879a2d000000003c01202b",
                at_users: [],
                like_count: "4576",
                user_info: {
                  nickname: "卷卷",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/63d639c7fb884dcea1322935.jpg?imageView2/2/w/120/format/jpg",
                  user_id: "5b5f3a364eacab78e6006bc9",
                },
                show_tags: [],
                create_time: 1703395909000,
                sub_comments: [
                  {
                    status: 3,
                    at_users: [],
                    liked: false,
                    show_tags: [],
                    ip_location: "吉林",
                    target_comment: {
                      id: "6587c2450000000011010e8a",
                      user_info: {
                        user_id: "5b5f3a364eacab78e6006bc9",
                        nickname: "卷卷",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/63d639c7fb884dcea1322935.jpg?imageView2/2/w/120/format/jpg",
                      },
                    },
                    pictures: [],
                    id: "6587c2e3000000001b007c97",
                    note_id: "65879a2d000000003c01202b",
                    content: "想一起去了[黄金薯R]",
                    like_count: "311",
                    user_info: {
                      user_id: "5fa8f0730000000001007928",
                      nickname: "HAHA助眠mua",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2ovhh2osjq03g5nt8u1pg8u98vgk9qo0?imageView2/2/w/120/format/jpg",
                    },
                    create_time: 1703396067000,
                  },
                ],
                status: 0,
                content:
                  "这不得整个火锅配边上，边吃边过圣诞节，绝了[doge][doge][doge]",
                liked: false,
                sub_comment_has_more: true,
                pictures: [],
                sub_comment_cursor: "6587c2e3000000001b007c97",
                id: "6587c2450000000011010e8a",
                ip_location: "贵州",
                sub_comment_count: "238",
              },
              {
                content: "有一天我会把世界上的香菜全部灭绝",
                at_users: [],
                show_tags: [],
                create_time: 1703405807000,
                note_id: "65879a2d000000003c01202b",
                user_info: {
                  user_id: "5e93b6040000000001004aaa",
                  nickname: "牛蔚蔚",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30rsvb89vik6g5nkjmo208ilah4k7mvg?imageView2/2/w/120/format/jpg",
                },
                ip_location: "广东",
                sub_comment_count: "117",
                id: "6587e8ef000000001e03b462",
                like_count: "535",
                sub_comments: [
                  {
                    content: "不许！",
                    at_users: [],
                    user_info: {
                      nickname: "雷可乐吖",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/61ab821df103c90b2a8ae2eb.jpg?imageView2/2/w/120/format/jpg",
                      user_id: "5aec32144eacab2ff25efc22",
                    },
                    create_time: 1703405839000,
                    target_comment: {
                      id: "6587e8ef000000001e03b462",
                      user_info: {
                        nickname: "牛蔚蔚",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30rsvb89vik6g5nkjmo208ilah4k7mvg?imageView2/2/w/120/format/jpg",
                        user_id: "5e93b6040000000001004aaa",
                      },
                    },
                    pictures: [],
                    id: "6587e90f000000001100e45c",
                    status: 0,
                    liked: false,
                    like_count: "492",
                    show_tags: [],
                    ip_location: "江西",
                    note_id: "65879a2d000000003c01202b",
                  },
                ],
                sub_comment_cursor: "6587e90f000000001100e45c",
                status: 0,
                sub_comment_has_more: true,
                pictures: [],
                liked: false,
              },
              {
                note_id: "65879a2d000000003c01202b",
                liked: false,
                create_time: 1703422703000,
                id: "65882aef000000001a033a1f",
                status: 0,
                like_count: "0",
                sub_comment_cursor: "",
                user_info: {
                  user_id: "5efc43250000000001002775",
                  nickname: "cup1236。",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30qgco75jga5g5nns8cig89rlkbvlm7g?imageView2/2/w/120/format/jpg",
                },
                ip_location: "广东",
                sub_comment_count: "0",
                sub_comments: [],
                pictures: [],
                content: "@sllls5945",
                at_users: [
                  {
                    user_id: "5ecfc2d2000000000101ce8c",
                    nickname: "sllls5945",
                  },
                ],
                show_tags: [],
                sub_comment_has_more: false,
              },
              {
                note_id: "65879a2d000000003c01202b",
                status: 0,
                content: "更适合中国宝宝体质的圣诞树",
                user_info: {
                  user_id: "5f29e72f000000000101e0a1",
                  nickname: "可一",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/6288faa5a40cbebd130d117d.jpg?imageView2/2/w/120/format/jpg",
                },
                ip_location: "安徽",
                at_users: [],
                like_count: "387",
                sub_comment_count: "41",
                sub_comment_cursor: "6587d3d4000000001e03a999",
                pictures: [],
                id: "6587d33d000000001a00e6a6",
                liked: false,
                sub_comments: [
                  {
                    liked: false,
                    like_count: "145",
                    create_time: 1703400404000,
                    pictures: [],
                    note_id: "65879a2d000000003c01202b",
                    content: "等我有钱了我要把全世界的香菜给消灭掉",
                    at_users: [],
                    user_info: {
                      user_id: "5e8befcc0000000001002c69",
                      nickname: "花",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/5e8befcc0000000001002c69.jpg?imageView2/2/w/120/format/jpg",
                    },
                    show_tags: [],
                    ip_location: "广东",
                    target_comment: {
                      id: "6587d33d000000001a00e6a6",
                      user_info: {
                        user_id: "5f29e72f000000000101e0a1",
                        nickname: "可一",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/6288faa5a40cbebd130d117d.jpg?imageView2/2/w/120/format/jpg",
                      },
                    },
                    id: "6587d3d4000000001e03a999",
                    status: 0,
                  },
                ],
                show_tags: [],
                create_time: 1703400253000,
                sub_comment_has_more: true,
              },
              {
                at_users: [],
                create_time: 1703405680000,
                note_id: "65879a2d000000003c01202b",
                show_tags: [],
                ip_location: "河南",
                content:
                  "马德，等我长大有钱了就把全世界的香菜都拔光然后全塞进那些爱吃香菜嘴里！！！[生气R]",
                liked: false,
                user_info: {
                  user_id: "623c69ec000000001000d4e3",
                  nickname: "Romantic",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30q23ptg9na6g5ohsd7m41l73knscrt0?imageView2/2/w/120/format/jpg",
                },
                sub_comments: [
                  {
                    content: "坐等[偷笑R]",
                    ip_location: "安徽",
                    note_id: "65879a2d000000003c01202b",
                    status: 0,
                    at_users: [],
                    liked: false,
                    like_count: "11",
                    user_info: {
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2osg7ihmk80605nrg7ebg95btkl70pa8?imageView2/2/w/120/format/jpg",
                      user_id: "5f703b97000000000100957d",
                      nickname: "贺六神",
                    },
                    show_tags: [],
                    create_time: 1703405948000,
                    id: "6587e97c000000000c000453",
                    pictures: [],
                    target_comment: {
                      id: "6587e870000000001e01f713",
                      user_info: {
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30q23ptg9na6g5ohsd7m41l73knscrt0?imageView2/2/w/120/format/jpg",
                        user_id: "623c69ec000000001000d4e3",
                        nickname: "Romantic",
                      },
                    },
                  },
                ],
                sub_comment_cursor: "6587e97c000000000c000453",
                sub_comment_has_more: true,
                id: "6587e870000000001e01f713",
                status: 0,
                like_count: "20",
                sub_comment_count: "13",
                pictures: [],
              },
              {
                sub_comment_count: "15",
                sub_comments: [
                  {
                    show_tags: [],
                    create_time: 1703409929000,
                    pictures: [],
                    status: 0,
                    liked: false,
                    user_info: {
                      user_id: "61d14476000000001000b4a0",
                      nickname: "猫猫殿下",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/642aea51e64abc0b310838af.jpg?imageView2/2/w/120/format/jpg",
                    },
                    at_users: [],
                    like_count: "4",
                    ip_location: "广西",
                    target_comment: {
                      id: "6587f8a60000000011007624",
                      user_info: {
                        user_id: "583d1a916a6a691828217e86",
                        nickname: "Jam.fong",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2o0f3i4qji06g48u1c1d92vk6g4anbng?imageView2/2/w/120/format/jpg",
                      },
                    },
                    id: "6587f9090000000017029640",
                    note_id: "65879a2d000000003c01202b",
                    content: "此处艾特王一博[暗中观察R]",
                  },
                ],
                sub_comment_cursor: "6587f9090000000017029640",
                user_info: {
                  user_id: "583d1a916a6a691828217e86",
                  nickname: "Jam.fong",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2o0f3i4qji06g48u1c1d92vk6g4anbng?imageView2/2/w/120/format/jpg",
                },
                at_users: [
                  {
                    user_id: "5fb2253a000000000100a8f7",
                    nickname: "啵丝猫ibo(唯粉)",
                  },
                  {
                    user_id: "653d3469000000000400b73f",
                    nickname: "潜水马尔",
                  },
                  {
                    user_id: "5632b2de9eb578182a61140e",
                    nickname: "玫瑰的小王子🦁🏍💚",
                  },
                  {
                    user_id: "5d66eb930000000001019f71",
                    nickname: "心在啵啵跳",
                  },
                  {
                    user_id: "635538e7000000001901fb02",
                    nickname: "蔚蓝的香菜味儿",
                  },
                  {
                    nickname: "博（唯）",
                    user_id: "6483d761000000000f007fc7",
                  },
                  {
                    user_id: "5e72cccd0000000001001ae7",
                    nickname: "🍀世颠之舞",
                  },
                  {
                    user_id: "59042d5b82ec396026fd61a1",
                    nickname: "香菜啵啵🦁",
                  },
                  {
                    nickname: "拧不开瓶盖🍼",
                    user_id: "5b362134e8ac2b0977e5869c",
                  },
                  {
                    user_id: "561bb14c3397db77e0a47a18",
                    nickname: "一博女友",
                  },
                  {
                    user_id: "5a9f877f4eacab4fc503d4f2",
                    nickname: "MTJJBOBO (唯)",
                  },
                  {
                    user_id: "607e20b30000000001004855",
                    nickname: "9785号啵丝猫（钻石唯）",
                  },
                  {
                    user_id: "5656e47de4251d70ef659a41",
                    nickname: "一只懒洋洋",
                  },
                  {
                    user_id: "612e2ecf00000000020247a2",
                    nickname: "💚YIBO'bbq💚",
                  },
                  {
                    user_id: "634388ac000000001802ab25",
                    nickname: "🦁💚Simba King💚👑",
                  },
                  {
                    nickname: "iboitsme💚(唯）",
                    user_id: "5e1accaa000000000100253c",
                  },
                  {
                    user_id: "59f74165e8ac2b66454eb6d7",
                    nickname: "Tracy的星星",
                  },
                  {
                    nickname: "猫猫殿下",
                    user_id: "61d14476000000001000b4a0",
                  },
                  {
                    nickname: "Ash00",
                    user_id: "56593a09b8c8b43d4239bb35",
                  },
                ],
                show_tags: [],
                status: 3,
                liked: false,
                ip_location: "广东",
                note_id: "65879a2d000000003c01202b",
                content:
                  "@啵丝猫ibo(唯粉) @潜水马尔 @玫瑰的小王子🦁🏍💚 @心在啵啵跳 @蔚蓝的香菜味儿 @博（唯） @🍀世颠之舞 @香菜啵啵🦁 @拧不开瓶盖🍼 @一博女友 @MTJJBOBO (唯) @9785号啵丝猫（钻石唯） @一只懒洋洋 @💚YIBO'bbq💚 @🦁💚Simba King💚👑 @iboitsme💚(唯） @Tracy的星星 @猫猫殿下 @Ash00  你们想到了谁[笑哭R]",
                like_count: "11",
                create_time: 1703409830000,
                sub_comment_has_more: true,
                pictures: [],
                id: "6587f8a60000000011007624",
              },
              {
                status: 3,
                content: "王一博看到都会狠狠点赞，一口吃完[doge]",
                like_count: "19",
                ip_location: "浙江",
                note_id: "65879a2d000000003c01202b",
                at_users: [],
                show_tags: [],
                sub_comment_cursor: "6587eb0700000000180244e7",
                sub_comments: [
                  {
                    status: 0,
                    content: "@笙笙🥦 我也要[害羞R]",
                    show_tags: [],
                    create_time: 1703406343000,
                    target_comment: {
                      id: "6587e904000000000601da99",
                      user_info: {
                        user_id: "5c4bba0b000000001202440e",
                        nickname: "Lucy",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/606970b347505bb6a2babdc1.jpg?imageView2/2/w/120/format/jpg",
                      },
                    },
                    pictures: [],
                    id: "6587eb0700000000180244e7",
                    note_id: "65879a2d000000003c01202b",
                    at_users: [
                      {
                        user_id: "5ffbd083000000000101fcd4",
                        nickname: "笙笙🥦",
                      },
                    ],
                    liked: false,
                    like_count: "0",
                    user_info: {
                      user_id: "5fc252c40000000001009c0a",
                      nickname: "HM",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2k0037heiu06g5nu2ab20970a1r7qslo?imageView2/2/w/120/format/jpg",
                    },
                    ip_location: "广东",
                  },
                ],
                sub_comment_count: "5",
                sub_comment_has_more: true,
                pictures: [],
                id: "6587e904000000000601da99",
                liked: false,
                user_info: {
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/606970b347505bb6a2babdc1.jpg?imageView2/2/w/120/format/jpg",
                  user_id: "5c4bba0b000000001202440e",
                  nickname: "Lucy",
                },
                create_time: 1703405828000,
              },
              {
                status: 0,
                at_users: [
                  {
                    user_id: "62e23771000000001f014449",
                    nickname: "Ma🤤",
                  },
                ],
                liked: false,
                id: "65882acf000000001e01c0e7",
                show_tags: [],
                ip_location: "浙江",
                sub_comments: [],
                sub_comment_cursor: "",
                sub_comment_has_more: false,
                user_info: {
                  user_id: "5f32677a000000000100142e",
                  nickname: "Yoyo",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/5f32677a000000000100142e.jpg?imageView2/2/w/120/format/jpg",
                },
                content: "@Ma🤤",
                like_count: "0",
                pictures: [],
                note_id: "65879a2d000000003c01202b",
                sub_comment_count: "0",
                create_time: 1703422672000,
              },
              {
                note_id: "65879a2d000000003c01202b",
                status: 0,
                content:
                  "@白棠的糖 @红醋栗礼服 @魚阳 @William Graham @没绷带的宰治 @小蛋宰治 @秋秋（蹲团看置顶） @辣苔没多辣 @福花花 @芥川苦茶籽飞飞 @玛卡巴卡的小推车 @Krystal @许下什么愿 @聆夏 @芃芃（黑奴版） @栾川 @四只眼睛的蜗牛 @霜降 @每天都在睡觉 @蒲蒲 @林深时见鹿 @再买谷就剁手 @怨气比鬼都大 @今天和老婆打电话了吗",
                at_users: [
                  {
                    user_id: "5ed907630000000001005009",
                    nickname: "白棠的糖",
                  },
                  {
                    user_id: "61d2b9c7000000001000b15f",
                    nickname: "红醋栗礼服",
                  },
                  {
                    nickname: "魚阳",
                    user_id: "5f86e7be000000000100a54f",
                  },
                  {
                    user_id: "5a97ee3111be102b7bc52d5f",
                    nickname: "William Graham",
                  },
                  {
                    user_id: "5d6348e100000000010076ca",
                    nickname: "没绷带的宰治",
                  },
                  {
                    user_id: "61dc32cf000000001000bf78",
                    nickname: "小蛋宰治",
                  },
                  {
                    user_id: "60def4e5000000002002f8ab",
                    nickname: "秋秋（蹲团看置顶）",
                  },
                  {
                    user_id: "644206990000000012034f1d",
                    nickname: "辣苔没多辣",
                  },
                  {
                    user_id: "5d13667f000000001203cf08",
                    nickname: "福花花",
                  },
                  {
                    user_id: "5aa5037a11be10316b7c4622",
                    nickname: "芥川苦茶籽飞飞",
                  },
                  {
                    nickname: "玛卡巴卡的小推车",
                    user_id: "5920edae5e87e758a65504cf",
                  },
                  {
                    user_id: "6215790e0000000021026143",
                    nickname: "Krystal",
                  },
                  {
                    user_id: "5c711efe0000000010035783",
                    nickname: "许下什么愿",
                  },
                  {
                    nickname: "聆夏",
                    user_id: "6504848d000000000200ed20",
                  },
                  {
                    user_id: "654ed709000000000200dd0b",
                    nickname: "芃芃（黑奴版）",
                  },
                  {
                    nickname: "栾川",
                    user_id: "62e8e3f8000000001f004753",
                  },
                  {
                    user_id: "5adab40a4eacab26bd14f1d0",
                    nickname: "四只眼睛的蜗牛",
                  },
                  {
                    user_id: "5f22e36800000000010014fe",
                    nickname: "霜降",
                  },
                  {
                    nickname: "每天都在睡觉",
                    user_id: "634fd1b5000000001802d187",
                  },
                  {
                    nickname: "蒲蒲",
                    user_id: "60b0b5fa000000000101dc69",
                  },
                  {
                    user_id: "60018723000000000101d44e",
                    nickname: "林深时见鹿",
                  },
                  {
                    nickname: "再买谷就剁手",
                    user_id: "642a7ffe000000000f011a7c",
                  },
                  {
                    user_id: "62e40564000000001f0048db",
                    nickname: "怨气比鬼都大",
                  },
                  {
                    user_id: "5e1acc8700000000010062c5",
                    nickname: "今天和老婆打电话了吗",
                  },
                ],
                like_count: "2",
                ip_location: "福建",
                pictures: [],
                id: "6587d75f00000000060161f3",
                sub_comment_has_more: true,
                liked: false,
                sub_comment_cursor: "6587d769000000000c0021dd",
                user_info: {
                  user_id: "5d31564300000000110363de",
                  nickname: "🍉",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30o69djn4266g5n9hap1keouunadq1m8?imageView2/2/w/120/format/jpg",
                },
                show_tags: [],
                create_time: 1703401311000,
                sub_comment_count: "22",
                sub_comments: [
                  {
                    user_info: {
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30o69djn4266g5n9hap1keouunadq1m8?imageView2/2/w/120/format/jpg",
                      user_id: "5d31564300000000110363de",
                      nickname: "🍉",
                    },
                    create_time: 1703401321000,
                    target_comment: {
                      id: "6587d75f00000000060161f3",
                      user_info: {
                        user_id: "5d31564300000000110363de",
                        nickname: "🍉",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30o69djn4266g5n9hap1keouunadq1m8?imageView2/2/w/120/format/jpg",
                      },
                    },
                    id: "6587d769000000000c0021dd",
                    note_id: "65879a2d000000003c01202b",
                    content: "一人转我50给我过圣诞节[皱眉R]",
                    liked: false,
                    like_count: "0",
                    status: 0,
                    at_users: [],
                    show_tags: [],
                    ip_location: "福建",
                    pictures: [],
                  },
                ],
              },
            ],
            cursor: "6587d75f00000000060161f3",
            has_more: true,
            time: 1703422726463,
          },
        })
      }

      // 加载子评论
      if (
        note_id === "65879a2d000000003c01202b" &&
        root_comment_id === "6587a6f20000000016025335"
      ) {
        // 第一次加载更多子评论
        if (cursor === "6587b1260000000017029065") {
          resolve({
            code: 0,
            success: true,
            msg: "成功",
            data: {
              user_id: "60569e0300000000010075d9",
              comments: [
                {
                  target_comment: {
                    id: "6587a6f20000000016025335",
                    user_info: {
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                      user_id: "6481b29f000000000f005d5a",
                      nickname: "罐装快乐水",
                    },
                  },
                  id: "6587aca2000000001b007137",
                  liked: false,
                  ip_location: "安徽",
                  at_users: [],
                  like_count: "10",
                  user_info: {
                    nickname: "合肥瓦工贴砖师傅-小方",
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30q49t4tvn8005nuiap40bvfpku0k8ho?imageView2/2/w/120/format/jpg",
                    user_id: "5fd25648000000000101fdf9",
                  },
                  show_tags: [],
                  create_time: 1703390370000,
                  note_id: "65879a2d000000003c01202b",
                  status: 0,
                  content: "删了让我说",
                },
                {
                  liked: false,
                  create_time: 1703391832000,
                  status: 0,
                  content:
                    "对吧，你也沉默了吧，我可爱吃香菜了，我也沉默了[doge]",
                  at_users: [],
                  user_info: {
                    user_id: "6481b29f000000000f005d5a",
                    nickname: "罐装快乐水",
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                  },
                  show_tags: [],
                  ip_location: "福建",
                  target_comment: {
                    id: "6587b1260000000017029065",
                    user_info: {
                      user_id: "5a92f26511be106e64a82153",
                      nickname: "小米酱～香饼",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/6458c363fe6243cd283f14f1.jpg?imageView2/2/w/120/format/jpg",
                    },
                  },
                  id: "6587b25800000000160252cd",
                  note_id: "65879a2d000000003c01202b",
                  like_count: "36",
                },
                {
                  liked: false,
                  user_info: {
                    user_id: "5d2186c0000000001200708a",
                    nickname: "三秋",
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30svhe3t8426g5n91gr04gs4apmbjt20?imageView2/2/w/120/format/jpg",
                  },
                  at_users: [
                    {
                      user_id: "58f811b350c4b416861b366c",
                      nickname: "孩子想上学",
                    },
                    {
                      nickname: "君彦陌",
                      user_id: "5dc6b41e0000000001005047",
                    },
                    {
                      nickname: "诵竹",
                      user_id: "5db25fff000000000100066e",
                    },
                    {
                      user_id: "5d2ef31b0000000012030aa4",
                      nickname: "小呆鱼",
                    },
                  ],
                  note_id: "65879a2d000000003c01202b",
                  status: 0,
                  content: "@孩子想上学 @君彦陌 @诵竹 @小呆鱼",
                  like_count: "0",
                  show_tags: [],
                  create_time: 1703392239000,
                  ip_location: "河南",
                  id: "6587b3ef0000000020004476",
                  target_comment: {
                    id: "6587a6f20000000016025335",
                    user_info: {
                      user_id: "6481b29f000000000f005d5a",
                      nickname: "罐装快乐水",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                    },
                  },
                },
                {
                  id: "6587b43b000000001e01e58b",
                  at_users: [],
                  user_info: {
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30rb75h4c1k605p60g52l7u10j1n74vo?imageView2/2/w/120/format/jpg",
                    user_id: "64c08145000000001403f820",
                    nickname: "剁椒鱼头🐟",
                  },
                  create_time: 1703392315000,
                  ip_location: "海南",
                  target_comment: {
                    id: "6587a6f20000000016025335",
                    user_info: {
                      user_id: "6481b29f000000000f005d5a",
                      nickname: "罐装快乐水",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                    },
                  },
                  note_id: "65879a2d000000003c01202b",
                  status: 0,
                  content: "[石化R][石化R]",
                  liked: false,
                  like_count: "0",
                  show_tags: [],
                },
                {
                  content: "不吃",
                  at_users: [],
                  liked: false,
                  user_info: {
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sup3faok0505p8bngu5n199vd00v90?imageView2/2/w/120/format/jpg",
                    user_id: "650bbc3c0000000016038529",
                    nickname: "TroubleMaker",
                  },
                  id: "6587b576000000001e01d355",
                  status: 0,
                  like_count: "0",
                  show_tags: [],
                  create_time: 1703392630000,
                  ip_location: "广东",
                  target_comment: {
                    id: "6587b1260000000017029065",
                    user_info: {
                      user_id: "5a92f26511be106e64a82153",
                      nickname: "小米酱～香饼",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/6458c363fe6243cd283f14f1.jpg?imageView2/2/w/120/format/jpg",
                    },
                  },
                  note_id: "65879a2d000000003c01202b",
                },
              ],
              cursor: "6587b576000000001e01d355",
              has_more: true,
              time: 1703422936774,
            },
          })
        } else if (cursor === "6587b576000000001e01d355") {
          resolve({
            success: true,
            msg: "成功",
            data: {
              comments: [
                {
                  id: "6587b713000000001702e4fb",
                  content: "爱吃香菜的来了",
                  like_count: "0",
                  user_info: {
                    user_id: "5c11ceb80000000006020090",
                    nickname: "爱吃香菜的猫咪酱",
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/5ffd3178a5ba9b99cb35c14a.jpg?imageView2/2/w/120/format/jpg",
                  },
                  show_tags: [],
                  create_time: 1703393043000,
                  target_comment: {
                    id: "6587a6f20000000016025335",
                    user_info: {
                      user_id: "6481b29f000000000f005d5a",
                      nickname: "罐装快乐水",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                    },
                  },
                  note_id: "65879a2d000000003c01202b",
                  status: 0,
                  at_users: [],
                  liked: false,
                  ip_location: "上海",
                },
                {
                  user_info: {
                    user_id: "5a05c2c611be106be28cac98",
                    nickname: "Bowie",
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/64e8bfa35b76ccbe4fc1ea43.jpg?imageView2/2/w/120/format/jpg",
                  },
                  create_time: 1703393304000,
                  ip_location: "广东",
                  status: 0,
                  note_id: "65879a2d000000003c01202b",
                  content: "@@花艺师Hana",
                  at_users: [
                    {
                      user_id: "588f03155e87e77e3771331d",
                      nickname: "花艺师Hana",
                    },
                  ],
                  liked: false,
                  like_count: "0",
                  show_tags: [],
                  target_comment: {
                    id: "6587a6f20000000016025335",
                    user_info: {
                      user_id: "6481b29f000000000f005d5a",
                      nickname: "罐装快乐水",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                    },
                  },
                  id: "6587b818000000001b007cf1",
                },
                {
                  note_id: "65879a2d000000003c01202b",
                  content: "不是沉默是想提刀了[笑哭R]",
                  liked: false,
                  create_time: 1703393507000,
                  ip_location: "广东",
                  show_tags: [],
                  target_comment: {
                    id: "6587b25800000000160252cd",
                    user_info: {
                      user_id: "6481b29f000000000f005d5a",
                      nickname: "罐装快乐水",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                    },
                  },
                  id: "6587b8e3000000000601c65e",
                  status: 0,
                  at_users: [],
                  like_count: "1",
                  user_info: {
                    user_id: "5a92f26511be106e64a82153",
                    nickname: "小米酱～香饼",
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/6458c363fe6243cd283f14f1.jpg?imageView2/2/w/120/format/jpg",
                  },
                },
                {
                  at_users: [
                    {
                      user_id: "5cce647d000000001701ead5",
                      nickname: "基爷不是基",
                    },
                  ],
                  user_info: {
                    nickname: "砰砰砰的树洞",
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/640701231824e81451ba5d76.jpg?imageView2/2/w/120/format/jpg",
                    user_id: "5d6b46cd0000000001001498",
                  },
                  show_tags: [],
                  create_time: 1703393964000,
                  target_comment: {
                    id: "6587a6f20000000016025335",
                    user_info: {
                      user_id: "6481b29f000000000f005d5a",
                      nickname: "罐装快乐水",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                    },
                  },
                  id: "6587baac000000001e03bec1",
                  note_id: "65879a2d000000003c01202b",
                  status: 0,
                  ip_location: "四川",
                  content: "@基爷不是基 [doge]",
                  liked: false,
                  like_count: "0",
                },
                {
                  status: 0,
                  at_users: [
                    {
                      user_id: "62248c66000000001000673a",
                      nickname: "杨枝甘鹿",
                    },
                  ],
                  liked: false,
                  create_time: 1703393971000,
                  ip_location: "河北",
                  target_comment: {
                    id: "6587a6f20000000016025335",
                    user_info: {
                      user_id: "6481b29f000000000f005d5a",
                      nickname: "罐装快乐水",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t28rd9mk4d05p41mafjonaq5o67g4g?imageView2/2/w/120/format/jpg",
                    },
                  },
                  id: "6587bab30000000018034594",
                  note_id: "65879a2d000000003c01202b",
                  content: "@杨枝甘鹿",
                  like_count: "0",
                  user_info: {
                    user_id: "63eeea98000000001001c3e7",
                    nickname: "清欢",
                    image:
                      "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30n5608gnlc6g5ovetac43gv701gvns0?imageView2/2/w/120/format/jpg",
                  },
                  show_tags: [],
                },
              ],
              cursor: "6587bab30000000018034594",
              has_more: true,
              time: 1703423028580,
              user_id: "60569e0300000000010075d9",
            },
            code: 0,
          })
        }
      }

      // 下拉加载更多
      if (
        note_id === "65879a2d000000003c01202b" &&
        cursor === "6587d75f00000000060161f3" &&
        !root_comment_id
      ) {
        resolve({
          code: 0,
          success: true,
          msg: "成功",
          data: {
            comments: [
              {
                sub_comment_has_more: true,
                note_id: "65879a2d000000003c01202b",
                like_count: "13",
                user_info: {
                  user_id: "5c76ac94000000001002909d",
                  nickname: "盐己&利仁",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/63bfea88626cc65abca73806.jpg?imageView2/2/w/120/format/jpg",
                },
                ip_location: "吉林",
                sub_comment_count: "19",
                sub_comments: [
                  {
                    like_count: "102",
                    user_info: {
                      user_id: "61bc0573000000001000fa3e",
                      nickname: "Lana",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/64f5f4b810ef5be283193e70.jpg?imageView2/2/w/120/format/jpg",
                    },
                    show_tags: [],
                    ip_location: "新疆",
                    id: "6588109c000000001b01ee1c",
                    note_id: "65879a2d000000003c01202b",
                    at_users: [],
                    liked: false,
                    status: 0,
                    content: "你清醒一点",
                    create_time: 1703415964000,
                    target_comment: {
                      id: "65880fde00000000060172ce",
                      user_info: {
                        nickname: "盐己&利仁",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/63bfea88626cc65abca73806.jpg?imageView2/2/w/120/format/jpg",
                        user_id: "5c76ac94000000001002909d",
                      },
                    },
                  },
                ],
                sub_comment_cursor: "6588109c000000001b01ee1c",
                id: "65880fde00000000060172ce",
                at_users: [],
                show_tags: [],
                status: 3,
                content:
                  "不要再过圣诞节🎄了，那是人家纪念火烧圆明园胜利的日子，抢夺中国很多宝贝的日子。",
                liked: false,
                create_time: 1703415774000,
              },
              {
                note_id: "65879a2d000000003c01202b",
                status: 0,
                at_users: [
                  {
                    user_id: "6086899b0000000001002d22",
                    nickname: "墨离真会发癫",
                  },
                  {
                    user_id: "63dcc5a2000000002702992e",
                    nickname: "本人已疯",
                  },
                  {
                    user_id: "62654939000000001000ea96",
                    nickname: "老子疯不了一点",
                  },
                  {
                    user_id: "62886660000000002102be7c",
                    nickname: "爆米花的小海螺",
                  },
                  {
                    user_id: "63a2a4f1000000002502f52b",
                    nickname: "维物（确信）",
                  },
                ],
                sub_comment_cursor: "65881cc1000000001100ce84",
                like_count: "1",
                user_info: {
                  user_id: "619a4eaf000000001000b576",
                  nickname: "月入樱秋不是梦",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30s73b2sq2q6g5ocq9qnk1dbmfu8n9a8?imageView2/2/w/120/format/jpg",
                },
                create_time: 1703418990000,
                sub_comments: [
                  {
                    note_id: "65879a2d000000003c01202b",
                    status: 0,
                    content: "这圣诞树高级，一股香菜味儿[doge]💦",
                    at_users: [],
                    like_count: "0",
                    show_tags: [],
                    create_time: 1703419073000,
                    target_comment: {
                      id: "65881c6e000000001803606b",
                      user_info: {
                        user_id: "619a4eaf000000001000b576",
                        nickname: "月入樱秋不是梦",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30s73b2sq2q6g5ocq9qnk1dbmfu8n9a8?imageView2/2/w/120/format/jpg",
                      },
                    },
                    id: "65881cc1000000001100ce84",
                    liked: false,
                    user_info: {
                      user_id: "63a2a4f1000000002502f52b",
                      nickname: "维物（确信）",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sfa6htjjg005ot2kjopdt9b0f8glf0?imageView2/2/w/120/format/jpg",
                    },
                    ip_location: "福建",
                  },
                ],
                sub_comment_has_more: true,
                ip_location: "安徽",
                sub_comment_count: "7",
                id: "65881c6e000000001803606b",
                content:
                  "@墨离真会发癫 @本人已疯 @老子疯不了一点 @爆米花的小海螺 @维物（确信） [doge]",
                liked: false,
                show_tags: [],
              },
              {
                content: "@不舍茶语  这是什么歹毒的东西[惊恐R]",
                sub_comment_count: "3",
                sub_comment_cursor: "658802e7000000000b02a841",
                show_tags: [],
                ip_location: "北京",
                sub_comments: [
                  {
                    ip_location: "北京",
                    id: "658802e7000000000b02a841",
                    at_users: [],
                    liked: false,
                    like_count: "0",
                    show_tags: [],
                    create_time: 1703412455000,
                    target_comment: {
                      user_info: {
                        user_id: "5ea013eb0000000001003373",
                        nickname: "茶语呢喃",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2geakdk2ie06g5nl02flg8crjhuq4r80?imageView2/2/w/120/format/jpg",
                      },
                      id: "6587cf45000000001e01d05e",
                    },
                    note_id: "65879a2d000000003c01202b",
                    status: 0,
                    content: "[石化R]",
                    user_info: {
                      nickname: "不舍茶语",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/64e76a3c8b3f1217c1b1513e.jpg?imageView2/2/w/120/format/jpg",
                      user_id: "633bb867000000001802b539",
                    },
                  },
                ],
                note_id: "65879a2d000000003c01202b",
                status: 0,
                liked: false,
                user_info: {
                  user_id: "5ea013eb0000000001003373",
                  nickname: "茶语呢喃",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2geakdk2ie06g5nl02flg8crjhuq4r80?imageView2/2/w/120/format/jpg",
                },
                id: "6587cf45000000001e01d05e",
                at_users: [
                  {
                    user_id: "633bb867000000001802b539",
                    nickname: "不舍茶语",
                  },
                ],
                create_time: 1703399237000,
                like_count: "2",
                sub_comment_has_more: true,
              },
              {
                create_time: 1703413298000,
                id: "65880632000000000601eb0b",
                at_users: [
                  {
                    user_id: "63bbb83f0000000027029644",
                    nickname: "不关小林的事",
                  },
                ],
                user_info: {
                  user_id: "5cea3162000000001101c878",
                  nickname: "吃饭啦",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30slhqbn3ju0g5n7a65h4bi3o0534i9g?imageView2/2/w/120/format/jpg",
                },
                show_tags: [],
                status: 0,
                content: "@不关小林的事",
                note_id: "65879a2d000000003c01202b",
                ip_location: "浙江",
                sub_comment_count: "6",
                sub_comment_has_more: true,
                liked: false,
                like_count: "1",
                sub_comments: [
                  {
                    target_comment: {
                      id: "65880632000000000601eb0b",
                      user_info: {
                        user_id: "5cea3162000000001101c878",
                        nickname: "吃饭啦",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30slhqbn3ju0g5n7a65h4bi3o0534i9g?imageView2/2/w/120/format/jpg",
                      },
                    },
                    at_users: [],
                    liked: false,
                    create_time: 1703414539000,
                    content: "有人说吃香菜和不吃香菜的都沉默了[偷笑R]",
                    like_count: "1",
                    user_info: {
                      user_id: "63bbb83f0000000027029644",
                      nickname: "不关小林的事",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/657abaf821a3b06ed5ef32d3.jpg?imageView2/2/w/120/format/jpg",
                    },
                    show_tags: [],
                    ip_location: "江苏",
                    id: "65880b0b000000001e01c1f6",
                    note_id: "65879a2d000000003c01202b",
                    status: 0,
                  },
                ],
                sub_comment_cursor: "65880b0b000000001e01c1f6",
              },
              {
                sub_comment_count: "0",
                sub_comments: [],
                content:
                  "@美静💰多多 @风 @大马哈鱼🦐 @差生文具多 @喵喵喵👑 @星河曙光",
                show_tags: [],
                sub_comment_cursor: "",
                sub_comment_has_more: false,
                status: 0,
                like_count: "0",
                liked: false,
                create_time: 1703422665000,
                at_users: [
                  {
                    user_id: "55769a1ab7ba221f14083f17",
                    nickname: "美静💰多多",
                  },
                  {
                    user_id: "6236f0fd00000000100048db",
                    nickname: "风",
                  },
                  {
                    nickname: "大马哈鱼🦐",
                    user_id: "5e54ae05000000000100b7eb",
                  },
                  {
                    nickname: "差生文具多",
                    user_id: "6188a30a0000000010006a4e",
                  },
                  {
                    user_id: "5859641950c4b41c743d7e98",
                    nickname: "喵喵喵👑",
                  },
                  {
                    nickname: "星河曙光",
                    user_id: "606c6366000000000101cfe4",
                  },
                ],
                user_info: {
                  user_id: "54e5daa6d39ea26ef0a82a40",
                  nickname: "平静内心",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30p0f7uus4060401fendacai090cs5h0?imageView2/2/w/120/format/jpg",
                },
                ip_location: "湖北",
                id: "65882ac9000000000601cbe7",
                note_id: "65879a2d000000003c01202b",
              },
              {
                content: "@陌玖九🕊 你做后面那个[萌萌哒R]",
                liked: false,
                user_info: {
                  user_id: "5f1a84a300000000010044da",
                  nickname: "月掩门",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/62bc13ea1707361c99bf1a2d.jpg?imageView2/2/w/120/format/jpg",
                },
                create_time: 1703422660000,
                sub_comment_count: "0",
                sub_comment_cursor: "",
                id: "65882ac4000000001e03ac40",
                sub_comments: [],
                note_id: "65879a2d000000003c01202b",
                like_count: "0",
                ip_location: "黑龙江",
                sub_comment_has_more: false,
                at_users: [
                  {
                    user_id: "5f16c864000000000100ae1c",
                    nickname: "陌玖九🕊",
                  },
                ],
                show_tags: [],
                status: 0,
              },
              {
                content: "@妤初",
                liked: false,
                user_info: {
                  user_id: "63dd120e0000000026013990",
                  nickname: "咋咋呼呼🍓",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2ht4vvkcii05g5out2879iecgc9g1jrg?imageView2/2/w/120/format/jpg",
                },
                show_tags: [],
                create_time: 1703422660000,
                note_id: "65879a2d000000003c01202b",
                like_count: "0",
                status: 0,
                sub_comments: [],
                sub_comment_has_more: false,
                ip_location: "陕西",
                at_users: [
                  {
                    user_id: "614f2714000000000201d23a",
                    nickname: "妤初",
                  },
                ],
                sub_comment_count: "0",
                sub_comment_cursor: "",
                id: "65882ac4000000001e03ac3d",
              },
              {
                ip_location: "新疆",
                sub_comment_count: "6",
                sub_comments: [
                  {
                    liked: false,
                    user_info: {
                      user_id: "5a87b1ee4eacab506c7c0c0e",
                      nickname: "安久",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/5a87b1ee4eacab506c7c0c0e.jpg?imageView2/2/w/120/format/jpg",
                    },
                    create_time: 1703419717000,
                    ip_location: "广东",
                    note_id: "65879a2d000000003c01202b",
                    status: 0,
                    at_users: [],
                    show_tags: [],
                    target_comment: {
                      id: "65881eee000000001702a598",
                      user_info: {
                        user_id: "5c05eef244363b1ed74bc43f",
                        nickname: "噢，是安猫猫的小刘呀",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30po3dnfa6k6g4buqccnf5h1v3od8pn0?imageView2/2/w/120/format/jpg",
                      },
                    },
                    id: "65881f450000000018035b89",
                    content: "离谱",
                    like_count: "1",
                  },
                ],
                id: "65881eee000000001702a598",
                status: 0,
                content: "@安久",
                like_count: "1",
                user_info: {
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30po3dnfa6k6g4buqccnf5h1v3od8pn0?imageView2/2/w/120/format/jpg",
                  user_id: "5c05eef244363b1ed74bc43f",
                  nickname: "噢，是安猫猫的小刘呀",
                },
                sub_comment_has_more: true,
                note_id: "65879a2d000000003c01202b",
                show_tags: [],
                sub_comment_cursor: "65881f450000000018035b89",
                at_users: [
                  {
                    nickname: "安久",
                    user_id: "5a87b1ee4eacab506c7c0c0e",
                  },
                ],
                liked: false,
                create_time: 1703419630000,
              },
              {
                liked: false,
                user_info: {
                  user_id: "5ba83a0bb9b6ed0001c238be",
                  nickname: "橘子要努力奔向太阳",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/6413fad7791182156abe997b.jpg?imageView2/2/w/120/format/jpg",
                },
                show_tags: [],
                create_time: 1703422461000,
                sub_comment_cursor: "",
                sub_comment_has_more: false,
                note_id: "65879a2d000000003c01202b",
                status: 0,
                content: "@雷伊哦雷伊哦哟 圣诞快乐[kissR]",
                sub_comments: [],
                id: "658829fd00000000060156d2",
                at_users: [
                  {
                    user_id: "5f8dbfbf000000000100298a",
                    nickname: "雷伊哦雷伊哦哟",
                  },
                ],
                like_count: "0",
                ip_location: "广西",
                sub_comment_count: "0",
              },
              {
                note_id: "65879a2d000000003c01202b",
                content: "@普拉洛芬豆儿",
                create_time: 1703422646000,
                status: 0,
                show_tags: [],
                ip_location: "陕西",
                sub_comment_count: "0",
                sub_comments: [],
                sub_comment_has_more: false,
                like_count: "0",
                id: "65882ab60000000018026a78",
                at_users: [
                  {
                    user_id: "5c0753f50000000005018d24",
                    nickname: "普拉洛芬豆儿",
                  },
                ],
                liked: false,
                user_info: {
                  user_id: "55aafedac2bdeb029949a236",
                  nickname: "小企鹅",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/644f8208b1e3c7ad3b342190.jpg?imageView2/2/w/120/format/jpg",
                },
                sub_comment_cursor: "",
              },
            ],
            cursor: "65882ab60000000018026a78",
            has_more: true,
            time: 1703423058021,
            user_id: "60569e0300000000010075d9",
          },
        })
      } else {
        resolve({
          code: 0,
          success: true,
          msg: "成功",
          data: {
            comments: [
              {
                sub_comment_has_more: true,
                note_id: "65879a2d000000003c01202b",
                like_count: "13",
                user_info: {
                  user_id: "5c76ac94000000001002909d",
                  nickname: "盐己&利仁",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/63bfea88626cc65abca73806.jpg?imageView2/2/w/120/format/jpg",
                },
                ip_location: "吉林",
                sub_comment_count: "19",
                sub_comments: [
                  {
                    like_count: "102",
                    user_info: {
                      user_id: "61bc0573000000001000fa3e",
                      nickname: "Lana",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/64f5f4b810ef5be283193e70.jpg?imageView2/2/w/120/format/jpg",
                    },
                    show_tags: [],
                    ip_location: "新疆",
                    id: "6588109c000000001b01ee1c",
                    note_id: "65879a2d000000003c01202b",
                    at_users: [],
                    liked: false,
                    status: 0,
                    content: "你清醒一点",
                    create_time: 1703415964000,
                    target_comment: {
                      id: "65880fde00000000060172ce",
                      user_info: {
                        nickname: "盐己&利仁",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/63bfea88626cc65abca73806.jpg?imageView2/2/w/120/format/jpg",
                        user_id: "5c76ac94000000001002909d",
                      },
                    },
                  },
                ],
                sub_comment_cursor: "6588109c000000001b01ee1c",
                id: "65880fde00000000060172ce",
                at_users: [],
                show_tags: [],
                status: 3,
                content:
                  "不要再过圣诞节🎄了，那是人家纪念火烧圆明园胜利的日子，抢夺中国很多宝贝的日子。",
                liked: false,
                create_time: 1703415774000,
              },
              {
                note_id: "65879a2d000000003c01202b",
                status: 0,
                at_users: [
                  {
                    user_id: "6086899b0000000001002d22",
                    nickname: "墨离真会发癫",
                  },
                  {
                    user_id: "63dcc5a2000000002702992e",
                    nickname: "本人已疯",
                  },
                  {
                    user_id: "62654939000000001000ea96",
                    nickname: "老子疯不了一点",
                  },
                  {
                    user_id: "62886660000000002102be7c",
                    nickname: "爆米花的小海螺",
                  },
                  {
                    user_id: "63a2a4f1000000002502f52b",
                    nickname: "维物（确信）",
                  },
                ],
                sub_comment_cursor: "65881cc1000000001100ce84",
                like_count: "1",
                user_info: {
                  user_id: "619a4eaf000000001000b576",
                  nickname: "月入樱秋不是梦",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30s73b2sq2q6g5ocq9qnk1dbmfu8n9a8?imageView2/2/w/120/format/jpg",
                },
                create_time: 1703418990000,
                sub_comments: [
                  {
                    note_id: "65879a2d000000003c01202b",
                    status: 0,
                    content: "这圣诞树高级，一股香菜味儿[doge]💦",
                    at_users: [],
                    like_count: "0",
                    show_tags: [],
                    create_time: 1703419073000,
                    target_comment: {
                      id: "65881c6e000000001803606b",
                      user_info: {
                        user_id: "619a4eaf000000001000b576",
                        nickname: "月入樱秋不是梦",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30s73b2sq2q6g5ocq9qnk1dbmfu8n9a8?imageView2/2/w/120/format/jpg",
                      },
                    },
                    id: "65881cc1000000001100ce84",
                    liked: false,
                    user_info: {
                      user_id: "63a2a4f1000000002502f52b",
                      nickname: "维物（确信）",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sfa6htjjg005ot2kjopdt9b0f8glf0?imageView2/2/w/120/format/jpg",
                    },
                    ip_location: "福建",
                  },
                ],
                sub_comment_has_more: true,
                ip_location: "安徽",
                sub_comment_count: "7",
                id: "65881c6e000000001803606b",
                content:
                  "@墨离真会发癫 @本人已疯 @老子疯不了一点 @爆米花的小海螺 @维物（确信） [doge]",
                liked: false,
                show_tags: [],
              },
              {
                content: "@不舍茶语  这是什么歹毒的东西[惊恐R]",
                sub_comment_count: "3",
                sub_comment_cursor: "658802e7000000000b02a841",
                show_tags: [],
                ip_location: "北京",
                sub_comments: [
                  {
                    ip_location: "北京",
                    id: "658802e7000000000b02a841",
                    at_users: [],
                    liked: false,
                    like_count: "0",
                    show_tags: [],
                    create_time: 1703412455000,
                    target_comment: {
                      user_info: {
                        user_id: "5ea013eb0000000001003373",
                        nickname: "茶语呢喃",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2geakdk2ie06g5nl02flg8crjhuq4r80?imageView2/2/w/120/format/jpg",
                      },
                      id: "6587cf45000000001e01d05e",
                    },
                    note_id: "65879a2d000000003c01202b",
                    status: 0,
                    content: "[石化R]",
                    user_info: {
                      nickname: "不舍茶语",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/64e76a3c8b3f1217c1b1513e.jpg?imageView2/2/w/120/format/jpg",
                      user_id: "633bb867000000001802b539",
                    },
                  },
                ],
                note_id: "65879a2d000000003c01202b",
                status: 0,
                liked: false,
                user_info: {
                  user_id: "5ea013eb0000000001003373",
                  nickname: "茶语呢喃",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2geakdk2ie06g5nl02flg8crjhuq4r80?imageView2/2/w/120/format/jpg",
                },
                id: "6587cf45000000001e01d05e",
                at_users: [
                  {
                    user_id: "633bb867000000001802b539",
                    nickname: "不舍茶语",
                  },
                ],
                create_time: 1703399237000,
                like_count: "2",
                sub_comment_has_more: true,
              },
              {
                create_time: 1703413298000,
                id: "65880632000000000601eb0b",
                at_users: [
                  {
                    user_id: "63bbb83f0000000027029644",
                    nickname: "不关小林的事",
                  },
                ],
                user_info: {
                  user_id: "5cea3162000000001101c878",
                  nickname: "吃饭啦",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30slhqbn3ju0g5n7a65h4bi3o0534i9g?imageView2/2/w/120/format/jpg",
                },
                show_tags: [],
                status: 0,
                content: "@不关小林的事",
                note_id: "65879a2d000000003c01202b",
                ip_location: "浙江",
                sub_comment_count: "6",
                sub_comment_has_more: true,
                liked: false,
                like_count: "1",
                sub_comments: [
                  {
                    target_comment: {
                      id: "65880632000000000601eb0b",
                      user_info: {
                        user_id: "5cea3162000000001101c878",
                        nickname: "吃饭啦",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30slhqbn3ju0g5n7a65h4bi3o0534i9g?imageView2/2/w/120/format/jpg",
                      },
                    },
                    at_users: [],
                    liked: false,
                    create_time: 1703414539000,
                    content: "有人说吃香菜和不吃香菜的都沉默了[偷笑R]",
                    like_count: "1",
                    user_info: {
                      user_id: "63bbb83f0000000027029644",
                      nickname: "不关小林的事",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/657abaf821a3b06ed5ef32d3.jpg?imageView2/2/w/120/format/jpg",
                    },
                    show_tags: [],
                    ip_location: "江苏",
                    id: "65880b0b000000001e01c1f6",
                    note_id: "65879a2d000000003c01202b",
                    status: 0,
                  },
                ],
                sub_comment_cursor: "65880b0b000000001e01c1f6",
              },
              {
                sub_comment_count: "0",
                sub_comments: [],
                content:
                  "@美静💰多多 @风 @大马哈鱼🦐 @差生文具多 @喵喵喵👑 @星河曙光",
                show_tags: [],
                sub_comment_cursor: "",
                sub_comment_has_more: false,
                status: 0,
                like_count: "0",
                liked: false,
                create_time: 1703422665000,
                at_users: [
                  {
                    user_id: "55769a1ab7ba221f14083f17",
                    nickname: "美静💰多多",
                  },
                  {
                    user_id: "6236f0fd00000000100048db",
                    nickname: "风",
                  },
                  {
                    nickname: "大马哈鱼🦐",
                    user_id: "5e54ae05000000000100b7eb",
                  },
                  {
                    nickname: "差生文具多",
                    user_id: "6188a30a0000000010006a4e",
                  },
                  {
                    user_id: "5859641950c4b41c743d7e98",
                    nickname: "喵喵喵👑",
                  },
                  {
                    nickname: "星河曙光",
                    user_id: "606c6366000000000101cfe4",
                  },
                ],
                user_info: {
                  user_id: "54e5daa6d39ea26ef0a82a40",
                  nickname: "平静内心",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30p0f7uus4060401fendacai090cs5h0?imageView2/2/w/120/format/jpg",
                },
                ip_location: "湖北",
                id: "65882ac9000000000601cbe7",
                note_id: "65879a2d000000003c01202b",
              },
              {
                content: "@陌玖九🕊 你做后面那个[萌萌哒R]",
                liked: false,
                user_info: {
                  user_id: "5f1a84a300000000010044da",
                  nickname: "月掩门",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/62bc13ea1707361c99bf1a2d.jpg?imageView2/2/w/120/format/jpg",
                },
                create_time: 1703422660000,
                sub_comment_count: "0",
                sub_comment_cursor: "",
                id: "65882ac4000000001e03ac40",
                sub_comments: [],
                note_id: "65879a2d000000003c01202b",
                like_count: "0",
                ip_location: "黑龙江",
                sub_comment_has_more: false,
                at_users: [
                  {
                    user_id: "5f16c864000000000100ae1c",
                    nickname: "陌玖九🕊",
                  },
                ],
                show_tags: [],
                status: 0,
              },
              {
                content: "@妤初",
                liked: false,
                user_info: {
                  user_id: "63dd120e0000000026013990",
                  nickname: "咋咋呼呼🍓",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2ht4vvkcii05g5out2879iecgc9g1jrg?imageView2/2/w/120/format/jpg",
                },
                show_tags: [],
                create_time: 1703422660000,
                note_id: "65879a2d000000003c01202b",
                like_count: "0",
                status: 0,
                sub_comments: [],
                sub_comment_has_more: false,
                ip_location: "陕西",
                at_users: [
                  {
                    user_id: "614f2714000000000201d23a",
                    nickname: "妤初",
                  },
                ],
                sub_comment_count: "0",
                sub_comment_cursor: "",
                id: "65882ac4000000001e03ac3d",
              },
              {
                ip_location: "新疆",
                sub_comment_count: "6",
                sub_comments: [
                  {
                    liked: false,
                    user_info: {
                      user_id: "5a87b1ee4eacab506c7c0c0e",
                      nickname: "安久",
                      image:
                        "https://sns-avatar-qc.xhscdn.com/avatar/5a87b1ee4eacab506c7c0c0e.jpg?imageView2/2/w/120/format/jpg",
                    },
                    create_time: 1703419717000,
                    ip_location: "广东",
                    note_id: "65879a2d000000003c01202b",
                    status: 0,
                    at_users: [],
                    show_tags: [],
                    target_comment: {
                      id: "65881eee000000001702a598",
                      user_info: {
                        user_id: "5c05eef244363b1ed74bc43f",
                        nickname: "噢，是安猫猫的小刘呀",
                        image:
                          "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30po3dnfa6k6g4buqccnf5h1v3od8pn0?imageView2/2/w/120/format/jpg",
                      },
                    },
                    id: "65881f450000000018035b89",
                    content: "离谱",
                    like_count: "1",
                  },
                ],
                id: "65881eee000000001702a598",
                status: 0,
                content: "@安久",
                like_count: "1",
                user_info: {
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30po3dnfa6k6g4buqccnf5h1v3od8pn0?imageView2/2/w/120/format/jpg",
                  user_id: "5c05eef244363b1ed74bc43f",
                  nickname: "噢，是安猫猫的小刘呀",
                },
                sub_comment_has_more: true,
                note_id: "65879a2d000000003c01202b",
                show_tags: [],
                sub_comment_cursor: "65881f450000000018035b89",
                at_users: [
                  {
                    nickname: "安久",
                    user_id: "5a87b1ee4eacab506c7c0c0e",
                  },
                ],
                liked: false,
                create_time: 1703419630000,
              },
              {
                liked: false,
                user_info: {
                  user_id: "5ba83a0bb9b6ed0001c238be",
                  nickname: "橘子要努力奔向太阳",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/6413fad7791182156abe997b.jpg?imageView2/2/w/120/format/jpg",
                },
                show_tags: [],
                create_time: 1703422461000,
                sub_comment_cursor: "",
                sub_comment_has_more: false,
                note_id: "65879a2d000000003c01202b",
                status: 0,
                content: "@雷伊哦雷伊哦哟 圣诞快乐[kissR]",
                sub_comments: [],
                id: "658829fd00000000060156d2",
                at_users: [
                  {
                    user_id: "5f8dbfbf000000000100298a",
                    nickname: "雷伊哦雷伊哦哟",
                  },
                ],
                like_count: "0",
                ip_location: "广西",
                sub_comment_count: "0",
              },
              {
                note_id: "65879a2d000000003c01202b",
                content: "@普拉洛芬豆儿",
                create_time: 1703422646000,
                status: 0,
                show_tags: [],
                ip_location: "陕西",
                sub_comment_count: "0",
                sub_comments: [],
                sub_comment_has_more: false,
                like_count: "0",
                id: "65882ab60000000018026a78",
                at_users: [
                  {
                    user_id: "5c0753f50000000005018d24",
                    nickname: "普拉洛芬豆儿",
                  },
                ],
                liked: false,
                user_info: {
                  user_id: "55aafedac2bdeb029949a236",
                  nickname: "小企鹅",
                  image:
                    "https://sns-avatar-qc.xhscdn.com/avatar/644f8208b1e3c7ad3b342190.jpg?imageView2/2/w/120/format/jpg",
                },
                sub_comment_cursor: "",
              },
            ],
            cursor: "65882ab60000000018026a78",
            has_more: false,
            time: 1703423058021,
            user_id: "60569e0300000000010075d9",
          },
        })
      }
      // reject("some Error")
    }, 1000)
  })
}
