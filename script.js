let slot_screen = document.getElementById("slot-screen");
let reel = document.getElementsByClassName("reel");
let reels = document.getElementsByClassName("reels");
let stop_btns = document.getElementsByClassName("stop-btn");
let start_btn = document.getElementById("start-btn");

let sec = 100;              // slot reel rotation per second
let stopReelFlag = [];      // slot reel stop flag
let reelCounts = [];        // which image to position
let slotFrameHeight;        // frame size
let slotReelsHeight;        // overall reel (image) size
let slotReeltemHeight;      // size of one reel (image)
let slotReelStartHeight;    // initial image value

let slot = {
  start: function() {                                               // slot initialize on start - start-btn click
    slot.init();
    slot.resetLocationInfo()
    for (let index = 0; index < 3; index++) {
      slot.animation(index);
    }
  },
    init: function() {                                              // slot initialization of reel values
      stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[2] = false;  // stopReelFlag = [false, false, false]
      reelCounts[0] = reelCounts[1] = reelCounts[2] = 0;               // reelCount = [0, 0, 0]
      console.log("Initialization complete.");
    },
    animation: function(index) {                                    // slot animation
    console.log("animate for index ", index);
     },

  stop: function(i) {
    stopReelFlag[i] = true;
    console.log("stop ", stopReelFlag)
    if (stopReelFlag[0] && stopReelFlag[1] && stopReelFlag[2]) {      // stopReelFlag = [true, true, true] - all 3 is clicked
      start_btn.removeAttribute("disabled");                          // Enable the start button whe all reels are stop
      alert('enable start')
    }
  },

  resetLocationInfo: function() {
    slotFrameHeight = slot_screen.offsetHeight;           // Log the frame height (480)
    slotReeltemHeight = reel[0].offsetHeight;             // Log a single reel's height (244)
    slotReelsHeight = reels[0].offsetHeight;              // Log the reels' height (2451) - (244x10 plus margins/border)

    slotReelStartHeight = -slotReelsHeight;               // Move the whole reels directly above the 0 axis (-2145)
    slotReelStartHeight += slotFrameHeight - (slotFrameHeight / 2) + ( slotReeltemHeight * 1.5);
    console.log("Final slotReelStartHeight (after adjustment):", slotReelStartHeight);
    alert('isa isaha')
    for (let i = 0; i < reels.length; i++) {
        reels[i].style.top = String(slotReelStartHeight) + "px";
        console.log(`Reel ${i} style.top set to:`, reels[i].style.top);
    }
}

};



//START BUTTON------------------------------------------------------------------------------------------------------------
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

    // Disable the stop button after it is clicked
    event.target.disabled = true;
    console.log(`Button with data-val=${value} is now disabled.`);
  });
});