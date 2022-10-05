<template>
  <div class="wrapper">
    <nav class="nav nav1">
      <!-- To change color of indicator and text you should change the value of data-color (hex, rgb, rgba or text color value)
         ===================================
         data-color="black"
         data-color="#006400"
         data-color="rgb(0, 0, 255)"
         data-color="rgba(255, 0, 0, 1)"
         ===================================
         -->
      <a href="/" class="nav-item active" data-color="#663399">Home</a>
      <a href="/test" class="nav-item" data-color="#446A46">test</a>
      <a href="/test" class="nav-item" data-color="#D82148">test</a>
      <a href="/test" class="nav-item" data-color="#FFB72B">test</a>
      <a href="/test" class="nav-item" data-color="#1C0A00">test</a>
      <span class="nav-indicator"></span>
   </nav>

  </div>
   
  <router-view/>
</template>

<style>
body{
  /* background-color: #0F3460; */
  background-color: #eee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #E94560; */
  
}


.nav,
.nav-item {
  position: relative;
}
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
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  overflow: hidden;
  max-width: 660px;
  min-width: 600px;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 20px;
  -webkit-box-shadow: 0 8px 36px rgba(157, 160, 175, 0.8);
  box-shadow: 0 8px 36px rgba(157, 160, 175, 0.8);
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
.nav2,
.nav3 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 20px;
}
.nav2 .nav-indicator {
  width: 5px;
  left: 0;
  border-radius: 0 8px 8px 0;
}
.nav2 .nav-item:before {
  bottom: 0;
  left: -27px;
  width: 6px;
  height: 100%;
  border-radius: 0 8px 8px 0;
}
.nav3 .nav-indicator {
  width: 5px;
  border-radius: 8px 0 0 8px;
  left: initial;
  right: 0;
}
.nav3 .nav-item:before {
  bottom: 0;
  left: initial;
  right: -27px;
  width: 6px;
  height: 100%;
  border-radius: 8px 0 0 8px;
}
@media (max-width: 992px) {
  .wrapper {
    padding: 30px 0 15px;
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

</style>
