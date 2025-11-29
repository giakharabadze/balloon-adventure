export function animateBalloon(app, balloon, time) {
    const delta = time.deltaMS; // დრო frame-ზე (milliseconds)
  
    // 1. ზემოთ მოძრაობა
    const speedY = balloon.speedY || 0.5; 
  
    const maxY = 120; 
    if (balloon.y > maxY) {
      balloon.y -= speedY * delta * 0.03;
    }
  
    // 2. ქარის ეფექტი (sway)
    balloon.timePassed = (balloon.timePassed || 0) + delta * 0.001; 
    const amplitude = balloon.swayAmplitude || 20;
    const frequency = balloon.swayFrequency || 1.5 ;
    const sway = Math.sin(balloon.timePassed * frequency) * amplitude;
  
    balloon.x = app.screen.width / 2 + sway;
  
    // 3. subtle rotation proportional to sway
    balloon.rotation = sway * 0.01;
  }
  