//Create Canvas via Adding Multiple DIV to Canvas
  let canvas = document.getElementById("canvas");

  for (var i = 1; i < 2210; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "pixels");
      canvas.appendChild(div);
  }

//Create Palette & Colors
  let palette = document.getElementById("palette");
  let colorID = ["red", "bisque", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white", "checker1", "checker2", "checker3", "checker4", "checker5", "circle1", "circle2", "circle3", "circle4", "circle5", "emoji1", "emoji2", "emoji3", "emoji4", "gif1"];

  for (var j = 0; j < 25; j++) {
      let div = document.createElement("div");
      div.setAttribute("class", "colors");
      div.setAttribute("id", colorID[j]);
        palette.appendChild(div);
  }

//Create Color Wheel
  let colorwheel = document.getElementById("colorWheel");
  for (var i = 0; i < 360; i++) {
  let colorSpan = document.createElement("span");
    colorSpan.setAttribute("id", "d" + i);
    colorSpan.style.backgroundColor = "hsl(" + i + ", 100%, 50%)";
  	colorSpan.style.msTransform = "rotate(" + i + "deg)";
    colorSpan.style.webkitTransform = "rotate(" + i + "deg)";
  	colorSpan.style.MozTransform = "rotate(" + i + "deg)";
  	colorSpan.style.OTransform = "rotate(" + i + "deg)";
  	colorSpan.style.transform = "rotate(" + i + "deg)";
  	let userChoice = (i + "deg");
    colorwheel.appendChild(colorSpan);
  }

//Create Brush Color Indicator
  let indicator = document.createElement("div");
  indicator.setAttribute("class", "indicator");
  colorwheel.appendChild(indicator);

  //Create Inputs
  let inputText = document.createElement("input");
  inputText.setAttribute("type", "output");
  inputText.setAttribute("id", "text");
  inputText.setAttribute("value", "ComingSoon....");
  colorwheel.appendChild(inputText);

//Add Palette Color to Pixels
  palette.addEventListener("click", function() {
    let activateColor1 = event.target.id;
    let pickColor1 = event.target.style.backgroundColor;
    console.log(pickColor1, activateColor1);

    indicator.setAttribute("id", activateColor1 );
    indicator.style.backgroundColor = pickColor1;
    // inputText.setAttribute("value", pickColor1);

    //Clicking Situation
    canvas.addEventListener("click", function() {
      event.target.setAttribute("id", activateColor1);
      event.target.style.backgroundColor = pickColor1;
    })
    // canvas.addEventListener("mouseover", function() {
    //   event.target.setAttribute("id", activateColor1);
    //   event.target.style.backgroundColor = pickColor1;
    // })
    // canvas.addEventListener("mouseup", function() {
    //   event.target.removeAttribute("id", activateColor1);
    //   event.target.style.backgroundColor = "";
    // })
  })

//Add ColorWheel Color to Pixels
  colorwheel.addEventListener("click", function() {
    let activateColor2 = event.target.id;
    let pickColor2 = event.target.style.backgroundColor;
    console.log(pickColor2, activateColor2);

    indicator.setAttribute("style", activateColor2);
    indicator.style.backgroundColor = pickColor2;
    document.getElementById("text").setAttribute("value", pickColor2);

    //Clicking Situation
    canvas.addEventListener("click", function() {
      event.target.setAttribute("id", activateColor2);
      event.target.style.backgroundColor = pickColor2;
    })
    // canvas.addEventListener("mouseover", function() {
    //   event.target.setAttribute("id", activateColor2);
    //   event.target.style.backgroundColor = pickColor2;
    // })
    // canvas.addEventListener("mouseup", function() {
    //   event.target.removeAttribute("id", activateColor2);
    //   event.target.style.backgroundColor = "";
    // })
  })

//Mouse Actions - Brush Like
