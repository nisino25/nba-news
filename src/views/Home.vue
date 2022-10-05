<template>
  <div class="home">
    <!-- <h1 style="text-align: left; margin-left:25px;">Home</h1> -->
    <h1 style="display: block; text-align: center;">Home</h1>

    <div class="content-wrapper">
      <template v-for="(article,i) in dummyData" :key="i">
        <div class="article" >
          <div class="article-left">
            <img :src="article.thmbnail_img_url" alt="">
          </div>

          <div class="article-right"  @click="openInNewTab(`${article.atricle_url}`)">
            <strong style=" display:inline-block;">{{article.title}}</strong><br>

            <span style="margin-top: 50px; font-size: 85%">{{article.lead_text}}...</span><br>

            <small>{{article.posted_at}}</small>



          </div>


          <!-- 
          <span style="text-align: right; color: white; display:inline; float: right">{{article.media}}</span>
          <span style="text-align: left; color: white; float: left;">{{article.posted_at}}</span><br>

          <img :src="article.thmbnail_img_url" alt=""><br>
          <span style="color: white; margin-top: 50px; font-size: 85%">{{article.lead_text}}...</span>
          <br>
          <div class="read-more" style="" @click="openInNewTab(`${article.atricle_url}`);">
            <button>Read more</button>
         </div> -->
        </div>
      </template>
    </div>
    
  </div>
</template>

<script>
 

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      dummyData:[
  {
    "media": "NBA_Report",
    "title": "ウィザーズの日本遠征",
    "atricle_url": "http://nbareporter.net/2022/09/30/01-129/",
    "posted_at": "2022-09-30",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/09/Wizards_Japantrip-600x400.jpg",
    "lead_text": "この記事は主にThe Athleticのジョッシュ・ロビンスの記事「How the Wiz"
  },
  {
    "media": "NBA_Report",
    "title": "サンズ売却について",
    "atricle_url": "http://nbareporter.net/2022/09/28/01-128/",
    "posted_at": "2022-09-28",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/09/robertsarver3-1-600x400.jpg",
    "lead_text": "ロバート・サーヴァーは最初、比較的ゆるいと非難されていたNBAからの1年停職の罰則に意地で"
  },
  {
    "media": "NBA_Report",
    "title": "イーメイ騒動、これまでのまとめ",
    "atricle_url": "http://nbareporter.net/2022/09/25/01-127/",
    "posted_at": "2022-09-25",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/09/AP-PhotoSteven-Senne-600x400.jpg",
    "lead_text": "セルティクスが球団規定違反のため、ヘッドコーチのイーメイ・ウドーカに1年の停職処分を課しま"
  },
  {
    "media": "NBA_Report",
    "title": "ロバート・サーヴァーへのNBAの罰則について",
    "atricle_url": "http://nbareporter.net/2022/09/22/01-126/",
    "posted_at": "2022-09-22",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/09/robertsarver-1-600x400.jpg",
    "lead_text": "9月14日、NBAが昨年11月から続けていたサンズのオーナーのロバート・サーヴァーの人種差"
  },
  {
    "media": "NBA_Report",
    "title": "NBAスケジュールのつくり方",
    "atricle_url": "http://nbareporter.net/2022/09/08/01-125/",
    "posted_at": "2022-09-08",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/09/NBAschedule-600x400.jpg",
    "lead_text": "8/17に2022-23シーズンのスケジュールが発表されました。通常は8/10~14の間で"
  },
  {
    "media": "NBA_Report",
    "title": "ドノヴァン・ミッチェルのトレード",
    "atricle_url": "http://nbareporter.net/2022/09/05/01-124/",
    "posted_at": "2022-09-05",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/09/Glenn-James-600x400.jpg",
    "lead_text": "ニックスへのトレードは間違いないと思われていたドノヴァン・ミッチェルがなんとキャヴァリアー"
  },
  {
    "media": "NBA_Report",
    "title": "Wojとネッツ",
    "atricle_url": "http://nbareporter.net/2022/08/25/01-123/",
    "posted_at": "2022-08-25",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/08/woj2-600x400.jpg",
    "lead_text": "前回特集したKDの最終通告のニュースではESPNのWojの姿が見られませんでした。Wojは"
  },
  {
    "media": "NBA_Report",
    "title": "ケヴィン・デュラントの最終通告",
    "atricle_url": "http://nbareporter.net/2022/08/19/01-122/",
    "posted_at": "2022-08-19",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/08/Charles-Wenzelber_New-York-Post-600x400.jpg",
    "lead_text": "ケヴィン・デュラントがネッツのオーナーのジョー・サイとロンドンで直接会った時に、自分を取る"
  },
  {
    "media": "NBA_Report",
    "title": "セクストンとキャヴァリアーズ",
    "atricle_url": "http://nbareporter.net/2022/08/10/01-121/",
    "posted_at": "2022-08-10",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/08/sexton_QO4-600x400.jpg",
    "lead_text": "トレードが落ち着いたからか、先週まだ契約できていないキャヴスのRFAのコリン・セクストンに"
  },
  {
    "media": "NBA_Report",
    "title": "ウォリアーズはどこまで払えるのか",
    "atricle_url": "http://nbareporter.net/2022/08/04/01-120/",
    "posted_at": "2022-08-04",
    "thmbnail_img_url": "http://nbareporter.net/wp-content/uploads/2022/08/lacob_CEO2-600x400.jpg",
    "lead_text": "昨年のウォリアーズはサラリーが$176.8Mで、リピータータックスが$176.7Mと合計$"
  }
]
    }
  },

  methods:{
    openInNewTab(url) {
      window.open(url, '_blank').focus();
    }
  },

  mounted(){
    console.clear()
    
    console.log(this.dummyData)
  }


}
</script>

<style>
  h1{
    margin: 5px
  }
  .article{
    background-color: white;
    height: 140px;
    width: 92.5%;
    max-width: 600px;
    margin: 25px auto;
    /* border-radius: 10px; */

    display: block;
    text-align: center;
    position:relative
  }

  .article-left{
    position: absolute;
    /* background-color: red; */
    width: 37.5%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
  }

  .article-right{
    position: absolute;
    padding: 10px;
    /* background-color: red; */
    width: 62.5%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 37.5%;

    text-align: left;
  }
  

  

  .article img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* width: 100%;
    height: auto; */

    /* width: 20%;; */
    /* height: 100%; */
    /* width: auto;
    height: 150px;
    max-width: 350px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px */
  }

  .article strong{
    margin-bottom: 10px;
    color: black;
    /* font-size: %; */
  }

  .article span{
    color: black;
    
    /* font-size */
  }

  .read-more{
    text-align: right;
    /* background-color: red; */
  }
</style>
