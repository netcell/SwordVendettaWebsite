(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 312,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap1_1.png", id:"Bitmap1_1"},
		{src:"images/Bitmap10.png", id:"Bitmap10"},
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap12.png", id:"Bitmap12"},
		{src:"images/Bitmap13.png", id:"Bitmap13"},
		{src:"images/Bitmap14.png", id:"Bitmap14"},
		{src:"images/Bitmap15.png", id:"Bitmap15"},
		{src:"images/Bitmap16.png", id:"Bitmap16"},
		{src:"images/Bitmap17.png", id:"Bitmap17"},
		{src:"images/Bitmap18.png", id:"Bitmap18"},
		{src:"images/Bitmap19.png", id:"Bitmap19"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap2_1.png", id:"Bitmap2_1"},
		{src:"images/Bitmap20.png", id:"Bitmap20"},
		{src:"images/Bitmap21.png", id:"Bitmap21"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/Bitmap9.png", id:"Bitmap9"},
		{src:"images/cloud.png", id:"cloud"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1126,300);


(lib.Bitmap1_1 = function() {
	this.initialize(img.Bitmap1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,37);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,148);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,95);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,123);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,190);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,313);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,209);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,197);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,86);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,94);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,37);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1126,311);


(lib.Bitmap2_1 = function() {
	this.initialize(img.Bitmap2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,35);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,35);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,355);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,854,302);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1126,287);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,199);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,335);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,149);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,119);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,121);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,100);


(lib.Tween30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-64,-47.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-64,-47.1,128,94);
p.frameBounds = [rect];


(lib.Tween29 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(-34.5,-18.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-18.4,69,37);
p.frameBounds = [rect];


(lib.Tween28 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap20();
	this.instance.setTransform(-36.8,-17.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-36.8,-17.5,74,35);
p.frameBounds = [rect];


(lib.Tween27 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(0.4,-43);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0.4,-43,24,86);
p.frameBounds = [rect];


(lib.Tween25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-158.9,-98.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-158.9,-98.5,318,197);
p.frameBounds = [rect];


(lib.Tween24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-167.3,-94.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-167.3,-94.7,335,190);
p.frameBounds = [rect];


(lib.Tween21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-108,-156.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-108,-156.5,281,313);
p.frameBounds = [rect];


(lib.Tween20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-111.4,-104.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-111.4,-104.5,223,209);
p.frameBounds = [rect];


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.setTransform(-91.1,-219.1,1,1,19);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-206.7,-219.1,413.4,438.2);
p.frameBounds = [rect];


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-563,-155.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-563,-155.5,1126,311);
p.frameBounds = [rect];


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-563,-150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-563,-150,1126,300);
p.frameBounds = [rect];


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-563,-143.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-563,-143.5,1126,287);
p.frameBounds = [rect];


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-427,-151);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-427,-151,854,302);
p.frameBounds = [rect];


(lib.cloud_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,421,100);
p.frameBounds = [rect];


(lib.cloth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-235,-8);

	this.instance_1 = new lib.Bitmap8();
	this.instance_1.setTransform(-250,-5);

	this.instance_2 = new lib.Bitmap9();
	this.instance_2.setTransform(-226,-16);

	this.instance_3 = new lib.Bitmap10();
	this.instance_3.setTransform(-188,-25);

	this.instance_4 = new lib.Bitmap11();
	this.instance_4.setTransform(-226,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-8,237,149);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-250,-5,252,119), rect, rect, rect=new cjs.Rectangle(-226,-16,229,121), rect, rect, rect=new cjs.Rectangle(-188,-25,188,148), rect, rect, rect=new cjs.Rectangle(-226,-21,228,95), rect, rect];


(lib.Tween1 = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.cloth();
	this.instance.setTransform(-56.1,-133.2,0.8,0.8,0,0,0,-116.5,66.5);

	// ninja.png
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(-50.3,-225);

	// Layer 3
	this.instance_2 = new lib.Bitmap12();
	this.instance_2.setTransform(-28.1,103);

	// Layer 2 copy
	this.instance_3 = new lib.Bitmap5();
	this.instance_3.setTransform(-170.1,26.4);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-170.1,-225,335,451);
p.frameBounds = [rect];


