var images = ["215-2159743_dad-clipart-images-dad-clip-art-dad-clipart.png",
"unnamed.png",
"525-5255333_stick-figure-drawing-for-kids-clipart.png",
"download.png"
];
var names= ["dad",
"brother",
"sister",
"me"
]
var i=0
function Change(){

if (i>5){
    i=0;
}

    document.getElementById("image").src = images[i];
    document.getElementById("namer").innerHTML = names[i];
    i++;
}
