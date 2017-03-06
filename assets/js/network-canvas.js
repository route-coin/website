class NetworkSimulation {
    
    GetRandomNodes() {
return [
            {
                title: "BS",
                x: 500,
                y: 500,
                isBase: true,
            },                
{ title: "Node 1", x: 619, y: 56, isBase: false, },
{ title: "Node 2", x: 604, y: 773, isBase: false, },
{ title: "Node 3", x: 358, y: 616, isBase: false, },
{ title: "Node 4", x: 167, y: 130, isBase: false, },
{ title: "Node 5", x: 816, y: 183, isBase: false, },
{ title: "Node 6", x: 632, y: 342, isBase: false, },
{ title: "Node 7", x: 488, y: 25, isBase: false, },
{ title: "Node 8", x: 491, y: 748, isBase: false, },
{ title: "Node 9", x: 258, y: 75, isBase: false, },
{ title: "Node 10", x: 559, y: 100, isBase: false, },
{ title: "Node 11", x: 592, y: 600, isBase: false, },
{ title: "Node 12", x: 898, y: 787, isBase: false, },
{ title: "Node 13", x: 414, y: 768, isBase: false, },
{ title: "Node 14", x: 343, y: 591, isBase: false, },
{ title: "Node 15", x: 818, y: 850, isBase: false, },
{ title: "Node 16", x: 673, y: 598, isBase: false, },
{ title: "Node 17", x: 454, y: 695, isBase: false, },
{ title: "Node 18", x: 488, y: 553, isBase: false, },
{ title: "Node 19", x: 861, y: 259, isBase: false, },
{ title: "Node 20", x: 302, y: 750, isBase: false, },
{ title: "Node 21", x: 868, y: 326, isBase: false, },
{ title: "Node 22", x: 523, y: 973, isBase: false, },
{ title: "Node 23", x: 919, y: 383, isBase: false, },
{ title: "Node 24", x: 44, y: 642, isBase: false, },
{ title: "Node 25", x: 882, y: 678, isBase: false, },
{ title: "Node 26", x: 99, y: 688, isBase: false, },
{ title: "Node 27", x: 542, y: 540, isBase: false, },
{ title: "Node 28", x: 560, y: 325, isBase: false, },
{ title: "Node 29", x: 331, y: 667, isBase: false, },
{ title: "Node 30", x: 73, y: 512, isBase: false, },
{ title: "Node 31", x: 887, y: 636, isBase: false, },
{ title: "Node 32", x: 545, y: 367, isBase: false, },
{ title: "Node 33", x: 367, y: 447, isBase: false, },
{ title: "Node 34", x: 666, y: 906, isBase: false, },
{ title: "Node 35", x: 507, y: 659, isBase: false, },
{ title: "Node 36", x: 629, y: 96, isBase: false, },
{ title: "Node 37", x: 830, y: 550, isBase: false, },
{ title: "Node 38", x: 688, y: 399, isBase: false, },
{ title: "Node 39", x: 319, y: 55, isBase: false, },
{ title: "Node 40", x: 127, y: 236, isBase: false, },
{ title: "Node 41", x: 277, y: 218, isBase: false, },
{ title: "Node 42", x: 602, y: 830, isBase: false, },
{ title: "Node 43", x: 439, y: 696, isBase: false, },
{ title: "Node 44", x: 177, y: 269, isBase: false, },
{ title: "Node 45", x: 244, y: 298, isBase: false, },
{ title: "Node 46", x: 124, y: 801, isBase: false, },
{ title: "Node 47", x: 492, y: 627, isBase: false, },
{ title: "Node 48", x: 415, y: 447, isBase: false, },
{ title: "Node 49", x: 651, y: 436, isBase: false, },
{ title: "Node 50", x: 868, y: 528, isBase: false, },
{ title: "Node 51", x: 413, y: 939, isBase: false, },
{ title: "Node 52", x: 515, y: 147, isBase: false, },
{ title: "Node 53", x: 785, y: 380, isBase: false, },
{ title: "Node 54", x: 264, y: 608, isBase: false, },
{ title: "Node 55", x: 563, y: 172, isBase: false, },
{ title: "Node 56", x: 569, y: 237, isBase: false, },
{ title: "Node 57", x: 477, y: 974, isBase: false, },
{ title: "Node 58", x: 964, y: 682, isBase: false, },
{ title: "Node 59", x: 197, y: 858, isBase: false, },
{ title: "Node 60", x: 180, y: 285, isBase: false, },
{ title: "Node 61", x: 845, y: 815, isBase: false, },
{ title: "Node 62", x: 587, y: 166, isBase: false, },
{ title: "Node 63", x: 528, y: 927, isBase: false, },
{ title: "Node 64", x: 849, y: 257, isBase: false, },
{ title: "Node 65", x: 214, y: 644, isBase: false, },
{ title: "Node 66", x: 103, y: 603, isBase: false, },
{ title: "Node 67", x: 639, y: 711, isBase: false, },
{ title: "Node 68", x: 275, y: 200, isBase: false, },
{ title: "Node 69", x: 663, y: 615, isBase: false, },
{ title: "Node 70", x: 335, y: 562, isBase: false, },
{ title: "Node 71", x: 131, y: 509, isBase: false, },
{ title: "Node 72", x: 691, y: 390, isBase: false, },
{ title: "Node 73", x: 6, y: 469, isBase: false, },
{ title: "Node 74", x: 485, y: 746, isBase: false, },
{ title: "Node 75", x: 509, y: 629, isBase: false, },
{ title: "Node 76", x: 446, y: 241, isBase: false, },
{ title: "Node 77", x: 601, y: 933, isBase: false, },
{ title: "Node 78", x: 492, y: 150, isBase: false, },
{ title: "Node 79", x: 388, y: 919, isBase: false, },
{ title: "Node 80", x: 194, y: 565, isBase: false, },
{ title: "Node 81", x: 326, y: 754, isBase: false, },
{ title: "Node 82", x: 942, y: 712, isBase: false, },
{ title: "Node 83", x: 299, y: 228, isBase: false, },
{ title: "Node 84", x: 180, y: 580, isBase: false, },
{ title: "Node 85", x: 495, y: 773, isBase: false, },
{ title: "Node 86", x: 500, y: 996, isBase: false, },
{ title: "Node 87", x: 713, y: 171, isBase: false, },
{ title: "Node 88", x: 246, y: 605, isBase: false, },
{ title: "Node 89", x: 973, y: 501, isBase: false, },
{ title: "Node 90", x: 706, y: 924, isBase: false, },
{ title: "Node 91", x: 352, y: 881, isBase: false, },
{ title: "Node 92", x: 95, y: 380, isBase: false, },
{ title: "Node 93", x: 719, y: 452, isBase: false, },
{ title: "Node 94", x: 869, y: 675, isBase: false, },
{ title: "Node 95", x: 319, y: 397, isBase: false, },
{ title: "Node 96", x: 97, y: 362, isBase: false, },
{ title: "Node 97", x: 506, y: 662, isBase: false, },
{ title: "Node 98", x: 539, y: 821, isBase: false, },
{ title: "Node 99", x: 388, y: 140, isBase: false, },
{ title: "Node 100", x: 856, y: 465, isBase: false, },
{ title: "Node 101", x: 91, y: 560, isBase: false, },
{ title: "Node 102", x: 425, y: 61, isBase: false, },
{ title: "Node 103", x: 134, y: 582, isBase: false, },
{ title: "Node 104", x: 352, y: 277, isBase: false, },
{ title: "Node 105", x: 848, y: 656, isBase: false, },
{ title: "Node 106", x: 546, y: 193, isBase: false, },
{ title: "Node 107", x: 164, y: 553, isBase: false, },
{ title: "Node 108", x: 330, y: 89, isBase: false, },
{ title: "Node 109", x: 603, y: 777, isBase: false, },
{ title: "Node 110", x: 213, y: 116, isBase: false, },
{ title: "Node 111", x: 310, y: 169, isBase: false, },
{ title: "Node 112", x: 88, y: 227, isBase: false, },
{ title: "Node 113", x: 531, y: 605, isBase: false, },
{ title: "Node 114", x: 346, y: 961, isBase: false, },
{ title: "Node 115", x: 862, y: 291, isBase: false, },
{ title: "Node 116", x: 543, y: 861, isBase: false, },
{ title: "Node 117", x: 83, y: 503, isBase: false, },
{ title: "Node 118", x: 127, y: 385, isBase: false, },
{ title: "Node 119", x: 928, y: 323, isBase: false, },
{ title: "Node 120", x: 439, y: 992, isBase: false, },
{ title: "Node 121", x: 732, y: 128, isBase: false, },
{ title: "Node 122", x: 392, y: 335, isBase: false, },
{ title: "Node 123", x: 856, y: 323, isBase: false, },
{ title: "Node 124", x: 268, y: 776, isBase: false, },
{ title: "Node 125", x: 712, y: 853, isBase: false, },
{ title: "Node 126", x: 662, y: 733, isBase: false, },
{ title: "Node 127", x: 667, y: 367, isBase: false, },
{ title: "Node 128", x: 278, y: 826, isBase: false, },
{ title: "Node 129", x: 188, y: 589, isBase: false, },
{ title: "Node 130", x: 970, y: 453, isBase: false, },
{ title: "Node 131", x: 827, y: 468, isBase: false, },
{ title: "Node 132", x: 456, y: 973, isBase: false, },
{ title: "Node 133", x: 449, y: 241, isBase: false, },
{ title: "Node 134", x: 780, y: 466, isBase: false, },
{ title: "Node 135", x: 245, y: 88, isBase: false, },
{ title: "Node 136", x: 556, y: 776, isBase: false, },
{ title: "Node 137", x: 343, y: 710, isBase: false, },
{ title: "Node 138", x: 828, y: 568, isBase: false, },
{ title: "Node 139", x: 324, y: 120, isBase: false, },
{ title: "Node 140", x: 381, y: 299, isBase: false, },
{ title: "Node 141", x: 321, y: 697, isBase: false, },
{ title: "Node 142", x: 177, y: 368, isBase: false, },
{ title: "Node 143", x: 747, y: 86, isBase: false, },
{ title: "Node 144", x: 815, y: 170, isBase: false, },
{ title: "Node 145", x: 180, y: 607, isBase: false, },
{ title: "Node 146", x: 288, y: 887, isBase: false, },
{ title: "Node 147", x: 492, y: 617, isBase: false, },
{ title: "Node 148", x: 563, y: 960, isBase: false, },
{ title: "Node 149", x: 948, y: 316, isBase: false, },
{ title: "Node 150", x: 307, y: 135, isBase: false, }
        ];
    }

    GetFixNodes() {
            return [
{ title: "BS", x: 120 + 380, y: 120 + 380, isBase: true, },

{ title: "Node 1", x: 50 + 380, y: 50 + 380, isBase: false, },
{ title: "Node 2", x: 85 + 380, y: 50 + 380, isBase: false, },
{ title: "Node 3", x: 120 + 380, y: 50 + 380, isBase: false, },
{ title: "Node 4", x: 155 + 380, y: 50 + 380, isBase: false, },
{ title: "Node 5", x: 190 + 380, y: 50 + 380, isBase: false, },

{ title: "Node 1", x: 50 + 380, y: 85 + 380, isBase: false, },
{ title: "Node 2", x: 85 + 380, y: 85 + 380, isBase: false, },
{ title: "Node 3", x: 120 + 380, y: 85 + 380, isBase: false, },
{ title: "Node 4", x: 155 + 380, y: 85 + 380, isBase: false, },
{ title: "Node 5", x: 190 + 380, y: 85 + 380, isBase: false, },

{ title: "Node 1", x: 50 + 380, y: 120 + 380, isBase: false, },
{ title: "Node 2", x: 85 + 380, y: 120 + 380, isBase: false, },

{ title: "Node 4", x: 155 + 380, y: 120 + 380, isBase: false, },
{ title: "Node 5", x: 190 + 380, y: 120 + 380, isBase: false, },

{ title: "Node 1", x: 50 + 380, y: 155 + 380, isBase: false, },
{ title: "Node 2", x: 85 + 380, y: 155 + 380, isBase: false, },
{ title: "Node 3", x: 120 + 380, y: 155 + 380, isBase: false, },
{ title: "Node 4", x: 155 + 380, y: 155 + 380, isBase: false, },
{ title: "Node 5", x: 190 + 380, y: 155 + 380, isBase: false, },

{ title: "Node 1", x: 50 + 380, y: 190 + 380, isBase: false, },
{ title: "Node 2", x: 85 + 380, y: 190 + 380, isBase: false, },
{ title: "Node 3", x: 120 + 380, y: 190 + 380, isBase: false, },
{ title: "Node 4", x: 155 + 380, y: 190 + 380, isBase: false, },
{ title: "Node 5", x: 190 + 380, y: 190 + 380, isBase: false, },

        ];
    }

    Draw() {

        toastr.options = {
            "closeButton": true,
            "newestOnTop": false,
            "showDuration": "2000",
        }
    
        var randomNodes = this.GetRandomNodes();

        var canvas = document.getElementById("myRandomCanvas");
        var canvasLeft = canvas.offsetLeft;
        var canvasTop = canvas.offsetTop;

        var randomCtx = canvas.getContext("2d");

        this.DrawCanvasGuideLines(randomCtx);

        this.DrawNodes(randomCtx, randomNodes,0,200, true);

        canvas.addEventListener('click', function(event) {

           var rect = this.getBoundingClientRect();            

            const pos = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };

            randomNodes.forEach(node => {
                
                if (networkSimulation.IsIntersect(pos , node)) {
                    toastr.clear();
                    if(node.isBase == true)
                    {
                        toastr.error("This is Sink Node!");
                        return;
                    }

                    if(Math.sqrt(Math.pow(Math.abs(node.x - randomNodes[0].x),2) + Math.pow(Math.abs(node.y - randomNodes[0].y),2)) <= 200)
                    {
                        toastr.info("Node is close to Sink Node. No need for a Contract.");
                        return;
                    }

                    toastr.info("Request access from " + node.title + " to Sink Node.");
                    toastr.success("Contract Created");
                    var neighborCount = 0;
                    for(var i = 0; i < randomNodes.length; i++)
                    {                            
                        if(node.title != randomNodes[i].title && Math.sqrt(Math.pow(Math.abs(node.x - randomNodes[i].x),2) + Math.pow(Math.abs(node.y - randomNodes[i].y),2)) <= 50)
                        {
                            networkSimulation.AnimateDrawLine(randomCtx, 0, node.x, node.y, randomNodes[i].x, randomNodes[i].y);

                            // Draw arrow heads
                            // var endRadians = Math.atan((randomNodes[i].y - node.y) / (randomNodes[i].x - node.x));
                            // endRadians += ((randomNodes[i].x > node.x) ? 90 : -90) * Math.PI/180;
                            // networkSimulation.DrawArrowHead(ctx, randomNodes[i].x, randomNodes[i].y, endRadians);                            

                            toastr.success("Whisper sent to neighbor node: " + randomNodes[i].title);
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

        var fixNodes = this.GetFixNodes();

        var fixCanvas = document.getElementById("myFixCanvas");
        var canvasLeft = fixCanvas.offsetLeft;
        var canvasTop = fixCanvas.offsetTop;

        var ctx = fixCanvas.getContext("2d");

        this.DrawCanvasGuideLines(ctx);

        this.DrawNodes(ctx, fixNodes, 0, 50, false);

        fixCanvas.addEventListener('click', function(event) {

           var rect = this.getBoundingClientRect();            

            const pos = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };

            fixNodes.forEach(node => {
                
                if (networkSimulation.IsIntersect(pos , node)) {
                    toastr.clear();
                    if(node.isBase == true)
                    {
                        toastr.error("This is Sink Node!");
                        return;
                    }

                    if(Math.sqrt(Math.pow(Math.abs(node.x - fixNodes[0].x),2) + Math.pow(Math.abs(node.y - fixNodes[0].y),2)) <= 50)
                    {
                        toastr.info("Node is close to Sink Node. No need for a Contract.");
                        return;
                    }

                    toastr.info("Request access from " + node.title + " to Sink Node.");
                    toastr.success("Contract Created");
                    var neighborCount = 0;
                    for(var i = 0; i < fixNodes.length; i++)
                    {                            
                        if(node.title != fixNodes[i].title && Math.sqrt(Math.pow(Math.abs(node.x - fixNodes[i].x),2) + Math.pow(Math.abs(node.y - fixNodes[i].y),2)) <= 50)
                        {
                            networkSimulation.AnimateDrawLine(ctx, 0, node.x, node.y, fixNodes[i].x, fixNodes[i].y);

                            // Draw arrow heads
                            // var endRadians = Math.atan((fixNodes[i].y - node.y) / (fixNodes[i].x - node.x));
                            // endRadians += ((fixNodes[i].x > node.x) ? 90 : -90) * Math.PI/180;
                            // networkSimulation.DrawArrowHead(ctx, fixNodes[i].x, fixNodes[i].y, endRadians);                            

                            toastr.success("Whisper sent to neighbor node: " + fixNodes[i].title);
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

    DrawNodes(ctx, nodes, offset, bsCoverage, showSinkNode) {

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 254, 196, 0.58)";
        ctx.arc(500, 500, 500,0,2*Math.PI);
        ctx.fill();


        for(var i = 0; i < nodes.length; i++)
        {
            ctx.beginPath();
            if(nodes[i].isBase == true) {

                ctx.fillStyle = "blue";
                ctx.arc(nodes[i].x + offset, nodes[i].y + offset,10,0,2*Math.PI);
                ctx.fill();

                // display the coverage circle around each node
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 0, 0, 0.08)";
                ctx.arc(nodes[i].x+ offset, nodes[i].y+ offset, bsCoverage,0,2*Math.PI);
                ctx.fill();

                if(showSinkNode)
                {
                    ctx.fillStyle = "Red";
                    ctx.font="20px Georgia";
                    ctx.fillText("Sink Node",nodes[i].x-40, nodes[i].y-20);                    
                }
                
            }
            else {

                ctx.fillStyle = "#888";
                ctx.arc(nodes[i].x+ offset, nodes[i].y+ offset,5,0,2*Math.PI);
                ctx.fill();

                // display the coverage circle around each node
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 0, 0, 0.08)";
                ctx.arc(nodes[i].x+ offset, nodes[i].y+ offset,50,0,2*Math.PI);
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
