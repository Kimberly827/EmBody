/******************************************** 
 * Embody_Only_20240120_Psychopy202225 Test *
 ********************************************/


// store info about the experiment session:
let expName = 'Embody_only_20240120_psychopy202225';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
import './keyboard.min.js';
//// Define Necessary Functions
//

function numsvec(veclen,n) {
var arr=Array.apply(null, new Array(veclen)).map(Number.prototype.valueOf,n);
return arr;
}

//

function vec_multiply(v1,v2) {
var arr = [];
for (var i=0;i<v1.length;i++) {
arr.push(v1[i]*v2[i]);
}
return arr;
}

//

function multifunc(func, input) {
var arr = [];
for (var i=0;i<input.length;i++) {
arr.push(func(input[i]));
}
return arr;
}

//

function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}

return array;
}

//

function linspace(startp,endp,numpoint) {
var linarr=Array.apply(null, new Array(numpoint)).map(Number.prototype.valueOf,0);
var step = (endp-startp)/(numpoint-1);
for(var i = 0; i < numpoint; i++){
linarr[i]=startp + i*step;
}
return linarr 
}


function range(n) {
var ranarr = linspace(0,n-1,n);
return ranarr;
}

//

function findallind(array,element) {
var indices = [];
var idx = array.indexOf(element);
while (idx != -1) {
indices.push(idx);
idx = array.indexOf(element, idx + 1);
}
return indices
}


function sumArrayElements(array1,array2){
var sumarr = [];
for (var i=0;i<array1.length;i++) {
  sumarr.push(array1[i]+array2[i]);
  }
  return sumarr;
}

//

function ReplaceArrayElements(array,index,replacevalue) {
if (replacevalue.length>1) {
for (var i=0;i<index.length;i++) {
array[index[i]]=replacevalue[i];
}
} else {
for (var i=0;i<index.length;i++) {
array[index[i]]=replacevalue;
}
}
return array;
}

//