// stage content:
(lib.menu = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var numPieces = 10;
		
		createjs.Ticker.addEventListener( "tick" , update);
		var self = this;
		function update (event){
			for (var i = 0; i < numPieces; i++)
			{
				var c = self["cloud" + (i + 1)];
				if (c) {
					c.x -= 1.5;
					if (c.x < -250){
						c.x += 1300;
					}
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(82));

	// blood
	this.instance = new lib.Tween28("synched",0);
	this.instance.setTransform(297.2,255.6,0.998,0.998);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).to({alpha:1,mode:"independent"},5).wait(1));

	// blood copy
	this.instance_1 = new lib.Bitmap2_1();
	this.instance_1.setTransform(263.4,236.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81).to({_off:false},0).wait(1));

	// last
	this.instance_2 = new lib.Tween29("synched",0);
	this.instance_2.setTransform(227.7,247.3,0.998,0.998);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({alpha:1},5).to({mode:"independent"},2).wait(1));

	// last copy
	this.instance_3 = new lib.Bitmap1_1();
	this.instance_3.setTransform(196.2,227.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81).to({_off:false},0).wait(1));

	// dojo
	this.instance_4 = new lib.Tween30("synched",0);
	this.instance_4.setTransform(158,228,0.998,0.998);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).to({alpha:1},5).to({startPosition:0},4).wait(1));

	// sword copy
	this.instance_5 = new lib.Tween27("synched",0);
	this.instance_5.setTransform(338.7,68.7,0.998,0.998,-11);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).to({rotation:0,x:327.7,y:172.8,alpha:1},4).to({startPosition:0},10).wait(1));

	// sword
	this.instance_6 = new lib.Tween27("synched",0);
	this.instance_6.setTransform(317.4,70.4,0.998,0.998,-10);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({_off:false},0).to({rotation:0,x:313.7,y:170.5,alpha:1},4).to({startPosition:0},3).wait(11));

	// title_main
	this.instance_7 = new lib.Tween24("synched",0);
	this.instance_7.setTransform(208.5,120.8,9.98,9.98);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).wait(1).to({regX:0.2,regY:0.3,scaleX:9.96,scaleY:9.96,x:210.5,y:123.8},0).wait(1).to({scaleX:9.89,scaleY:9.89},0).wait(1).to({scaleX:9.76,scaleY:9.76},0).wait(1).to({scaleX:9.57,scaleY:9.57,x:210.4,y:123.7},0).wait(1).to({scaleX:9.31,scaleY:9.31,y:123.6},0).wait(1).to({scaleX:8.96,scaleY:8.96,x:210.3,y:123.5},0).wait(1).to({scaleX:8.49,scaleY:8.49,x:210.2,y:123.4},0).wait(1).to({scaleX:7.88,scaleY:7.88,x:210.1,y:123.2},0).wait(1).to({scaleX:7.07,scaleY:7.07,x:209.9,y:122.9},0).wait(1).to({scaleX:5.95,scaleY:5.95,x:209.7,y:122.6},0).wait(1).to({scaleX:4.3,scaleY:4.3,x:209.4,y:122.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:208.5,y:120.8},0).wait(21));

	// title_stroke
	this.instance_8 = new lib.Tween25("synched",0);
	this.instance_8.setTransform(221.1,118.7,0.998,0.998);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({_off:false},0).to({x:219.1,y:120.7,alpha:1},8).wait(11));

	// Layer 3 copy
	this.instance_9 = new lib.Tween12("synched",0);
	this.instance_9.setTransform(147.8,134.5,0.05,0.05,67);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38).to({_off:false},0).to({scaleX:1,scaleY:1},5).to({scaleX:0.05,scaleY:0.05},5).to({_off:true},1).wait(33));

	// Layer 3
	this.instance_10 = new lib.Tween12("synched",0);
	this.instance_10.setTransform(147.8,134.5,0.05,0.05);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35).to({_off:false},0).to({scaleX:1,scaleY:1},5).to({scaleX:0.05,scaleY:0.05},5).to({_off:true},1).wait(36));

	// splash2
	this.instance_11 = new lib.Tween20("synched",0);
	this.instance_11.setTransform(245.8,200.2,0.05,0.05);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25).to({_off:false},0).to({scaleX:2,scaleY:2},5).to({scaleX:1,scaleY:1},5).wait(47));

	// splash1
	this.instance_12 = new lib.Tween21("synched",0);
	this.instance_12.setTransform(136.2,171.3,0.05,0.05);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(22).to({_off:false},0).to({scaleX:2,scaleY:2,y:171.4},5).to({scaleX:1,scaleY:1,y:171.3},5).wait(50));

	// Layer 6
	this.mc = new lib.Tween1();
	this.mc.setTransform(907.8,173.3,0.624,0.624);

	this.timeline.addTween(cjs.Tween.get(this.mc).to({x:495.8},15).wait(67));

	// Layer 5
	this.instance_13 = new lib.Tween4("synched",0);
	this.instance_13.setTransform(104.4,163.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:448.4},15).wait(67));

	// Layer 4
	this.instance_14 = new lib.Tween6("synched",0);
	this.instance_14.setTransform(237,170.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:343.1,y:169.7},15).wait(67));

	// Layer 8
	this.cloud9 = new lib.cloud_1();
	this.cloud9.setTransform(-125.7,110.1,1,1,0,0,0,210.5,50);

	this.cloud8 = new lib.cloud_1();
	this.cloud8.setTransform(-165.7,55.8,1,1,0,0,0,210.5,50);

	this.cloud5 = new lib.cloud_1();
	this.cloud5.setTransform(358.4,55.8,1,1,0,0,0,210.5,50);

	this.cloud7 = new lib.cloud_1();
	this.cloud7.setTransform(130.3,82.9,1,1,0,0,0,210.5,50);

	this.cloud4 = new lib.cloud_1();
	this.cloud4.setTransform(576.4,82.9,1,1,0,0,0,210.5,50);

	this.cloud3 = new lib.cloud_1();
	this.cloud3.setTransform(756.5,137.2,1,1,0,0,0,210.5,50);

	this.cloud2 = new lib.cloud_1();
	this.cloud2.setTransform(804.5,55.8,1,1,0,0,0,210.5,50);

	this.cloud1 = new lib.cloud_1();
	this.cloud1.setTransform(1012.5,110.1,1,1,0,0,0,210.5,50);

	this.cloud6 = new lib.cloud_1();
	this.cloud6.setTransform(320.4,110.1,1,1,0,0,0,210.5,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cloud6},{t:this.cloud1},{t:this.cloud2},{t:this.cloud3},{t:this.cloud4},{t:this.cloud7},{t:this.cloud5},{t:this.cloud8},{t:this.cloud9}]}).wait(82));

	// Layer 2
	this.instance_15 = new lib.Tween8("synched",0);
	this.instance_15.setTransform(237.9,160.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:464.4,y:159.6},15).wait(67));

	// Layer 1
	this.instance_16 = new lib.Tween10("synched",0);
	this.instance_16.setTransform(239,154.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:561.3},15).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(23.8,155.3,1599.3,315);
