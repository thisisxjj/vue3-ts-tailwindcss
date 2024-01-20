import { HomeFeedData } from "@/types/feeds"
import { FeedDataDetail } from "@/types/feed-detail"
import { SuccessResponse } from "@/types/response"

export const getHomeFeed: () => Promise<SuccessResponse<HomeFeedData>> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        msg: "成功",
        data: {
          items: [
            {
              id: "655324b10000000032025104",
              model_type: "note",
              note_card: {
                type: "normal",
                display_title: "男士发型参考/根据脸型选发型/男生短发发型",
                user: {
                  nick_name: "发匠设计工作室",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/60f240168ec8c3f69e2fbb81.jpg",
                  user_id: "5ce12053000000001203850a",
                  nickname: "发匠设计工作室",
                },
                interact_info: {
                  liked: false,
                  liked_count: "328",
                },
                cover: {
                  file_id: "",
                  height: 2160,
                  width: 1620,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/2f66949bf4064f644b2459484631073b/1040g2sg30resf5051e6g5n71419kn18aqs9bu88!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/0cb70d2d1c8db0fe1bbc4a5470bf0769/1040g2sg30resf5051e6g5n71419kn18aqs9bu88!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/2f66949bf4064f644b2459484631073b/1040g2sg30resf5051e6g5n71419kn18aqs9bu88!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/0cb70d2d1c8db0fe1bbc4a5470bf0769/1040g2sg30resf5051e6g5n71419kn18aqs9bu88!nc_n_webp_mw_1",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              ignore: false,
              id: "6587bd41000000003802c450",
              model_type: "note",
              note_card: {
                type: "video",
                display_title: "没有蓝条就是爽奥特曼 艾斯奥特曼 童年 剪辑 动画",
                user: {
                  user_id: "5d7a7a520000000001004657",
                  nickname: "春宵漫漫",
                  nick_name: "春宵漫漫",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/63e31bd5627a7faf54870514.jpg",
                },
                interact_info: {
                  liked: false,
                  liked_count: "222",
                },
                cover: {
                  height: 1226,
                  width: 920,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/80a22ce307aec7dbd223846d74f8e910/1040g00830t2833k646005nbqf9908hinb3qn240!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/c88873986362962a44016ca1a3447a2b/1040g00830t2833k646005nbqf9908hinb3qn240!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/80a22ce307aec7dbd223846d74f8e910/1040g00830t2833k646005nbqf9908hinb3qn240!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/c88873986362962a44016ca1a3447a2b/1040g00830t2833k646005nbqf9908hinb3qn240!nc_n_webp_mw_1",
                  file_id: "",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
            },
            {
              id: "65801e3c00000000070392f7",
              model_type: "note",
              note_card: {
                cover: {
                  file_id: "",
                  height: 1080,
                  width: 1920,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/994461d13d099a397b1bb5642da3907f/1040g2sg30sqptu1q466g5otmehs9iectio72s20!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/b25068b0975f0aa16e4ba3e49614695d/1040g2sg30sqptu1q466g5otmehs9iectio72s20!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/994461d13d099a397b1bb5642da3907f/1040g2sg30sqptu1q466g5otmehs9iectio72s20!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/b25068b0975f0aa16e4ba3e49614695d/1040g2sg30sqptu1q466g5otmehs9iectio72s20!nc_n_webp_mw_1",
                },
                type: "video",
                display_title: "新手第一次跑高速完整流程，提前了解，提升",
                user: {
                  nickname: "俊辰说车",
                  nick_name: "俊辰说车",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/6441577259d97ae238203ddb.jpg",
                  user_id: "63b67478000000002601399d",
                },
                interact_info: {
                  liked: false,
                  liked_count: "1879",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              id: "65879a2d000000003c01202b",
              model_type: "note",
              note_card: {
                cover: {
                  file_id: "",
                  height: 1440,
                  width: 1080,
                  url: "",
                  info_list: [
                    {
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/e00fd1d9db3697f638d3eaaaa3b416e3/spectrum/1040g0k030t23pureju005od23blk0mv7qk00fcg!nc_n_webp_prv_1",
                      image_scene: "WB_PRV",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/aa2b0513d97e81493e0d4d955ab7e655/spectrum/1040g0k030t23pureju005od23blk0mv7qk00fcg!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/e00fd1d9db3697f638d3eaaaa3b416e3/spectrum/1040g0k030t23pureju005od23blk0mv7qk00fcg!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/aa2b0513d97e81493e0d4d955ab7e655/spectrum/1040g0k030t23pureju005od23blk0mv7qk00fcg!nc_n_webp_mw_1",
                },
                type: "video",
                display_title: "@你最好的朋友 给你做这个“香菜圣诞树”",
                user: {
                  nick_name: "小夫同学",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2qnkrb3ojm0005od23blk0mv7rnmml10",
                  user_id: "61a21aeb0000000010005be7",
                  nickname: "小夫同学",
                },
                interact_info: {
                  liked: false,
                  liked_count: "55217",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              id: "6582c475000000003c010b56",
              model_type: "note",
              note_card: {
                type: "video",
                display_title: "美国发明 日本壮大，预制菜席卷中国！",
                user: {
                  nickname: "华商韬略",
                  nick_name: "华商韬略",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/6040819aa2b9ea0001bc7338.jpg",
                  user_id: "5fc796e400000000010061bd",
                },
                interact_info: {
                  liked: false,
                  liked_count: "9410",
                },
                cover: {
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/37f5981cb073b1e392e6a6466e487810/spectrum/1040g0k030st8t4053q005nu7iri08odt6cahr7g!nc_n_webp_mw_1",
                  file_id: "",
                  height: 2560,
                  width: 1920,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/93e100ce19ef667127899ebe15e89c0e/spectrum/1040g0k030st8t4053q005nu7iri08odt6cahr7g!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/37f5981cb073b1e392e6a6466e487810/spectrum/1040g0k030st8t4053q005nu7iri08odt6cahr7g!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/93e100ce19ef667127899ebe15e89c0e/spectrum/1040g0k030st8t4053q005nu7iri08odt6cahr7g!nc_n_webp_prv_1",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              model_type: "note",
              note_card: {
                cover: {
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/fd8aaa3ae865c7f4a710acac02a56401/1040g00830t241fk646005nnb5jc0bgrm4t8lr8o!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/49028fe0369843fce0f6afb5510e4026/1040g00830t241fk646005nnb5jc0bgrm4t8lr8o!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1483,
                  width: 1119,
                  url: "",
                  info_list: [
                    {
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/fd8aaa3ae865c7f4a710acac02a56401/1040g00830t241fk646005nnb5jc0bgrm4t8lr8o!nc_n_webp_prv_1",
                      image_scene: "WB_PRV",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/49028fe0369843fce0f6afb5510e4026/1040g00830t241fk646005nnb5jc0bgrm4t8lr8o!nc_n_webp_mw_1",
                    },
                  ],
                },
                type: "normal",
                display_title: "你的心理压力大不大 ",
                user: {
                  nick_name: "原味.",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30rjnhcpeig005nnb5jc0bgrm1up72i0",
                  user_id: "5eeb2cd8000000000101c376",
                  nickname: "原味.",
                },
                interact_info: {
                  liked_count: "1845",
                  liked: false,
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "65879c12000000003802a83a",
            },
            {
              ignore: false,
              id: "658585270000000009020b4d",
              model_type: "note",
              note_card: {
                interact_info: {
                  liked_count: "524",
                  liked: false,
                },
                cover: {
                  width: 1080,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/8d4d38e33df08432a85a8672108ff336/1040g00830t02nuolka005ojig528c3jm25sv3mo!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/0a7b7209c628f0ea29801a414bf3100b/1040g00830t02nuolka005ojig528c3jm25sv3mo!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/8d4d38e33df08432a85a8672108ff336/1040g00830t02nuolka005ojig528c3jm25sv3mo!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/0a7b7209c628f0ea29801a414bf3100b/1040g00830t02nuolka005ojig528c3jm25sv3mo!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1080,
                },
                type: "video",
                display_title: "挑战国内最刺激的过山车",
                user: {
                  user_id: "627281440000000021020e76",
                  nickname: "林武同学",
                  nick_name: "林武同学",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/637acb140b5102202a8130ba.jpg",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
            },
            {
              note_card: {
                user: {
                  nickname: "年轻18岁养成计划",
                  nick_name: "年轻18岁养成计划",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sqs0l1uju605p843n24gi449d8p6r8",
                  user_id: "65041dc40000000012004884",
                },
                interact_info: {
                  liked: false,
                  liked_count: "346",
                },
                cover: {
                  file_id: "",
                  height: 1660,
                  width: 1242,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/be0b5e96ea5ffdfedd7c96e382f33aa4/1040g2sg30s9n2ittim5g5p843n24gi44d558k2g!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/5f0355f3171abaf7e16cfa23a600a946/1040g2sg30s9n2ittim5g5p843n24gi44d558k2g!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/be0b5e96ea5ffdfedd7c96e382f33aa4/1040g2sg30s9n2ittim5g5p843n24gi44d558k2g!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/5f0355f3171abaf7e16cfa23a600a946/1040g2sg30s9n2ittim5g5p843n24gi44d558k2g!nc_n_webp_mw_1",
                },
                type: "normal",
                display_title: "多拍拍对象的屁屁，好处多多哦！",
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "656e9e67000000003a00a361",
              model_type: "note",
            },
            {
              note_card: {
                type: "normal",
                display_title: "仅限武汉地区哦～ ",
                user: {
                  nickname: "YuiYu脱单社",
                  nick_name: "YuiYu脱单社",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/6448d8b2b2b360267e42981b.jpg",
                  user_id: "641801a90000000012012baf",
                },
                interact_info: {
                  liked_count: "6",
                  liked: false,
                },
                cover: {
                  file_id: "",
                  height: 1707,
                  width: 1280,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/70aa9e076c99759b2aa74dcfaf0ba57f/1040g2sg30svgf6tj42005p0o06kkiatftv30ngg!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/e39a42b4e81027b23ad8cc80bda38f33/1040g2sg30svgf6tj42005p0o06kkiatftv30ngg!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/70aa9e076c99759b2aa74dcfaf0ba57f/1040g2sg30svgf6tj42005p0o06kkiatftv30ngg!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/e39a42b4e81027b23ad8cc80bda38f33/1040g2sg30svgf6tj42005p0o06kkiatftv30ngg!nc_n_webp_mw_1",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "6584ef760000000039030dea",
              model_type: "note",
            },
            {
              id: "6587f31900000000380299df",
              model_type: "note",
              note_card: {
                cover: {
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/f1d3139e816f067cdca19bec9b12bf00/spectrum/1040g0k030t2drfgp40005nt699ngbn9csjprkd0!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/8e0737743978724e0540957400114e00/spectrum/1040g0k030t2drfgp40005nt699ngbn9csjprkd0!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/f1d3139e816f067cdca19bec9b12bf00/spectrum/1040g0k030t2drfgp40005nt699ngbn9csjprkd0!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/8e0737743978724e0540957400114e00/spectrum/1040g0k030t2drfgp40005nt699ngbn9csjprkd0!nc_n_webp_mw_1",
                  file_id: "",
                  height: 674,
                  width: 506,
                  url: "",
                },
                type: "video",
                display_title: "暴暴龙：奶龙，你这龙还怪好嘞",
                user: {
                  nick_name: "奶龙",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/5fa65a498afb1f0001d37d66.jpg",
                  user_id: "5fa64a6f000000000101dd2c",
                  nickname: "奶龙",
                },
                interact_info: {
                  liked: false,
                  liked_count: "1971",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              id: "6587bc0a00000000380219a0",
              model_type: "note",
              note_card: {
                cover: {
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/73af684b968caa800c890538747284dc/1040g2sg30t27ub6f3q005ns15af09f2983diao0!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/fedf76836bbb6fa4c66df79ec43a53a6/1040g2sg30t27ub6f3q005ns15af09f2983diao0!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/73af684b968caa800c890538747284dc/1040g2sg30t27ub6f3q005ns15af09f2983diao0!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/fedf76836bbb6fa4c66df79ec43a53a6/1040g2sg30t27ub6f3q005ns15af09f2983diao0!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1200,
                  width: 900,
                },
                type: "normal",
                display_title: "太可爱啦！来换新春圣诞小猫图标",
                user: {
                  nick_name: "猫格局",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/657150d8d28ab9f8e12f817a.jpg",
                  user_id: "5f812a9e000000000100bc49",
                  nickname: "猫格局",
                },
                interact_info: {
                  liked: false,
                  liked_count: "7939",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              ignore: false,
              id: "6587c87400000000380268ef",
              model_type: "note",
              note_card: {
                cover: {
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/d1973105acace883deacfaace4e9f840/1040g00830t29eqvtjs005o7mqi708dpvhat9f08!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/9c201e23ece508a65713d3b12fe60f35/1040g00830t29eqvtjs005o7mqi708dpvhat9f08!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1920,
                  width: 1080,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/d1973105acace883deacfaace4e9f840/1040g00830t29eqvtjs005o7mqi708dpvhat9f08!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/9c201e23ece508a65713d3b12fe60f35/1040g00830t29eqvtjs005o7mqi708dpvhat9f08!nc_n_webp_mw_1",
                    },
                  ],
                },
                type: "video",
                display_title: "泥鳅还能钻豆腐 ",
                user: {
                  nick_name: "小瀚瀚",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/64a789db539b8df857ee49b3.jpg",
                  user_id: "60f6d48e000000000100373f",
                  nickname: "小瀚瀚",
                },
                interact_info: {
                  liked: false,
                  liked_count: "495",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
            },
            {
              id: "65879a860000000034036ea6",
              model_type: "note",
              note_card: {
                type: "normal",
                display_title: "直播带货的六大巨头∶",
                user: {
                  nick_name: "开眼界",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30pjkeko86g605p3773vkmk4e1jpboeg",
                  user_id: "646738ff000000001203508e",
                  nickname: "开眼界",
                },
                interact_info: {
                  liked: false,
                  liked_count: "71",
                },
                cover: {
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/3298361fc8239d93a95ffffdce6a5fff/1040g00830t23j2obka6g5p3773vkmk4ec9oafq0!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/3bfc0a1397055b3e07013bb911ad2612/1040g00830t23j2obka6g5p3773vkmk4ec9oafq0!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/3298361fc8239d93a95ffffdce6a5fff/1040g00830t23j2obka6g5p3773vkmk4ec9oafq0!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/3bfc0a1397055b3e07013bb911ad2612/1040g00830t23j2obka6g5p3773vkmk4ec9oafq0!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1483,
                  width: 1079,
                  url: "",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              note_card: {
                type: "video",
                display_title:
                  "谁给我弄的啊😂让我早晨上班找了好久车！找到了也差点没认出来，我想知道这是哪位大",
                user: {
                  nick_name: "一路风景",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30rudg3st2g6g5ohlsv340ipcfhlh1k0",
                  user_id: "6235e7c60000000010004b2c",
                  nickname: "一路风景",
                },
                interact_info: {
                  liked: false,
                  liked_count: "26276",
                },
                cover: {
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/04bed208cea76b7f85a36d4958d84381/1040g00830t0quv8jk46g5ohlsv340ipckbu95ko!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/61751fe122aa4373fc7f42be7c74f588/1040g00830t0quv8jk46g5ohlsv340ipckbu95ko!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1280,
                  width: 720,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/04bed208cea76b7f85a36d4958d84381/1040g00830t0quv8jk46g5ohlsv340ipckbu95ko!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/61751fe122aa4373fc7f42be7c74f588/1040g00830t0quv8jk46g5ohlsv340ipckbu95ko!nc_n_webp_mw_1",
                    },
                  ],
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "65864b8e000000003a008080",
              model_type: "note",
            },
            {
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "6583c6d1000000000602b655",
              model_type: "note",
              note_card: {
                type: "normal",
                display_title: "23思修（期末重点精简笔记）后悔啃书😭😭",
                user: {
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30rorj2bl2k005p26akal1t69pn34nb0",
                  user_id: "64465515000000001400f4c9",
                  nickname: "渔梓溪",
                  nick_name: "渔梓溪",
                },
                interact_info: {
                  liked_count: "14338",
                  liked: false,
                },
                cover: {
                  height: 1200,
                  width: 900,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/4c3a5aedc2e110835418ae7a4164758f/1040g2sg30suao8rbjq105p26akal1t69952gck8!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/f4771433e95de9c3227ede0e54921c27/1040g2sg30suao8rbjq105p26akal1t69952gck8!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/4c3a5aedc2e110835418ae7a4164758f/1040g2sg30suao8rbjq105p26akal1t69952gck8!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/f4771433e95de9c3227ede0e54921c27/1040g2sg30suao8rbjq105p26akal1t69952gck8!nc_n_webp_mw_1",
                  file_id: "",
                },
              },
            },
            {
              id: "6587c21d0000000009022bd7",
              model_type: "note",
              note_card: {
                type: "normal",
                display_title: "劳荣枝是怎样暴露自己的身份的？",
                user: {
                  nickname: "吃瓜前线",
                  nick_name: "吃瓜前线",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30p0kqlmcjq605p82i3fls71g3rppaqg",
                  user_id: "650290df0000000017021c30",
                },
                interact_info: {
                  liked: false,
                  liked_count: "11359",
                },
                cover: {
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/3753b6045b9776378c9aced93e82465e/1040g00830t28m30oka6g5p82i3fls71g5fo08s8!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/ade20d10e7d6648ad78dc120c5d570c4/1040g00830t28m30oka6g5p82i3fls71g5fo08s8!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/3753b6045b9776378c9aced93e82465e/1040g00830t28m30oka6g5p82i3fls71g5fo08s8!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/ade20d10e7d6648ad78dc120c5d570c4/1040g00830t28m30oka6g5p82i3fls71g5fo08s8!nc_n_webp_mw_1",
                  file_id: "",
                  height: 563,
                  width: 1000,
                  url: "",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              model_type: "note",
              note_card: {
                type: "normal",
                display_title: "让情侣感情升温的25个小游戏，赶紧收藏‼️",
                user: {
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/6458b16c46534cda96f99f21.jpg",
                  user_id: "62230a6c000000001000f30e",
                  nickname: "云朵现代经典婚纱摄影",
                  nick_name: "云朵现代经典婚纱摄影",
                },
                interact_info: {
                  liked: false,
                  liked_count: "178",
                },
                cover: {
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/d48c38b42d3a600ed098ed3409c28f5c/1040g2sg30t0r38724a5g5oh319m41soenkhm8vo!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/cd3d02662b35de9c12715549e4fd2ebd/1040g2sg30t0r38724a5g5oh319m41soenkhm8vo!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/d48c38b42d3a600ed098ed3409c28f5c/1040g2sg30t0r38724a5g5oh319m41soenkhm8vo!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/cd3d02662b35de9c12715549e4fd2ebd/1040g2sg30t0r38724a5g5oh319m41soenkhm8vo!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1440,
                  width: 1080,
                  url: "",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "65864ca9000000000602989e",
            },
            {
              note_card: {
                type: "video",
                display_title: "十分钟学会后空翻？ ",
                user: {
                  nick_name: "非杋Jeff",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/63b9128ce05111171b34f6b7.jpg",
                  user_id: "6248276500000000100048bd",
                  nickname: "非杋Jeff",
                },
                interact_info: {
                  liked: false,
                  liked_count: "407",
                },
                cover: {
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/1fde94db95606f800bed69b9ee8cd5ce/spectrum/1040g0k030t1ht6f0k4005oi84tik0i5th8dfi80!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/89a0d7e2065aa5c948bf70b10a9bdf49/spectrum/1040g0k030t1ht6f0k4005oi84tik0i5th8dfi80!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/1fde94db95606f800bed69b9ee8cd5ce/spectrum/1040g0k030t1ht6f0k4005oi84tik0i5th8dfi80!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/89a0d7e2065aa5c948bf70b10a9bdf49/spectrum/1040g0k030t1ht6f0k4005oi84tik0i5th8dfi80!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1088,
                  width: 816,
                  url: "",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "658707b7000000003a00aa29",
              model_type: "note",
            },
            {
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "65878ace000000000602a394",
              model_type: "note",
              note_card: {
                type: "normal",
                display_title: "95后找汉阳王家湾附近搭子",
                user: {
                  nick_name: "林深时见鹿",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30ruhaf29ik005n9ju0elio6bdihcmdo",
                  user_id: "5d33f01d00000000160160cb",
                  nickname: "林深时见鹿",
                },
                interact_info: {
                  liked: false,
                  liked_count: "7",
                },
                cover: {
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/8b0d13fbdaee1f8f53a9b31bd4e6e2f3/1040g2sg30t21u1bo3u005n9ju0elio6b4i6emr0!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/3391b7637b9e721448af8e636cea64ad/1040g2sg30t21u1bo3u005n9ju0elio6b4i6emr0!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1397,
                  width: 1280,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/8b0d13fbdaee1f8f53a9b31bd4e6e2f3/1040g2sg30t21u1bo3u005n9ju0elio6b4i6emr0!nc_n_webp_prv_1",
                    },
                    {
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/3391b7637b9e721448af8e636cea64ad/1040g2sg30t21u1bo3u005n9ju0elio6b4i6emr0!nc_n_webp_mw_1",
                      image_scene: "WB_DFT",
                    },
                  ],
                },
              },
            },
            {
              id: "65803bf90000000016006ac2",
              model_type: "note",
              note_card: {
                type: "video",
                display_title: "码字音🀄||上班摸鱼？我直接打麻将！🤣",
                user: {
                  nick_name: "小熊软糖",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/624ed6297e5dac46eebbd1ff.jpg",
                  user_id: "5fb201f5000000000101e356",
                  nickname: "小熊软糖",
                },
                interact_info: {
                  liked_count: "12800",
                  liked: false,
                },
                cover: {
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/a47900a0c96686fd2a14736e784b7e07/1040g2sg30sqti2kkk4e05nti07qgboqmbbkj180!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/6a04af41d810a025ea0c8f49cd222418/1040g2sg30sqti2kkk4e05nti07qgboqmbbkj180!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/a47900a0c96686fd2a14736e784b7e07/1040g2sg30sqti2kkk4e05nti07qgboqmbbkj180!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/6a04af41d810a025ea0c8f49cd222418/1040g2sg30sqti2kkk4e05nti07qgboqmbbkj180!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1440,
                  width: 1080,
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              id: "6580176c000000001502fc3e",
              model_type: "note",
              note_card: {
                type: "video",
                display_title: "见过不用梳子剪好头发的吗？",
                user: {
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/6574851cc6e1af28c94bd8b2.jpg",
                  user_id: "601ac2cc000000000100271a",
                  nickname: "便民剪发-佬叁",
                  nick_name: "便民剪发-佬叁",
                },
                interact_info: {
                  liked: false,
                  liked_count: "309",
                },
                cover: {
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/54d1714c6e0520fc2b5166e4e764b26d/1040g2sg30sqp3aauju005o0qob6089oqpgobl0g!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1440,
                  width: 1080,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/8a76243b8ffc1cd81d9715fb6878256d/1040g2sg30sqp3aauju005o0qob6089oqpgobl0g!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/54d1714c6e0520fc2b5166e4e764b26d/1040g2sg30sqp3aauju005o0qob6089oqpgobl0g!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/8a76243b8ffc1cd81d9715fb6878256d/1040g2sg30sqp3aauju005o0qob6089oqpgobl0g!nc_n_webp_prv_1",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              model_type: "note",
              note_card: {
                user: {
                  nick_name: '"夏日限定._芙芙💨',
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30rqmoeed2g605nmgnjp082ngbbm33a8",
                  user_id: "5ed0bcf20000000001000af0",
                  nickname: '"夏日限定._芙芙💨',
                },
                interact_info: {
                  liked: false,
                  liked_count: "10292",
                },
                cover: {
                  height: 2560,
                  width: 1920,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/72f357b489f5209eab65e9d95af04541/1040g2sg30ss4orlbjq1g5nmgnjp082ngonl4g68!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/029103d18969a3607200438e9d012ab8/1040g2sg30ss4orlbjq1g5nmgnjp082ngonl4g68!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/72f357b489f5209eab65e9d95af04541/1040g2sg30ss4orlbjq1g5nmgnjp082ngonl4g68!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/029103d18969a3607200438e9d012ab8/1040g2sg30ss4orlbjq1g5nmgnjp082ngonl4g68!nc_n_webp_mw_1",
                  file_id: "",
                },
                type: "video",
                display_title: "为什么为什么啊？湖北省就是不下雪😭",
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "658191a1000000003a00ee56",
            },
            {
              note_card: {
                type: "normal",
                display_title: "太炸裂！泡面时装秀来了",
                user: {
                  user_id: "64ca6abd000000000b009fb1",
                  nickname: "黄瓜传媒官方账号",
                  nick_name: "黄瓜传媒官方账号",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sti9d6f465g5p6adauip7thf2t2lko",
                },
                interact_info: {
                  liked: false,
                  liked_count: "1782",
                },
                cover: {
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/0108051e58ae8acb5bdf1835578efe2e/1040g2sg30sucjfq3k06g5p6adauip7thjcpoqd8!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/afa0174f7860005e8a01a1c773b4a008/1040g2sg30sucjfq3k06g5p6adauip7thjcpoqd8!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1024,
                  width: 1024,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/0108051e58ae8acb5bdf1835578efe2e/1040g2sg30sucjfq3k06g5p6adauip7thjcpoqd8!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/afa0174f7860005e8a01a1c773b4a008/1040g2sg30sucjfq3k06g5p6adauip7thjcpoqd8!nc_n_webp_mw_1",
                    },
                  ],
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "6583c9a50000000009024a19",
              model_type: "note",
            },
            {
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "65871136000000003803294b",
              model_type: "note",
              note_card: {
                display_title: "送礼是怎么慢慢学会的？",
                user: {
                  nick_name: "随笔写江湖",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30q28rqthng605p4hp0uqpab3srfma1o",
                  user_id: "6491c83d000000002b00a963",
                  nickname: "随笔写江湖",
                },
                interact_info: {
                  liked: false,
                  liked_count: "714",
                },
                cover: {
                  info_list: [
                    {
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/9332d9034893c9054b147fd47a77f024/spectrum/1040g0k030t1itlr34a005p4hp0uqpab3or6l9j8!nc_n_webp_prv_1",
                      image_scene: "WB_PRV",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/51cdb1ef08e4d1dd604f9f2e11417f3a/spectrum/1040g0k030t1itlr34a005p4hp0uqpab3or6l9j8!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/9332d9034893c9054b147fd47a77f024/spectrum/1040g0k030t1itlr34a005p4hp0uqpab3or6l9j8!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/51cdb1ef08e4d1dd604f9f2e11417f3a/spectrum/1040g0k030t1itlr34a005p4hp0uqpab3or6l9j8!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1660,
                  width: 1245,
                  url: "",
                },
                type: "normal",
              },
            },
            {
              ignore: false,
              id: "65818dc80000000038029363",
              model_type: "note",
              note_card: {
                type: "video",
                display_title: "夹子音夹的太过分就会变成这样💢要趁早改",
                user: {
                  nick_name: "雨晴的唱歌咨询",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sj7labo36005p45fef7583v9uln4a0",
                  user_id: "64857b9e000000001c02a07f",
                  nickname: "雨晴的唱歌咨询",
                },
                interact_info: {
                  liked: false,
                  liked_count: "4461",
                },
                cover: {
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/aae15f3237114657ccdbaa379f38e62d/spectrum/1040g0k030ss6m10f4a005p45fef7583vkq9cq5g!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1656,
                  width: 1242,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/b27c24b7b4af52c179dfaee427098bd4/spectrum/1040g0k030ss6m10f4a005p45fef7583vkq9cq5g!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/aae15f3237114657ccdbaa379f38e62d/spectrum/1040g0k030ss6m10f4a005p45fef7583vkq9cq5g!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/b27c24b7b4af52c179dfaee427098bd4/spectrum/1040g0k030ss6m10f4a005p45fef7583vkq9cq5g!nc_n_webp_prv_1",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
            },
            {
              id: "65715c5b0000000016006ebc",
              model_type: "note",
              note_card: {
                type: "video",
                display_title: "家人们烫了个钢夹烫 万万没想到",
                user: {
                  nick_name: "无锡发型师磊磊",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/64d1d0d5e8042c9f617fd7a8.jpg",
                  user_id: "5d3af1610000000016033587",
                  nickname: "无锡发型师磊磊",
                },
                interact_info: {
                  liked_count: "562",
                  liked: false,
                },
                cover: {
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/0f9222baca0876710fbf155f55b741c2/1040g2sg30sccoj1pjg005n9qu5glmdc78r0p72g!nc_n_webp_prv_1",
                    },
                    {
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/54a18412aceb4edb79655063751c8d8d/1040g2sg30sccoj1pjg005n9qu5glmdc78r0p72g!nc_n_webp_mw_1",
                      image_scene: "WB_DFT",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/0f9222baca0876710fbf155f55b741c2/1040g2sg30sccoj1pjg005n9qu5glmdc78r0p72g!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/54a18412aceb4edb79655063751c8d8d/1040g2sg30sccoj1pjg005n9qu5glmdc78r0p72g!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1440,
                  width: 1080,
                  url: "",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              ignore: false,
              id: "65780f2b000000003403e2f1",
              model_type: "note",
              note_card: {
                interact_info: {
                  liked: false,
                  liked_count: "1185",
                },
                cover: {
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/f74d00a7a47024ccec71bc9dbc89057b/spectrum/1040g0k030siu2gbej8005pbh6eofdf7cjrbt6o8!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1706,
                  width: 1280,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/dfa39d4038a6e9628a10ec060c3cc7f7/spectrum/1040g0k030siu2gbej8005pbh6eofdf7cjrbt6o8!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/f74d00a7a47024ccec71bc9dbc89057b/spectrum/1040g0k030siu2gbej8005pbh6eofdf7cjrbt6o8!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/dfa39d4038a6e9628a10ec060c3cc7f7/spectrum/1040g0k030siu2gbej8005pbh6eofdf7cjrbt6o8!nc_n_webp_prv_1",
                },
                type: "normal",
                display_title: "没事就多亲嘴💋吧！亲亲亲！",
                user: {
                  nick_name: "小斯的情感手记",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sgl1qkl366g5pbh6eofdf7cegnm3g8",
                  user_id: "657133b0000000003d02bcec",
                  nickname: "小斯的情感手记",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
            },
            {
              id: "6584f92800000000380372c4",
              model_type: "note",
              note_card: {
                type: "video",
                display_title: "你会用这种犁式刹车么？",
                user: {
                  nick_name: "Peter户外生活",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/5fdb845d000000000101eac8.jpg",
                  user_id: "5fdb845d000000000101eac8",
                  nickname: "Peter户外生活",
                },
                interact_info: {
                  liked: false,
                  liked_count: "767",
                },
                cover: {
                  file_id: "",
                  height: 720,
                  width: 960,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/4c6babcfcecee46f4196dfcc511d2e6a/1040g00830svhjqgfjs005nurghegbqm86i9u2mo!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/8d9045d9c2310ed3a2ec9d32b4a37514/1040g00830svhjqgfjs005nurghegbqm86i9u2mo!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/4c6babcfcecee46f4196dfcc511d2e6a/1040g00830svhjqgfjs005nurghegbqm86i9u2mo!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/8d9045d9c2310ed3a2ec9d32b4a37514/1040g00830svhjqgfjs005nurghegbqm86i9u2mo!nc_n_webp_mw_1",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
            {
              note_card: {
                type: "video",
                display_title: "炎龙铠甲超燃打戏 ",
                user: {
                  nick_name: "怪盗",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sr1k031kadg5oo64rl4hr7vgrbm0g8",
                  user_id: "630626ea000000001200ecff",
                  nickname: "怪盗",
                },
                interact_info: {
                  liked_count: "71",
                  liked: false,
                },
                cover: {
                  file_id: "",
                  height: 2560,
                  width: 1920,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/bc7ec5835b4d7b775b74736700d16890/1040g00830t1h9ks9ju005oo64rl4hr7vu385fco!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/eed07dfd1f8e71aecd46bc317077b75b/1040g00830t1h9ks9ju005oo64rl4hr7vu385fco!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/bc7ec5835b4d7b775b74736700d16890/1040g00830t1h9ks9ju005oo64rl4hr7vu385fco!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/eed07dfd1f8e71aecd46bc317077b75b/1040g00830t1h9ks9ju005oo64rl4hr7vu385fco!nc_n_webp_mw_1",
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
              id: "658705ee00000000390339d7",
              model_type: "note",
            },
            {
              id: "65877c6400000000380143ad",
              model_type: "note",
              note_card: {
                type: "video",
                display_title: "本以为是个普通面试者，竟有这么多隐藏身份",
                user: {
                  nick_name: "开心锤锤",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/64b77842e1289d0001bf8c4d.jpg",
                  user_id: "5f041c3f0000000001004ae7",
                  nickname: "开心锤锤",
                },
                interact_info: {
                  liked: false,
                  liked_count: "14843",
                },
                cover: {
                  width: 1080,
                  url: "",
                  info_list: [
                    {
                      image_scene: "WB_PRV",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/5f46b828a430d5729786265b3d47e118/spectrum/1040g0k030t205gcv40005no43gvg8in7i5l2sho!nc_n_webp_prv_1",
                    },
                    {
                      image_scene: "WB_DFT",
                      url: "http://sns-webpic-qc.xhscdn.com/202312242058/f5cfde8cdd8d0fd0391cfefea428190d/spectrum/1040g0k030t205gcv40005no43gvg8in7i5l2sho!nc_n_webp_mw_1",
                    },
                  ],
                  url_pre:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/5f46b828a430d5729786265b3d47e118/spectrum/1040g0k030t205gcv40005no43gvg8in7i5l2sho!nc_n_webp_prv_1",
                  url_default:
                    "http://sns-webpic-qc.xhscdn.com/202312242058/f5cfde8cdd8d0fd0391cfefea428190d/spectrum/1040g0k030t205gcv40005no43gvg8in7i5l2sho!nc_n_webp_mw_1",
                  file_id: "",
                  height: 1440,
                },
              },
              track_id: "2cmgz9l3g5qn6d8h49it9",
              ignore: false,
            },
          ],
          cursor_score: "1.7034227109700022E9",
        },
        code: 0,
        success: true,
      })
    }, 2000)
  })
}

export const getFeedDetail: (
  id: string
) => Promise<SuccessResponse<FeedDataDetail>> = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        success: true,
        msg: "成功",
        data: {
          cursor_score: "",
          items: [
            {
              id: "65879a2d000000003c01202b",
              model_type: "note",
              note_card: {
                type: "video",
                last_update_time: 1703385646000,
                desc: "#香菜[话题]#  #圣诞树[话题]#  #圣诞节[话题]#  #圣诞节圣诞树[话题]#",
                user: {
                  user_id: "61a21aeb0000000010005be7",
                  nickname: "小夫同学",
                  avatar:
                    "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2qnkrb3ojm0005od23blk0mv7rnmml10",
                },
                interact_info: {
                  liked: false,
                  liked_count: "55227",
                  collected: false,
                  collected_count: "5285",
                  comment_count: "13300",
                  share_count: "56257",
                  followed: false,
                  relation: "none",
                },
                image_list: [
                  {
                    url_pre:
                      "http://sns-webpic-qc.xhscdn.com/202312242058/06a7ef0a90bfb26bee5ff457f7b7b9b4/spectrum/1040g0k030t23pureju005od23blk0mv7qk00fcg!nd_prv_wlteh_webp_3",
                    url_default:
                      "http://sns-webpic-qc.xhscdn.com/202312242058/b1c326a98bf9ff9eab397d89dc8aafa0/spectrum/1040g0k030t23pureju005od23blk0mv7qk00fcg!nd_dft_wlteh_webp_3",
                    file_id: "",
                    height: 1440,
                    width: 1080,
                    url: "",
                    trace_id: "",
                    info_list: [
                      {
                        image_scene: "WB_PRV",
                        url: "http://sns-webpic-qc.xhscdn.com/202312242058/06a7ef0a90bfb26bee5ff457f7b7b9b4/spectrum/1040g0k030t23pureju005od23blk0mv7qk00fcg!nd_prv_wlteh_webp_3",
                      },
                      {
                        image_scene: "WB_DFT",
                        url: "http://sns-webpic-qc.xhscdn.com/202312242058/b1c326a98bf9ff9eab397d89dc8aafa0/spectrum/1040g0k030t23pureju005od23blk0mv7qk00fcg!nd_dft_wlteh_webp_3",
                      },
                    ],
                  },
                ],
                time: 1703385645000,
                note_id: "65879a2d000000003c01202b",
                video: {
                  consumer: {
                    origin_video_key:
                      "spectrum/1040g0jg30t23p7fa44005od23blk0mv7q6cu110",
                  },
                  media: {
                    video_id: 136664459267596690,
                    video: {
                      hdr_type: 0,
                      drm_type: 0,
                      stream_types: [259],
                      biz_name: 110,
                      biz_id: "280779648046014507",
                      duration: 15,
                      md5: "0496d64aabe85dc434ffaf7237c962ea",
                    },
                    stream: {
                      h264: [
                        {
                          rotate: 0,
                          fps: 60,
                          default_stream: 0,
                          format: "mp4",
                          stream_type: 259,
                          video_codec: "h264",
                          volume: 0,
                          vmaf: -1,
                          ssim: 0,
                          master_url:
                            "http://sns-video-bd.xhscdn.com/stream/110/259/01e5879a0410e190010370038c99b2cae4_259.mp4",
                          width: 720,
                          size: 3723380,
                          video_duration: 14650,
                          audio_bitrate: 64702,
                          audio_duration: 14654,
                          hdr_type: 0,
                          height: 1280,
                          avg_bitrate: 2032551,
                          psnr: 0,
                          quality_type: "HD",
                          stream_desc: "WM_X264_MP4",
                          duration: 14655,
                          audio_codec: "aac",
                          backup_urls: [
                            "http://sns-video-qc.xhscdn.com/stream/110/259/01e5879a0410e190010370038c99b2cae4_259.mp4?sign=1f970e34d27774a008586da153a55162&t=6589a5d4",
                            "http://sns-video-hw.xhscdn.com/stream/110/259/01e5879a0410e190010370038c99b2cae4_259.mp4",
                            "http://sns-video-al.xhscdn.com/stream/110/259/01e5879a0410e190010370038c99b2cae4_259.mp4",
                            "http://sns-video-hw.xhscdn.net/stream/110/259/01e5879a0410e190010370038c99b2cae4_259.mp4",
                          ],
                          video_bitrate: 1957863,
                          audio_channels: 2,
                          weight: 62,
                        },
                      ],
                      h265: [],
                      av1: [],
                    },
                  },
                  image: {
                    thumbnail_fileid:
                      "110/0/01e5879a0410e1900010000000018c99b293a0_0.webp",
                    first_frame_fileid:
                      "110/0/01e5879a0410e1900010000000018c99b2498c_0.jpg",
                  },
                  capa: {
                    duration: 14,
                  },
                },
                at_user_list: [],
                title: "@你最好的朋友 给你做这个“香菜圣诞树”",
                tag_list: [
                  {
                    id: "5cd2edc8000000000e023911",
                    name: "香菜",
                    type: "topic",
                  },
                  {
                    id: "5462e9fed6e4a90f62f54c22",
                    name: "圣诞树",
                    type: "topic",
                  },
                  {
                    id: "619f4df600000000010033fa",
                    name: "圣诞节",
                    type: "topic",
                  },
                  {
                    id: "5df344b8000000000100b63f",
                    name: "圣诞节圣诞树",
                    type: "topic",
                  },
                ],
                ip_location: "广东",
                share_info: {
                  un_share: false,
                },
              },
            },
          ],
          current_time: 1703422726203,
        },
      })
    }, 1000)
  })
}
