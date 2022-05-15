//This FINAL PROJECT(ohoo!) WAS CREATED BY MAMUDU, MICHELE AND EDUARDO
//much gratitude to Mamudu and Eduardo for helping and teaching me 
//https://replit.com/join/czrbwkbcxw-mspersaud  
import Scene from '../src/Scene.js'
import Sphere from '../src/Sphere.js'
import Material from '../src/Material.js'
import Vector3 from '../src/Vector3.js'
import RenderPlanner from '../src/RenderPlanner.js'

// document.getElementById("startButtonId").addEventListener('click', () => {
//     startRendering();
// });

// -------------------------------
// create scene
var scene = new Scene();

// add background sphere
scene.add(
    new Sphere(new Vector3(0.0, -10004, -20), 10000,
               new Material(new Vector3(0.2, 0.2, 0.2), 0, 0, new Vector3()))
);

// sphere
//var sphere1 = new Sphere(
//     new Vector3(0, 0, -20), // center
//     4, // radius
//     new Material(
//         new Vector3(1.0, 0.0, 0.0), // color
//         0, // reflection
//         0,  // transparency
//         new Vector3() // emissionColor (lights only)
//     )
// );

// background/top light (can toggle)
var lightBG = new Sphere(
    new Vector3(0, 20, -30), // center
    3, // radius
    new Material(
        new Vector3(), // color
        0, // reflection
        0, // transparency
        new Vector3(0,0,0) // emissionColor (lights only)
    ) 
);
scene.add(lightBG);

// main light
var light1 = new Sphere(
    new Vector3(0, 10, 10), // center
    1, // radius
    new Material(
        new Vector3(), // color
        0, // reflection
        0, // transparency
        new Vector3(1, 1, 1)
    )
);

// -------------------------------
// -------------------------------
var backgroundColor = new Vector3(2.0, 2.0, 2.0);

// get canvas
var resultDiv = document.getElementById("resultDiv");
var canvas = document.getElementById("resultCanvas");
var ctx = canvas.getContext('2d');
var canvasWidth  = canvas.width;
var canvasHeight = canvas.height;

var startTime = Date.now();
var frameCount = 0;


// template
// var myShape = new Sphere(
//     new Vector3(0, 0, -20), // center
//     4, // radius
//     new Material(
//         new Vector3(1.0, 0.0, 0.0), // color
//         0, // reflection
//         0,  // transparency
//         new Vector3() // emissionColor (lights only)
//     )
// );
// scene.add(myShape)


// BREAKOUT ROOMS (if time)
// Comment out `scene.add(sphere1)` below
// Use the template above to try adding your own shape(s)/light(s)!




// HOMEWORK

// TASK 1: Create a traffic signal
    // When you are ready, make sure `scene.add(sphere1)` is commented out
    // Create red, yellow, and green spheres stacked like a traffic signal
    // The sizes/locations don't need to match the diagram exactly
//

//Colors
var redl = new Sphere(
    new Vector3(0, 7, -60), // center
    2.25, // radius
    new Material(
        new Vector3(1.0, 0.0, 0.0), // color
        0, // reflection
        0,  // transparency
        new Vector3() // emissionColor (lights only)
    )

);
scene.add(redl);

var greenl = new Sphere(
    new Vector3(0, 0, -60), // center
    2.25, // radius
    new Material(
        new Vector3(0.0, 1.0, 0.0), // color
        0, // reflection
        0,  // transparency
        new Vector3() // emissionColor (lights only)
    )
);
scene.add(greenl);
var yellowl = new Sphere(
    new Vector3(0, 3.5, -60), // center
    2.25, // radius
    new Material(
        new Vector3(1.0, 0.9, 0.0), // color
        0, // reflection
        0,  // transparency
        new Vector3() // emissionColor (lights only)
    )
);
scene.add(yellowl);

// TASK 2: Two rear lights
    // When you are ready, make sure `scene.add(light1)` is commented out
    // Create two symmetrical lights that are behind and to the side of the traffic signal
    // The output does not need to match the diagram exactly, but the spheres should not be lit from the front
var left = new Sphere(
    new Vector3(-10, 10, -60), 
    1, // radius
    new Material(
        new Vector3(), // color
        0, // reflection
        0, // transparency
        new Vector3(1, 1, 1)
    )
);

