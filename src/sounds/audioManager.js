import { sound } from "@pixi/sound";

export const audioManager = {
    init() {
        sound.add("wind", "/wind.mp3");
        sound.add("balloon", "/balloon-sound.mp3")
        sound.add("explode", "/balloon-explode.mp3");
        
    },

    playWind() {
        sound.play("wind", { loop: true, volume: 0.3 });
    },

    playExplode(){
        sound.play("explode", { volume: 0.2 });
    },

    playBalloonSound(){
        sound.play("balloon", {  volume: 0.3 });
    },

    stopWind() {
        sound.stop("wind");
    },
    stopBalloonSound() {
        sound.stop("balloon");
    },

    stopExplode(){
        sound.stop("explode");
    }

};