
import { animateBalloon } from "../animations/animateBalloon";
import { animateClouds } from "../animations/animateClouds";
import { animateScore } from "../animations/animateScore";
import { balloonLanding } from "../animations/balloonLanding";
import { cloudsDuringLanding } from "../animations/cloudsDuringLanding";
import { addBalloon } from "../objects/addBalloon";
import { addClouds } from "../objects/addClouds";
import { addScore } from "../objects/addScore";
import { audioManager } from "../sounds/audioManager";
import landButton from "../ui/landButton";
import { createBalloonExplosionChecker } from "../utils/explosionChecker";


export default function GameScene(app, state, callbacks) {

   
    addClouds(app, state.clouds, 15);
    state.balloon = addBalloon(app);
    addClouds(app, state.clouds, 5);
    state.scoreText = addScore(app);
    audioManager.playWind()
    audioManager.playBalloonSound()
    

    
    const explosionChecker = createBalloonExplosionChecker(() => {
        state.exploded = true;
      });

      function startExplosionTicker() {
        audioManager.playExplode()
        const explosionTicker = (time) => {
            balloonLanding(app, state.balloon, time);
            cloudsDuringLanding(app, state.clouds, time);
            if (state.balloon.y > app.screen.height - state.balloon.height * 0.6) {
                destroy();                          
                callbacks.onFail(); 
                app.ticker.remove(explosionTicker); 
                audioManager.stopWind()
                audioManager.stopBalloonSound()
                audioManager.stopExplode()
                return           
            }
        };
    
        app.ticker.add(explosionTicker);
    }

    
  
    // --- Main ticker ---
    const mainTicker = (time) => {
    explosionChecker.update(time.deltaMS);      
      animateClouds(app, state.clouds, time);
      animateBalloon(app, state.balloon, time);
      animateScore(state.scoreText, time.deltaMS);
      if (state.exploded && callbacks.onFail) {
        app.ticker.remove(mainTicker);   // გავაჩეროთ მთავარი ტიკერი
        startExplosionTicker();          // გავუშვათ აფეთქების ანიმაციის ტიკერი
        return; 
      }
    };
    app.ticker.add(mainTicker);
  
    
    const landBtn = landButton(app);
    landBtn.on("pointerdown", () => {
      
      app.ticker.remove(mainTicker);
      landBtn.visible = false;
  
      // Land Animation
      const landingTicker = (time) => {
        balloonLanding(app, state.balloon, time);
        cloudsDuringLanding(app, state.clouds, time);
  
       
        if (state.balloon.y > app.screen.height - state.balloon.height * 0.6) {
          app.ticker.remove(landingTicker);
          audioManager.stopWind()
          audioManager.stopBalloonSound()
          destroy()
          
          if (callbacks.onWin) callbacks.onWin();
        }
      };
      app.ticker.add(landingTicker);
    });

    function destroy() {
        app.ticker.remove(mainTicker);

        state.clouds.forEach(c => {
            if (c.parent) app.stage.removeChild(c); 
            c.destroy({ children: true}); 
        });
        state.clouds = [];
        state.exploaded = false

        
        if (state.balloon) {
            app.stage.removeChild(state.balloon);
            state.balloon.destroy({ children: true })
            state.balloon = null;
        }

        if(state.exlodedBalloon){
            app.stage.removeChild(state.exlodedBalloon);
            state.exlodedBalloon.destroy({ children: true })
            state.exlodedBalloon = null;
        }

        if (state.scoreText) {
            app.stage.removeChild(state.scoreText);
            state.scoreText.destroy();
        }

        if (landBtn.parent) {
            app.stage.removeChild(landBtn);
            landBtn.destroy({ children: true });
        }
        
    }

    return { destroy };
  }

  