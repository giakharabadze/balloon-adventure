import { Text } from "pixi.js";

export function addScore(app) {
  const scoreText = new Text({
    text: `Score: 0`,
    style: {
      fontFamily: "Arial",
      fontSize: 36,
      fill: "white",
      align: "center",
      dropShadow: {
        color: "#000000",
        blur: 2,
        distance: 4,
      },
    },
    anchor: 0.5,
  });
  scoreText.x = 20; 
  scoreText.y = 20; 
  scoreText.anchor.set(0, 0);

  
  app.stage.addChild(scoreText);

  
  scoreText.current = 0;
  scoreText.target = 1000; 
  scoreText.speed = 0.01; 

  return scoreText;
}
