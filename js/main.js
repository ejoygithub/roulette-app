"use strict";

{
    const canvas = document.getElementById("roulette");
    const ctx = canvas.getContext("2d");
    const roulette = new Roulette(canvas);
    const runBtn = document.getElementById("run");
    const stopBtn = document.getElementById("stop");


    // stopBtn.addEventListener("click", () => {
    //     clearInterval(run);
    //     const stop = setInterval(() => {
    //         roulette.stop(ctx);
    //     }, 1);
    // });

    // runBtn.addEventListener("click", () => {
    //     clearInterval(stop);
    //     const run = setInterval(() => {
    //         roulette.run(ctx);
    //     }, 1);
    // });
    
    const run = setInterval(() => {
        roulette.run(ctx);
    }, 1);

    stopBtn.addEventListener("click", () => {
        clearInterval(run);
        setInterval(() => {
            roulette.stop(ctx);
        }, 1);
    });

    

    
}