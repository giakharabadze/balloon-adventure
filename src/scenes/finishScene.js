import finishUI from "../ui/finishUI";


export default function finishScene(app, score, restartGame) {
  
  const finishUi = finishUI(app, score, restartGame);
  app.stage.addChild(finishUi);

  return {
    destroy() {
      app.stage.removeChild(finishUi);
      finishUi.destroy(true);
    }
  };
}