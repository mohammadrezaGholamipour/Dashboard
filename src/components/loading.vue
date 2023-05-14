<template>
  <div class="parent-loading">
    <div class="rocket-loader">
      <div class="rocket">
        <div class="rocket-extras"></div>
        <div class="jet"><span></span></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.parent-loading {
  display: flex;
  position: absolute;
  justify-content: center;
  backdrop-filter: blur(10px);
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 13;
}

.rocket-loader {
  -webkit-animation: moveParticles 6s linear infinite;
  animation: moveParticles 6s linear infinite;
  background: linear-gradient(90deg, gray, transparent 10%) 0 20%/180% 0.2rem repeat-x, linear-gradient(90deg, gray, transparent 20%) 0 80%/150% 0.2rem repeat-x, linear-gradient(90deg, gray, transparent 5%) 0 65%/100% 0.2rem repeat-x, linear-gradient(90deg, gray, transparent 5%) 0 40%/220% 0.2rem repeat-x, linear-gradient(0, white, white);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  box-shadow: inset 0 0 60px 0 rgba(0, 0, 0, 0.1);
  height: 150px;
  left: 50%;
  overflow: hidden;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
}

.rocket-loader::before {
  -webkit-animation: blink 1s infinite;
  animation: blink 1s infinite;
  bottom: 6%;
  content: "صبر کنید";
  font-size: 15px;
  left: 0;
  position: absolute;
  right: 0;
}

@-webkit-keyframes moveParticles {
  100% {
    background-position-x: -500rem;
  }
}

@keyframes moveParticles {
  100% {
    background-position-x: -500rem;
  }
}

.rocket {
  -webkit-animation: moveRocket 2s linear infinite;
  animation: moveRocket 2s linear infinite;
  background: lightgray;
  background: linear-gradient(#990000, red, #990000);
  border-left: 3px solid rgba(0, 0, 0, 0.4);
  border-radius: 50%/30%;
  height: 15%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
}

.rocket::before,
.rocket::after {
  content: "";
  position: absolute;
}

.rocket::before {
  -webkit-animation: rotateFins 1s infinite;
  animation: rotateFins 1s infinite;
  background: #bababa;
  background: linear-gradient(#990000, red, #990000);
  border: 2px solid transparent;
  border-radius: 0 50% 50% 0;
  height: 140%;
  top: 50%;
  transform: translate(0, -50%);
  left: 6px;
  width: 20%;
}

.rocket::after {
  border: 7px solid transparent;
  border-left: 14px solid rgba(0, 0, 0, 0.4);
  border-radius: 15%;
  right: -20px;
  top: 4px;
}

.rocket-extras {
  -webkit-animation: moveExtras 1s infinite;
  animation: moveExtras 1s infinite;
  background: rgba(0, 0, 0, 0.4);
  height: 2px;
  left: 12px;
  margin: -2px 0 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 10px;
}

.rocket-extras::before,
.rocket-extras::after {
  content: "";
  position: absolute;
}

.rocket-extras::before {
  background: white;
  border-radius: 50%;
  height: 5px;
  right: -7px;
  top: -1px;
  width: 5px;
}

.rocket-extras::after {
  background: #cc0000;
  border-top: 1px solid #660000;
  height: 1px;
  left: -10px;
  top: 1px;
  width: 6px;
}

@-webkit-keyframes moveRocket {

  0%,
  100% {
    transform: translate(-50%, calc(-50% - 1rem));
  }

  50% {
    transform: translate(-50%, calc(-50% + 1rem));
  }
}

@keyframes moveRocket {

  0%,
  100% {
    transform: translate(-50%, calc(-50% - 1rem));
  }

  50% {
    transform: translate(-50%, calc(-50% + 1rem));
  }
}

@-webkit-keyframes rotateFins {

  0%,
  100% {
    height: 140%;
  }

  50% {
    border-top: 2px solid #660000;
    border-bottom: 2px solid #660000;
    height: 110%;
  }
}

@keyframes rotateFins {

  0%,
  100% {
    height: 140%;
  }

  50% {
    border-top: 2px solid #660000;
    border-bottom: 2px solid #660000;
    height: 110%;
  }
}

@-webkit-keyframes moveExtras {

  0%,
  100% {
    transform: translate(0, calc(-50% + 0.1rem));
  }

  50% {
    transform: translate(0, calc(-50% - 0.1rem));
  }
}

@keyframes moveExtras {

  0%,
  100% {
    transform: translate(0, calc(-50% + 0.1rem));
  }

  50% {
    transform: translate(0, calc(-50% - 0.1rem));
  }
}

.jet {
  height: 10px;
  left: -10px;
  position: absolute;
  top: calc(50% - 5px);
  width: 10px;
}

.jet::before,
.jet::after,
.jet span {
  -webkit-animation: moveSmoke 0.3s infinite;
  animation: moveSmoke 0.3s infinite;
  background: #e09100;
  border-radius: 50%;
  content: "";
  filter: blur(2px);
  height: 8px;
  left: -6px;
  opacity: 1;
  position: absolute;
  transform: translate(0, 0) scale(1);
  top: 1px;
  width: 15px;
}

.jet::after {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

.jet span {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes moveSmoke {
  100% {
    filter: blur(3px);
    opacity: 0;
    transform: translate(-40px, 0) scale(2);
  }
}

@keyframes moveSmoke {
  100% {
    filter: blur(3px);
    opacity: 0;
    transform: translate(-40px, 0) scale(2);
  }
}

@-webkit-keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.2;
  }
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.2;
  }
}
</style>
