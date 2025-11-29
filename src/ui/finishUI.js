import { Container, Text, Graphics } from "pixi.js";

export default function finishUI(app, score, onRestart) {
  const finish = new Container();

  // Background overlay
  const bg = new Graphics()
    .rect(0, 0, app.renderer.width, app.renderer.height)
    .fill({ color: 0x000000, alpha: 0.45 });

  // Title
  const title = new Text({
    text: "🎉 Congratulations!",
    style: {
      fontFamily: "Arial",
      fontSize: 60,
      fill: "#ffffff",
      fontWeight: "bold",
      dropShadow: true,
      dropShadowBlur: 4,
    }
  });
  title.anchor.set(0.5);

  // Score
  const scoreText = new Text({
    text: `Your score: ${Math.floor(score)}`,
    style: {
      fontFamily: "Arial",
      fontSize: 32,
      fill: "#ffffff",
    }
  });
  scoreText.anchor.set(0.5);

  
  const WIDTH = 180;
  const HEIGHT = 70;
  // Restart Button
  const btn = new Container({
    pivot: { x: WIDTH / 2, y: HEIGHT / 2 }, 
    x: app.renderer.width / 2, 
    y: app.renderer.height / 2, 
    eventMode: "static", 
    cursor: "pointer",
  });
  const btnBg = new Graphics()
    .roundRect(0, 0, WIDTH, HEIGHT, 20)
    .fill("blue");

  const btnText = new Text({
    text: "Play Again",
    style: {
      fontFamily: "Arial",
      fontSize: 30,
      fill: "#ffffff",
      fontWeight: "bold",
    }
  });
  btnText.anchor.set(0.5);
  btnText.x = WIDTH / 2;
  btnText.y = HEIGHT / 2;

  btn.addChild(btnBg);
  btn.addChild(btnText);

  
  btn.on("pointerdown", onRestart);

  finish.addChild(bg, title, scoreText, btn);

  
  function centerElements() {
    const w = app.renderer.width;
    const h = app.renderer.height;

    bg.width = w;
    bg.height = h;

    
    title.style.fontSize = Math.min(70, w / 10);
    title.x = w / 2;
    title.y = h * 0.28;

    
    scoreText.x = w / 2;
    scoreText.y = title.y + 80;

    btn.x = w / 2;
    btn.y = scoreText.y + 120;
  }

  centerElements();

  function handleResize() {
    if (!finish.parent) {
      window.removeEventListener("resize", handleResize);
      return;
    }
    app.renderer.resize(window.innerWidth, window.innerHeight);
    centerElements();
  }
  window.addEventListener("resize", handleResize);

  return finish;
}
