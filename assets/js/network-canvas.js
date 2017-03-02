class NetworkSimulation {
    
    GetNodes() {
            return [
            {
                title: "BS",
                x: 500,
                y: 500,
                isBase: true,
            },                
            {
                title: "Node 1",
                x: 410,
                y: 360,
                isBase: false,
            },
            {
                title: "Node 2",
                x: 220,
                y: 100,
                isBase: false,
            },
            {
                title: "Node 3",
                x: 300,
                y: 810,
                isBase: false,
            },
            {
                title: "Node 4",
                x: 990,
                y: 90,
                isBase: false,
            },
            {
                title: "Node 5",
                x: 70,
                y: 870,
                isBase: false,
            },
            {
                title: "Node 6",
                x: 90,
                y: 50,
                isBase: false,
            },
            {
                title: "Node 7",
                x: 900,
                y: 60,
                isBase: false,
            },
            {
                title: "Node 8",
                x: 650,
                y: 110,
                isBase: false,
            },
            {
                title: "Node 9",
                x: 390,
                y: 160,
                isBase: false,
            },
            {
                title: "Node 10",
                x: 680,
                y: 440,
                isBase: false,
            },
            {
                title: "Node 11",
                x: 90,
                y: 470,
                isBase: false,
            },
            {
                title: "Node 12",
                x: 840,
                y: 810,
                isBase: false,
            },
            {
                title: "Node 13",
                x: 400,
                y: 30,
                isBase: false,
            },
            {
                title: "Node 14",
                x: 770,
                y: 80,
                isBase: false,
            },
            {
                title: "Node 15",
                x: 450,
                y: 550,
                isBase: false,
            },
            {
                title: "Node 16",
                x: 350,
                y: 440,
                isBase: false,
            },
            {
                title: "Node 17",
                x: 780,
                y: 670,
                isBase: false,
            },
            {
                title: "Node 18",
                x: 100,
                y: 530,
                isBase: false,
            },
            {
                title: "Node 19",
                x: 900,
                y: 890,
                isBase: false,
            },
            {
                title: "Node 20",
                x: 760,
                y: 840,
                isBase: false,
            },
            {
                title: "Node 21",
                x: 890,
                y: 30,
                isBase: false,
            },
            {
                title: "Node 22",
                x: 780,
                y: 390,
                isBase: false,
            },
            {
                title: "Node 23",
                x: 750,
                y: 410,
                isBase: false,
            },
            {
                title: "Node 24",
                x: 700,
                y: 200,
                isBase: false,
            },
            {
                title: "Node 25",
                x: 610,
                y: 940,
                isBase: false,
            },
            {
                title: "Node 26",
                x: 540,
                y: 500,
                isBase: false,
            },
            {
                title: "Node 27",
                x: 250,
                y: 570,
                isBase: false,
            },
            {
                title: "Node 28",
                x: 40,
                y: 30,
                isBase: false,
            },
            {
                title: "Node 29",
                x: 810,
                y: 870,
                isBase: false,
            },
            {
                title: "Node 30",
                x: 430,
                y: 430,
                isBase: false,
            },
            {
                title: "Node 31",
                x: 600,
                y: 750,
                isBase: false,
            },
            {
                title: "Node 32",
                x: 330,
                y: 790,
                isBase: false,
            },
            {
                title: "Node 33",
                x: 540,
                y: 750,
                isBase: false,
            },
            {
                title: "Node 34",
                x: 30,
                y: 220,
                isBase: false,
            },
            {
                title: "Node 35",
                x: 790,
                y: 690,
                isBase: false,
            },
            {
                title: "Node 36",
                x: 690,
                y: 940,
                isBase: false,
            },
            {
                title: "Node 37",
                x: 400,
                y: 70,
                isBase: false,
            },
            {
                title: "Node 38",
                x: 270,
                y: 920,
                isBase: false,
            },
            {
                title: "Node 39",
                x: 910,
                y: 110,
                isBase: false,
            },
            {
                title: "Node 40",
                x: 860,
                y: 240,
                isBase: false,
            }                 
        ];
    }

    Draw() {

        toastr.options = {
            "closeButton": true,
            "newestOnTop": false,
            "showDuration": "2000",
        }
    
        var nodes = this.GetNodes();

        var canvas = document.getElementById("myCanvas");
        var canvasLeft = canvas.offsetLeft;
        var canvasTop = canvas.offsetTop;

        var ctx = canvas.getContext("2d");

        this.DrawCanvasGuideLines(ctx);

        canvas.addEventListener('click', function(event) {

           var rect = this.getBoundingClientRect();            

            const pos = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };

            nodes.forEach(node => {
                
                if (networkSimulation.IsIntersect(pos , node)) {
                    toastr.clear();
                    toastr.info("Request access from " + node.title + " to Base Station.");
                    toastr.success("Contract Created");
                    var neighborCount = 0;
                    for(var i = 0; i < nodes.length; i++)
                    {                            
                        if(node.title != nodes[i].title && Math.sqrt(Math.pow(Math.abs(node.x - nodes[i].x),2) + Math.pow(Math.abs(node.y - nodes[i].y),2)) <= 200)
                        {
                            toastr.success("Whisper sent to neighbor node: " + nodes[i].title);
                            neighborCount++;
                        }
                    }
                    if(neighborCount == 0)
                    {
                        toastr.error("There are no nodes close by.");
                    }
                }
            });

        }, false);

        // draw a line if they are close
        // for(var i = 0; i < nodes.length; i++)
        // {            
        //     for(var j = 0; j < nodes.length; j++)
        //     {                            
        //         if(Math.sqrt(Math.pow(Math.abs(nodes[i].x - nodes[j].x),2) + Math.pow(Math.abs(nodes[i].y - nodes[j].y),2)) <= 200)
        //         {
        //             ctx.beginPath();
        //             ctx.strokeStyle = "#888";
        //             ctx.setLineDash([0, 0]); 
        //             ctx.moveTo(nodes[i].x, nodes[i].y);
        //             ctx.lineTo(nodes[j].x, nodes[j].y);
        //             ctx.stroke();      

        //         }
        //     }
        // }

        this.DrawNodes(ctx, nodes);

    }

    IsIntersect(point, circle) {
        return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < 10;
    }

    DrawCanvasGuideLines(ctx) {

        for(var i = 1; i < 5; i++)
        {
            ctx.beginPath();
            ctx.strokeStyle = "#888";
            ctx.moveTo(i * 200,0);
            ctx.lineTo(i * 200,1000);
            ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
            ctx.stroke();

        }
        for(var i = 1; i < 5; i++)
        {            
            ctx.beginPath();
            ctx.strokeStyle = "#888";
            ctx.moveTo(0,i * 200);
            ctx.lineTo(1000,i * 200);
            ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
            ctx.stroke();                
        }
    }

    DrawNodes(ctx, nodes) {

        for(var i = 0; i < nodes.length; i++)
        {
            ctx.beginPath();
            if(nodes[i].isBase == true) {
                ctx.fillStyle = "blue";
            }
            else {
                ctx.fillStyle = "#888";
            }

            ctx.arc(nodes[i].x, nodes[i].y,10,0,2*Math.PI);
            ctx.fill();

            // display the coverage circle around each node
            ctx.beginPath();
            ctx.fillStyle = "rgba(255, 0, 0, 0.08)";
            ctx.arc(nodes[i].x, nodes[i].y,100,0,2*Math.PI);
            ctx.fill();
        }
       
    }

    HandleMouseMove(e) {
        // mouseX=parseInt(e.clientX-offsetX);
        // mouseY=parseInt(e.clientY-offsetY);

        // // Put your mousemove stuff here
        // var hit = false;
        // for (var i = 0; i < nodes.length; i++) {
        //     var dot = nodes[i];
        //     var dx = mouseX - dot.x;
        //     var dy = mouseY - dot.y;
        //     if (dx * dx + dy * dy < 16) {
        //         tipCanvas.style.left = (dot.x) + "px";
        //         tipCanvas.style.top = (dot.y - 40) + "px";
        //         tipCtx.clearRect(0, 0, tipCanvas.width, tipCanvas.height);
        //         tipCtx.fillText(dot.title, 5, 15);
        //         hit = true;
        //     }
        // }
        // if (!hit) { tipCanvas.style.left = "-200px"; }
    }

}

var networkSimulation = new NetworkSimulation();
networkSimulation.Draw();