var right = new Sphere(
    new Vector3(10, 10, -60), 
    1, // radius
    new Material(
        new Vector3(), // color
        0, // reflection
        0, // transparency
        new Vector3(1, 1, 1)
    )
);
// SCENE ITEMS
//Leaving lines 166 through 171 uncommented will give you TASK 1
scene.add(redl);
scene.add(yellowl);
scene.add(greenl);
scene.add(light1); //Commenting this line will give you TASK 2
scene.add(left); // this is needed for TASK 2
scene.add(right);//this is needed for TASK 2
// END HOMEWORK

// var create render planner
var bufferPieces = [];
var workerCount = 8;
var renderPlanner = new RenderPlanner(workerCount, scene, backgroundColor, canvasWidth, canvasHeight);
renderPlanner.onUpdateReceived = function(sectionStart, sectionHeight, buf8)
{
    // collect buffer for a single screen update
    bufferPieces.push({
        "buffer": buf8,
        "start": sectionStart,
        "height": sectionHeight
    });

    if(renderPlanner.isRunning() == false)
    {
        // rendering is completed update screen!
        for(var i=0; i<bufferPieces.length; i++) {
            var piece = bufferPieces[i];

            var imageData = ctx.getImageData(0, piece.start, canvasWidth, piece.height);
            imageData.data.set(piece.buffer);
            ctx.putImageData(imageData, 0, piece.start);
        }

        bufferPieces = [];

        // update scene data!
        setTimeout(function(){
            // light1.center = new Vector3(10*Math.sin(Date.now()/2000), 10, -30);
            // sphere1.center = new Vector3(0, 5*Math.sin(Date.now()/1000), -20);
            
            // BEGIN CUSTOM CODE
            
            // SPHERE
            let sphereX = document.querySelector('#sphereX').value;
            let sphereY = document.querySelector('#sphereY').value;
            let sphereZ = document.querySelector('#sphereZ').value;
            let sphereRad = document.querySelector('#sphereRad').value;
            let sphereR = document.querySelector('#sphereR').value;
            let sphereG = document.querySelector('#sphereG').value;
            let sphereB= document.querySelector('#sphereB').value;
            // let sphereReflection = document.querySelector('#sphereReflection').value;
            // let sphereTransparency = document.querySelector('#sphereTransparency').value;
            sphere1.center = new Vector3(sphereX, sphereY, sphereZ);
            sphere1.radius = sphereRad;
            sphere1.radius2 = sphereRad*sphereRad;
            sphere1.material = new Material(new Vector3(sphereR,sphereG,sphereB), 1.0, 0.5, new Vector3());

            // LIGHT
            let lightX = document.querySelector('#lightX').value;
            let lightY = document.querySelector('#lightY').value;
            let lightZ = document.querySelector('#lightZ').value;
            // let lightRad = document.querySelector('#lightRad').value;
            let lightR = document.querySelector('#lightR').value;
            let lightG = document.querySelector('#lightG').value;
            let lightB= document.querySelector('#lightB').value;
            // let lightReflection = document.querySelector('#lightReflection').value;
            // let lightTransparency = document.querySelector('#lightTransparency').value;
            light1.center = new Vector3(lightX, lightY, lightZ);
            // light1.radius = lightRad;
            // light1.radius2 = lightRad*lightRad;
            light1.material = new Material(new Vector3(), 0, 0, new Vector3(lightR,lightG,lightB));

            // background light toggle
            if(document.querySelector('input[name="lightBG"]').checked){
                lightBG.material = new Material(new Vector3(), 0, 0, new Vector3(1,1,1));
            } else {
                lightBG.material = new Material(new Vector3(), 0, 0, new Vector3(0,0,0));
            }

            // END CUSTOM CODE

            renderPlanner.updateScene();
            renderPlanner.start();

            frameCount++;
            var currentTime = Date.now();
            if(currentTime - startTime > 1000){
                resultDiv.innerHTML = "Worker Count: " + workerCount + " FPS = " + frameCount;
                startTime = currentTime;
                frameCount = 0;
            }
        },0);

    }
};

function startRendering() {
    // start
    renderPlanner.initialize();
    renderPlanner.start();
}

startRendering();
