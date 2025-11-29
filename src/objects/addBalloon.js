import { Sprite } from "pixi.js";

export function addBalloon(app) {
  const balloon = Sprite.from("balloon");

  balloon.anchor.set(0.5);

  balloon.x = app.screen.width / 2;
  balloon.y = app.screen.height - 150;

  balloon.scale.set(0.15);

  balloon.speedY = 0.5; 
  balloon.swayAmplitude = 20; 
  balloon.swayFrequency = 1.5;
  balloon.timePassed = 0;

  app.stage.addChild(balloon);

  function handleResize() {
    if (!balloon.parent) { 
      window.removeEventListener("resize", handleResize);
      return;
    }
    balloon.x = app.screen.width / 2;
  }

  window.addEventListener("resize", handleResize);

  return balloon;
}
