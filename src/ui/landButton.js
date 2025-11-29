import { Container, Graphics, Text } from "pixi.js";

export default function landButton(app) {
  const WIDTH = 180;
  const HEIGHT = 70;

  const button = new Container({
    pivot: { x: WIDTH / 2, y: HEIGHT / 2 },
    x: app.renderer.width / 2, 
    y: app.renderer.height / 2, 
    eventMode: "static", 
    cursor: "pointer",
  });

  const bg = new Graphics();
  bg.roundRect(0, 0, WIDTH, HEIGHT, 15).fill("blue");

  const text = new Text({
    text: `Safe Land`,
    style: {
      fontFamily: "Arial",
      fontSize: 32,
      fill: "white",
      fontWeight: "bold",
      dropShadow: true,
      dropShadowColor: "#000",
      dropShadowBlur: 3,
      dropShadowDistance: 2,
    },
  });

  button.addChild(bg, text);
  app.stage.addChild(button);

  text.anchor.set(0.5);
  text.x = WIDTH / 2;
  text.y = HEIGHT / 2;

  button.on("pointerover", () => {
    bg.tint = 0x5dade2; 
    button.scale.set(1.08); 
  });

  button.on("pointerout", () => {
    bg.tint = 0xffffff; 
    bg.tint = 0x3498db; 
    button.scale.set(1);
  });

 
  button.on("pointerdown", () => {
    button.scale.set(0.97); 
  });

  button.on("pointerup", () => {
    button.scale.set(1.03); 
  });

  button.x = WIDTH / 2 + 20;
  button.y = app.renderer.height - HEIGHT / 2 - 20;

  return button;
}
