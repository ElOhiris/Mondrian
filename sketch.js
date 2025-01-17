//Piet Mondrian, Broadway Boogie-Woogie, 1943

function setup() {
  createCanvas(600, 600);
  colorMode(HSL)
  strokeWeight( 0 )
  
  //IMPOSTAZIONE PARAMETRI
  
  let sfondo = true;

  let a = random(0,100)
  let b = random(200,350)
  let c = random(200)
  
  let d = random(200,300)
  let e = random(150)
  let f = random(70)
  
  let g = random(100,200)
  let h = random(150,200)
  let i = random(200)
  
  //IMPOSTAZIONI CROMATICHE PARAMETRIZZATE
  
  if (sfondo){
    background(280,40,80)
  } else {
    background(0,100,100)
  }
  
  fill(50,100,60)
  rect(0,10 , 600,10) //orizzontali
  rect(0,100 , 600,10)
  rect(0,210 ,600,10)
  rect(0,260 ,600,10)
  rect(0,350 , 600,10)
  rect(0,385 , 600,10)
  rect(0,420, 40, 10)
  rect(50,440 , 300,10)
  rect(0,460, 40,10)
  rect(0,510 , 600,10)
  rect(0,525, 40,10)
  rect(0,560 , 600,10)
  
  rect(20,0 ,10,210) //verticali
  rect(40,0 , 10,600)
  rect(75,0 , 10,560 )
  rect(140,0 ,10,600)
  rect(320,0 ,10,600)
  rect(340,0 , 10,210)
  rect(340,260 , 10,600)
  rect(380,260 , 10,130)
  rect(520,0 , 10,600)
  rect(540,0 , 10,210)
  rect(560,0 , 10, 260)
  rect(560,385, 10,110)
  rect(580,0 ,10,600)
  
  rect(85,30,55,20)
  rect(85,165, 55,35)
  rect(95,220,35,40)
  rect(75,470,65,40)
  rect(170,270,50,80)
  rect(250,220,40,130)
  rect(530,300,50,30)
  rect(530,445,50,20)
  rect(530,485,50,10)
  
  fill(a,b,c)//rosso sotto
  rect(160,20,50,70)
  rect(410,270,45,105)
  
  fill(d,e,f)//blu
  square(20,10, 10)
  square(20,50, 10)
  square(20,130, 10)
  square(20,420, 10)
  square(25,460, 10)
  
  square(40,210, 10)
  square(40,260, 10)
  square(40,350, 10)
  square(40,510, 10)
  
  square(75,50, 10)
  square(75,100, 10)
  square(75,200, 10)
  square(75,220, 10)
  square(75,325, 10)
  square(75,350, 10)
  square(75,385, 10)
  square(75,470, 10)
  square(75,510, 10)
  rect(75,527, 10,7)
  square(75,560, 10)
  
  square(90,10, 10)
  
  square(140,50, 10)
  square(140,90, 10)
  square(140,130,10)
  square(140, 210, 10)
  square(140,260, 10)
  square(140,350, 10)
  square(140,440, 10)
  square(140,510, 10)
  square(140,560, 10)
  
  square(170,100, 10)
  square(210,210,10)
  square(170,300,50)
  square(220,385, 10)
  square(230,440,10)
  square(240,510,10)
  square(280,510, 10)
  square(240,560, 10)
  square(260,560, 10)
  
  square(290,210, 10)
  square(290,260, 10)
  square(295,385, 10)
  square(300,440, 10)
  
  square(320,40, 10)
  square(320,100, 10)
  square(320,190, 10)
  square(320,230, 10)
  square(320,465, 10)
  square(320,510, 10)
  
  square(340,210, 10)
  square(340,300, 10)
  square(340,395, 10)
  square(340,550, 10)
   
  square(410,350, 10)
  square(450,350, 10)
  
  square(415,385, 10)
  square(445,385, 10)
  
  square(360,510, 10)
  square(425,510, 10)
  
  square(385,560, 10)
  square(420,560, 10)
  
  square(450,260, 10)
  
  square(520,10, 10)
  square(520,75, 10)
  square(520,100, 10)
  square(520,190, 10)
  square(520,210, 10)
  square(520,310, 10)
  square(520,385, 10)
  square(520,455, 10)
  square(520,485, 10)
  square(520,560, 10)
  
  rect(550,50,30,20)
  rect(530,415,30,30)
  
  square(540,20, 10)
  square(540,190, 10)
  
  square(550,510,10)
  
  square(560,10, 10)
  square(560,350, 10)
  square(560,455, 10)
  
  square(570,210, 10)
  
  square(580,100, 10)
  square(580,130, 10)
  square(580,310,10)
  square(580,455, 10)
  
  square(50,120, 35)
  square(50,405 , 35)
  
  rect(385,110,50,100)
  
  fill(g,h,i)//bianco
  square(20,20, 10)
  square(20,200, 10)
  rect(25,260, 15,10)
  square(30,350, 10)
  square(30,385, 10)
  square(20,510, 10)
  square(30,560, 10)
  
  square(40,20, 10)
  square(40,90, 10)
  square(40,110, 10)
  square(40,155, 10)
  square(40,340, 10)
  rect(40,405,10,15)
  square(40,430,10)
  square(40,473, 10)
  square(40,520, 10)
  square(40,550, 10)
  
  rect(75,30, 10,20)
  rect(75,175, 10,25)
  square(75,210, 10)
  rect(75,230, 10,30)
  square(75,480, 10)
  rect(75,520,10,7)
  square(75,550, 10)
  square(85,260, 10)
  
  square(130,10, 10)
  square(140,20, 10)
  square(140,110, 10)
  rect(95,50, 20,10)
  square(130,210,10)
  square(140,220, 10)
  square(130,260, 10)
  square(140,270, 10)
  square(140,310, 10)
  square(140,340, 10)
  square(110,385, 10)
  square(110,440, 10)
  square(140, 413, 10)
  square(140,480, 10)
  square(140,500, 10)
  square(130,510, 10)
  square(140,520,10)
  square(140,550,10)
  
  square(150,100, 10)
  square(160,210, 10)
  square(205,10, 10)
  rect(430,10,20,10)
  square(170,40, 30)
  rect(160,90,50,10)
  square(220,100, 10)
  square(430,100, 10)
  rect(190,260,30, 10)
  rect(250,260,40,10)
  rect(250,290,40,30)
  square(165,350, 10)
  rect(260,350,30, 10)
  square(170,385,10)
  square(180,440,10)
  square(190,510, 10)
  square(490,510,10)
  square(190,560,10)
  square(220,560,10)
  square(480,560, 10)
  rect(415,300,35,30)
  
  square(310,10,10)
  square(320,20, 10)
  square(330,10 ,10)
  square(340,50, 10)
  square(340,20,10)
  square(350,10,10)
  square(310,100, 10)
  square(320,140, 10)
  square(320,220, 10)
  square(320,260, 10)
  square(320,350, 10)
  square(320,385, 10)
  square(320,405, 10)
  square(320,440, 10)
  square(320,520, 10)
  square(320,560, 10)
  
  square(340,90, 10)
  square(340,110, 10)
  square(350,100, 10)
  square(340,190, 10)
  square(340,140,10)
  square(340,260, 10)
  square(340,350, 10)
  square(340,385, 10)
  square(340,415,10)
  square(340,440, 10)
  square(340,475, 10)
  square(340,520, 10)
  square(340,560, 10)
  
  square(380,260, 10)
  square(380,300, 10)
  square(380,385, 10)
  square(410,260, 10)
  rect(420,350, 30,10)
  rect(410,375, 45, 10)
  
  square(510,10, 10)
  square(510,100, 10)
  square(520,20, 10)
  square(520,180, 10)
  square(520,250, 10)
  square(520,375, 10)
  square(520,395, 10)
  square(520,445, 10)
  square(520,530, 10)
  square(520,570, 10)
  
  square(540,10, 10)
  square(540,30, 10)
  square(540,90, 10)
  square(530,100, 10)
  square(540,110, 10)
  square(540,150, 10)
  
  square(550, 260, 10)
  
  square(560,20, 10)
  square(560,40,10)
  square(560,110, 10)
  square(560,150, 10)
  square(560,170, 10)
  square(560,210, 10)
  square(560,230, 10)
  square(560,395, 10)
  rect(560,435, 10,20)
  square(560,485, 10)
  
  square(570,10, 10)
  square(570,100, 10)
  square(570,350, 10)
  square(570,385, 10)
  
  square(580,30, 10)
  square(580,90, 10)
  square(580,110, 10)
  square(580,140, 10)
  square(580,210, 10)
  square(580,250, 10)
  square(580,330, 10)
  square(580,375, 10)
  square(580,395, 10)
  square(580,445, 10)
  square(580,530, 10)
  
  square(590,10, 10)
  square(590,260, 10)
 
  fill(a,b,c)//rosso
  square(20,100, 10)
  square(20,160,10)
  square(20,210, 10)
  square(25,525, 10)
  
  square(40,0, 10)
  square(40,50 , 10)
  square(40,320,10)
  square(40,385, 10)
  square(40,420, 10)
  square(40,440, 10)
  square(40,463, 10)
  square(40,560, 10)
  
  square(75,165, 10)
  square(75,260, 10)
  square(75,440, 10)
  square(75,490, 10)
  square(85,210, 10)
  
  rect(95,20,35,80)
  rect(85,310, 55,40)
  square(140,0, 10)
  square(130,100, 10)
  square(140,165, 10)
  square(140,385, 10)
  square(140,470, 10)
  square(120,510, 10)
  square(140,530, 10)
  square(120,560, 10)
  
  square(240,210, 10)
  square(380,210, 10)
  square(430,210, 10)
  rect(170,260,20,10)
  square(240,260,10)
  square(370,260, 10)
  square(215,350, 10)
  square(250,350, 10)
  square(290,350, 10)
  square(380,350, 10)
  square(380,375,10)
  square(250,385, 10)
  square(265,440, 10)
  square(260,510, 10)
  square(300,510, 10)
  square(390,510, 10)
  square(360,560,10)

  square(320,0, 10)
  square(320,50, 10)
  square(320,130, 10)
  square(320,210, 10)
  square(320,300, 10)
  square(320,375, 10)
  square(320,395, 10)
  square(320,500, 10)
  square(320,550, 10)
  
  square(330,440, 10)
  
  square(340,30, 10)
  square(340,100, 10)
  rect(340,130, 10,7)
  square(340,340, 10)
  square(340,465, 10)
  square(340,510, 10)
  square(540,0, 10)
  rect(385,140,50,40)
  rect(270,560,40,25)
  
  square(520,130, 10)
  square(520,260, 10)
  square(520,350, 10)
  square(520,435, 10)
  square(520,510, 10)
  
  square(540,50, 10)
  square(540,210, 10)
  
  square(550,100, 10)
  square(550,560, 10)
  rect(550,300,10,30)
  
  square(560,260, 10)
  square(560,385, 10)
  
  square(580,0, 10)
  square(580,20, 10)
  square(580, 50, 10)
  square(580,190, 10)
  square(580,260, 10)
  square(580,350, 10)
  square(580,435, 10)
  square(580,485, 10)
  square(580,510, 10)
  square(580,560, 10)
  
  square(590,385,10)
  
  square(540,120,30)
  rect(530,465, 30,20)

  fill(g,h,i)// bianchi sopra
  rect(95,50, 35,10)
  rect(95,100, 35,10)
  square(105,173,20)
  square(105,230,15)
  square(110,480,15)
  
  fill(50,100,60)//giallo sopra
  square(180,310,30)
  rect(395,150,30,20)
  
}