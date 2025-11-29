export function cloudsDuringLanding(app, clouds, time) {
    const delta = time.deltaTime;
    const stagePadding = 100;
  
    const boundHeight = app.screen.height + stagePadding * 2;
  
    clouds.forEach((cloud) => {
      cloud.y -= cloud.speed * delta; 
  
      if (cloud.y > app.screen.height + stagePadding) {
        cloud.y -= boundHeight;
      }
      if (cloud.y < -stagePadding) {
        cloud.y += boundHeight;
      }
    });
  }
  