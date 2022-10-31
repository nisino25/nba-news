<template>
  <div class="home">
    <!-- <h1 style="text-align: left; margin-left:25px;">Home</h1> -->
    <h1 style="display: block; text-align: center;">Home</h1>

    <div class="content-wrapper" v-if="dummyData" style="margin-bottom: 100px; ">
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

    <div v-else style=" min-height: 60vh; ">
      <div class="loader"></div>
    </div>
    
  </div>
</template>

<script>
import db from '../../firebase.js';
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
    }
  },

  methods:{
    openInNewTab(url) {
      window.open(url, '_blank').focus();
    },

    async getTheData(){ 
      var docRef = db.collection('daily_news_20221029');
       

        docRef.get().then((doc) => {
          this.dummyData = []
          // console.table(this.dummyData)

          doc.forEach(doc => {
            this.dummyData.push(doc.data())
            // count++
            // console.
            // console.log(doc.id, '=>', doc.data());
          });
          for(let i in this.dummyData){
            let data = this.dummyData[i]
            // console.log(i)
            data.lead_text = data.lead_text.substr(0, 50) + "\u2026";
          }
          // console.log(this.dummyData)
        }).catch((error) => {
            console.log("Error getting document:", error);
        }); 

        


        // "abcdef".substr(0, 3) + "\u20/26";
      
      
    },
  },

  mounted(){
    console.clear()

    this.getTheData()
    
  },


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