p.frameBounds = [rect, rect=new cjs.Rectangle(23.8,155.3,1599.3,314.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(23.8,155.3,1599.3,315), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(23.8,136.8,1599.3,381.1), new cjs.Rectangle(23.8,75.9,1599.3,502.9), new cjs.Rectangle(23.8,14.9,1599.3,624.8), new cjs.Rectangle(23.8,46.1,1599.3,562.3), new cjs.Rectangle(23.8,77.3,1599.3,499.8), new cjs.Rectangle(23.8,108.6,1599.3,456.2), new cjs.Rectangle(23.8,139.8,1599.3,404.2), new cjs.Rectangle(23.8,155.3,1599.3,367.9), new cjs.Rectangle(23.8,155.3,1599.3,347), rect=new cjs.Rectangle(23.8,155.3,1599.3,328.2), rect, rect, rect, new cjs.Rectangle(23.8,154.6,1599.3,328.8), new cjs.Rectangle(23.8,113,1599.3,370.4), new cjs.Rectangle(23.8,71.4,1599.3,438.2), new cjs.Rectangle(23.8,113,1599.3,370.4), new cjs.Rectangle(23.8,153.4,1599.3,330), new cjs.Rectangle(23.8,121.1,1599.3,362.3), new cjs.Rectangle(23.8,153.4,1599.3,330), rect=new cjs.Rectangle(23.8,155.3,1599.3,328.2), rect, rect, rect, new cjs.Rectangle(-1061.1,-668.7,3343.2,1896.1), new cjs.Rectangle(-1057.4,-666.6,3335.8,1892), new cjs.Rectangle(-1045.7,-659.9,3312.2,1878.6), new cjs.Rectangle(-1024.8,-648.1,3270.3,1854.8), new cjs.Rectangle(-993.2,-630.2,3207.1,1819), new cjs.Rectangle(-949,-605.2,3118.8,1768.9), new cjs.Rectangle(-889.9,-571.7,3000.3,1701.7), new cjs.Rectangle(-811.9,-527.6,2844.1,1613.1), new cjs.Rectangle(-709.6,-469.6,2639.3,1496.9), new cjs.Rectangle(-573.8,-392.7,2367.4,1342.7), new cjs.Rectangle(-387.5,-287.2,2010.5,1131.1), new cjs.Rectangle(-110.2,-130.2,1733.3,816.3), rect=new cjs.Rectangle(23.8,155.3,1599.3,328.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{});

(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 680,
	height: 170,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1p.png", id:"Bitmap1"},
		{src:"images/head.png", id:"head"},
		{src:"images/Layer1.png", id:"Layer1"},
		{src:"images/Layer2.png", id:"Layer2"},
		{src:"images/Layer3.png", id:"Layer3"},
		{src:"images/Layer4.png", id:"Layer4"}
	]
};



// symbols:

(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,688,1054);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,315);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,74);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,93);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,425);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,680,781);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,93);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Layer1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,242,74);


