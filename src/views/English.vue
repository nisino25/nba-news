<template>
  <div class="home">
    <h1 style="display: block; text-align: center;" @click="test()">NBA Latest News</h1>

    <div class="content-wrapper" v-if="wholeData" style="margin-bottom: 100px; "
    >
      <hr>
      <div style="margin-bottom:40px">
        <strong style="display: block;text-align: left;margin: -20px 0px;"><i class="fa fa-refresh" style="font-size:18px;background-color: #eee; color: black;margin: -10px;line-height: auto;"></i>{{timestamp}}</strong>
        <span  style="display: block;text-align: right;margin: -20px 10px">{{Object.keys(this.wholeData[0]).length}} articles</span>


      </div>

      <template v-for="(article,i) in wholeData[0]" :key="i">
        <div v-if="showingPage * 20 > parseInt(i) && showingPage * 20 -20 <= parseInt(i)" class="smooth">

          <div class="article"  v-if="showingArticle !== i" @click="showingArticle = i" :class="showingArticle == i ? 'shown-article' : 'article '"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            deta-aos-once="true"
          > 
         
            <div class="" :class="showingArticle == i ? 'shown-article-left' : 'article-left'">
              <img :src="article.thmbnail_img_url" alt="">
            </div>
  
            
  
            <div class="" :class="showingArticle == i ? 'shown-article-right' : 'article-right'">
              <strong style=" display:inline-block;">{{parseInt(i) + 1 }}. {{article.title}}</strong><br>
              <button class="button button2"  @click="openInNewTab(`${article.article_url}`)">Read more</button> <br>
  
              
  
              <!-- <span>{{article.source}}historyArticles</span> -->
  
              <div class="bottom" style="margin-top:-15px">
                <div style=" display: flex; justify-content: space-around;">
                  <div>
                    <span style="font-size: 85%">{{article.media}}</span>
                  </div>
    
                  <div>
                    <small style="">{{article.posted_at}}</small>
                  </div>
                </div>
              </div>
  
              
  
              
  
  
  
            </div>
          </div>
  
  
          <div class="shown-article"  v-else @click="showingArticle = undefined"
          > 
         
            <div class="" :class="showingArticle == i ? 'shown-article-left' : 'article-left'">
              <img :src="article.thmbnail_img_url" alt="">
            </div>
  
            
  
            <div class="" :class="showingArticle == i ? 'shown-article-right' : 'article-right'">
              <strong style=" display:inline-block;">{{parseInt(i) + 1 }}. {{article.title}}</strong><br>
  
              <span v-if="showingArticle == i" style="margin-top: 20px; font-size: 85%; ">{{article.lead_text}}</span><br>
              <button v-if="showingArticle == i"  class="button button2"  @click="openInNewTab(`${article.article_url}`)">Read more</button> <br>
  
              <!-- <span>{{article.source}}historyArticles</span> -->
  
              <div class="bottom" style="margin-top:-15px; display: flex; justify-content: space-around;">
                <div >
                  <span style="font-size: 85%">{{article.source}}</span>
                </div>
  
                <div>
                  <small style="">{{article.posted_at}}</small>
                </div>
              </div>
  
              
  
              
  
  
  
            </div>
          </div>
        </div>
      </template>

      <div class="center" v-if="theLength > 10">
        <div class="pagination">
          <a @click="showingPage = 1" v-if="showingPage !==1">&laquo;</a>
          <template v-for="(num, i) in pagingArray" :key="i">
            <a @click="showingPage = num" :class="[num == showingPage?  'active': '' ]">{{num}}</a>
          </template>

          <a @click="showingPage == parseInt(theLength/20)" v-if="showingPage !== parseInt(theLength/20)+1">&raquo;</a>
        </div>
      </div>

    </div>

    <div v-else style=" min-height: 60vh; ">
      <div class="loader"></div>
    </div>

    
  </div>
</template>

