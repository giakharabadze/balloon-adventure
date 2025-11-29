export function animateScore(scoreText, delta) {
    if (scoreText.current < scoreText.target) {
      scoreText.current += scoreText.speed * delta;
  
      if (scoreText.current > scoreText.target) {
        scoreText.current = scoreText.target;
      }
  
      scoreText.text = `Score: ${Math.floor(scoreText.current)}`;
    }
  }
  