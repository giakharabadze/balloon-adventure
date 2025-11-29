import { Container, Text } from "pixi.js";
import startButton from "./startButton";



export default function landingPage(app) {
  const landing = new Container();
  const startBtn = startButton(app);

  const title = new Text({text:"Balloon Adventure", 
    style:{
        fontFamily: "Arial",
        fill: "#ffffff",
        fontWeight: "bold",
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowDistance: 3,
      }
});
  title.anchor.set(0.5);
  title.x = app.renderer.width / 2;
  title.y = app.renderer.height * 0.28;

  const subtitle = new Text({text:"Fly as high as you can!", style: {
    fontFamily: "Arial",
    fontSize: 22,
    fill: "#dddddd",
    dropShadow: true,
    dropShadowBlur: 2,
  }});
  subtitle.anchor.set(0.5);
  subtitle.x = app.renderer.width / 2;
  subtitle.y = title.y + 60;

  
  landing.addChild(title);
  landing.addChild(subtitle);
  landing.addChild(startBtn);

  function centerElements() {
  
    const centerX = app.renderer.width / 2;
    const centerY = app.renderer.height / 2;

    const newFontSize = Math.min(70, app.renderer.width / 10); // მაქსიმუმ 80
    title.style.fontSize = newFontSize;

    title.x = centerX;
    title.y = centerY - 130;

    subtitle.x = centerX;
    subtitle.y = title.y + 70;

    startBtn.x = centerX;
    startBtn.y = centerY + 50;
  }
  centerElements();

  function handleResize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    centerElements();
}

  window.addEventListener("resize", () => handleResize);

  return {landing, startBtn, handleResize};
}
