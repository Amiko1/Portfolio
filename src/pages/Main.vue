<template>
  <main>
    <main-header />
    <section class="section-1">
      <div class="section-1-title">
        <h2 class="s1-title" id="myH2">BURJANADZE</h2>
        <p class="s1-p" id="myp">Front end developer</p>
      </div>
      <div class="main-moon">
        <moon />
      </div>
    </section>

    <section class="section-2">
      <div class="section-2-flex">
        <div class="section-2-title">
          <h2 class="section2-h">About Me</h2>
          <p class="section2-p">
            My name is amirani, <br />
            I am 21 years old <br />
          </p>
          <button>Read More</button>
        </div>
        <div class="photo-1"><img src="../images/aboutme.jpg" alt="" /></div>
      </div>
    </section>

    <section class="section-3">
      <div class="section-3-flex">
        <div class="section-3-title">
          <h2 class="section3-h">Projects</h2>
          <p class="section3-p">
            There is my Codepen <br />
            funny projetcs <br />
          </p>
          <button>Read More</button>
        </div>
        <div class="photo-3">
          <img src="../images/projects.jpg" alt="" />
        </div>
      </div>
    </section>

    <section class="section-4">
      <div class="section-4-flex">
        <div class="section-4-title">
          <h2 class="section4-h">Contact</h2>
          <p class="section4-p">Here you can send me mail</p>
          <router-link to="/contact"> <button>Read More</button> </router-link>
        </div>
        <div class="photo-4">
          <img src="../images/aboutme.jpg" alt="" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import moon from './components/Moon.vue';
import $ from 'jquery';

export default {
  components: {
    moon
  },
  mounted() {
    // setTimeout(function(){ document.getElementById("myH2").style.opacity = 0.1}, 3000);
    let a = 0.1;
    setTimeout(function() {
      setInterval(function() {
        a += 0.1;
        console.log(a);
        if (a < 1) {
          $('#myH2').css('opacity', a);
        }
      }, 150);
    }, 4500);

    let b = 0.1;
    setTimeout(function() {
      setInterval(function() {
        b += 0.1;
        console.log(a);
        if (b < 1) {
          $('#myp').css('opacity', b);
        }
      }, 150);
    }, 4500);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');

.s1-title {
  color: white;
  text-align: center;
  font-family: 'Amatic SC', cursive;
  font-size: 70px;
  margin-top: 400px;
  opacity: 0;
  transition-timing-function: ease-out;
}

.s1-p {
  text-align: center;
  color: white;
  font-family: 'Amatic SC', cursive;
  font-size: 30px;
  opacity: 0;
  transition-timing-function: ease-out;
}

::-webkit-scrollbar-thumb {
  background: #07182b;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #07182b;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #07182b;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #07182b;
}

main {
  width: 100vw;
  background-color: #171131;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
}

section {
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  width: 100%;
}

.section-1-title {
  width: 20%;
  margin-left: 5%;
}

.main-moon {
  width: 70%;
}

.section-2-flex,
.section-3-flex,
.section-4-flex {
  width: 100%;
  display: flex;
}

.section-2-title,
.section-3-title,
.section-4-title {
  width: 20%;
  margin-left: 10em;
  margin-top: 20em;
}

.photo-1,
.photo-2,
.photo-3 {
  width: 70%;
}

.section3-p,
.section2-p,
.section4-p {
  margin-top: 2rem;
  font-size: 2em;
  font-family: 'Fredericka the Great', cursive;
  margin-bottom: 30px;
  color: #ffffff;
  white-space: nowrap;
}

.section3-h,
.section2-h,
.section4-h {
  font-size: 9em;
  font-family: 'IM Fell English SC', serif;

  font-weight: 400;
  color: white;
  position: relative;
  white-space: nowrap;
  z-index: 100;
}

img {
  width: 80%;
  height: 73%;
  margin-left: 13em;
  margin-top: 10em;
  box-shadow: 3px 3px 18px 0px rgba(0, 0, 0, 0.79);
}

button {
  display: inline-block;
  font-size: 1.8rem;
  color: #fff;
  background: #ff4d5a;
  padding: 18px 32px;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  letter-spacing: 0.1em;
  white-space: nowrap;
}

button:hover {
  cursor: pointer;
  box-shadow: 3px 3px 18px 0px white;
}
</style>
