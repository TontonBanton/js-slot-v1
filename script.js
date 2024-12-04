let slot_screen = document.getElementById("slot-screen")
let reel = document.getElementsByClassName("reel")
let reels = document.getElementsByClassName("reels")
let stop_btn = document.getElementsByClassName("stop-btn")
let start_btn = document.getElementById("start-btn")

let sec = 100               // slot reel rotation per second
let stopReelFlag = []       // slot reel stop flag
let reelCount = []          // which image to position
let slotFrameHeight         // frame size
let slotReelHeight          // overall reel (image) size
let slotReeltemHeight       // size of one reel (image)
let slotReelStartHeight     // initial image value


let slot = {
  //slot initialization of reel values
  init: function() {
    stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[2] = false     //stopReelFlag = [ false, false, false ]
    reelCount[0] = reelCount[1] = reelCount[2] = 0                  //reelCount = [ 0, 0, 0 ]
    console.log("Initialization complete.");
  },

  //slot initialize on start - start-btn click
  start: function() {
    slot.init();
    for(let index = 0; index < 3; index++) {
      slot.animation(index)
    }
  },

  stop: function(i) {
    stopReelFlag[i] = true                                        //ex. stopReelFlag[1] = [ true, false, false ]
    console.log("stop index ",  i);
    for(let index = 0; index < 3; index++) {
      slot.animation(index)
    }
  },

  //slot animation
  animation: function(index) {
    console.log("index is", index);
  }
};


// Add event listener to the start button
start_btn.addEventListener("click", function () {
  console.log("Slot machine started.");
  slot.start();
});
// Add event listener to the start button
stop_btn.addEventListener("click", function () {
  console.log("Slot machine reel 1 stopped.");
});