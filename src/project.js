var s = Snap("#svg");

START_CY = 100
COLOR_CY = 400
RADIUS = 20
class Wine {
    constructor(variety, hex, start_cx, color, color_cx) {
            this.variety = variety;
            this.hex = hex;
            this.start_cx = start_cx;
            // this.start_cy = start_cy;
            this.color = color;
            this.color_cx;
            // this.color_cy = color_cy;
        }
}

var pinot = new Wine("Pinot Noir","#ad2e41",800,"red",650)

var pinot_circle = s.circle(pinot.start_cx,START_CY, RADIUS);
pinot_circle.attr({
    fill: pinot.hex
  });
   

// // Create a blink effect by modifying the rx value
// // for ellipse from 90px to 1px and backwards
// function blink(){
//     ellipse.animate({ry:1}, 220, function(){
//       ellipse.animate({ry: 90}, 300);
//     });
//   };
   
//   // Recall blink method once every 3 seconds
   
//   setInterval(blink, 3000);