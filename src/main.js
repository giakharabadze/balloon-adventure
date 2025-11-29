import { Application, Assets } from "pixi.js";
import startScene from "./scenes/startScene.js";
import gameScene from "./scenes/gameScene.js";
import finishScene from "./scenes/finishScene.js";
import loseScene from "./scenes/loseScene.js";
import { audioManager } from "./sounds/audioManager.js";


audioManager.init();
const app = new Application();

const state = {
  clouds: [],
  balloon: null,
  scoreText: 0,
  exploded: false
};

(async () => {
  await setup();
  await preload();


  startScene(app, () => {
    startGame();
  });
})();

function startGame() {
  
  state.clouds = [];
  state.balloon = null;
  state.scoreText = 0;
  state.exploded = false

  
  gameScene(app, state, {
    onWin: () => {
      const finish = finishScene(app, state.scoreText.current, () => {
        finish.destroy();   
        startGame();        
      });
    },
    onFail: () => {
      const lose = loseScene(app, state.scoreText.current, () => {
        lose.destroy();    
        startGame();        
      });
    }
  });
}


async function setup() {
  await app.init({ background: "skyblue", resizeTo: window });
  document.body.appendChild(app.canvas);
}

async function preload() {
  const assets = [
    { alias: "cloud", src: "/cloud.png" },
    { alias: "balloon", src: "/balloon.png" },
  ];
  await Assets.load(assets);
}

