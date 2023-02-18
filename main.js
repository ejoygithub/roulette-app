"use strict";

{
    const roulette = document.getElementById("roulette");
    const ctx = roulette.getContext("2d");

    ctx.moveTo(200, 175);
    ctx.arc(200, 175, 75, 0, (1/3) * Math.PI);
    ctx.closePath();
    // ctx.stroke();
    
    // ctx.beginPath();
    ctx.moveTo(100, 75);
    ctx.arc(100, 75, 75, 0, (1/3) * Math.PI);
    ctx.closePath();
    // ctx.stroke();
    ctx.fill();

    function rotateRoulette() {
        
    }
}