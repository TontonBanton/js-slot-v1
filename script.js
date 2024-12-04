let slot_screen = document.getElementById("slot-screen");
let reel = document.getElementsByClassName("reel");
let reels = document.getElementsByClassName("reels");
let stop_btns = document.getElementsByClassName("stop-btn");
let start_btn = document.getElementById("start-btn");

let sec = 100;  // slot reel rotation per second
let stopReelFlag = [];  // slot reel stop flag
let reelCount = [];  // which image to position
let slotFrameHeight;  // frame size
let slotReelHeight;  // overall reel (image) size
let slotReeltemHeight;  // size of one reel (image)
let slotReelStartHeight;  // initial image value


let slot = {
  // slot initialize on start - start-btn click
  start: function() {
    slot.init();
    for (let index = 0; index < 3; index++) {
      slot.animation(index);
    }
  },

    // slot initialization of reel values
    init: function() {
      stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[2] = false;  //stopReelFlag = [false, false, false]
      reelCount[0] = reelCount[1] = reelCount[2] = 0;               //reelCount = [0, 0, 0]
      console.log("Initialization complete.");
    },
    // slot animation
    animation: function(index) {
    console.log("animate for index ", index);
     },

  stop: function(i) {
    stopReelFlag[i] = true;
    console.log("stop ", stopReelFlag)
    if (stopReelFlag[0] && stopReelFlag[1] && stopReelFlag[2]) {      // stopReelFlag = [true, true, true]
      start_btn.removeAttribute("disabled");                          // Enable the start button whe all reels are stop
      alert('enable start')
    }
  }

};
` `
//START BUTTON
start_btn.addEventListener("click", function() {
  console.log("Slot machine started.");
  start_btn.setAttribute("disabled", "true");                       //Disable the start button after clicking
  alert('disable start')
  slot.start();
});


const stopButtons = document.querySelectorAll('.stop-btn');
stopButtons.forEach(button => {
  button.disabled = false;
  button.addEventListener('click', event => {
    const value = event.target.getAttribute('data-val');
    console.log(`Button with data-val=${value} clicked!`);
    slot.stop(value)
  });
});