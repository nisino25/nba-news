<template>
  <div class="home">
    <!-- <h1 style="text-align: left; margin-left:25px;">Home</h1> -->
    <h1 style="display: block; text-align: center;" @click="test()">Home</h1>
    <!-- <span v-if="wholeData">{{wholeData[0]}}</span> -->

    <div class="content-wrapper" v-if="wholeData" style="margin-bottom: 100px; ">
      <hr>
      <strong style="display: block;text-align: right;margin: -20px 20px;"> 最終更新 {{theDate}}</strong>
      <template v-for="(article,i) in wholeData[0]" :key="i">
        <div class="article" 
        data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <div class="article-left">
            <img :src="article.thmbnail_img_url" alt="">
          </div>

          <div class="article-right"  @click="openInNewTab(`${article.atricle_url}`)">
            <strong style=" display:inline-block;">{{article.title}}</strong><br>

            <span style="margin-top: 50px; font-size: 85%">{{article.lead_text}}</span><br>

            <small>{{article.posted_at}}</small>



          </div>
        </div>
      </template>
    </div>

    <div v-else style=" min-height: 60vh; ">
      <div class="loader"></div>
    </div>
    
  </div>
</template>

<script>
import db from '../../firebase.js';
import AOS from "aos";
// import { getDatabase, ref, child, get } from "../../firebase.js";
// import { Storage } from '@google-colud/storage';
// import configs from "../configs";

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
          this.wholeData.unshift(doc.data().data)
        });

        this.theDate  = this.theDate.slice(0, 4) + "-" + this.theDate.slice(4);
        this.theDate  = this.theDate.slice(0, 7) + "-" + this.theDate.slice(7);
        // this.theDate  =this.theDate.substring(0,7) + "-" + this.theDate.substring(2)
        // console.log(this.theDate)
 
        // console.log(this.wholeData)

        for(let i in this.wholeData){
          for(let j in this.wholeData[i]){
            let data = this.wholeData[i][j]
            let length = data.title.length + data.lead_text.length
            // data.title+= `:${data.title.length}, ${data.lead_text.length}`
            if(length > 100){
              data.lead_text = data.lead_text.substr(0, 95-data.title.length) 
              // data.lead_text += '...'
              data.lead_text += '...'
            }else{
              data.lead_text += '...'
            }
            // data.lead_text = data.lead_text.substr(0, 50) + "\u2026";

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


}
</script>

<style>
  
  h1{
    margin: 5px
  }

  .content-wrapper{
    width: 92.5%;
    max-width: 1000px;
    text-align: center;
    margin: 0 auto;
  }
  .article{
    background-color: white;
    height: 170px;
    width: 92.5%;
    /* max-width: 600px; */
    margin: 25px auto;
    /* border-radius: 10px; */

    display: block;
    text-align: center;
    position:relative
  }

  .article-left{
    position: absolute;
    /* background-color: red; */
    width: 33.3%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
  }

  .article-right{
    position: absolute;
    padding: 10px;
    /* background-color: red; */
    /* width: 62.5%; */
    height: 100%;
    z-index: 100;
    top: 0;
    left: 33.3%;

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
