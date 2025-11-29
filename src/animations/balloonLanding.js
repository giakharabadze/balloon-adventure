export function balloonLanding(app, balloon, time) {
    const delta = time.deltaMS;
    const speedY = balloon.landingSpeed || 10; 
  
    
    const groundY = app.screen.height - balloon.height * 0.55;
  
    if (balloon.y < groundY) {
      balloon.y += speedY * delta * 0.02;
      if (balloon.y > groundY) balloon.y = groundY;
    }
  
    balloon.rotation = 0;
  }
  