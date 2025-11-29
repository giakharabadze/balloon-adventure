import { Container, Sprite } from "pixi.js";

export function addClouds(app, clouds, cloudCount) {
  
  const cloudContainer = new Container();

  
  app.stage.addChild(cloudContainer);

  
  for (let i = 0; i < cloudCount; i++) {
    
    const cloud = Sprite.from("cloud");
    cloud.anchor.set(0.5);

    cloud.speed = 1 + Math.random();

    // Randomly position the cloud sprite around the stage.
    cloud.x = Math.random() * app.screen.width;
    cloud.y = Math.random() * app.screen.height - 150;

    cloud.scale.set(0.05);

    cloudContainer.addChild(cloud);
    clouds.push(cloud);
  }
}
