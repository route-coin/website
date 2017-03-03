class NetworkSimulation {
    
    GetNodes() {
            return [
            {
                title: "BS",
                x: 500,
                y: 500,
                isBase: true,
            },                
{ title: "Node 1", x: 692, y: 890, isBase: false, },
{ title: "Node 2", x: 19, y: 419, isBase: false, },
{ title: "Node 3", x: 858, y: 226, isBase: false, },
{ title: "Node 4", x: 699, y: 682, isBase: false, },
{ title: "Node 5", x: 774, y: 229, isBase: false, },
{ title: "Node 6", x: 707, y: 589, isBase: false, },
{ title: "Node 7", x: 442, y: 614, isBase: false, },
{ title: "Node 8", x: 495, y: 859, isBase: false, },
{ title: "Node 9", x: 467, y: 688, isBase: false, },
{ title: "Node 10", x: 549, y: 910, isBase: false, },
{ title: "Node 11", x: 394, y: 177, isBase: false, },
{ title: "Node 12", x: 52, y: 700, isBase: false, },
{ title: "Node 13", x: 726, y: 726, isBase: false, },
{ title: "Node 14", x: 210, y: 433, isBase: false, },
{ title: "Node 15", x: 469, y: 599, isBase: false, },
{ title: "Node 16", x: 376, y: 765, isBase: false, },
{ title: "Node 17", x: 630, y: 783, isBase: false, },
{ title: "Node 18", x: 411, y: 928, isBase: false, },
{ title: "Node 19", x: 810, y: 282, isBase: false, },
{ title: "Node 20", x: 680, y: 591, isBase: false, },
{ title: "Node 21", x: 891, y: 690, isBase: false, },
{ title: "Node 22", x: 477, y: 229, isBase: false, },
{ title: "Node 23", x: 41, y: 327, isBase: false, },
{ title: "Node 24", x: 45, y: 306, isBase: false, },
{ title: "Node 25", x: 118, y: 734, isBase: false, },
{ title: "Node 26", x: 562, y: 60, isBase: false, },
{ title: "Node 27", x: 567, y: 456, isBase: false, },
{ title: "Node 28", x: 210, y: 803, isBase: false, },
{ title: "Node 29", x: 169, y: 719, isBase: false, },
{ title: "Node 30", x: 453, y: 239, isBase: false, },
{ title: "Node 31", x: 781, y: 96, isBase: false, },
{ title: "Node 32", x: 533, y: 196, isBase: false, },
{ title: "Node 33", x: 654, y: 799, isBase: false, },
{ title: "Node 34", x: 941, y: 624, isBase: false, },
{ title: "Node 35", x: 372, y: 588, isBase: false, },
{ title: "Node 36", x: 227, y: 818, isBase: false, },
{ title: "Node 37", x: 251, y: 482, isBase: false, },
{ title: "Node 38", x: 830, y: 764, isBase: false, },
{ title: "Node 39", x: 915, y: 761, isBase: false, },
{ title: "Node 40", x: 817, y: 363, isBase: false, },
{ title: "Node 41", x: 746, y: 896, isBase: false, },
{ title: "Node 42", x: 259, y: 852, isBase: false, },
{ title: "Node 43", x: 894, y: 729, isBase: false, },
{ title: "Node 44", x: 320, y: 401, isBase: false, },
{ title: "Node 45", x: 245, y: 525, isBase: false, },
{ title: "Node 46", x: 868, y: 373, isBase: false, },
{ title: "Node 47", x: 405, y: 79, isBase: false, },
{ title: "Node 48", x: 951, y: 708, isBase: false, },
{ title: "Node 49", x: 621, y: 473, isBase: false, },
{ title: "Node 50", x: 225, y: 799, isBase: false, },
{ title: "Node 51", x: 859, y: 272, isBase: false, },
{ title: "Node 52", x: 608, y: 219, isBase: false, },
{ title: "Node 53", x: 339, y: 435, isBase: false, },
{ title: "Node 54", x: 877, y: 201, isBase: false, },
{ title: "Node 55", x: 769, y: 853, isBase: false, },
{ title: "Node 56", x: 666, y: 617, isBase: false, },
{ title: "Node 57", x: 428, y: 205, isBase: false, },
{ title: "Node 58", x: 115, y: 810, isBase: false, },
{ title: "Node 59", x: 355, y: 669, isBase: false, },
{ title: "Node 60", x: 178, y: 148, isBase: false, },
{ title: "Node 61", x: 184, y: 416, isBase: false, },
{ title: "Node 62", x: 616, y: 366, isBase: false, },
{ title: "Node 63", x: 707, y: 555, isBase: false, },
{ title: "Node 64", x: 542, y: 171, isBase: false, },
{ title: "Node 65", x: 975, y: 421, isBase: false, },
{ title: "Node 66", x: 310, y: 934, isBase: false, },
{ title: "Node 67", x: 543, y: 995, isBase: false, },
{ title: "Node 68", x: 271, y: 271, isBase: false, },
{ title: "Node 69", x: 337, y: 334, isBase: false, },
{ title: "Node 70", x: 878, y: 484, isBase: false, },
{ title: "Node 71", x: 100, y: 551, isBase: false, },
{ title: "Node 72", x: 471, y: 766, isBase: false, },
{ title: "Node 73", x: 814, y: 230, isBase: false, },
{ title: "Node 74", x: 827, y: 798, isBase: false, },
{ title: "Node 75", x: 713, y: 298, isBase: false, },
{ title: "Node 76", x: 755, y: 308, isBase: false, },
{ title: "Node 77", x: 743, y: 206, isBase: false, },
{ title: "Node 78", x: 707, y: 694, isBase: false, },
{ title: "Node 79", x: 868, y: 509, isBase: false, },
{ title: "Node 80", x: 261, y: 424, isBase: false, },
{ title: "Node 81", x: 57, y: 294, isBase: false, },
{ title: "Node 82", x: 170, y: 386, isBase: false, },
{ title: "Node 83", x: 797, y: 570, isBase: false, },
{ title: "Node 84", x: 497, y: 665, isBase: false, },
{ title: "Node 85", x: 308, y: 551, isBase: false, },
{ title: "Node 86", x: 5, y: 568, isBase: false, },
{ title: "Node 87", x: 535, y: 826, isBase: false, },
{ title: "Node 88", x: 176, y: 182, isBase: false, },
{ title: "Node 89", x: 738, y: 292, isBase: false, },
{ title: "Node 90", x: 228, y: 448, isBase: false, },
{ title: "Node 91", x: 633, y: 397, isBase: false, },
{ title: "Node 92", x: 749, y: 510, isBase: false, },
{ title: "Node 93", x: 981, y: 490, isBase: false, },
{ title: "Node 94", x: 31, y: 415, isBase: false, },
{ title: "Node 95", x: 198, y: 118, isBase: false, },
{ title: "Node 96", x: 184, y: 621, isBase: false, },
{ title: "Node 97", x: 861, y: 438, isBase: false, },
{ title: "Node 98", x: 171, y: 846, isBase: false, },
{ title: "Node 99", x: 325, y: 145, isBase: false, },
{ title: "Node 100", x: 137, y: 394, isBase: false, }
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
                    if(node.isBase == true)
                    {
                        toastr.error("This is Sink Node!");
                        return;
                    }

                    if(Math.sqrt(Math.pow(Math.abs(node.x - nodes[0].x),2) + Math.pow(Math.abs(node.y - nodes[0].y),2)) <= 200)
                    {
                        toastr.info("Node is close to Sink Node. No need for a Contract.");
                        return;
                    }

                    toastr.info("Request access from " + node.title + " to Sink Node.");
                    toastr.success("Contract Created");
                    var neighborCount = 0;
                    for(var i = 0; i < nodes.length; i++)
                    {                            
                        if(node.title != nodes[i].title && Math.sqrt(Math.pow(Math.abs(node.x - nodes[i].x),2) + Math.pow(Math.abs(node.y - nodes[i].y),2)) <= 50)
                        {
                            networkSimulation.AnimateDrawLine(ctx, 0, node.x, node.y, nodes[i].x, nodes[i].y);

                            // Draw arrow heads
                            // var endRadians = Math.atan((nodes[i].y - node.y) / (nodes[i].x - node.x));
                            // endRadians += ((nodes[i].x > node.x) ? 90 : -90) * Math.PI/180;
                            // networkSimulation.DrawArrowHead(ctx, nodes[i].x, nodes[i].y, endRadians);                            

                            toastr.success("Whisper sent to neighbor node: " + nodes[i].title);
                            neighborCount++;
                        }
                    }
                    if(neighborCount == 0)
                    {
                        toastr.error("There are no nodes close by.");
                        toastr.success("Contract aborted");
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

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 254, 196, 0.58)";
        ctx.arc(500, 500, 500,0,2*Math.PI);
        ctx.fill();


        for(var i = 0; i < nodes.length; i++)
        {
            ctx.beginPath();
            if(nodes[i].isBase == true) {

                ctx.fillStyle = "blue";
                ctx.arc(nodes[i].x, nodes[i].y,20,0,2*Math.PI);
                ctx.fill();

                // display the coverage circle around each node
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 0, 0, 0.08)";
                ctx.arc(nodes[i].x, nodes[i].y,200,0,2*Math.PI);
                ctx.fill();

                ctx.fillStyle = "Red";
                ctx.font="20px Georgia";
                ctx.fillText("Sink Node",nodes[i].x-40, nodes[i].y+6);

                
            }
            else {

                ctx.fillStyle = "#888";
                ctx.arc(nodes[i].x, nodes[i].y,10,0,2*Math.PI);
                ctx.fill();

                // display the coverage circle around each node
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 0, 0, 0.08)";
                ctx.arc(nodes[i].x, nodes[i].y,50,0,2*Math.PI);
                ctx.fill();

            }


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

    AnimateDrawLine(ctx, ratio, x1, y1, x2, y2) {
         ratio = ratio || 0;
        networkSimulation.DrawLine(ctx, x1, y1, x2, y2, ratio);
        if(ratio<1) {
            requestAnimationFrame(function() {
                networkSimulation.AnimateDrawLine(ctx, ratio + 0.05, x1, y1, x2, y2);
            });
        }
    }

    DrawLine(ctx, x1, y1, x2, y2, ratio) {
        //ctx.fillRect(x1,y1,x2,y2);
        ctx.beginPath();
        ctx.strokeStyle = "#888";
        ctx.setLineDash([0, 0]);         
        ctx.moveTo(x1,y1);
        x2 = x1 + ratio * (x2-x1);
        y2 = y1 + ratio * (y2-y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        // And if we intend to start new things after
        // this, and this is part of an outline, 
        // we probably also want a ctx.closePath()
    }

    // DrawArrowHead (ctx,x,y,radians) {
    //     ctx.save();
    //     ctx.beginPath();
    //     ctx.translate(x,y);
    //     ctx.rotate(radians);
    //     ctx.moveTo(0,0);
    //     ctx.lineTo(5,20);
    //     ctx.lineTo(-5,20);
    //     ctx.closePath();
    //     ctx.restore();
    //     ctx.fillStyle = "black";
    //     ctx.fill();
    // }    


}

var networkSimulation = new NetworkSimulation();
networkSimulation.Draw();
