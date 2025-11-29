import { Container, Text, Graphics } from "pixi.js";

export default function failUI(app, onRestart) {
  const fail = new Container();

  
  const bg = new Graphics()
    .rect(0, 0, app.renderer.width, app.renderer.height)
    .fill({ color: 0x000000, alpha: 0.45 });

  
  const title = new Text({
    text: "💥 Balloon Exploded!",
    style: {
      fontFamily: "Arial",
      fontSize: 60,
      fill: "#ff4444",
      fontWeight: "bold",
      dropShadow: true,
      dropShadowBlur: 4,
      dropShadowColor: "#000000",
      dropShadowDistance: 3,
    }
  });
  title.anchor.set(0.5);

  
  const sub = new Text({
    text: "Please try again",
    style: {
      fontFamily: "Arial",
      fontSize: 32,
      fill: "#ffffff",
    }
  });
  sub.anchor.set(0.5);

  const WIDTH = 180;
  const HEIGHT = 70;

  
  const btn = new Container();
  btn.eventMode = "static";
  btn.cursor = "pointer";

  const btnBg = new Graphics()
    .roundRect(0, 0, WIDTH, HEIGHT, 20)
    .fill(0xe74c3c);

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

  btn.addChild(btnBg, btnText);
  btn.on("pointerdown", onRestart);

  fail.addChild(bg, title, sub, btn);

  
  function centerElements() {
    const w = app.renderer.width;
    const h = app.renderer.height;
  
    
    bg.width = w;
    bg.height = h;
  
    
    title.style.fontSize = Math.min(70, w / 10);
    title.x = w / 2;
    title.y = h * 0.28;
  
   
    sub.style.fontSize = Math.min(32, w / 20);
    sub.x = w / 2;
    sub.y = title.y + 70;
  
    
    btn.x = w / 2 - WIDTH / 2;
    btn.y = sub.y + 120 - HEIGHT / 2;
  }
  centerElements();

  function handleResize() {
    if (!fail.parent) {
      window.removeEventListener("resize", handleResize);
      return;
    }
    app.renderer.resize(window.innerWidth, window.innerHeight);
    centerElements();
  }
  window.addEventListener("resize", handleResize);

  return fail;
}
