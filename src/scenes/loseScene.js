import failUI from "../ui/failUI.js";

export default function loseScene(app, score, onRestart) {
    const failScreen = failUI(app, onRestart);
    app.stage.addChild(failScreen);

    return {
        destroy() {
            app.stage.removeChild(failScreen);
            failScreen.destroy(true);
        }
    };
}