(lib.screen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg1HANSIAA6jMBqPAAAIAAajg");
	this.shape.setTransform(340,85);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,680,170);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.head();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.3,x:-1.7,y:-0.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,315);


(lib.enemy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.3,x:1.9,y:0.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,353,425);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4();

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(-2,-131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance}]},11).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,680,781);


// stage content:



(lib.canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.screen();
	this.instance.setTransform(340,85,1,1,0,0,0,340,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).wait(77).to({alpha:1},6).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(279.5,111.5,4,0.05,0,0,0,118.5,46);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(1).to({regY:46.5,scaleX:3.82,scaleY:0.11,y:111.6},0).wait(1).to({scaleX:2.88,scaleY:0.41,y:111.7},0).wait(1).to({scaleX:1.31,scaleY:0.9,x:279.4,y:111.9},0).wait(1).to({scaleX:1,scaleY:1,x:279.5,y:111.5},0).wait(54));

	// Layer 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(149,66,4,0.05,0,0,0,121,37);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).wait(1).to({scaleX:3.82,scaleY:0.11},0).wait(1).to({scaleX:2.88,scaleY:0.41,x:149.1},0).wait(1).to({scaleX:1.31,scaleY:0.9},0).wait(1).to({scaleX:1,scaleY:1,x:149},0).wait(59));

	// enemy
	this.instance_3 = new lib.enemy();
	this.instance_3.setTransform(360,363,1,1,0,0,0,161,193);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({regX:177.4,regY:213.4,x:376.4,y:282.7},0).wait(1).to({y:251.7},0).wait(1).to({y:231.8},0).wait(1).to({y:217.6},0).wait(1).to({y:207},0).wait(1).to({y:198.8},0).wait(1).to({y:192.5},0).wait(1).to({y:187.5},0).wait(1).to({y:183.6},0).wait(1).to({y:180.6},0).wait(1).to({y:178.3},0).wait(1).to({y:176.5},0).wait(1).to({y:175.3},0).wait(1).to({y:174.4},0).wait(1).to({y:173.9},0).wait(1).to({y:173.6},0).wait(1).to({regX:161,regY:193,x:360,y:153.1},0).to({y:124.1},59).wait(1));

	// main
	this.instance_4 = new lib.main();
	this.instance_4.setTransform(552.5,429.5,1,1,0,0,0,142.5,157.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({regX:141.7,regY:156.7,x:551.7,y:328},0).wait(1).to({y:297},0).wait(1).to({y:277.1},0).wait(1).to({y:262.9},0).wait(1).to({y:252.3},0).wait(1).to({y:244.1},0).wait(1).to({y:237.7},0).wait(1).to({y:232.7},0).wait(1).to({y:228.9},0).wait(1).to({y:225.8},0).wait(1).to({y:223.5},0).wait(1).to({y:221.8},0).wait(1).to({y:220.5},0).wait(1).to({y:219.7},0).wait(1).to({y:219.1},0).wait(1).to({y:218.8},0).wait(1).to({regX:142.5,regY:157.5,x:552.5,y:219.6},0).to({y:190.6},59).wait(1));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.setTransform(340,390.5,1,1,0,0,0,340,390.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({regX:342,regY:396,x:342,y:389.1},0).wait(1).to({y:367.9},0).wait(1).to({y:332.5},0).wait(1).to({y:284.2},0).wait(1).to({y:226.3},0).wait(1).to({y:163.5},0).wait(1).to({y:102.2},0).wait(1).to({y:48.6},0).wait(1).to({y:7.7},0).wait(1).to({y:-17.5},0).wait(1).to({regX:340,regY:390.5,x:340,y:-31.4},0).to({y:-91.4},72).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(339,84,686,787);

})(lib2 = lib2||{}, images2 = images2||{}, createjs = createjs||{});
var lib, images, createjs, lib2, images2;