import landingPage from "../ui/landingPage";

export default function StartScene(app, onStart) {
    const { landing, startBtn, handleResize} = landingPage(app);
    app.stage.addChild(landing);
  
    startBtn.on("pointerdown", () => {
    window.removeEventListener("resize", handleResize)
      app.stage.removeChild(landing);
      landing.destroy({ children: true });
      onStart(); 
    });
  }