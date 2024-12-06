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
    init: function() {                                                  // slot initialization of reel values
      stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[2] = false;      // stopReelFlag = [false, false, false]
      reelCounts[0] = reelCounts[1] = reelCounts[2] = 0;                // reelCount = [0, 0, 0]
      console.log("Initialization complete.");
    },

  stop: function(i) {
    stopReelFlag[i] = true;
    console.log("stop ", stopReelFlag)
    if (stopReelFlag[0] && stopReelFlag[1] && stopReelFlag[2]) {      // stopReelFlag = [true, true, true] - all 3buttons clicked
      start_btn.removeAttribute("disabled");                          // Enable the start button again when all reels are stop
      alert('enable start')
    }
  },

  //Initial position of the reel in the frame
  resetLocationInfo: function() {
    slotFrameHeight = slot_screen.offsetHeight;           // Log the frame height (480)
    slotReeltemHeight = reel[0].offsetHeight;             // Log a single reel's(image) height (244)
    slotReelsHeight = reels[0].offsetHeight;              // Log the all (10) reels height (2451) - (244x10 plus margins/border)

    slotReelStartHeight = -slotReelsHeight;                               // Move the whole reel above the frame (0axis)
    slotReelStartHeight += slotFrameHeight - (slotFrameHeight / 2)        // Move the reel bottom on the middle of the frame (240/2)
    slotReelStartHeight += slotFrameHeight + ( slotReeltemHeight * 1.5);  // Adjust the reel to move down 1.5 percent overflowing half of the bottom

    //Loop to adjust all the reel[0,1,2] to start on the last adjustment position
    for (let i = 0; i < reels.length; i++) {
        reels[i].style.top = String(slotReelStartHeight) + "px";
        console.log(`Reel ${i} style.top set to:`, reels[i].style.top);
    }
  },

  animation: function(index){
    console.log("animate for index ", index);
    if (reelCounts[index] >= 8 ) { reelCounts[index] = 0 }

    $(".reels").eq(index).animate(
      {
        "top": slotReelStartHeight + (reelCounts[index] * slotReeltemHeight)
      },
      {
        duration: sec,
        easing: "linear",
        complete: function(){
          if(stopReelFlag[index]) { return }
          reelCounts[index]++
          slot.animation(index)
        }
      }
    )
  }

}


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