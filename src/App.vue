<template>
  <div class="wrapper">
    <nav class="nav nav1" > 
        <img src="../public/logo.jpg" alt="" href="" style="margin-right: 8px">
        <div>
          <a href="/" class="nav-item" data-color="#446A46" >Home</a>
          <a href="/english" class="nav-item" data-color="#446A46" >Englih</a>
          <a href="/about" class="nav-item" data-color="#446A46">About</a>
          <span class="nav-indicator"></span>

        </div>

      
      <!-- <a href="/" class="nav-item active" data-color="#663399">Home</a> -->
   </nav>

   <button @click="topFunction()" id="myBtn" title="Go to top" :style="showing ? 'opacity: 1;' : 'opacity: 0;'">&#8593;</button>

  </div>
   
  <router-view/>

  <div>
    <footer>
      <div class="footer-wrapper">
        <strong>FOLLOW US</strong>
        <div class="someclass"></div>
          <hr>
          <div class="icon-wrapper">
            <!-- <a href="#" class="fa fa-twitter"></a> -->
            
            <a target="_blank"  href="https://www.instagram.com/nbabrosch/?hl=en" class="fa fa-instagram"></a>
            <a target="_blank"  href="https://www.youtube.com/channel/UCqIDEQXMYE_cueQyGl6Fgbw/videos?view=57" class="fa fa-youtube"></a>

          </div>
        </div>
        
      
    </footer>
  </div>
</template>

<script>
export default{
  data(){
    return{
      showing: false,
    }
  },
  methods:{
    topFunction(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    },

    handleScroll () {
      // if(event == 0)
      // if( this.showingMenu){
      //   return this.navStyle = 'background-color: #004658; color: white; '
      // }
      
      if(window.scrollY < 20){
        this.showing = false

      } else{
        this.showing = true
        // console.log(window.scrollY)
        this.navStyle = 'background-color: #004658; color: white; '
      }


      // console.log('now')


    },
  },

  created(){
    window.addEventListener('scroll', this.handleScroll);
  }

  
} 
</script>

<style>
#myBtn {
  /* display: none; */
  /* display: block; */
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 200;
  /* font-size: 18px; */
  border: none;
  outline: none;
  background-color: #1C6758;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  /* padding: 15px; */

  height: 50px;
  width: 50px;
  font-size: 200%;
  transition: visibility 0s, opacity 1s;
}

body{
  /* background-color: #0F3460; */
  background-color: #eee;
  
  /* position:absolute; */
  /* display: flex;
    flex-direction: column; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
  /* text-align: center; */
  /* color: #E94560; */
  
}


.nav-item {
  /* position: relative; */
  /* background-color: red; */

}

.nav img{
  width: auto; 
  height: 75%;  
  border-radius: 50%; 
}

.nav-
.nav-item:before,
.nav1 .nav-item:before {
  width: 100%;
  height: 5px;
  background-color: #dfe2ea;
  opacity: 0;

  
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 20px 0;
}
.nav {
  /* float: right; */
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  overflow: hidden;
  max-width: 660px;
  min-width: 600px;
  /* background-color: #fff; */
  /* background-color: red; */
  padding: 0 20px;
  border-radius: 20px;
  -webkit-box-shadow: 0 8px 36px rgba(157, 160, 175, 0.8);
  box-shadow: 0 8px 36px rgba(157, 160, 175, 0.8);

  display: inline-block;
  overflow: hidden;
  position: relative;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;


  
  /* height: 200px; */
  /* border: 3px solid green;  */
  /* background-color: red; */
}
.nav-item {
  color: #83818c;
  padding: 30px 20px;
  text-decoration: none;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  margin: 0 6px;
  z-index: 1;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  /* text-align: right; */

  /* background-color: red; */
  /* float: right; */
}
.nav-item:before {
  content: "";
  position: absolute;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.nav-item:not(.active):hover:before {
  opacity: 1;
  bottom: 0;
}
.nav-item:not(.active):hover {
  color: #333;
}
.nav-indicator {
  position: absolute;
  bottom: 0;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  height: 5px;
  z-index: 1;
}
.nav1 .nav-indicator {
  height: 5px;
  left: 0;
  border-radius: 8px 8px 0 0;
}
.nav1 .nav-item:before {
  bottom: -6px;
  left: 0;
  border-radius: 8px 8px 0 0;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

@media (max-width: 992px) {
  .wrapper {
    padding: 20px 0 15px;
  }
}

@media only screen and (max-width: 768px) {
  .nav {
    min-width: 90%;
  }
  .nav1 {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .nav-item {
    padding: 20px 10px;
  }
}
@media (max-width: 580px) {
  .nav1 {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    overflow-x: auto;
  }
}

/* -------------- */
/* @media  (min-width:320px) and (max-width:749px){
  .nav {
    min-width: 90%;
    color:red;
  }
  .nav1 {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .nav-item {
    padding: 25px 15px;
  }
} */

footer{ 
  /* margin-top: auto; */
  background-color: white;
  padding: 50px 15px;
  
}

.footer-wrapper{
  margin: auto auto;
  text-align: center;
  width: 92.5%;
  max-width: 600px;
  position: relative;
}



footer strong{
  font-size: 125%;
  /* text-align: left; */
  float: left;
  display: block;
}

.someclass {
     clear: both;
}


footer hr{
  margin: 20px 0px 40px; 
  border: 0.5px solid black;
  width: 70px;
  /* text-align: left;
  float: left; */
}

footer .icon-wrapper{
  text-align: left;
  /* margin-top: 20px; */
  /* background-color: red; */
}

.fa {
  
  /* margin-top: 50px; */
  display: inline;
  padding: 20px;
  font-size: 30px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 50px 7.5px;
  border-radius: 50%;

  background: black;
  color: white;
}

.fa:hover {
  opacity: 0.7;
}

</style>