<script>
import db from '../../firebase.js';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      // db,
      dummyData: undefined,
      wholeData: undefined,
      theDate: undefined,

      theLength: undefined,

      showingPage: 1,
      showingArticle: undefined,
      timestamp: undefined,
    }
  },

  methods:{
    openInNewTab(url) {
      window.open(url, '_blank').focus();
    },

    async getTheData(){ 
      var docRef = db.collection('daily_news');
      docRef.get().then((doc) => {
        this.wholeData = []
        

        doc.forEach(doc => {
          this.theDate = doc.id
          this.wholeData.unshift(doc.data().data_en)
          let str = doc.data().updated_at
          let first = str.substring(0, str.indexOf(":"));
          let last = str.substring(str.indexOf(":") + 1);
          last = last.substring(0, last.indexOf(":"));
          this.timestamp = `${first}:${last}`
        });

        this.theLength = Object.keys(this.wholeData[0]).length


        for(let i in this.wholeData){
          for(let j in this.wholeData[i]){
            let data = this.wholeData[i][j]
            
            let str = data.article_url
            str = str.substring(str.indexOf('/') + 1);
            str = str.substring(str.indexOf('/') + 1);
            if(str[0] == 'w') str = str.substring(4)
            // 27. 【NBA】八村塁が６試合連続の２桁得点も、ウィザーズはディフェンスが振るわず３連敗で借金生活に＜DUNKSHOOT＞

            if(str[str.length] == '＞')  str = str.slice(0, -6);
            // str = str.substring(str.indexOf('.') + 0);

            
            str = str.split('.')[0]
            data.source  = str

          }
          
          // console.log(i)
          
        }
        // console.log(this.dummyData)
      }).catch((error) => {
          console.log("Error getting document:", error);
      }); 
        

      
    },

    async test(){
      console.log('hey')

      let data = []
      let x= 0 
      let y= 0
      data.push(this.wholeData[y][1  + x])
      data.push(this.wholeData[y][2 + x])
      data.push(this.wholeData[y][3 + x])

      // Add a new document in collection "cities" with ID 'LA'
      // const res = await db.collection('daily-news').doc('20221029').set(data);

      // this.historyArticles[this.tempIndex-1].content= this.tempContent
      // this.historyArticles = JSON.stringify(this.historyArticles)

      const ref = db.collection('daily_news')
      ref.doc(`20221029`).set(data)

      // console.log('updagting')
    },
  },

  mounted(){
    AOS.init()
    console.clear()

    this.getTheData()
    
  },

  computed:{
      pagingArray(){
        if(!this.wholeData) return
        if(this.theLength < 20) return []
        // this.theLength = 41

        let max = parseInt((this.theLength-1) / 20)
        // console.log(max)

        // 5 in total and arrows
        // let index = this.showingPage
        // index = parseInt(index)

        // let last = this.theLength

        if(max ==2){
          return [1,2,3]
        }else if(max == 3){
          return [1,2,3,4]
        }else if(max ==4){
          return [1,2,3,4,5]
        }


        return [1,2]
        
        // switch(index){
        //   case 1:
        //     return [1,2,3,4,5]

        //   case 2:
        //     return [1,2,3,4,5]

        //   case last-1:
        //     return [last-3,last-2, last-1,index,index+1]

        //   case last:
        //     return [index-4,index-3,index-2,index-1,index]

        //   default:
        //     return [index-2,index-1,index,index+1,index+2]

        // }
      },

      
  },

  watch:{
    showingPage(){
      window.scrollTo(0,0);
    },
    showingArticle(){
      console.log(this.showingArticle)
    }
  }


}
</script>

<style>
  
  h1{
    margin: 5px
  }

  .content-wrapper{
    width: 92.5%;
    max-width: 850px;
    text-align: center;
    margin: 50px auto;
  }

  .article{
    background-color: white;
    height: 140px;
    width: 100%;
    margin: 25px auto;

    display: block;
    text-align: center;
    position:relative;

    transition: all 1s linear;

  }

  .smooth{
    transition: all 1s linear;
  }

  .article-left{
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .article-right{
    position: absolute;
    padding: 10px;
    height: auto;
    z-index: 100;
    top: 0;
    left: 40%;

    text-align: left;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-width: 60%;
    /* background-color: red; */

    

  }

  .article .button{
    position: absolute;
    top: 105px;
    right: 10px;
    border: none;
    color: white;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: -20px auto;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: white; 
    color: black; 
    background-color: lightgrey; 
    width: 30%;
    border-radius: 7.5px;

  }

  .article .bottom{
    position: absolute;
    top:130px;
    /* background-color: red; */
    width: 100%;
    left:0;
    /* bottom: 10; */
   

    /* height: 50px; */
    /* position: absolute; */
  }



  /* ------------------------------ */

  .shown-article{
    /* background-color: red; */
    background-color: white;
    height: auto;
    width: 100%;
    margin: 25px auto;

    /* display: block; */
    text-align: center;
    position:relative;

    transition: 2s ease-in;

  }

  .shown-article-left{
    /* display: block; */
    /* position: absolute; */
    width: 100%;
    /* height: 100%; */
    top: 0;
    left: 0;
  }

  .shown-article-right{
    /* background-color: red; */
    /* display: block; */
    /* position: absolute; */
    padding: 10px;
    height: 100%;
    z-index: 100;
    /* top: 0;
    left: 40%; */

    text-align: left;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    

  }

  .shown-article strong{
    /* color:yellow; */
  }

  .shown-article .button{
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 10px auto;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: white; 
    color: black; 
    background-color: lightgrey; 
    width: 50%;

    border-radius: 5px;
    
    /* border: 2px solid #4CAF50; */

  }
  

  

  .article img, .shown-article img{
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
    margin-bottom: 0px;
    color: black;
    
    font-size: 90%;
  }

  .article span{
    color: black;
    
    /* font-size */
  }

  

  
  .read-more{
    text-align: right;
    /* background-color: red; */
  }
  /* ------------------------- */
    /* ---------------- */
    .center {
      margin-top: 50px;
      margin-bottom: -50px;
      text-align: center;
    }

    .pagination {
      display: inline-block;
    }

    .pagination a {
      color: black;
      float: left;
      padding: 8px 16px;
      text-decoration: none;
      transition: background-color .3s;
      border: 1px solid #ddd;
      margin: 0 4px;
    }

    .pagination a.active {
      background-color: #1C6758;
      color: white;
      border: 1px solid #1C6758;
    }


  /* -------------------------------- */
  .loader {
    margin-top: 100px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 20%;
    aspect-ratio: 1/1;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    margin: 30px auto;
    
  }
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

</style>