function randunif(min,max,N) {
  var randarr = [];
  for (var i=0;i<N;i++) {
      randarr.push(min+(max-min)*Math.random());
  }
return randarr;
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'base.png', 'path': 'base.png'},
    {'name': 'feel_word_list.xlsx', 'path': 'feel_word_list.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var embody_q_postexpClock;
var body_image_3;
var i;
var mousenum;
var npoints;
var csize;
var cx;
var mouse_body_3;
var key_resp_body_3;
var lt_text_body_3;
var rt_text_body_3;
var body_explanation_3;
var body_progress_3;
var reset_rect_3;
var reset_text_3;
var feeling_words;
var tlen;
var outlen;
var Ntrial;
var unit;
var spawnnum;
var condition_thisexp;
var tlen_seq;
var condition;
var q_trial;
var attacktimelist;
var playerTILspd0;
var playerTILspd;
var spawn;
var spawnseq;
var playerTILcoord;
var playerTILpos;
var movpt;
var thn_c0;
var thn_c1;
var thn_c2;
var thn_c3;
var thn_c;
var thmov_ind;
var threatcoord;
var threatpos;
var trialpoint;
var trialpoint_t;
var threatsize;
var get_threat;
var predspd_list;
var level;
var predspd;
var sr;
var freepred;
var predsize;
var iscage;
var predspawn;
var predspawnseq;
var predcoord;
var predpos;
var Nframe;
var ud_mov;
var rl_mov;
var temppredcoord;
var cost0;
var costxy;
var ucost;
var dcost;
var rcost;
var lcost;
var cost;
var midx;
var hold_flag;
var rorl;
var condition_next;
var tn;
var condname;
var cagecolor;
var cagethick;
var cagesize;
var threat_flag;
var caught;
var caught_msg;
var caught_flag;
var threatcolor;
var rewardcolor;
var next_arrow;
var next_con_fig;
var stop_t;
var stop_dur;
var stop_flag;
var stopmsg;
var stop_lim;
var stopped;
var tlim;
var prev_attack_time;
var playerTILx_t;
var playerTILy_t;
var predx_t;
var predy_t;
var threatpos_t;
var playerTILspd_t;
var predspd_t;
var trialtime;
var trialframe;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "embody_q_postexp"
  embody_q_postexpClock = new util.Clock();
  body_image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'body_image_3', units : undefined, 
    image : 'base.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  i=0;
  mousenum = 0;
  npoints = 200;
  csize = 1/60;
  cx = [];
  for (i=0;i<npoints;i++) {
      cx.push(new visual.Polygon ({
      win: psychoJS.window, name: 'c0', 
      edges: 50, size:[0, 0],
      ori: 0, pos: [0, 0],
      lineWidth: 0, lineColor: new util.Color([1, 1, 1]), 
      fillColor: new util.Color([1, -1, -1]),
      opacity: 0.5, depth: 0, interpolate: true,
      }));
      }
  
  
  
  mouse_body_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_body_3.mouseClock = new util.Clock();
  key_resp_body_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  lt_text_body_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'lt_text_body_3',
    text: 'for this body, color the regions\nwhose activity you feel \nincreasing or getting stronger',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.33), (- 0.45)], height: 0.025,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  rt_text_body_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rt_text_body_3',
    text: 'for this body, color the regions\nwhose activity you feel \ndecreasing or getting weaker',
    font: 'Arial',
    units: undefined, 
    pos: [(+ 0.33), (- 0.45)], height: 0.025,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  body_explanation_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_explanation_3',
    text: 'Use the pictures to \nindicate the bodily sensations \nyou experience when you feel:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  body_progress_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_progress_3',
    text: "Press 'Enter' to go to the next page",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  reset_rect_3 = new visual.Rect ({
    win: psychoJS.window, name: 'reset_rect_3', 
    width: [0.1, 0.05][0], height: [0.1, 0.05][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 5, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 0]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  reset_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'reset_text_3',
    text: 'RESET',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.02,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  feeling_words = new visual.TextStim({
    win: psychoJS.window,
    name: 'feeling_words',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Run 'Begin Experiment' code from main_code
  tlen = 16;
  outlen = 0;
  Ntrial = 180;
  unit = 1/16;
  spawnnum=0;
  
  // Condition list
  condition_thisexp = [0,1,0,1,0,3,0,1,0,3,0,1,0,1,3,0,1,0,2,0,1,0,1,0,3,0,1,0,2,0,1,0,1,0,1,3,0,1,2,0,1,2,0,3,0,1,0,1,2,0,1,0,2,0,1,0,2,0,1,0,3,0,1,0,1,0,1,2,0,1,0,3,0,1,0,1,0,2,0,1,3,0,1,0,1,3,0,1,0,1,0,1,2,0,1,0,3,0,1,0,1,3,0,1,0,1,3,0,1,0,3,0,1,0,1,0,1,3,0,1,0,1,3,0,1,0,1,0,2,0,1,0,1,2,0,1,0,1,2,0,1,3,0,1,0,2,0,1,0,1,2,0,1,0,3,0,1,0,1,2,0,1,0,2,0,2,0,1,0,1,3,0,2,0,1,0,1,2,0,3];
  tlen_seq=[3,3,1,16,16,16,1,9,16,16,1,5,3,16,16,1,9,16,16,5,1,3,7,7,16,7,5,9,16,9,7,3,9,7,16,16,9,16,16,16,1,16,16,16,1,5,3,16,16,5,16,3,16,16,1,16,16,9,3,16,16,5,1,1,16,16,7,16,16,16,5,16,5,1,3,7,7,16,9,16,16,9,7,7,16,16,9,7,3,9,7,16,16,7,5,9,16,3,9,7,9,16,5,16,9,3,16,16,1,16,16,5,1,1,16,16,7,16,1,5,5,5,16,3,3,1,16,16,16,16,3,7,16,16,1,5,5,5,16,16,1,16,16,16,5,16,3,9,7,9,16,5,16,3,16,5,16,9,3,16,9,3,16,16,16,16,16,3,7,16,16,1,16,9,7,7,16,16,1,16];
  condition=0;
  q_trial = [1,9,38,40,67,74,77,81,85,99,110,118,128,164,166,170];
  attacktimelist = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,12, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,10, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,2, NaN, NaN,14, NaN, NaN, NaN, NaN, NaN, NaN,15, NaN, NaN, NaN,10, NaN, NaN, NaN,13, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,7, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,8, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,9, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,1, NaN, NaN, NaN, NaN,5, NaN, NaN, NaN, NaN,9, NaN, NaN, NaN, NaN, NaN, NaN,11, NaN, NaN, NaN, NaN,7, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,6, NaN, NaN, NaN,16, NaN,3, NaN, NaN, NaN, NaN, NaN, NaN,4, NaN, NaN, NaN, NaN,8, NaN, NaN];
  
  
  playerTILspd0 = 20; //60;
  playerTILspd = playerTILspd0 ;
  
  // spawning location
  spawn = [[3,3],[3,12],[12,3],[12,12]];
  spawnseq = [2,0,1,0,3,2,0,1,2,1,3,1,0,0,3,2,1,3,2,3,2,0,1,0,3,2,0,1,2,1,3,1,0,0,3,2,1,3,2,3,2];
  playerTILcoord=spawn[spawnseq[0]];
  playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
  
  // Threat position
  movpt = [];
  movpt.push([[6,6,14,8,11,14,10,10,1,11,8,2,1,4,1,11,5,7,3,9,15,7,9,5,1,2,4,5,1,9,15,11,9,4,13,3,7,0,12,1,14,0,0,15,8,14,15,1,12,2,1,13,6,8,7,12,6,2,1,10,8,6,6,14,2,0,13,3,11,0,7,11,0,13,10,2,15,6,9,0,6,6,14,8,11,14,10,10,1,11,8,2,1,4,1,11,5,7,3,9,15,7,9,5,1,2,4,5,1,9,15,11,9,4,13,3,7,0,12,1,14,0,0,15,8,14,15,1,12,2,1,13,6,8,7,12,6,2,1,10,8,6,6,14,2,0,13,3,11,0,7,11,0,13,10,2,15,6,9,0,6,6,14,8,11,14,10,10,1,11,8,2,1,4,1,11,5,7,3,9,15,7,9,5,1,2,4,5,1,9,15,11,9,4,13,3,7,0,12,1,14,0,0,15,8,14,15,1,12,2,1,13,6,8,7,12,6,2,1,10,8,6,6,14,2,0,13,3,11,0,7,11,0,13,10,2,15,6,9,0,6,6,14,8,11,14,10,10,1,11,8,2,1,4,1,11,5,7,3,9,15,7,9,5,1,2,4,5,1,9,15,11,9,4,13,3,7,0,12,1,14,0,0,15,8,14,15,1,12,2,1,13,6,8,7,12,6,2,1,10,8,6,6,14,2,0,13,3,11,0,7,11,0,13,10,2,15,6,9,0],
  [8,10,14,10,5,14,9,4,15,10,12,14,2,11,13,8,11,3,7,9,13,9,7,9,0,15,5,6,15,8,2,11,8,5,2,3,4,0,12,1,2,15,13,1,9,1,2,2,3,1,2,14,11,11,4,8,8,15,1,7,6,10,6,1,13,1,14,12,10,0,6,6,0,1,5,2,14,7,7,13,8,10,14,10,5,14,9,4,15,10,12,14,2,11,13,8,11,3,7,9,13,9,7,9,0,15,5,6,15,8,2,11,8,5,2,3,4,0,12,1,2,15,13,1,9,1,2,2,3,1,2,14,11,11,4,8,8,15,1,7,6,10,6,1,13,1,14,12,10,0,6,6,0,1,5,2,14,7,7,13,8,10,14,10,5,14,9,4,15,10,12,14,2,11,13,8,11,3,7,9,13,9,7,9,0,15,5,6,15,8,2,11,8,5,2,3,4,0,12,1,2,15,13,1,9,1,2,2,3,1,2,14,11,11,4,8,8,15,1,7,6,10,6,1,13,1,14,12,10,0,6,6,0,1,5,2,14,7,7,13,8,10,14,10,5,14,9,4,15,10,12,14,2,11,13,8,11,3,7,9,13,9,7,9,0,15,5,6,15,8,2,11,8,5,2,3,4,0,12,1,2,15,13,1,9,1,2,2,3,1,2,14,11,11,4,8,8,15,1,7,6,10,6,1,13,1,14,12,10,0,6,6,0,1,5,2,14,7,7,13]]);
  movpt.push([[13,6,0,2,1,10,7,14,7,6,0,15,1,11,6,5,5,9,15,0,3,14,1,7,8,8,13,6,2,13,9,6,14,1,12,2,10,9,11,15,0,1,1,7,11,12,10,0,0,11,7,2,4,10,5,0,3,13,1,15,14,4,6,15,12,1,4,1,9,2,9,14,8,11,3,6,8,11,8,2,13,6,0,2,1,10,7,14,7,6,0,15,1,11,6,5,5,9,15,0,3,14,1,7,8,8,13,6,2,13,9,6,14,1,12,2,10,9,11,15,0,1,1,7,11,12,10,0,0,11,7,2,4,10,5,0,3,13,1,15,14,4,6,15,12,1,4,1,9,2,9,14,8,11,3,6,8,11,8,2,13,6,0,2,1,10,7,14,7,6,0,15,1,11,6,5,5,9,15,0,3,14,1,7,8,8,13,6,2,13,9,6,14,1,12,2,10,9,11,15,0,1,1,7,11,12,10,0,0,11,7,2,4,10,5,0,3,13,1,15,14,4,6,15,12,1,4,1,9,2,9,14,8,11,3,6,8,11,8,2],
  [14,10,13,2,2,7,4,1,3,6,0,14,15,10,7,9,6,7,2,0,3,14,15,9,11,6,14,8,15,1,7,8,2,2,12,14,5,9,6,2,1,13,0,4,11,3,9,13,0,10,6,15,11,4,11,15,7,2,1,1,1,5,10,13,8,1,5,2,8,13,8,14,9,5,12,11,12,8,10,1,14,10,13,2,2,7,4,1,3,6,0,14,15,10,7,9,6,7,2,0,3,14,15,9,11,6,14,8,15,1,7,8,2,2,12,14,5,9,6,2,1,13,0,4,11,3,9,13,0,10,6,15,11,4,11,15,7,2,1,1,1,5,10,13,8,1,5,2,8,13,8,14,9,5,12,11,12,8,10,1,14,10,13,2,2,7,4,1,3,6,0,14,15,10,7,9,6,7,2,0,3,14,15,9,11,6,14,8,15,1,7,8,2,2,12,14,5,9,6,2,1,13,0,4,11,3,9,13,0,10,6,15,11,4,11,15,7,2,1,1,1,5,10,13,8,1,5,2,8,13,8,14,9,5,12,11,12,8,10,1]]);
  movpt.push([[14,10,0,7,13,14,9,11,2,1,1,6,13,10,11,4,11,2,15,15,6,7,6,6,1,10,1,13,10,1,5,0,3,1,5,11,9,4,8,8,11,4,7,0,8,6,1,14,12,15,2,3,1,12,15,11,7,14,1,8,8,9,2,0,3,2,0,6,9,15,0,12,13,14,5,2,6,9,0,7],
  [1,9,13,4,1,14,8,11,14,2,2,10,2,4,6,11,10,15,14,2,7,6,8,8,1,5,15,14,7,0,9,0,3,1,11,10,7,5,9,6,5,5,9,15,12,6,13,2,3,1,15,12,15,8,13,8,4,1,2,11,10,9,13,13,7,1,1,11,8,2,0,12,14,14,6,2,10,7,0,3]]);
  movpt.push([[4,4,11,14,2,3,15,2,11,11,15,14,11,6,12,1,8,14,2,8,10,1,6,7,6,3,11,7,14,7,13,1,15,5,2,2,7,8,2,9,9,4,0,6,7,0,1,13,1,10,0,9,5,1,0,0,12,1,6,9,3,10,5,10,15,8,9,13,13,11,1,0,1,14,6,6,0,8,12,15],
  [11,5,8,1,2,12,2,14,11,5,13,2,10,8,8,1,10,14,15,6,4,1,8,4,11,3,6,9,1,6,1,13,14,9,1,15,4,9,13,8,9,5,0,7,3,0,2,14,2,5,13,7,11,0,15,1,12,2,10,7,7,7,6,9,1,12,8,14,2,10,15,13,15,14,10,6,0,11,3,2]]);
  
  // threatnum per condition
  thn_c0=0; 
  thn_c1=0;
  thn_c2=0;
  thn_c3=0;
  thn_c = 0;
  
  thmov_ind=0;
  threatcoord = [movpt[condition][0][4*thn_c+thmov_ind],movpt[condition][1][4*thn_c+thmov_ind]] //(every update of threat position)
  threatpos = [threatcoord[0]*unit-0.5+unit/2, threatcoord[1]*unit-0.5+unit/2];
  
  trialpoint = 0;
  trialpoint_t = 0;
  threatsize = [1/16,1/16];
  get_threat = 0;
  
  // initial predator speed
  predspd_list = [24,23,22,21,20,19,18,17,16,15,14,13,12];
  level = 8;
  predspd = predspd_list[level];
  sr = 0;
  freepred = 0;
  predsize = 1/16;
  iscage=0;
  
  //// pred init within cage
  predspawn = [[7,7],[7,8],[8,7],[8,8]];
  predspawnseq = [2,3,1,2,2,0,3,2,0,3,3,2,1,1,0,1,0,1,3,0,2,3,1,2,2,0,3,2,0,3,3,2,1,1,0,1,0,1,3,0,2];
  predcoord=predspawn[predspawnseq[0]];
  predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
  
  
  Nframe = 0;
  ud_mov = 0;
  rl_mov = 0;
  temppredcoord = predpos;
  cost0  = 0;
  costxy = 0;
  ucost = 0;
  dcost = 0;
  rcost = 0;
  lcost = 0;
  cost = [0,0,0,0];
  midx = 100;
  hold_flag = 0;
  rorl=0;
  
  // Define conditions
  condition = 0;
  condition_next = 0;
  tn=0;
  condname="";
  cagecolor = [-1,-1,-1];
  cagethick = 5;
  cagesize = [0,0];
  predsize = [0,0];
  threat_flag=0;
  caught = 0;
  caught_msg = "";
  caught_flag=0;
  threatcolor = [1,1,-1];
  rewardcolor = [0,1,0];
  get_threat = 0;
  next_arrow = "";
  next_con_fig = "";
  
  stop_t = 0;
  stop_dur = 0;
  stop_flag = 0;        
  stopmsg = "";
  stop_lim = 2;
  stopped = 0;
  
  tlim = 1/70;
  prev_attack_time = 0;
  playerTILx_t=[];
  playerTILy_t=[];
  predx_t=[];
  predy_t=[];
  threatpos_t=[];
  playerTILspd_t = [];
  predspd_t = [];
  trialtime = [];
  trialframe = [];
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'feel_word_list.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(embody_q_postexpRoutineBegin(snapshot));
      trialsLoopScheduler.add(embody_q_postexpRoutineEachFrame());
      trialsLoopScheduler.add(embody_q_postexpRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var _key_resp_body_3_allKeys;
var embody_q_postexpComponents;
function embody_q_postexpRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'embody_q_postexp' ---
    t = 0;
    embody_q_postexpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    mousenum = 0;
    // setup some python lists for storing info about the mouse_body_3
    // current position of the mouse:
    mouse_body_3.x = [];
    mouse_body_3.y = [];
    mouse_body_3.leftButton = [];
    mouse_body_3.midButton = [];
    mouse_body_3.rightButton = [];
    mouse_body_3.time = [];
    mouse_body_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    key_resp_body_3.keys = undefined;
    key_resp_body_3.rt = undefined;
    _key_resp_body_3_allKeys = [];
    feeling_words.setText(feel_word);
    // keep track of which components have finished
    embody_q_postexpComponents = [];
    embody_q_postexpComponents.push(body_image_3);
    embody_q_postexpComponents.push(mouse_body_3);
    embody_q_postexpComponents.push(key_resp_body_3);
    embody_q_postexpComponents.push(lt_text_body_3);
    embody_q_postexpComponents.push(rt_text_body_3);
    embody_q_postexpComponents.push(body_explanation_3);
    embody_q_postexpComponents.push(body_progress_3);
    embody_q_postexpComponents.push(reset_rect_3);
    embody_q_postexpComponents.push(reset_text_3);
    embody_q_postexpComponents.push(feeling_words);
    
    embody_q_postexpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function embody_q_postexpRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'embody_q_postexp' ---
    // get current time
    t = embody_q_postexpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *body_image_3* updates
    if (t >= 0.0 && body_image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_image_3.tStart = t;  // (not accounting for frame time here)
      body_image_3.frameNStart = frameN;  // exact frame index
      
      body_image_3.setAutoDraw(true);
    }

    // *mouse_body_3* updates
    if (t >= 0.0 && mouse_body_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_body_3.tStart = t;  // (not accounting for frame time here)
      mouse_body_3.frameNStart = frameN;  // exact frame index
      
      mouse_body_3.status = PsychoJS.Status.STARTED;
      mouse_body_3.mouseClock.reset();
      prevButtonState = mouse_body_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_body_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_body_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [reset_rect_3]) {
            if (obj.contains(mouse_body_3)) {
              gotValidClick = true;
              mouse_body_3.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_body_3.getPos();
          mouse_body_3.x.push(_mouseXYs[0]);
          mouse_body_3.y.push(_mouseXYs[1]);
          mouse_body_3.leftButton.push(_mouseButtons[0]);
          mouse_body_3.midButton.push(_mouseButtons[1]);
          mouse_body_3.rightButton.push(_mouseButtons[2]);
          mouse_body_3.time.push(mouse_body_3.mouseClock.getTime());
        }
      }
    }
    
    // *key_resp_body_3* updates
    if (t >= 0.0 && key_resp_body_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_body_3.tStart = t;  // (not accounting for frame time here)
      key_resp_body_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_body_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_body_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_body_3.clearEvents(); });
    }

    if (key_resp_body_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_body_3.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _key_resp_body_3_allKeys = _key_resp_body_3_allKeys.concat(theseKeys);
      if (_key_resp_body_3_allKeys.length > 0) {
        key_resp_body_3.keys = _key_resp_body_3_allKeys[_key_resp_body_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_body_3.rt = _key_resp_body_3_allKeys[_key_resp_body_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *lt_text_body_3* updates
    if (t >= 0.0 && lt_text_body_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lt_text_body_3.tStart = t;  // (not accounting for frame time here)
      lt_text_body_3.frameNStart = frameN;  // exact frame index
      
      lt_text_body_3.setAutoDraw(true);
    }

    
    // *rt_text_body_3* updates
    if (t >= 0.0 && rt_text_body_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rt_text_body_3.tStart = t;  // (not accounting for frame time here)
      rt_text_body_3.frameNStart = frameN;  // exact frame index
      
      rt_text_body_3.setAutoDraw(true);
    }

    
    // *body_explanation_3* updates
    if (t >= 0.0 && body_explanation_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_explanation_3.tStart = t;  // (not accounting for frame time here)
      body_explanation_3.frameNStart = frameN;  // exact frame index
      
      body_explanation_3.setAutoDraw(true);
    }

    
    // *body_progress_3* updates
    if (t >= 0.0 && body_progress_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_progress_3.tStart = t;  // (not accounting for frame time here)
      body_progress_3.frameNStart = frameN;  // exact frame index
      
      body_progress_3.setAutoDraw(true);
    }

    
    // *reset_rect_3* updates
    if (t >= 0.0 && reset_rect_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reset_rect_3.tStart = t;  // (not accounting for frame time here)
      reset_rect_3.frameNStart = frameN;  // exact frame index
      
      reset_rect_3.setAutoDraw(true);
    }

    
    // *reset_text_3* updates
    if (t >= 0.0 && reset_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reset_text_3.tStart = t;  // (not accounting for frame time here)
      reset_text_3.frameNStart = frameN;  // exact frame index
      
      reset_text_3.setAutoDraw(true);
    }

    
    // *feeling_words* updates
    if (t >= 0.0 && feeling_words.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feeling_words.tStart = t;  // (not accounting for frame time here)
      feeling_words.frameNStart = frameN;  // exact frame index
      
      feeling_words.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    embody_q_postexpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function embody_q_postexpRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'embody_q_postexp' ---
    embody_q_postexpComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    for (i=0;i<npoints;i++) {
        cx[i].setAutoDraw(false);
        }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_body_3.x', mouse_body_3.x);
    psychoJS.experiment.addData('mouse_body_3.y', mouse_body_3.y);
    psychoJS.experiment.addData('mouse_body_3.leftButton', mouse_body_3.leftButton);
    psychoJS.experiment.addData('mouse_body_3.midButton', mouse_body_3.midButton);
    psychoJS.experiment.addData('mouse_body_3.rightButton', mouse_body_3.rightButton);
    psychoJS.experiment.addData('mouse_body_3.time', mouse_body_3.time);
    psychoJS.experiment.addData('mouse_body_3.clicked_name', mouse_body_3.clicked_name);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_body_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_body_3.keys', key_resp_body_3.keys);
    if (typeof key_resp_body_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_body_3.rt', key_resp_body_3.rt);
        routineTimer.reset();
        }
    
    key_resp_body_3.stop();
    // the Routine "embody_q_postexp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
