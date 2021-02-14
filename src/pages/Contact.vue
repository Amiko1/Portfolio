<template>
  <div class="maindiv"></div>

  <div class="card roll-in-left">
    <div class="amiko">
      <div class="front">
        <img class="amige" src="../images/pages/contacts.png" />
      </div>

      <div class="back">
        <div class="details">
          <h2>
            AMIRAN <br />
            BURJANADZE
          </h2>

          <h1>JUNIOR FRONT END DEVELOPER</h1>
          <div class="icons">
            <a href="https://www.facebook.com/profile.php?id=100042909997228">
              <img
                src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
              />
            </a>
            <a href="https://www.instagram.com/amikoburjanaze/">
              <img
                src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
              />
            </a>
            <a href="#">
              <img src="https://img.icons8.com/fluent/48/000000/twitter.png" />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/doodle/48/000000/google-logo.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  color: white;
}
.maindiv {
  width: 100vw;
  height: 100vh;
  background-image: url('../images/pages/walpaper.jpg');
  background-repeat: no-repeat;
}
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

h1 {
  position: absolute;

  right: 113px;
  top: 250px;
  margin: 0;
  padding: 0;
  font-size: 40px;
  color: #fff;
}
.amige {
  width: 600px;
  height: 700px;
}
.body-div {
  text-overflow: none;
  margin: 0;
  padding: 0;
  font-family: 'Josefin Sans', sans-serif;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 700px;
  transform-style: preserve-3d;
  perspective: 600px;
  transition: 0.5s;
}

.front {
  box-shadow: 0 0 5px #4233ff, 0 0 25px #4233ff, 0 0 50px #4233ff,
    0 0 200px #4233ff;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: #000;
  backface-visibility: hidden;

  transform: rotateX(0deg);
  transition: 0.5s;
}

.card:hover .front {
  transform: rotatex(-180deg);
}

.back {
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 200px #03e9f4;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: #000;
  /* background-image: linear-gradient(to right, red , yellow); */
  /*background-image:linear-gradient(left, #000 50%, rgba (255, 255, 255, 0.1) 50%); */
  backface-visibility: hidden;

  transform: rotateX(180deg);
  transition: 0.5s;
}

.card .back:before {
  content: '';
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}

.card:hover .back {
  transform: rotateX(0deg);
}

.card .back .details {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;

  width: 100%;
  text-align: center;
  box-sizing: border-box;
}

h2 {
  position: absolute;
  bottom: 130px;
  left: 127px;
  margin: 0;
  padding: 0;
  font-size: 50px;
  color: #fff;
}

h1 {
  position: absolute;

  top: 150px;
  color: #a7a7a7;
  font-size: 30px;
  right: 50px;
}

.social-icons {
  padding: 10px 0;
}

.social-icons a {
  display: inline-block;
  width: 36px;
  height: 36px;
  text-align: center;
  background: #262626;
  color: #fff;
  text-decoration: none;
  transition: 0.5s;
}

@-webkit-keyframes roll-in-left {
  0% {
    -webkit-transform: translateX(-800px) rotate(-540deg);
    transform: translateX(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}
@keyframes roll-in-left {
  0% {
    -webkit-transform: translateX(-800px) rotate(-540deg);
    transform: translateX(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}
</style>
