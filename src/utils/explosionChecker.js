export function createBalloonExplosionChecker(onExplode) {
    const SAFE_TIME = 5000;          // 5s
    const MAX_TIME = 30000;           // 30s
    const explodeAfter = SAFE_TIME + Math.random() * (MAX_TIME - SAFE_TIME);

    let elapsed = 0;
    let exploded = false;

    return {
        update(deltaMS) {
            if (exploded) return;
            elapsed += deltaMS;
            if (elapsed >= explodeAfter) {
                exploded = true;
                onExplode();
            }
        },
        get explodeAtSeconds() { return (explodeAfter / 1000).toFixed(2); }
    };
}