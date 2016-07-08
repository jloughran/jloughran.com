/** The idea here is that clicking the arrow will pull
 *  the actual home page from the side of the screen.
 */

const arrow = document.getElementById('home-arrow');

let lastTime = null;
let slidePx = 10;
function slideArrow(time) {
  'use strict';
  if (lastTime !== null) {
    slidePx += time - lastTime;
  }

  lastTime = time;
  arrow.style.right = slidePx + 'px';
  if (slidePx > screen.width) {
    arrow.style.display = 'none';
  } else {
    requestAnimationFrame(slideArrow);
    console.log(slidePx);
  }
}

arrow.addEventListener('click', function () {
  'use strict';
  requestAnimationFrame(slideArrow);
});
