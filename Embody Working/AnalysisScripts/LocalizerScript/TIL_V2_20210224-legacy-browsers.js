/************************ 
 * Til_V2_20210224 Test *
 ************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.2, 0.2, 0.2]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'TIL_V2_20210224';  // from the Builder filename that created this script
let expInfo = {'Prolific_ID': '', '': ''};

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
flowScheduler.add(IRB_ConsentRoutineBegin());
flowScheduler.add(IRB_ConsentRoutineEachFrame());
flowScheduler.add(IRB_ConsentRoutineEnd());
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
flowScheduler.add(IntroductionRoutineBegin());
flowScheduler.add(IntroductionRoutineEachFrame());
flowScheduler.add(IntroductionRoutineEnd());
flowScheduler.add(Instruction_Final_PageRoutineBegin());
flowScheduler.add(Instruction_Final_PageRoutineEachFrame());
flowScheduler.add(Instruction_Final_PageRoutineEnd());
const example_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(example_loopLoopBegin, example_loopLoopScheduler);
flowScheduler.add(example_loopLoopScheduler);
flowScheduler.add(example_loopLoopEnd);
flowScheduler.add(Start_MainRoutineBegin());
flowScheduler.add(Start_MainRoutineEachFrame());
flowScheduler.add(Start_MainRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(EndExpRoutineBegin());
flowScheduler.add(EndExpRoutineEachFrame());
flowScheduler.add(EndExpRoutineEnd());
flowScheduler.add(embody_postexp_ExplanationRoutineBegin());
flowScheduler.add(embody_postexp_ExplanationRoutineEachFrame());
flowScheduler.add(embody_postexp_ExplanationRoutineEnd());
const embody_postexp_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(embody_postexp_loopLoopBegin, embody_postexp_loopLoopScheduler);
flowScheduler.add(embody_postexp_loopLoopScheduler);
flowScheduler.add(embody_postexp_loopLoopEnd);
flowScheduler.add(DemoQ_ExplanationRoutineBegin());
flowScheduler.add(DemoQ_ExplanationRoutineEachFrame());
flowScheduler.add(DemoQ_ExplanationRoutineEnd());
const DemoQLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(DemoQLoopLoopBegin, DemoQLoopLoopScheduler);
flowScheduler.add(DemoQLoopLoopScheduler);
flowScheduler.add(DemoQLoopLoopEnd);
flowScheduler.add(STAI_InstructionRoutineBegin());
flowScheduler.add(STAI_InstructionRoutineEachFrame());
flowScheduler.add(STAI_InstructionRoutineEnd());
const STAILoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(STAILoopLoopBegin, STAILoopLoopScheduler);
flowScheduler.add(STAILoopLoopScheduler);
flowScheduler.add(STAILoopLoopEnd);
flowScheduler.add(BISBAS_InstructionRoutineBegin());
flowScheduler.add(BISBAS_InstructionRoutineEachFrame());
flowScheduler.add(BISBAS_InstructionRoutineEnd());
const BISBASLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BISBASLoopLoopBegin, BISBASLoopLoopScheduler);
flowScheduler.add(BISBASLoopLoopScheduler);
flowScheduler.add(BISBASLoopLoopEnd);
flowScheduler.add(STICSA_InstructionRoutineBegin());
flowScheduler.add(STICSA_InstructionRoutineEachFrame());
flowScheduler.add(STICSA_InstructionRoutineEnd());
const STICSA_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(STICSA_LoopLoopBegin, STICSA_LoopLoopScheduler);
flowScheduler.add(STICSA_LoopLoopScheduler);
flowScheduler.add(STICSA_LoopLoopEnd);
flowScheduler.add(BPQ_instructionRoutineBegin());
flowScheduler.add(BPQ_instructionRoutineEachFrame());
flowScheduler.add(BPQ_instructionRoutineEnd());
const BPQ_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BPQ_LoopLoopBegin, BPQ_LoopLoopScheduler);
flowScheduler.add(BPQ_LoopLoopScheduler);
flowScheduler.add(BPQ_LoopLoopEnd);
flowScheduler.add(DASS21_InstructionRoutineBegin());
flowScheduler.add(DASS21_InstructionRoutineEachFrame());
flowScheduler.add(DASS21_InstructionRoutineEnd());
const DASS21_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(DASS21_LoopLoopBegin, DASS21_LoopLoopScheduler);
flowScheduler.add(DASS21_LoopLoopScheduler);
flowScheduler.add(DASS21_LoopLoopEnd);
flowScheduler.add(MAIA_InstructionRoutineBegin());
flowScheduler.add(MAIA_InstructionRoutineEachFrame());
flowScheduler.add(MAIA_InstructionRoutineEnd());
const MAIA_LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(MAIA_LoopLoopBegin, MAIA_LoopLoopScheduler);
flowScheduler.add(MAIA_LoopLoopScheduler);
flowScheduler.add(MAIA_LoopLoopEnd);
flowScheduler.add(FinalScreenRoutineBegin());
flowScheduler.add(FinalScreenRoutineEachFrame());
flowScheduler.add(FinalScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'DemoQuestions.xlsx', 'path': 'DemoQuestions.xlsx'},
    {'name': 'base.png', 'path': 'base.png'},
    {'name': 'STAIT.xlsx', 'path': 'STAIT.xlsx'},
    {'name': 'STICSA.xlsx', 'path': 'STICSA.xlsx'},
    {'name': 'BisBasQ.xlsx', 'path': 'BisBasQ.xlsx'},
    {'name': 'feel_word_list.xlsx', 'path': 'feel_word_list.xlsx'},
    {'name': 'GRID.png', 'path': 'GRID.png'},
    {'name': 'Con6.png', 'path': 'Con6.png'},
    {'name': 'BPQ.xlsx', 'path': 'BPQ.xlsx'},
    {'name': 'MAIA.xlsx', 'path': 'MAIA.xlsx'},
    {'name': 'DASS21.xlsx', 'path': 'DASS21.xlsx'},
    {'name': 'I7.png', 'path': 'I7.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=78764C9A', '');

  return Scheduler.Event.NEXT;
}


var IRB_ConsentClock;
var ConSlide;
var irb_page;
var move_inst;
var Consent_Slide_Image;
var Consent_Press_Space;
var ConsentClock;
var Consent_Key;
var TotalExpClock;
var TotalExpTime;
var Final_Consent_Image;
var IntroductionClock;
var i_image;
var inst_page;
var Instruction_Image;
var Instruction_Press_Space;
var Instruction_Final_PageClock;
var Instruction_Space_Final;
var Instruction_Image_Final;
var text;
var start_exampleClock;
var start_fix_2;
var Question_Anx_ExampleClock;
var isQStart;
var RatingEndCount;
var anxiety_rating_3;
var rt_text_anx_2;
var lt_text_anx_2;
var Question_Name_3;
var MouseClick_3;
var GRID_Q_2;
var cage_Q_2;
var playerTIL_Q_2;
var predator_Q_2;
var inform_next_2;
var trial_exampleClock;
var GRID_3;
var threat_3;
var stop_text_3;
var caught_text_3;
var cage_3;
var playerTIL_3;
var predator_3;
var tn_example;
var caught_example;
var next_time;
var threatnum_ex;
var move_away_flash;
var embody_q_exampleClock;
var body_image_2;
var mouse_body_2;
var key_resp_body_2;
var lt_text_body_2;
var rt_text_body_2;
var body_explanation_2;
var body_progress_2;
var reset_rect_2;
var reset_text_2;
var Start_MainClock;
var press_space_to_start;
var press_space_to_start_key;
var dummy_trial_embodyClock;
var embody_cond_list;
var embody_trial;
var embody_count;
var isdummyStart;
var GRID_embody;
var threat_embody;
var cage_embody;
var playerTIL_embody;
var predator_embody;
var embody_qClock;
var i;
var mousenum;
var npoints;
var csize;
var cx;
var body_image;
var mouse_body;
var key_resp_body;
var lt_text_body;
var rt_text_body;
var body_explanation;
var body_progress;
var reset_rect;
var reset_text;
var Question_AnxClock;
var rt_text_anx;
var lt_text_anx;
var anxiety_rating;
var Question_Name;
var MouseClick;
var GRID_Q;
var cage_Q;
var playerTIL_Q;
var predator_Q;
var inform_next;
var trialClock;
var GRID;
var threat;
var stop_text;
var caught_text;
var cage;
var playerTIL;
var predator;
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
var EndExpClock;
var EOP;
var EOP_Key;
var embody_postexp_ExplanationClock;
var embody_postexp_instruction;
var embody_postexp_Start_Enter;
var embody_q_postexpClock;
var body_image_3;
var mouse_body_3;
var key_resp_body_3;
var lt_text_body_3;
var rt_text_body_3;
var body_explanation_3;
var body_progress_3;
var reset_rect_3;
var reset_text_3;
var feeling_words;
var DemoQ_ExplanationClock;
var DemoQ_Inst_Text;
var DemoQ_Start_Enter;
var DemoQRoutimeClock;
var DemoQ_key_resp;
var DemoQ_Instruction;
var DemoQ_Answer;
var modify;
var DemoQ_Text;
var Underline_DemoQ;
var YourAnswer;
var STAI_InstructionClock;
var STAI_inst_text;
var STAI_inst_enter;
var STAI_RoutineClock;
var Line_STAI;
var STAI_slider;
var STAI_Question_Text;
var MouseClick_11;
var BISBAS_InstructionClock;
var BISBAS_inst_text;
var BISBAS_inst_enter;
var BISBAS_RoutineClock;
var Line_BISBAS;
var BISBAS_slider;
var BISBAS_Question_Text;
var MouseClick_10;
var STICSA_InstructionClock;
var STICSA_inst_text;
var STICSA_inst_enter;
var STICSA_RoutineClock;
var Line_STICSA;
var STICSA_slider;
var STICSA_Question_Text;
var MouseClick_7;
var BPQ_instructionClock;
var BPQ_inst_text;
var BPQ_inst_enter;
var BPQ_RoutineClock;
var Line_BPQ;
var BPQ_slider;
var BPQ_Question_Text;
var BPQ_text2;
var MouseClick_9;
var DASS21_InstructionClock;
var DASS21_inst_text;
var DASS21_inst_enter;
var DASS21_RoutineClock;
var Line_DASS21;
var DASS21_slider;
var DASS21_Question_Text;
var MAIA_InstructionClock;
var MAIA_inst_text;
var MAIA_inst_enter;
var MAIA_RoutineClock;
var Line_MAIA;
var MAIA_slider;
var MAIA_Question_Text;
var MouseClick_8;
var FinalScreenClock;
var FinalText;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "IRB_Consent"
  IRB_ConsentClock = new util.Clock();
  ConSlide = 'Con1.png';
  irb_page = 1;
  move_inst = '';
  Consent_Slide_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Consent_Slide_Image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.4, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  Consent_Press_Space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  Consent_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  TotalExpClock = new util.Clock();
  TotalExpTime = [];
  Final_Consent_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Final_Consent_Image', units : undefined, 
    image : 'Con6.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.4, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  i_image = 'I1.png';
  inst_page = 1;
  move_inst = '';
  Instruction_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_Image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1.4, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  Instruction_Press_Space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction_Final_Page"
  Instruction_Final_PageClock = new util.Clock();
  Instruction_Space_Final = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Instruction_Image_Final = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Instruction_Image_Final', units : undefined, 
    image : 'I7.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.4, 0.8],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'To start tutorial, press space bar',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "start_example"
  start_exampleClock = new util.Clock();
  start_fix_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_fix_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Question_Anx_Example"
  Question_Anx_ExampleClock = new util.Clock();
  isQStart = false;
  RatingEndCount=0;
  anxiety_rating_3 = new visual.Slider({
    win: psychoJS.window, name: 'anxiety_rating_3',
    size: [1.0, 0.05], pos: [0, (- 0.3)], units: 'norm',
    labels: ["1", "2", "3", "4", "5", "6", "7"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 0, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('white'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  rt_text_anx_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rt_text_anx_2',
    text: 'highly anxious',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.22)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  lt_text_anx_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'lt_text_anx_2',
    text: 'no sense of anxiety',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.22)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Question_Name_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question_Name_3',
    text: 'How anxious are you now?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  MouseClick_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MouseClick_3',
    text: 'Click on the scale to rate the score',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  GRID_Q_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'GRID_Q_2', units : undefined, 
    image : 'GRID.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([(- 1), (- 1), (- 1)]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -7.0 
  });
  cage_Q_2 = new visual.Rect ({
    win: psychoJS.window, name: 'cage_Q_2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  playerTIL_Q_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'playerTIL_Q_2', 
    vertices: [[-[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [+[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [0, [(1 / 16), (1 / 16)][1]/2.0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), 1]),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  predator_Q_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'predator_Q_2', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, (- 1), (- 1)]),
    opacity: 1, depth: -10, interpolate: true,
  });
  
  inform_next_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'inform_next_2',
    text: 'Next trial is:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -11.0 
  });
  
  // Initialize components for Routine "trial_example"
  trial_exampleClock = new util.Clock();
  GRID_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'GRID_3', units : undefined, 
    image : 'GRID.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([(- 1), (- 1), (- 1)]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  threat_3 = new visual.Rect ({
    win: psychoJS.window, name: 'threat_3', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 0.3, depth: -2, interpolate: true,
  });
  
  stop_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'stop_text_3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  caught_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'caught_text_3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  cage_3 = new visual.Rect ({
    win: psychoJS.window, name: 'cage_3', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  playerTIL_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'playerTIL_3', 
    vertices: [[-[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [+[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [0, [(1 / 16), (1 / 16)][1]/2.0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  predator_3 = new visual.Polygon ({
    win: psychoJS.window, name: 'predator_3', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, (- 1), (- 1)]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  tn_example = 0;
  caught_example = 0;
  next_time = 2;
  threatnum_ex = 0;
  
  move_away_flash = new visual.TextStim({
    win: psychoJS.window,
    name: 'move_away_flash',
    text: 'Remember to move away as far as possible from the yellow square as possible',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "embody_q_example"
  embody_q_exampleClock = new util.Clock();
  body_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'body_image_2', units : undefined, 
    image : 'base.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  mouse_body_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_body_2.mouseClock = new util.Clock();
  key_resp_body_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  lt_text_body_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'lt_text_body_2',
    text: 'for this body, color the regions\nwhose activity you feel \nincreasing or getting stronger',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.33), (- 0.45)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  rt_text_body_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rt_text_body_2',
    text: 'for this body, color the regions\nwhose activity you feel \ndecreasing or getting weaker',
    font: 'Arial',
    units: undefined, 
    pos: [(+ 0.33), (- 0.45)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  body_explanation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_explanation_2',
    text: 'Use the pictures to indicate \nthe bodily sensations \nyou feel now',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  body_progress_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_progress_2',
    text: "Press 'Enter' to go to the next page",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  reset_rect_2 = new visual.Rect ({
    win: psychoJS.window, name: 'reset_rect_2', 
    width: [0.1, 0.05][0], height: [0.1, 0.05][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 5, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 0]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  reset_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'reset_text_2',
    text: 'RESET',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "Start_Main"
  Start_MainClock = new util.Clock();
  press_space_to_start = new visual.TextStim({
    win: psychoJS.window,
    name: 'press_space_to_start',
    text: 'You completed a tutorial.\nIf you are ready to start main experiment, \npress space bar',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  press_space_to_start_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "dummy_trial_embody"
  dummy_trial_embodyClock = new util.Clock();
  embody_cond_list=[3,0,2,1,3,1,0,2];
  embody_trial=[16,45,64,87,105,126,143,174];
  embody_count=0;
  isdummyStart = false;
  GRID_embody = new visual.ImageStim({
    win : psychoJS.window,
    name : 'GRID_embody', units : undefined, 
    image : 'GRID.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([(- 1), (- 1), (- 1)]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  threat_embody = new visual.Rect ({
    win: psychoJS.window, name: 'threat_embody', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 0.3, depth: -2, interpolate: true,
  });
  
  cage_embody = new visual.Rect ({
    win: psychoJS.window, name: 'cage_embody', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  playerTIL_embody = new visual.ShapeStim ({
    win: psychoJS.window, name: 'playerTIL_embody', 
    vertices: [[-[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [+[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [0, [(1 / 16), (1 / 16)][1]/2.0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  predator_embody = new visual.Polygon ({
    win: psychoJS.window, name: 'predator_embody', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, (- 1), (- 1)]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  // Initialize components for Routine "embody_q"
  embody_qClock = new util.Clock();
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
      
  body_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'body_image', units : undefined, 
    image : 'base.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  mouse_body = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_body.mouseClock = new util.Clock();
  key_resp_body = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  lt_text_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'lt_text_body',
    text: 'for this body, color the regions\nwhose activity you feel \nincreasing or getting stronger',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.33), (- 0.45)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  rt_text_body = new visual.TextStim({
    win: psychoJS.window,
    name: 'rt_text_body',
    text: 'for this body, color the regions\nwhose activity you feel \ndecreasing or getting weaker',
    font: 'Arial',
    units: undefined, 
    pos: [(+ 0.33), (- 0.45)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  body_explanation = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_explanation',
    text: 'Use the pictures to indicate \nthe bodily sensations \nyou feel now',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  body_progress = new visual.TextStim({
    win: psychoJS.window,
    name: 'body_progress',
    text: "Press 'Enter' to go to the next page",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  reset_rect = new visual.Rect ({
    win: psychoJS.window, name: 'reset_rect', 
    width: [0.1, 0.05][0], height: [0.1, 0.05][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 5, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 1, 0]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  reset_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'reset_text',
    text: 'RESET',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "Question_Anx"
  Question_AnxClock = new util.Clock();
  isQStart = false;
  RatingEndCount=0;
  rt_text_anx = new visual.TextStim({
    win: psychoJS.window,
    name: 'rt_text_anx',
    text: 'highly anxious',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.22)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  lt_text_anx = new visual.TextStim({
    win: psychoJS.window,
    name: 'lt_text_anx',
    text: 'no sense of anxiety',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.22)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  anxiety_rating = new visual.Slider({
    win: psychoJS.window, name: 'anxiety_rating',
    size: [1.0, 0.05], pos: [0, (- 0.3)], units: 'norm',
    labels: ["1", "2", "3", "4", "5", "6", "7"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 0, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('white'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  Question_Name = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question_Name',
    text: 'How anxious are you now?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  MouseClick = new visual.TextStim({
    win: psychoJS.window,
    name: 'MouseClick',
    text: 'Click on the scale to rate the score',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  GRID_Q = new visual.ImageStim({
    win : psychoJS.window,
    name : 'GRID_Q', units : undefined, 
    image : 'GRID.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([(- 1), (- 1), (- 1)]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -7.0 
  });
  cage_Q = new visual.Rect ({
    win: psychoJS.window, name: 'cage_Q', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  playerTIL_Q = new visual.ShapeStim ({
    win: psychoJS.window, name: 'playerTIL_Q', 
    vertices: [[-[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [+[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [0, [(1 / 16), (1 / 16)][1]/2.0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), 1]),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  predator_Q = new visual.Polygon ({
    win: psychoJS.window, name: 'predator_Q', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, (- 1), (- 1)]),
    opacity: 1, depth: -10, interpolate: true,
  });
  
  inform_next = new visual.TextStim({
    win: psychoJS.window,
    name: 'inform_next',
    text: 'Next trial is:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -11.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  GRID = new visual.ImageStim({
    win : psychoJS.window,
    name : 'GRID', units : undefined, 
    image : 'GRID.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([(- 1), (- 1), (- 1)]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  threat = new visual.Rect ({
    win: psychoJS.window, name: 'threat', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 0.3, depth: -2, interpolate: true,
  });
  
  stop_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stop_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  caught_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'caught_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  cage = new visual.Rect ({
    win: psychoJS.window, name: 'cage', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  playerTIL = new visual.ShapeStim ({
    win: psychoJS.window, name: 'playerTIL', 
    vertices: [[-[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [+[(1 / 16), (1 / 16)][0]/2.0, -[(1 / 16), (1 / 16)][1]/2.0], [0, [(1 / 16), (1 / 16)][1]/2.0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  predator = new visual.Polygon ({
    win: psychoJS.window, name: 'predator', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, (- 1), (- 1)]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
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
  attacktimelist = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,20, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,4, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,18, NaN, NaN,9, NaN, NaN, NaN, NaN, NaN, NaN,7, NaN, NaN, NaN,11, NaN, NaN, NaN,5, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,8, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,13, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,6, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,16, NaN, NaN, NaN, NaN,2, NaN, NaN, NaN, NaN,3, NaN, NaN, NaN, NaN, NaN, NaN,12, NaN, NaN, NaN, NaN,14, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,1, NaN, NaN, NaN,10, NaN,19, NaN, NaN, NaN, NaN, NaN, NaN,17, NaN, NaN, NaN, NaN,15, NaN, NaN];
  
  
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
  // Initialize components for Routine "EndExp"
  EndExpClock = new util.Clock();
  EOP = new visual.TextStim({
    win: psychoJS.window,
    name: 'EOP',
    text: 'This is the end of the main experiment.\nIn the remaining part of experiment, you will be asked to complete some surveys.\nIf you are ready, please press ‘Enter’ key.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  EOP_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "embody_postexp_Explanation"
  embody_postexp_ExplanationClock = new util.Clock();
  embody_postexp_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'embody_postexp_instruction',
    text: 'Survey 1.\nWe will ask you about your bodily sensation when you feel specific emotions.\nUse the pictures to indicate the bodily sensations you feel when you feel that emotion.\nPress ‘Enter’ key to move to the next question',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  embody_postexp_Start_Enter = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "embody_q_postexp"
  embody_q_postexpClock = new util.Clock();
  
      
  body_image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'body_image_3', units : undefined, 
    image : 'base.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
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
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  reset_rect_3 = new visual.Rect ({
    win: psychoJS.window, name: 'reset_rect_3', 
    width: [0.1, 0.05][0], height: [0.1, 0.05][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 5, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
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
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  feeling_words = new visual.TextStim({
    win: psychoJS.window,
    name: 'feeling_words',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "DemoQ_Explanation"
  DemoQ_ExplanationClock = new util.Clock();
  DemoQ_Inst_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'DemoQ_Inst_Text',
    text: 'Survey 2.\nWe will ask you about your demographic information.\nPlease answer the questions using keyboard.\nPress ‘Enter’ key to move to the next question',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  DemoQ_Start_Enter = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "DemoQRoutime"
  DemoQRoutimeClock = new util.Clock();
  DemoQ_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  DemoQ_Instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'DemoQ_Instruction',
    text: "Type answers using keyboard and press 'Enter' key",
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.1), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  DemoQ_Answer = new visual.TextStim({
    win: psychoJS.window,
    name: 'DemoQ_Answer',
    text: '""',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  modify = false;
  DemoQ_Answer.text = "";
  DemoQ_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'DemoQ_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: 1, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Underline_DemoQ = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Underline_DemoQ', 
    vertices: [[-[0.3, 0.05][0]/2.0, 0], [+[0.3, 0.05][0]/2.0, 0]],
    ori: 0, pos: [0, (- 0.28)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  YourAnswer = new visual.TextStim({
    win: psychoJS.window,
    name: 'YourAnswer',
    text: 'Answer',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "STAI_Instruction"
  STAI_InstructionClock = new util.Clock();
  STAI_inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'STAI_inst_text',
    text: 'Survey 3.\nA number of statements which people have used to describe themselves are given below. Read each statement and then mark the appropriate number to the right of the statement to indicate HOW YOU GENERALLY FEEL. There are no right or wrong answers. Do not spend too much time on any one statement but give the answer that seems to describe how you generally feel.\n\nUse mouse click to check the answer.\nTo start the survey, please press ‘Enter’ key.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  STAI_inst_enter = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "STAI_Routine"
  STAI_RoutineClock = new util.Clock();
  Line_STAI = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_STAI', units : 'norm', 
    vertices: [[-[1, 1][0]/2.0, 0], [+[1, 1][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  STAI_slider = new visual.Slider({
    win: psychoJS.window, name: 'STAI_slider',
    size: [1.0, 0.04], pos: [0, 0], units: 'norm',
    labels: ["Almost never", "Sometimes", "Often", "Almost Always"], ticks: [1, 2, 3, 4],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.RADIO],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  STAI_Question_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'STAI_Question_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
   RatingEndCount = 0;
  
  MouseClick_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MouseClick_11',
    text: 'Click on the scale to rate the score',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "BISBAS_Instruction"
  BISBAS_InstructionClock = new util.Clock();
  BISBAS_inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'BISBAS_inst_text',
    text: 'Survey 4.\nEach item on this questionnaire is a statement that a person may either agree with or disagree with. For each item, indicate how much you agree or disagree with what the item says. Please respond to all of the items, and choose only one response to each statement. Please be as accurate and honest as you can be. Respond to each item as if it were the only item. That is, don’t worry about being “consistent” in your responses.\n\nUse mouse click to check the answer.\nTo start the survey, please press ‘Enter’ key.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  BISBAS_inst_enter = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BISBAS_Routine"
  BISBAS_RoutineClock = new util.Clock();
  Line_BISBAS = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_BISBAS', units : 'norm', 
    vertices: [[-[1, 1][0]/2.0, 0], [+[1, 1][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  BISBAS_slider = new visual.Slider({
    win: psychoJS.window, name: 'BISBAS_slider',
    size: [1.0, 0.04], pos: [0, 0], units: 'norm',
    labels: ["Strongly Disagree", "Somewhat Disagree", "Somewhat Agree", "Strongly Agree"], ticks: [1, 2, 3, 4],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.RADIO],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  BISBAS_Question_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'BISBAS_Question_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
   RatingEndCount = 0;
  
  MouseClick_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MouseClick_10',
    text: 'Click on the scale to rate the score',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "STICSA_Instruction"
  STICSA_InstructionClock = new util.Clock();
  STICSA_inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'STICSA_inst_text',
    text: 'Survey 5.\nBelow is a list of statements which can be used to describe how people feel. Beside each statement are four numbers which indicate how often each statement is true of you (e.g., 1 not at all 4 very much so). Please read each statement carefully and check the number which best indicates how often, in general, the statement is true of you.\n\nUse mouse click to check the answer.\nTo start the survey, please press ‘Enter’ key.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  STICSA_inst_enter = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "STICSA_Routine"
  STICSA_RoutineClock = new util.Clock();
  Line_STICSA = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_STICSA', units : 'norm', 
    vertices: [[-[1, 1][0]/2.0, 0], [+[1, 1][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  STICSA_slider = new visual.Slider({
    win: psychoJS.window, name: 'STICSA_slider',
    size: [1.0, 0.04], pos: [0, 0], units: 'norm',
    labels: ["Not at all", "A little", "Moderately", "Very much so"], ticks: [1, 2, 3, 4],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.RADIO],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  STICSA_Question_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'STICSA_Question_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
   RatingEndCount = 0;
  
  MouseClick_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MouseClick_7',
    text: 'Click on the scale to rate the score',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "BPQ_instruction"
  BPQ_instructionClock = new util.Clock();
  BPQ_inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'BPQ_inst_text',
    text: 'Survey 6.\nPlease rate your awareness on each of the characteristics described below. Select the answer that most accurately describes you.\n\nUse mouse click to check the answer.\nTo start the survey, please press ‘Enter’ key.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  BPQ_inst_enter = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BPQ_Routine"
  BPQ_RoutineClock = new util.Clock();
  Line_BPQ = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_BPQ', units : 'norm', 
    vertices: [[-[1, 1][0]/2.0, 0], [+[1, 1][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  BPQ_slider = new visual.Slider({
    win: psychoJS.window, name: 'BPQ_slider',
    size: [1.0, 0.04], pos: [0, 0], units: 'norm',
    labels: ["Never", "Occasionally", "Sometimes", "Usually", "Always"], ticks: [1, 2, 3, 4, 5],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.RADIO],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  BPQ_Question_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'BPQ_Question_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
   RatingEndCount = 0;
  
  BPQ_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'BPQ_text2',
    text: 'During most situations I am aware of:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  MouseClick_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MouseClick_9',
    text: 'Click on the scale to rate the score',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "DASS21_Instruction"
  DASS21_InstructionClock = new util.Clock();
  DASS21_inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'DASS21_inst_text',
    text: 'Survey 7.\nPlease read each statement and click a number 0, 1, 2 or 3 that indicates how much the statement applies to you in general. There are no right or wrong answers. Do not spend too much time on any statement. \n\nUse mouse click to check the answer.\nTo start the survey, please press ‘Enter’ key.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  DASS21_inst_enter = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "DASS21_Routine"
  DASS21_RoutineClock = new util.Clock();
  Line_DASS21 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_DASS21', units : 'norm', 
    vertices: [[-[1, 1][0]/2.0, 0], [+[1, 1][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  DASS21_slider = new visual.Slider({
    win: psychoJS.window, name: 'DASS21_slider',
    size: [1.0, 0.04], pos: [0, 0], units: 'norm',
    labels: ["Does not apply to me at all", "Applies to me to some degree, \n or some of the time", "Applies to me to a considerable degree,\n or a good part of the time", "Applies to me very much,\n or most of the time"], ticks: [1, 2, 3, 4],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.RADIO],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  DASS21_Question_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'DASS21_Question_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
   RatingEndCount = 0;
  
  // Initialize components for Routine "MAIA_Instruction"
  MAIA_InstructionClock = new util.Clock();
  MAIA_inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'MAIA_inst_text',
    text: 'Survey 8.\nBelow you will find a list of statements. Please indicate how often each statement applies to you generally in daily life.\n\nUse mouse click to check the answer.\nTo start the survey, please press ‘Enter’ key.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  MAIA_inst_enter = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MAIA_Routine"
  MAIA_RoutineClock = new util.Clock();
  Line_MAIA = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Line_MAIA', units : 'norm', 
    vertices: [[-[1, 1][0]/2.0, 0], [+[1, 1][0]/2.0, 0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  MAIA_slider = new visual.Slider({
    win: psychoJS.window, name: 'MAIA_slider',
    size: [1.0, 0.04], pos: [0, 0], units: 'norm',
    labels: ["Never", "", "", "", "", "Always"], ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1, style: [visual.Slider.Style.RATING, visual.Slider.Style.RADIO],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  MAIA_Question_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'MAIA_Question_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
   RatingEndCount = 0;
  
  MouseClick_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'MouseClick_8',
    text: 'Click on the scale to rate the score',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "FinalScreen"
  FinalScreenClock = new util.Clock();
  FinalText = new visual.TextStim({
    win: psychoJS.window,
    name: 'FinalText',
    text: 'You completed all experiments.\nThank you for your patience.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _Consent_Press_Space_allKeys;
var IRB_ConsentComponents;
function IRB_ConsentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'IRB_Consent'-------
    t = 0;
    IRB_ConsentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Consent_Slide_Image.setImage(ConSlide);
    Consent_Press_Space.keys = undefined;
    Consent_Press_Space.rt = undefined;
    _Consent_Press_Space_allKeys = [];
    // keep track of which components have finished
    IRB_ConsentComponents = [];
    IRB_ConsentComponents.push(Consent_Slide_Image);
    IRB_ConsentComponents.push(Consent_Press_Space);
    
    IRB_ConsentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IRB_ConsentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'IRB_Consent'-------
    // get current time
    t = IRB_ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    let inst_move_keys = psychoJS.eventManager.getKeys();
    if (inst_move_keys.length > 0) {  // at least one key was pressed
      move_inst = inst_move_keys[inst_move_keys.length-1]; 
      }
    
    if ((irb_page>1)&&(move_inst=='left')) {
        irb_page -= 1;
        ConSlide= 'Con'+irb_page+'.png';
        Consent_Slide_Image.setImage(ConSlide);
        }
    if (move_inst=='right') {
        irb_page += 1;
        if (irb_page==6) {
            continueRoutine = false;
            } else {
                ConSlide= 'Con'+irb_page+'.png';
                Consent_Slide_Image.setImage(ConSlide);
                }   
        }
    move_inst = '';
    
    // *Consent_Slide_Image* updates
    if (t >= 0.0 && Consent_Slide_Image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_Slide_Image.tStart = t;  // (not accounting for frame time here)
      Consent_Slide_Image.frameNStart = frameN;  // exact frame index
      
      Consent_Slide_Image.setAutoDraw(true);
    }

    
    if (Consent_Slide_Image.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Consent_Slide_Image.setImage(ConSlide, false);
    }
    
    // *Consent_Press_Space* updates
    if (t >= 0.0 && Consent_Press_Space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_Press_Space.tStart = t;  // (not accounting for frame time here)
      Consent_Press_Space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Consent_Press_Space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Consent_Press_Space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Consent_Press_Space.clearEvents(); });
    }

    if (Consent_Press_Space.status === PsychoJS.Status.STARTED) {
      let theseKeys = Consent_Press_Space.getKeys({keyList: ['y', 'n', 'space', 'left', 'right'], waitRelease: false});
      _Consent_Press_Space_allKeys = _Consent_Press_Space_allKeys.concat(theseKeys);
      if (_Consent_Press_Space_allKeys.length > 0) {
        Consent_Press_Space.keys = _Consent_Press_Space_allKeys[_Consent_Press_Space_allKeys.length - 1].name;  // just the last key pressed
        Consent_Press_Space.rt = _Consent_Press_Space_allKeys[_Consent_Press_Space_allKeys.length - 1].rt;
      }
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
    IRB_ConsentComponents.forEach( function(thisComponent) {
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


function IRB_ConsentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'IRB_Consent'-------
    IRB_ConsentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Consent_Press_Space.keys', Consent_Press_Space.keys);
    if (typeof Consent_Press_Space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Consent_Press_Space.rt', Consent_Press_Space.rt);
        }
    
    Consent_Press_Space.stop();
    // the Routine "IRB_Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Consent_Key_allKeys;
var ConsentComponents;
function ConsentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Consent'-------
    t = 0;
    ConsentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Consent_Key.keys = undefined;
    Consent_Key.rt = undefined;
    _Consent_Key_allKeys = [];
    TotalExpTime.push(TotalExpClock.getTime());
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(Consent_Key);
    ConsentComponents.push(Final_Consent_Image);
    
    ConsentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var ConsentAdd;
function ConsentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Consent'-------
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Consent_Key* updates
    if (t >= 0.0 && Consent_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Consent_Key.tStart = t;  // (not accounting for frame time here)
      Consent_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Consent_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Consent_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Consent_Key.clearEvents(); });
    }

    if (Consent_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Consent_Key.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _Consent_Key_allKeys = _Consent_Key_allKeys.concat(theseKeys);
      if (_Consent_Key_allKeys.length > 0) {
        Consent_Key.keys = _Consent_Key_allKeys[_Consent_Key_allKeys.length - 1].name;  // just the last key pressed
        Consent_Key.rt = _Consent_Key_allKeys[_Consent_Key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    let theseKeys = psychoJS.eventManager.getKeys();
    if (theseKeys.length > 0) {  // at least one key was pressed
      ConsentAdd= theseKeys[theseKeys.length-1]; 
      }
    if (ConsentAdd==='n') {
         return quitPsychoJS('Thank you, see you next time', false);
        }
    
    // *Final_Consent_Image* updates
    if (t >= 0.0 && Final_Consent_Image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Final_Consent_Image.tStart = t;  // (not accounting for frame time here)
      Final_Consent_Image.frameNStart = frameN;  // exact frame index
      
      Final_Consent_Image.setAutoDraw(true);
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
    ConsentComponents.forEach( function(thisComponent) {
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


function ConsentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Consent'-------
    ConsentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Consent_Key.keys', Consent_Key.keys);
    if (typeof Consent_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Consent_Key.rt', Consent_Key.rt);
        routineTimer.reset();
        }
    
    Consent_Key.stop();
    TotalExpTime.push(TotalExpClock.getTime());
    psychoJS.experiment.addData('Time_StartInstruction',TotalExpClock.getTime());
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instruction_Press_Space_allKeys;
var IntroductionComponents;
function IntroductionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Introduction'-------
    t = 0;
    IntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instruction_Image.setImage(i_image);
    Instruction_Press_Space.keys = undefined;
    Instruction_Press_Space.rt = undefined;
    _Instruction_Press_Space_allKeys = [];
    // keep track of which components have finished
    IntroductionComponents = [];
    IntroductionComponents.push(Instruction_Image);
    IntroductionComponents.push(Instruction_Press_Space);
    
    IntroductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntroductionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Introduction'-------
    // get current time
    t = IntroductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    let inst_move_keys = psychoJS.eventManager.getKeys();
    if (inst_move_keys.length > 0) {  // at least one key was pressed
      move_inst = inst_move_keys[inst_move_keys.length-1]; 
      }
    
    if ((inst_page>1)&&(move_inst=='left')) {
        inst_page -= 1;
        i_image = 'I'+inst_page+'.png';
        Instruction_Image.setImage(i_image);
        }
    if (move_inst=='right') {
        inst_page += 1;
        if (inst_page==7) {
            continueRoutine = false;
            } else {
                i_image = 'I'+inst_page+'.png';
                Instruction_Image.setImage(i_image);
                }   
        }
    move_inst = '';
    
    // *Instruction_Image* updates
    if (t >= 0.0 && Instruction_Image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_Image.tStart = t;  // (not accounting for frame time here)
      Instruction_Image.frameNStart = frameN;  // exact frame index
      
      Instruction_Image.setAutoDraw(true);
    }

    
    if (Instruction_Image.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Instruction_Image.setImage(i_image, false);
    }
    
    // *Instruction_Press_Space* updates
    if (t >= 0.0 && Instruction_Press_Space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_Press_Space.tStart = t;  // (not accounting for frame time here)
      Instruction_Press_Space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruction_Press_Space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruction_Press_Space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruction_Press_Space.clearEvents(); });
    }

    if (Instruction_Press_Space.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruction_Press_Space.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _Instruction_Press_Space_allKeys = _Instruction_Press_Space_allKeys.concat(theseKeys);
      if (_Instruction_Press_Space_allKeys.length > 0) {
        Instruction_Press_Space.keys = _Instruction_Press_Space_allKeys[_Instruction_Press_Space_allKeys.length - 1].name;  // just the last key pressed
        Instruction_Press_Space.rt = _Instruction_Press_Space_allKeys[_Instruction_Press_Space_allKeys.length - 1].rt;
      }
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
    IntroductionComponents.forEach( function(thisComponent) {
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


function IntroductionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Introduction'-------
    IntroductionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instruction_Press_Space.keys', Instruction_Press_Space.keys);
    if (typeof Instruction_Press_Space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruction_Press_Space.rt', Instruction_Press_Space.rt);
        }
    
    Instruction_Press_Space.stop();
    // the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instruction_Space_Final_allKeys;
var Instruction_Final_PageComponents;
function Instruction_Final_PageRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instruction_Final_Page'-------
    t = 0;
    Instruction_Final_PageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instruction_Space_Final.keys = undefined;
    Instruction_Space_Final.rt = undefined;
    _Instruction_Space_Final_allKeys = [];
    // keep track of which components have finished
    Instruction_Final_PageComponents = [];
    Instruction_Final_PageComponents.push(Instruction_Space_Final);
    Instruction_Final_PageComponents.push(Instruction_Image_Final);
    Instruction_Final_PageComponents.push(text);
    
    Instruction_Final_PageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instruction_Final_PageRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instruction_Final_Page'-------
    // get current time
    t = Instruction_Final_PageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_Space_Final* updates
    if (t >= 0.0 && Instruction_Space_Final.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_Space_Final.tStart = t;  // (not accounting for frame time here)
      Instruction_Space_Final.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instruction_Space_Final.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instruction_Space_Final.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instruction_Space_Final.clearEvents(); });
    }

    if (Instruction_Space_Final.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instruction_Space_Final.getKeys({keyList: ['space', ''], waitRelease: false});
      _Instruction_Space_Final_allKeys = _Instruction_Space_Final_allKeys.concat(theseKeys);
      if (_Instruction_Space_Final_allKeys.length > 0) {
        Instruction_Space_Final.keys = _Instruction_Space_Final_allKeys[_Instruction_Space_Final_allKeys.length - 1].name;  // just the last key pressed
        Instruction_Space_Final.rt = _Instruction_Space_Final_allKeys[_Instruction_Space_Final_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Instruction_Image_Final* updates
    if (t >= 0.0 && Instruction_Image_Final.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_Image_Final.tStart = t;  // (not accounting for frame time here)
      Instruction_Image_Final.frameNStart = frameN;  // exact frame index
      
      Instruction_Image_Final.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
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
    Instruction_Final_PageComponents.forEach( function(thisComponent) {
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


function Instruction_Final_PageRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instruction_Final_Page'-------
    Instruction_Final_PageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instruction_Space_Final.keys', Instruction_Space_Final.keys);
    if (typeof Instruction_Space_Final.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instruction_Space_Final.rt', Instruction_Space_Final.rt);
        routineTimer.reset();
        }
    
    Instruction_Space_Final.stop();
    // the Routine "Instruction_Final_Page" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var example_loop;
var currentLoop;
function example_loopLoopBegin(example_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  example_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'example_loop'
  });
  psychoJS.experiment.addLoop(example_loop); // add the loop to the experiment
  currentLoop = example_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  example_loop.forEach(function() {
    const snapshot = example_loop.getSnapshot();

    example_loopLoopScheduler.add(importConditions(snapshot));
    example_loopLoopScheduler.add(start_exampleRoutineBegin(snapshot));
    example_loopLoopScheduler.add(start_exampleRoutineEachFrame(snapshot));
    example_loopLoopScheduler.add(start_exampleRoutineEnd(snapshot));
    example_loopLoopScheduler.add(Question_Anx_ExampleRoutineBegin(snapshot));
    example_loopLoopScheduler.add(Question_Anx_ExampleRoutineEachFrame(snapshot));
    example_loopLoopScheduler.add(Question_Anx_ExampleRoutineEnd(snapshot));
    example_loopLoopScheduler.add(trial_exampleRoutineBegin(snapshot));
    example_loopLoopScheduler.add(trial_exampleRoutineEachFrame(snapshot));
    example_loopLoopScheduler.add(trial_exampleRoutineEnd(snapshot));
    example_loopLoopScheduler.add(embody_q_exampleRoutineBegin(snapshot));
    example_loopLoopScheduler.add(embody_q_exampleRoutineEachFrame(snapshot));
    example_loopLoopScheduler.add(embody_q_exampleRoutineEnd(snapshot));
    example_loopLoopScheduler.add(endLoopIteration(example_loopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function example_loopLoopEnd() {
  psychoJS.experiment.removeLoop(example_loop);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: Ntrial, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(dummy_trial_embodyRoutineBegin(snapshot));
    trialsLoopScheduler.add(dummy_trial_embodyRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(dummy_trial_embodyRoutineEnd(snapshot));
    trialsLoopScheduler.add(embody_qRoutineBegin(snapshot));
    trialsLoopScheduler.add(embody_qRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(embody_qRoutineEnd(snapshot));
    trialsLoopScheduler.add(Question_AnxRoutineBegin(snapshot));
    trialsLoopScheduler.add(Question_AnxRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(Question_AnxRoutineEnd(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var embody_postexp_loop;
function embody_postexp_loopLoopBegin(embody_postexp_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  embody_postexp_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'feel_word_list.xlsx',
    seed: undefined, name: 'embody_postexp_loop'
  });
  psychoJS.experiment.addLoop(embody_postexp_loop); // add the loop to the experiment
  currentLoop = embody_postexp_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  embody_postexp_loop.forEach(function() {
    const snapshot = embody_postexp_loop.getSnapshot();

    embody_postexp_loopLoopScheduler.add(importConditions(snapshot));
    embody_postexp_loopLoopScheduler.add(embody_q_postexpRoutineBegin(snapshot));
    embody_postexp_loopLoopScheduler.add(embody_q_postexpRoutineEachFrame(snapshot));
    embody_postexp_loopLoopScheduler.add(embody_q_postexpRoutineEnd(snapshot));
    embody_postexp_loopLoopScheduler.add(endLoopIteration(embody_postexp_loopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function embody_postexp_loopLoopEnd() {
  psychoJS.experiment.removeLoop(embody_postexp_loop);

  return Scheduler.Event.NEXT;
}


var DemoQLoop;
function DemoQLoopLoopBegin(DemoQLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  DemoQLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'DemoQuestions.xlsx',
    seed: undefined, name: 'DemoQLoop'
  });
  psychoJS.experiment.addLoop(DemoQLoop); // add the loop to the experiment
  currentLoop = DemoQLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  DemoQLoop.forEach(function() {
    const snapshot = DemoQLoop.getSnapshot();

    DemoQLoopLoopScheduler.add(importConditions(snapshot));
    DemoQLoopLoopScheduler.add(DemoQRoutimeRoutineBegin(snapshot));
    DemoQLoopLoopScheduler.add(DemoQRoutimeRoutineEachFrame(snapshot));
    DemoQLoopLoopScheduler.add(DemoQRoutimeRoutineEnd(snapshot));
    DemoQLoopLoopScheduler.add(endLoopIteration(DemoQLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function DemoQLoopLoopEnd() {
  psychoJS.experiment.removeLoop(DemoQLoop);

  return Scheduler.Event.NEXT;
}


var STAILoop;
function STAILoopLoopBegin(STAILoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  STAILoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'STAIT.xlsx',
    seed: undefined, name: 'STAILoop'
  });
  psychoJS.experiment.addLoop(STAILoop); // add the loop to the experiment
  currentLoop = STAILoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  STAILoop.forEach(function() {
    const snapshot = STAILoop.getSnapshot();

    STAILoopLoopScheduler.add(importConditions(snapshot));
    STAILoopLoopScheduler.add(STAI_RoutineRoutineBegin(snapshot));
    STAILoopLoopScheduler.add(STAI_RoutineRoutineEachFrame(snapshot));
    STAILoopLoopScheduler.add(STAI_RoutineRoutineEnd(snapshot));
    STAILoopLoopScheduler.add(endLoopIteration(STAILoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function STAILoopLoopEnd() {
  psychoJS.experiment.removeLoop(STAILoop);

  return Scheduler.Event.NEXT;
}


var BISBASLoop;
function BISBASLoopLoopBegin(BISBASLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  BISBASLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'BisBasQ.xlsx',
    seed: undefined, name: 'BISBASLoop'
  });
  psychoJS.experiment.addLoop(BISBASLoop); // add the loop to the experiment
  currentLoop = BISBASLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  BISBASLoop.forEach(function() {
    const snapshot = BISBASLoop.getSnapshot();

    BISBASLoopLoopScheduler.add(importConditions(snapshot));
    BISBASLoopLoopScheduler.add(BISBAS_RoutineRoutineBegin(snapshot));
    BISBASLoopLoopScheduler.add(BISBAS_RoutineRoutineEachFrame(snapshot));
    BISBASLoopLoopScheduler.add(BISBAS_RoutineRoutineEnd(snapshot));
    BISBASLoopLoopScheduler.add(endLoopIteration(BISBASLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function BISBASLoopLoopEnd() {
  psychoJS.experiment.removeLoop(BISBASLoop);

  return Scheduler.Event.NEXT;
}


var STICSA_Loop;
function STICSA_LoopLoopBegin(STICSA_LoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  STICSA_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'STICSA.xlsx',
    seed: undefined, name: 'STICSA_Loop'
  });
  psychoJS.experiment.addLoop(STICSA_Loop); // add the loop to the experiment
  currentLoop = STICSA_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  STICSA_Loop.forEach(function() {
    const snapshot = STICSA_Loop.getSnapshot();

    STICSA_LoopLoopScheduler.add(importConditions(snapshot));
    STICSA_LoopLoopScheduler.add(STICSA_RoutineRoutineBegin(snapshot));
    STICSA_LoopLoopScheduler.add(STICSA_RoutineRoutineEachFrame(snapshot));
    STICSA_LoopLoopScheduler.add(STICSA_RoutineRoutineEnd(snapshot));
    STICSA_LoopLoopScheduler.add(endLoopIteration(STICSA_LoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function STICSA_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(STICSA_Loop);

  return Scheduler.Event.NEXT;
}


var BPQ_Loop;
function BPQ_LoopLoopBegin(BPQ_LoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  BPQ_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'BPQ.xlsx',
    seed: undefined, name: 'BPQ_Loop'
  });
  psychoJS.experiment.addLoop(BPQ_Loop); // add the loop to the experiment
  currentLoop = BPQ_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  BPQ_Loop.forEach(function() {
    const snapshot = BPQ_Loop.getSnapshot();

    BPQ_LoopLoopScheduler.add(importConditions(snapshot));
    BPQ_LoopLoopScheduler.add(BPQ_RoutineRoutineBegin(snapshot));
    BPQ_LoopLoopScheduler.add(BPQ_RoutineRoutineEachFrame(snapshot));
    BPQ_LoopLoopScheduler.add(BPQ_RoutineRoutineEnd(snapshot));
    BPQ_LoopLoopScheduler.add(endLoopIteration(BPQ_LoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function BPQ_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(BPQ_Loop);

  return Scheduler.Event.NEXT;
}


var DASS21_Loop;
function DASS21_LoopLoopBegin(DASS21_LoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  DASS21_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'DASS21.xlsx',
    seed: undefined, name: 'DASS21_Loop'
  });
  psychoJS.experiment.addLoop(DASS21_Loop); // add the loop to the experiment
  currentLoop = DASS21_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  DASS21_Loop.forEach(function() {
    const snapshot = DASS21_Loop.getSnapshot();

    DASS21_LoopLoopScheduler.add(importConditions(snapshot));
    DASS21_LoopLoopScheduler.add(DASS21_RoutineRoutineBegin(snapshot));
    DASS21_LoopLoopScheduler.add(DASS21_RoutineRoutineEachFrame(snapshot));
    DASS21_LoopLoopScheduler.add(DASS21_RoutineRoutineEnd(snapshot));
    DASS21_LoopLoopScheduler.add(endLoopIteration(DASS21_LoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function DASS21_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(DASS21_Loop);

  return Scheduler.Event.NEXT;
}


var MAIA_Loop;
function MAIA_LoopLoopBegin(MAIA_LoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  MAIA_Loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'MAIA.xlsx',
    seed: undefined, name: 'MAIA_Loop'
  });
  psychoJS.experiment.addLoop(MAIA_Loop); // add the loop to the experiment
  currentLoop = MAIA_Loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  MAIA_Loop.forEach(function() {
    const snapshot = MAIA_Loop.getSnapshot();

    MAIA_LoopLoopScheduler.add(importConditions(snapshot));
    MAIA_LoopLoopScheduler.add(MAIA_RoutineRoutineBegin(snapshot));
    MAIA_LoopLoopScheduler.add(MAIA_RoutineRoutineEachFrame(snapshot));
    MAIA_LoopLoopScheduler.add(MAIA_RoutineRoutineEnd(snapshot));
    MAIA_LoopLoopScheduler.add(endLoopIteration(MAIA_LoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function MAIA_LoopLoopEnd() {
  psychoJS.experiment.removeLoop(MAIA_Loop);

  return Scheduler.Event.NEXT;
}


var start_exampleComponents;
function start_exampleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'start_example'-------
    t = 0;
    start_exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    start_exampleComponents = [];
    start_exampleComponents.push(start_fix_2);
    
    start_exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function start_exampleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'start_example'-------
    // get current time
    t = start_exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_fix_2* updates
    if (t >= 0.0 && start_fix_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_fix_2.tStart = t;  // (not accounting for frame time here)
      start_fix_2.frameNStart = frameN;  // exact frame index
      
      start_fix_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((start_fix_2.status === PsychoJS.Status.STARTED || start_fix_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      start_fix_2.setAutoDraw(false);
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
    start_exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_exampleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'start_example'-------
    start_exampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var Question_Anx_ExampleComponents;
function Question_Anx_ExampleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Question_Anx_Example'-------
    t = 0;
    Question_Anx_ExampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(12.000000);
    // update component parameters for each repeat
    if (tn_example==0) {
        isQStart = true;
        } else {
            isQStart = false;
           }
    if (isQStart) {
        RatingEndCount=0;        
        }
    anxiety_rating_3.reset()
    if (condition==0) {
        condname = "safe";
        iscage = 1;
        cagecolor = [-1,-1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 0;
        } else if (condition==1) {
        condname = "pre_encounter";
        iscage = 1;
        cagecolor = [-1,-1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 1/16;
        } else if (condition==2) {
        condname = "post_encounter";
        iscage = 1;
        cagecolor = [-1,1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 1/16;
        } else if (condition==3) {
        condname = "circa_strike";
        iscage = 0;
        cagecolor = [-1,-1,-1];
        cagethick = 0;
        cagesize = [0, 0];
        predsize = 1/16;
        } 
    cage_Q_2.setSize(cagesize);
    cage_Q_2.setLineColor(new util.Color(cagecolor));
    cage_Q_2.setLineWidth(cagethick);
    playerTIL_Q_2.setPos(playerTILpos);
    predator_Q_2.setPos(predpos);
    predator_Q_2.setSize(predsize);
    predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
    predator_Q_2.setPos(predpos);
        
    playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
    playerTIL_Q_2.setPos(playerTILpos);
    // keep track of which components have finished
    Question_Anx_ExampleComponents = [];
    Question_Anx_ExampleComponents.push(anxiety_rating_3);
    Question_Anx_ExampleComponents.push(rt_text_anx_2);
    Question_Anx_ExampleComponents.push(lt_text_anx_2);
    Question_Anx_ExampleComponents.push(Question_Name_3);
    Question_Anx_ExampleComponents.push(MouseClick_3);
    Question_Anx_ExampleComponents.push(GRID_Q_2);
    Question_Anx_ExampleComponents.push(cage_Q_2);
    Question_Anx_ExampleComponents.push(playerTIL_Q_2);
    Question_Anx_ExampleComponents.push(predator_Q_2);
    Question_Anx_ExampleComponents.push(inform_next_2);
    
    Question_Anx_ExampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Question_Anx_ExampleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Question_Anx_Example'-------
    // get current time
    t = Question_Anx_ExampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Check Confidence_rating for response to end routine
    if ((anxiety_rating_3.getRating() !== undefined) && (anxiety_rating_3.status === PsychoJS.Status.STARTED)) {
        RatingEndCount+=1;
        if (RatingEndCount>20) {
          continueRoutine = false; 
          }
      }
    if (!isQStart) {
        continueRoutine = false; 
        }
    
    // *anxiety_rating_3* updates
    if (t >= 2 && anxiety_rating_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      anxiety_rating_3.tStart = t;  // (not accounting for frame time here)
      anxiety_rating_3.frameNStart = frameN;  // exact frame index
      
      anxiety_rating_3.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((anxiety_rating_3.status === PsychoJS.Status.STARTED || anxiety_rating_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      anxiety_rating_3.setAutoDraw(false);
    }
    
    // *rt_text_anx_2* updates
    if (t >= 2 && rt_text_anx_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rt_text_anx_2.tStart = t;  // (not accounting for frame time here)
      rt_text_anx_2.frameNStart = frameN;  // exact frame index
      
      rt_text_anx_2.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rt_text_anx_2.status === PsychoJS.Status.STARTED || rt_text_anx_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rt_text_anx_2.setAutoDraw(false);
    }
    
    // *lt_text_anx_2* updates
    if (t >= 2 && lt_text_anx_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lt_text_anx_2.tStart = t;  // (not accounting for frame time here)
      lt_text_anx_2.frameNStart = frameN;  // exact frame index
      
      lt_text_anx_2.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((lt_text_anx_2.status === PsychoJS.Status.STARTED || lt_text_anx_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      lt_text_anx_2.setAutoDraw(false);
    }
    
    // *Question_Name_3* updates
    if (t >= 2 && Question_Name_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_Name_3.tStart = t;  // (not accounting for frame time here)
      Question_Name_3.frameNStart = frameN;  // exact frame index
      
      Question_Name_3.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Question_Name_3.status === PsychoJS.Status.STARTED || Question_Name_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Question_Name_3.setAutoDraw(false);
    }
    
    // *MouseClick_3* updates
    if (t >= 2 && MouseClick_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MouseClick_3.tStart = t;  // (not accounting for frame time here)
      MouseClick_3.frameNStart = frameN;  // exact frame index
      
      MouseClick_3.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((MouseClick_3.status === PsychoJS.Status.STARTED || MouseClick_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      MouseClick_3.setAutoDraw(false);
    }
    
    // *GRID_Q_2* updates
    if (t >= 0.0 && GRID_Q_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GRID_Q_2.tStart = t;  // (not accounting for frame time here)
      GRID_Q_2.frameNStart = frameN;  // exact frame index
      
      GRID_Q_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((GRID_Q_2.status === PsychoJS.Status.STARTED || GRID_Q_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      GRID_Q_2.setAutoDraw(false);
    }
    
    // *cage_Q_2* updates
    if (t >= 0.0 && cage_Q_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cage_Q_2.tStart = t;  // (not accounting for frame time here)
      cage_Q_2.frameNStart = frameN;  // exact frame index
      
      cage_Q_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cage_Q_2.status === PsychoJS.Status.STARTED || cage_Q_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cage_Q_2.setAutoDraw(false);
    }
    
    // *playerTIL_Q_2* updates
    if (t >= 0.0 && playerTIL_Q_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      playerTIL_Q_2.tStart = t;  // (not accounting for frame time here)
      playerTIL_Q_2.frameNStart = frameN;  // exact frame index
      
      playerTIL_Q_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((playerTIL_Q_2.status === PsychoJS.Status.STARTED || playerTIL_Q_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      playerTIL_Q_2.setAutoDraw(false);
    }
    
    // *predator_Q_2* updates
    if (t >= 0.0 && predator_Q_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      predator_Q_2.tStart = t;  // (not accounting for frame time here)
      predator_Q_2.frameNStart = frameN;  // exact frame index
      
      predator_Q_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((predator_Q_2.status === PsychoJS.Status.STARTED || predator_Q_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      predator_Q_2.setAutoDraw(false);
    }
    
    // *inform_next_2* updates
    if (t >= 0.0 && inform_next_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inform_next_2.tStart = t;  // (not accounting for frame time here)
      inform_next_2.frameNStart = frameN;  // exact frame index
      
      inform_next_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((inform_next_2.status === PsychoJS.Status.STARTED || inform_next_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      inform_next_2.setAutoDraw(false);
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
    Question_Anx_ExampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Question_Anx_ExampleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Question_Anx_Example'-------
    Question_Anx_ExampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    
    
    psychoJS.experiment.addData('anxiety_rating_3.response', anxiety_rating_3.getRating());
    psychoJS.experiment.addData('anxiety_rating_3.rt', anxiety_rating_3.getRT());
    return Scheduler.Event.NEXT;
  };
}


var attacktime;
var trial_exampleComponents;
function trial_exampleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial_example'-------
    t = 0;
    trial_exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (condition==0) {
        condname = "safe";
        iscage = 1;
        cagecolor = [-1,-1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 0;
        predcoord = [100,100];
        thn_c=10;
        threatsize = [1/16,1/16];
        } else if (condition==1) {
        condname = "pre_encounter";
        iscage = 1;
        cagecolor = [-1,-1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 1/16;
        predcoord = [Math.floor(randunif(7,9,1)[0]),Math.floor(randunif(7,9,1)[0])];
        thn_c=10;
        threatsize = [1/16,1/16];
        } else if (condition==2) {
        condname = "post_encounter";
        iscage = 1;
        cagecolor = [-1,1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 1/16;
        predcoord = [Math.floor(randunif(7,9,1)[0]),Math.floor(randunif(7,9,1)[0])];
        thn_c=10;
        threatsize = [1/16,1/16];
        } else if (condition==3) {
        condname = "circa_strike";
        iscage = 0;
        cagecolor = [-1,-1,-1];
        cagethick = 0;
        cagesize = [0, 0];
        predsize = 1/16;
        predcoord = [Math.floor(randunif(0,16,1)[0]),Math.floor(randunif(0,16,1)[0])];
        thn_c=10;
        threatsize = [0,0];
        } 
    threat_3.setPos(threatpos);
    threat_3.setSize([0, 0]);
    threat_3.setFillColor(new util.Color(threatcolor));
    stop_text_3.setText(stopmsg);
    caught_text_3.setText(caught_msg);
    cage_3.setSize(cagesize);
    cage_3.setLineColor(new util.Color(cagecolor));
    cage_3.setLineWidth(cagethick);
    playerTIL_3.setPos(playerTILpos);
    predator_3.setPos(predpos);
    predator_3.setSize(predsize);
    //// out of cage
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
    playerTILspd = playerTILspd0;
    caught_msg = "";
    caught_flag=0;
    
    predcoord = [7,8];
    predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
    predator_3.setPos(predpos);
    
    prev_attack_time = 0;
    
    playerTILcoord=[Math.floor(randunif(0,16,1)[0]),Math.floor(randunif(0,16,1)[0])];
    while (((playerTILcoord[0]>6) && (playerTILcoord[0]<9)) && ((playerTILcoord[1]>6) && (playerTILcoord[1]<9))) {
        playerTILcoord = [Math.floor(randunif(0,16,1)[0]),Math.floor(randunif(0,16,1)[0])];
        }
    playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
    playerTIL_3.setPos(playerTILpos);
    
    thmov_ind=0; // (each routine) 
    threatcoord = [movpt[condition][0][4*thn_c+thmov_ind],movpt[condition][1][4*thn_c+thmov_ind]] //(every update of threat position)
    threatpos = [threatcoord[0]*unit-0.5+unit/2, threatcoord[1]*unit-0.5+unit/2];
    
    threat_3.setPos(threatpos);
    attacktime = 2+Math.floor(Math.random()*8)*2;
    threat_flag=0;
    caught = 0;
    get_threat = 0;
    
    stop_t = 0;
    stop_dur = 0;
    stop_flag = 0;        
    stopmsg = "";
    stopped = 0;
    
    stop_text_3.setText(stopmsg);
    caught_text_3.setText(caught_msg);
    
    playerTILx_t=[];
    playerTILy_t=[];
    predx_t=[];
    predy_t=[];
    threatpos_t=[];
    playerTILspd_t = [];
    predspd_t = [];
    
    trialtime = [];
    trialframe = [];
    // keep track of which components have finished
    trial_exampleComponents = [];
    trial_exampleComponents.push(GRID_3);
    trial_exampleComponents.push(threat_3);
    trial_exampleComponents.push(stop_text_3);
    trial_exampleComponents.push(caught_text_3);
    trial_exampleComponents.push(cage_3);
    trial_exampleComponents.push(playerTIL_3);
    trial_exampleComponents.push(predator_3);
    trial_exampleComponents.push(move_away_flash);
    
    trial_exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_exampleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial_example'-------
    // get current time
    t = trial_exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *GRID_3* updates
    if (t >= 0.0 && GRID_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GRID_3.tStart = t;  // (not accounting for frame time here)
      GRID_3.frameNStart = frameN;  // exact frame index
      
      GRID_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((GRID_3.status === PsychoJS.Status.STARTED || GRID_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      GRID_3.setAutoDraw(false);
    }
    
    // *threat_3* updates
    if (t >= 0.0 && threat_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      threat_3.tStart = t;  // (not accounting for frame time here)
      threat_3.frameNStart = frameN;  // exact frame index
      
      threat_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((threat_3.status === PsychoJS.Status.STARTED || threat_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      threat_3.setAutoDraw(false);
    }
    
    // *stop_text_3* updates
    if (t >= 0.0 && stop_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_text_3.tStart = t;  // (not accounting for frame time here)
      stop_text_3.frameNStart = frameN;  // exact frame index
      
      stop_text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stop_text_3.status === PsychoJS.Status.STARTED || stop_text_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stop_text_3.setAutoDraw(false);
    }
    
    // *caught_text_3* updates
    if (t >= 0.0 && caught_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      caught_text_3.tStart = t;  // (not accounting for frame time here)
      caught_text_3.frameNStart = frameN;  // exact frame index
      
      caught_text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((caught_text_3.status === PsychoJS.Status.STARTED || caught_text_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      caught_text_3.setAutoDraw(false);
    }
    
    // *cage_3* updates
    if (t >= 0.0 && cage_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cage_3.tStart = t;  // (not accounting for frame time here)
      cage_3.frameNStart = frameN;  // exact frame index
      
      cage_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cage_3.status === PsychoJS.Status.STARTED || cage_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cage_3.setAutoDraw(false);
    }
    
    // *playerTIL_3* updates
    if (t >= 0.0 && playerTIL_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      playerTIL_3.tStart = t;  // (not accounting for frame time here)
      playerTIL_3.frameNStart = frameN;  // exact frame index
      
      playerTIL_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((playerTIL_3.status === PsychoJS.Status.STARTED || playerTIL_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      playerTIL_3.setAutoDraw(false);
    }
    
    // *predator_3* updates
    if (t >= 0.0 && predator_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      predator_3.tStart = t;  // (not accounting for frame time here)
      predator_3.frameNStart = frameN;  // exact frame index
      
      predator_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((predator_3.status === PsychoJS.Status.STARTED || predator_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      predator_3.setAutoDraw(false);
    }
    // Threat related code
    if ((Nframe%60)==30) {
        threat_3.setSize([0,0]);
        } else if ((Nframe%60)==0) {
            if (iscage==1) {
                threat_3.setSize(threatsize);
                }
            }
        
    if ((Nframe%2)==0) {
        playerTIL_3.setPos(playerTILpos);
        predator_3.setPos(predpos);
        threat_3.setPos(threatpos);
        
        caught_text_3.setText(caught_msg);
        stop_text_3.setText(stopmsg);
        playerTILx_t.push(playerTILcoord[0]);
        playerTILy_t.push(playerTILcoord[1]);
        
        predx_t.push(predcoord[0]);
        predy_t.push(predcoord[1]);
        threatpos_t.push(threatcoord);    
        
        playerTILspd_t.push(playerTILspd);
        predspd_t.push(predspd);    
        trialtime.push(trial_exampleClock.getTime());
        trialframe.push(Nframe);
        
        if ((playerTILcoord[0]==threatcoord[0])&&(playerTILcoord[1]==threatcoord[1])) {
            //trialpoint_t -= 1;
            if (iscage==1) {
                //get_threat += 1;;
                }
            }
        }
    
    if (((playerTILcoord[0]==predcoord[0])&&(playerTILcoord[1]==predcoord[1])) && (condition>0)) {
        //caught_flag=1;
        //caught += 1;
        caught_msg = "";
        //
        continueRoutine = false;
        //
        }
    
    if (condition==2) {
        if (trial_exampleClock.getTime()>attacktime){
            iscage = 0;
            }
        }
    
    ////////////////// Insert Keyboard Input Code ///////////////////////////////////
    keyboardJS.bind('up', (e) => {
        ud_mov = 1;
        rl_mov = 0;
    }, (e) => {
        ud_mov = 0;
    });
    keyboardJS.bind('down', (e) => {
        ud_mov = -1;
        rl_mov = 0;
    }, (e) => {
        ud_mov = 0;
    });
    keyboardJS.bind('right', (e) => {
        rl_mov = 1;
        ud_mov = 0;
    }, (e) => {
        rl_mov = 0;
    });
    keyboardJS.bind('left', (e) => {
        rl_mov = -1;
        ud_mov = 0;
    }, (e) => {
        rl_mov = 0;
    });
    keyboardJS.bind('up+down', (e) => {
        rl_mov = 0;
        ud_mov = 0;
    }, (e) => {
        rl_mov = 0;
        ud_mov = 0;
    });
    keyboardJS.bind('right+left', (e) => {
        rl_mov = 0;
        ud_mov = 0;
    }, (e) => {
        rl_mov = 0;
        ud_mov = 0;
    });     
    
    if ((rl_mov===0) && (ud_mov===0)) {
        if (stop_flag === 0) {
            stop_t = trial_exampleClock.getTime();
            stop_flag = 1; 
            } else if (stop_flag === 1) {
                stop_dur = trial_exampleClock.getTime() - stop_t;
                if (stop_dur > stop_lim) {
                stopmsg ="Make Movement!";            
                    }
                }  
        }  else {
            if (stopmsg =="Make Movement!") {
                stopped += 1;
                }
            stop_flag = 0;        
            stopmsg = "";
            }
    
    
    
    if ((Nframe%playerTILspd)==(playerTILspd-1)) {
        playerTILcoord[1] += ud_mov;
        playerTILcoord[0] += rl_mov;   
        if ((playerTILcoord[0] >15) || (playerTILcoord[0] <0) || (playerTILcoord[1] >15) || (playerTILcoord[1] <0)) {
            playerTILcoord[1] -= ud_mov;
            playerTILcoord[0] -= rl_mov;
            }    
        }
    playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
    
    if ((iscage === 1)) {        
        if ((Nframe%(6*predspd))==(3*predspd-1)) {
            rorl = Math.floor(Math.random()*2);
            predcoord[0] = 7+Math.floor(Math.random()*2)*rorl;
            predcoord[1] = 7+Math.floor(Math.random()*2)*rorl;      
            }
        } else if ((iscage === 0)) {    
            
            move_away_flash.setText("");
            
            if ((Nframe%predspd)==(predspd-1)) {
                temppredcoord = predcoord;
                cost0 = sumArrayElements(temppredcoord,playerTILcoord.map(function(x) { return x * -1; }));
                costxy = multifunc(Math.abs,sumArrayElements(cost0, [0, 1]));
                ucost = costxy[0]+costxy[1];
                costxy = multifunc(Math.abs,sumArrayElements(cost0, [0, -1]));
                dcost = costxy[0]+costxy[1];
                costxy = multifunc(Math.abs,sumArrayElements(cost0, [1, 0]));
                rcost = costxy[0]+costxy[1];
                costxy = multifunc(Math.abs,sumArrayElements(cost0, [-1, 0]));
                lcost = costxy[0]+costxy[1];    
                cost = [ucost, dcost, rcost, lcost];
                midx = findallind(cost,Math.min.apply(Math,cost));
                if (midx.length>1) {
                    midx = midx[Math.round(Math.random())];
                    }                  
                if ((midx == 0)) {
                    temppredcoord[1] += 1;
                    } else {
                        if ((midx == 1)) {
                            temppredcoord[1] -= 1;
                            } else {
                                if ((midx == 2)) {
                                    temppredcoord[0] += 1;
                                    } else {
                                        if ((midx == 3)) {
                                            temppredcoord[0] -= 1;
                                            }
                                        }
                                    }
                                predcoord = temppredcoord;
                                }
                            }
                        }
    predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
    
    if ((Nframe%240)==239) {
        thmov_ind += 1;
        threatcoord = [movpt[condition][0][4*thn_c+thmov_ind],movpt[condition][1][4*thn_c+thmov_ind]] //(every update of threat position)
        threatpos = [threatcoord[0]*unit-0.5+unit/2, threatcoord[1]*unit-0.5+unit/2];  
        }
    
    Nframe += 1;
    
    // *move_away_flash* updates
    if (t >= 0.0 && move_away_flash.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      move_away_flash.tStart = t;  // (not accounting for frame time here)
      move_away_flash.frameNStart = frameN;  // exact frame index
      
      move_away_flash.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((move_away_flash.status === PsychoJS.Status.STARTED || move_away_flash.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      move_away_flash.setAutoDraw(false);
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
    trial_exampleComponents.forEach( function(thisComponent) {
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


function trial_exampleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial_example'-------
    trial_exampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    tn_example += 1;
    condition_next = tn_example;
    
    psychoJS.experiment.addData('trialnum_example',tn_example);
    psychoJS.experiment.addData('condition_example',condition);
    psychoJS.experiment.addData('playerTILx_example',playerTILx_t);
    psychoJS.experiment.addData('playerTILy_example',playerTILy_t);
    psychoJS.experiment.addData('predx_example',predx_t);
    psychoJS.experiment.addData('predy_example',predy_t);
    psychoJS.experiment.addData('threatpos_example',threatpos_t);
    psychoJS.experiment.addData('playerTILspd_example',playerTILspd_t );
    psychoJS.experiment.addData('predspd_example',predspd_t);
    psychoJS.experiment.addData('caught_example',caught);
    psychoJS.experiment.addData('caught_example_flag',caught_flag);
    psychoJS.experiment.addData('threat_get_example',get_threat);
    psychoJS.experiment.addData('attacktime_example',attacktime);
    psychoJS.experiment.addData('stopnum_example',stopped);
    psychoJS.experiment.addData('trialtime_example',trialtime);
    psychoJS.experiment.addData('trialframe_example',trialframe);
    
    //  Start  of main experiment
    condition = condition_next;
    if (condition_next==4) {
        condition = 0;    
        next_time = 0;
        }
    
    psychoJS.eventManager.clearEvents();
    psychoJS.eventManager.clearKeys();
    keyboardJS.reset();
    // the Routine "trial_example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var _key_resp_body_2_allKeys;
var embody_q_exampleComponents;
function embody_q_exampleRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'embody_q_example'-------
    t = 0;
    embody_q_exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    mousenum = 0;
    continueRoutine = false;
    // setup some python lists for storing info about the mouse_body_2
    // current position of the mouse:
    mouse_body_2.x = [];
    mouse_body_2.y = [];
    mouse_body_2.leftButton = [];
    mouse_body_2.midButton = [];
    mouse_body_2.rightButton = [];
    mouse_body_2.time = [];
    mouse_body_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    key_resp_body_2.keys = undefined;
    key_resp_body_2.rt = undefined;
    _key_resp_body_2_allKeys = [];
    // keep track of which components have finished
    embody_q_exampleComponents = [];
    embody_q_exampleComponents.push(body_image_2);
    embody_q_exampleComponents.push(mouse_body_2);
    embody_q_exampleComponents.push(key_resp_body_2);
    embody_q_exampleComponents.push(lt_text_body_2);
    embody_q_exampleComponents.push(rt_text_body_2);
    embody_q_exampleComponents.push(body_explanation_2);
    embody_q_exampleComponents.push(body_progress_2);
    embody_q_exampleComponents.push(reset_rect_2);
    embody_q_exampleComponents.push(reset_text_2);
    
    embody_q_exampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function embody_q_exampleRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'embody_q_example'-------
    // get current time
    t = embody_q_exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = false;
    if (tn_example==1) {
        continueRoutine = true;
       }
    
    // *body_image_2* updates
    if (t >= 0.0 && body_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_image_2.tStart = t;  // (not accounting for frame time here)
      body_image_2.frameNStart = frameN;  // exact frame index
      
      body_image_2.setAutoDraw(true);
    }

    // *mouse_body_2* updates
    if (t >= 0.0 && mouse_body_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_body_2.tStart = t;  // (not accounting for frame time here)
      mouse_body_2.frameNStart = frameN;  // exact frame index
      
      mouse_body_2.status = PsychoJS.Status.STARTED;
      mouse_body_2.mouseClock.reset();
      prevButtonState = mouse_body_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_body_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_body_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_body_2.getPos();
          mouse_body_2.x.push(_mouseXYs[0]);
          mouse_body_2.y.push(_mouseXYs[1]);
          mouse_body_2.leftButton.push(_mouseButtons[0]);
          mouse_body_2.midButton.push(_mouseButtons[1]);
          mouse_body_2.rightButton.push(_mouseButtons[2]);
          mouse_body_2.time.push(mouse_body_2.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [reset_rect_2]) {
            if (obj.contains(mouse_body_2)) {
              gotValidClick = true;
              mouse_body_2.clicked_name.push(obj.name)
            }
          }
        }
      }
    }
    
    // *key_resp_body_2* updates
    if (t >= 0.0 && key_resp_body_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_body_2.tStart = t;  // (not accounting for frame time here)
      key_resp_body_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_body_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_body_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_body_2.clearEvents(); });
    }

    if (key_resp_body_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_body_2.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _key_resp_body_2_allKeys = _key_resp_body_2_allKeys.concat(theseKeys);
      if (_key_resp_body_2_allKeys.length > 0) {
        key_resp_body_2.keys = _key_resp_body_2_allKeys[_key_resp_body_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_body_2.rt = _key_resp_body_2_allKeys[_key_resp_body_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *lt_text_body_2* updates
    if (t >= 0.0 && lt_text_body_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lt_text_body_2.tStart = t;  // (not accounting for frame time here)
      lt_text_body_2.frameNStart = frameN;  // exact frame index
      
      lt_text_body_2.setAutoDraw(true);
    }

    
    // *rt_text_body_2* updates
    if (t >= 0.0 && rt_text_body_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rt_text_body_2.tStart = t;  // (not accounting for frame time here)
      rt_text_body_2.frameNStart = frameN;  // exact frame index
      
      rt_text_body_2.setAutoDraw(true);
    }

    
    // *body_explanation_2* updates
    if (t >= 0.0 && body_explanation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_explanation_2.tStart = t;  // (not accounting for frame time here)
      body_explanation_2.frameNStart = frameN;  // exact frame index
      
      body_explanation_2.setAutoDraw(true);
    }

    
    // *body_progress_2* updates
    if (t >= 0.0 && body_progress_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_progress_2.tStart = t;  // (not accounting for frame time here)
      body_progress_2.frameNStart = frameN;  // exact frame index
      
      body_progress_2.setAutoDraw(true);
    }

    
    // *reset_rect_2* updates
    if (t >= 0.0 && reset_rect_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reset_rect_2.tStart = t;  // (not accounting for frame time here)
      reset_rect_2.frameNStart = frameN;  // exact frame index
      
      reset_rect_2.setAutoDraw(true);
    }

    
    // *reset_text_2* updates
    if (t >= 0.0 && reset_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reset_text_2.tStart = t;  // (not accounting for frame time here)
      reset_text_2.frameNStart = frameN;  // exact frame index
      
      reset_text_2.setAutoDraw(true);
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
    embody_q_exampleComponents.forEach( function(thisComponent) {
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


function embody_q_exampleRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'embody_q_example'-------
    embody_q_exampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    for (i=0;i<npoints;i++) {
        cx[i].setAutoDraw(false);
        }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('mouse_body_2.x', mouse_body_2.x);
    psychoJS.experiment.addData('mouse_body_2.y', mouse_body_2.y);
    psychoJS.experiment.addData('mouse_body_2.leftButton', mouse_body_2.leftButton);
    psychoJS.experiment.addData('mouse_body_2.midButton', mouse_body_2.midButton);
    psychoJS.experiment.addData('mouse_body_2.rightButton', mouse_body_2.rightButton);
    psychoJS.experiment.addData('mouse_body_2.time', mouse_body_2.time);
    psychoJS.experiment.addData('mouse_body_2.clicked_name', mouse_body_2.clicked_name);
    
    psychoJS.experiment.addData('key_resp_body_2.keys', key_resp_body_2.keys);
    if (typeof key_resp_body_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_body_2.rt', key_resp_body_2.rt);
        routineTimer.reset();
        }
    
    key_resp_body_2.stop();
    // the Routine "embody_q_example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _press_space_to_start_key_allKeys;
var Start_MainComponents;
function Start_MainRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Start_Main'-------
    t = 0;
    Start_MainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    press_space_to_start_key.keys = undefined;
    press_space_to_start_key.rt = undefined;
    _press_space_to_start_key_allKeys = [];
    // keep track of which components have finished
    Start_MainComponents = [];
    Start_MainComponents.push(press_space_to_start);
    Start_MainComponents.push(press_space_to_start_key);
    
    Start_MainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Start_MainRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Start_Main'-------
    // get current time
    t = Start_MainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *press_space_to_start* updates
    if (t >= 0.0 && press_space_to_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      press_space_to_start.tStart = t;  // (not accounting for frame time here)
      press_space_to_start.frameNStart = frameN;  // exact frame index
      
      press_space_to_start.setAutoDraw(true);
    }

    
    // *press_space_to_start_key* updates
    if (t >= 0.0 && press_space_to_start_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      press_space_to_start_key.tStart = t;  // (not accounting for frame time here)
      press_space_to_start_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { press_space_to_start_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { press_space_to_start_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { press_space_to_start_key.clearEvents(); });
    }

    if (press_space_to_start_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = press_space_to_start_key.getKeys({keyList: ['space', 'space'], waitRelease: false});
      _press_space_to_start_key_allKeys = _press_space_to_start_key_allKeys.concat(theseKeys);
      if (_press_space_to_start_key_allKeys.length > 0) {
        press_space_to_start_key.keys = _press_space_to_start_key_allKeys[_press_space_to_start_key_allKeys.length - 1].name;  // just the last key pressed
        press_space_to_start_key.rt = _press_space_to_start_key_allKeys[_press_space_to_start_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    Start_MainComponents.forEach( function(thisComponent) {
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


function Start_MainRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Start_Main'-------
    Start_MainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('press_space_to_start_key.keys', press_space_to_start_key.keys);
    if (typeof press_space_to_start_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('press_space_to_start_key.rt', press_space_to_start_key.rt);
        routineTimer.reset();
        }
    
    press_space_to_start_key.stop();
    // the Routine "Start_Main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var embody_cond;
var rewardpos_t;
var dummy_trial_embodyComponents;
function dummy_trial_embodyRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'dummy_trial_embody'-------
    t = 0;
    dummy_trial_embodyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    if (embody_trial.includes(tn)) {
        isdummyStart = true;
        } else {
            isdummyStart = false;
            }
        
    if (isdummyStart) {
        embody_cond=embody_cond_list[embody_count];    
        if (embody_cond==0) {
            condname = "safe";
            iscage = 1;
            cagecolor = [-1,-1,-1];
            cagethick = 10;
            cagesize = [2/16, 2/16];
            predsize = 0;
            //predcoord = [100,100];
            thn_c = thn_c0;
            threatsize = [1/16,1/16];
            } else if (embody_cond==1) {
            condname = "pre_encounter";
            iscage = 1;
            cagecolor = [-1,-1,-1];
            cagethick = 10;
            cagesize = [2/16, 2/16];
            predsize = 1/16;
            //predcoord = [Math.floor(randunif(7,9,1)[0]),Math.floor(randunif(7,9,1)[0])];
            thn_c = thn_c1;    
            threatsize = [1/16,1/16];
            } else if (embody_cond==2) {
            condname = "post_encounter";
            iscage = 1;
            cagecolor = [-1,1,-1];
            cagethick = 10;
            cagesize = [2/16, 2/16];
            predsize = 1/16;
            //predcoord = [Math.floor(randunif(7,9,1)[0]),Math.floor(randunif(7,9,1)[0])];
            thn_c = thn_c2;         
            threatsize = [1/16,1/16];
            } else if (embody_cond==3) {
            condname = "circa_strike";
            iscage = 0;
            cagecolor = [-1,-1,-1];
            cagethick = 0;
            cagesize = [0, 0];
            predsize = 1/16;
            //predcoord = [Math.floor(randunif(0,16,1)[0]),Math.floor(randunif(0,16,1)[0])];
            thn_c = thn_c3      
            threatsize = [0,0];
            }
        }
    threat_embody.setPos(threatpos);
    threat_embody.setSize([0, 0]);
    threat_embody.setFillColor(new util.Color(threatcolor));
    cage_embody.setSize(cagesize);
    cage_embody.setLineColor(new util.Color(cagecolor));
    cage_embody.setLineWidth(cagethick);
    playerTIL_embody.setPos(playerTILpos);
    predator_embody.setPos(predpos);
    predator_embody.setSize(predsize);
    if (isdummyStart) {
        predspawn = [[7,7],[7,8],[8,7],[8,8]];
        //// out of cage
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
        playerTILspd = playerTILspd0;
        caught_flag = 0;
    
        predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
        predator_embody.setPos(predpos);
    
        predspd = predspd_list[6];
        outlen = 0;
        prev_attack_time = 0;
    
        playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
        playerTIL_embody.setPos(playerTILpos);
    
        thmov_ind=0; // (each routine) 
        threatcoord = [movpt[embody_cond][0][4*thn_c+thmov_ind],movpt[embody_cond][1][4*thn_c+thmov_ind]] //(every update of threat position)
        threatpos = [threatcoord[0]*unit-0.5+unit/2, threatcoord[1]*unit-0.5+unit/2];
    
        threat_embody.setPos(threatpos);
    
        attacktime = 16;
    
        playerTILx_t=[];
        playerTILy_t=[];
        predx_t=[];
        predy_t=[];
        threatpos_t=[];
        rewardpos_t=[];
        playerTILspd_t = [];
        predspd_t = [];
    
        trialtime = [];
        trialframe = [];
        }    
    // keep track of which components have finished
    dummy_trial_embodyComponents = [];
    dummy_trial_embodyComponents.push(GRID_embody);
    dummy_trial_embodyComponents.push(threat_embody);
    dummy_trial_embodyComponents.push(cage_embody);
    dummy_trial_embodyComponents.push(playerTIL_embody);
    dummy_trial_embodyComponents.push(predator_embody);
    
    dummy_trial_embodyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function dummy_trial_embodyRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'dummy_trial_embody'-------
    // get current time
    t = dummy_trial_embodyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *GRID_embody* updates
    if (t >= 0.0 && GRID_embody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GRID_embody.tStart = t;  // (not accounting for frame time here)
      GRID_embody.frameNStart = frameN;  // exact frame index
      
      GRID_embody.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((GRID_embody.status === PsychoJS.Status.STARTED || GRID_embody.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      GRID_embody.setAutoDraw(false);
    }
    
    // *threat_embody* updates
    if (t >= 0.0 && threat_embody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      threat_embody.tStart = t;  // (not accounting for frame time here)
      threat_embody.frameNStart = frameN;  // exact frame index
      
      threat_embody.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((threat_embody.status === PsychoJS.Status.STARTED || threat_embody.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      threat_embody.setAutoDraw(false);
    }
    
    // *cage_embody* updates
    if (t >= 0.0 && cage_embody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cage_embody.tStart = t;  // (not accounting for frame time here)
      cage_embody.frameNStart = frameN;  // exact frame index
      
      cage_embody.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cage_embody.status === PsychoJS.Status.STARTED || cage_embody.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cage_embody.setAutoDraw(false);
    }
    
    // *playerTIL_embody* updates
    if (t >= 0.0 && playerTIL_embody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      playerTIL_embody.tStart = t;  // (not accounting for frame time here)
      playerTIL_embody.frameNStart = frameN;  // exact frame index
      
      playerTIL_embody.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((playerTIL_embody.status === PsychoJS.Status.STARTED || playerTIL_embody.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      playerTIL_embody.setAutoDraw(false);
    }
    
    // *predator_embody* updates
    if (t >= 0.0 && predator_embody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      predator_embody.tStart = t;  // (not accounting for frame time here)
      predator_embody.frameNStart = frameN;  // exact frame index
      
      predator_embody.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((predator_embody.status === PsychoJS.Status.STARTED || predator_embody.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      predator_embody.setAutoDraw(false);
    }
    if (isdummyStart) {
        // Threat related code
        if ((Nframe%60)==30) {
            threat_embody.setSize([0,0]);
            } else if ((Nframe%60)==0) {
                if (iscage==1) {
                    threat_embody.setSize(threatsize);
                    }
                }
            
        if ((Nframe%2)==0) {
            playerTIL_embody.setPos(playerTILpos);
            predator_embody.setPos(predpos);
            threat_embody.setPos(threatpos);
         
            playerTILx_t.push(playerTILcoord[0]);
            playerTILy_t.push(playerTILcoord[1]);
            
            predx_t.push(predcoord[0]);
            predy_t.push(predcoord[1]);
            threatpos_t.push(threatcoord);    
            
            playerTILspd_t.push(playerTILspd);
            predspd_t.push(predspd);    
            trialtime.push(dummy_trial_embodyClock.getTime());
            trialframe.push(Nframe);
    
        if (((playerTILcoord[0]==predcoord[0])&&(playerTILcoord[1]==predcoord[1])) && (condition>0)) {
            caught_flag = 1;
            continueRoutine = false;
            }
        }
    
        ////////////////// Insert Keyboard Input Code ///////////////////////////////////
        keyboardJS.bind('up', (e) => {
            ud_mov = 1;
            rl_mov = 0;
        }, (e) => {
            ud_mov = 0;
        });
        keyboardJS.bind('down', (e) => {
            ud_mov = -1;
            rl_mov = 0;
        }, (e) => {
            ud_mov = 0;
        });
        keyboardJS.bind('right', (e) => {
            rl_mov = 1;
            ud_mov = 0;
        }, (e) => {
            rl_mov = 0;
        });
        keyboardJS.bind('left', (e) => {
            rl_mov = -1;
            ud_mov = 0;
        }, (e) => {
            rl_mov = 0;
        });
        keyboardJS.bind('up+down', (e) => {
            rl_mov = 0;
            ud_mov = 0;
        }, (e) => {
            rl_mov = 0;
            ud_mov = 0;
        });
        keyboardJS.bind('right+left', (e) => {
            rl_mov = 0;
            ud_mov = 0;
        }, (e) => {
            rl_mov = 0;
            ud_mov = 0;
        });     
    
        if ((Nframe%playerTILspd)==(playerTILspd-1)) {
            playerTILcoord[1] += ud_mov;
            playerTILcoord[0] += rl_mov;   
            if ((playerTILcoord[0] >15) || (playerTILcoord[0] <0) || (playerTILcoord[1] >15) || (playerTILcoord[1] <0)) {
                playerTILcoord[1] -= ud_mov;
                playerTILcoord[0] -= rl_mov;
                }    
            }
        playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
    
        if ((iscage === 1)) {        
            if ((Nframe%(6*predspd))==(3*predspd-1)) {
                rorl = Math.floor(Math.random()*2);
                predcoord[0] = 7+Math.floor(Math.random()*2)*rorl;
                predcoord[1] = 7+Math.floor(Math.random()*2)*rorl;      
                }
            } else if ((iscage === 0)) {    
                if ((Nframe%predspd)==(predspd-1)) {
                    temppredcoord = predcoord;
                    cost0 = sumArrayElements(temppredcoord,playerTILcoord.map(function(x) { return x * -1; }));
                    costxy = multifunc(Math.abs,sumArrayElements(cost0, [0, 1]));
                    ucost = costxy[0]+costxy[1];
                    costxy = multifunc(Math.abs,sumArrayElements(cost0, [0, -1]));
                    dcost = costxy[0]+costxy[1];
                    costxy = multifunc(Math.abs,sumArrayElements(cost0, [1, 0]));
                    rcost = costxy[0]+costxy[1];
                    costxy = multifunc(Math.abs,sumArrayElements(cost0, [-1, 0]));
                    lcost = costxy[0]+costxy[1];    
                    cost = [ucost, dcost, rcost, lcost];
                    midx = findallind(cost,Math.min.apply(Math,cost));
                    if (midx.length>1) {
                        midx = midx[Math.round(Math.random())];
                        }                
                    if ((midx == 0)) {
                        temppredcoord[1] += 1;
                        } else {
                            if ((midx == 1)) {
                                temppredcoord[1] -= 1;
                                } else {
                                    if ((midx == 2)) {
                                        temppredcoord[0] += 1;
                                        } else {
                                            if ((midx == 3)) {
                                                temppredcoord[0] -= 1;
                                                }
                                            }
                                        }
                                    predcoord = temppredcoord;
                                    }
                                }
                            }
        predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
    
        if ((Nframe%240)==239) {
            thmov_ind += 1;
            threatcoord = [movpt[embody_cond][0][4*thn_c+thmov_ind],movpt[embody_cond][1][4*thn_c+thmov_ind]] //(every update of threat position)
            threatpos = [threatcoord[0]*unit-0.5+unit/2, threatcoord[1]*unit-0.5+unit/2];  
            }
        Nframe += 1;
        
        } else {
            continueRoutine = false;        
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
    dummy_trial_embodyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dummy_trial_embodyRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'dummy_trial_embody'-------
    dummy_trial_embodyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (isdummyStart) {
        embody_count+=1;
        psychoJS.experiment.addData('embody_trialnum',tn);
        psychoJS.experiment.addData('embody_condition',embody_cond);    
        psychoJS.experiment.addData('embody_caught',caught_flag);       
        if (embody_cond>1) {
            if (caught_flag==1) {
                playerTILcoord=spawn[spawnseq[caught]];
                }    
            predcoord=predspawn[predspawnseq[spawnnum]];    
            }    
        }
    
    predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
    playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2]; 
    
    
    psychoJS.eventManager.clearEvents();
    psychoJS.eventManager.clearKeys();
    keyboardJS.reset();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_body_allKeys;
var embody_qComponents;
function embody_qRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'embody_q'-------
    t = 0;
    embody_qClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    mousenum = 0;
    continueRoutine = false;
    
    predsize=0;
    //predator_embody.setSize(0);
    //predator.setSize(0);
    //predator_Q.setSize(0);
    // setup some python lists for storing info about the mouse_body
    // current position of the mouse:
    mouse_body.x = [];
    mouse_body.y = [];
    mouse_body.leftButton = [];
    mouse_body.midButton = [];
    mouse_body.rightButton = [];
    mouse_body.time = [];
    mouse_body.clicked_name = [];
    gotValidClick = false; // until a click is received
    key_resp_body.keys = undefined;
    key_resp_body.rt = undefined;
    _key_resp_body_allKeys = [];
    // keep track of which components have finished
    embody_qComponents = [];
    embody_qComponents.push(body_image);
    embody_qComponents.push(mouse_body);
    embody_qComponents.push(key_resp_body);
    embody_qComponents.push(lt_text_body);
    embody_qComponents.push(rt_text_body);
    embody_qComponents.push(body_explanation);
    embody_qComponents.push(body_progress);
    embody_qComponents.push(reset_rect);
    embody_qComponents.push(reset_text);
    
    embody_qComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function embody_qRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'embody_q'-------
    // get current time
    t = embody_qClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = false;
    if (isdummyStart) {
        continueRoutine = true;
       }
    
    // *body_image* updates
    if (t >= 0.0 && body_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_image.tStart = t;  // (not accounting for frame time here)
      body_image.frameNStart = frameN;  // exact frame index
      
      body_image.setAutoDraw(true);
    }

    // *mouse_body* updates
    if (t >= 0.0 && mouse_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_body.tStart = t;  // (not accounting for frame time here)
      mouse_body.frameNStart = frameN;  // exact frame index
      
      mouse_body.status = PsychoJS.Status.STARTED;
      mouse_body.mouseClock.reset();
      prevButtonState = mouse_body.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_body.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_body.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_body.getPos();
          mouse_body.x.push(_mouseXYs[0]);
          mouse_body.y.push(_mouseXYs[1]);
          mouse_body.leftButton.push(_mouseButtons[0]);
          mouse_body.midButton.push(_mouseButtons[1]);
          mouse_body.rightButton.push(_mouseButtons[2]);
          mouse_body.time.push(mouse_body.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [reset_rect]) {
            if (obj.contains(mouse_body)) {
              gotValidClick = true;
              mouse_body.clicked_name.push(obj.name)
            }
          }
        }
      }
    }
    
    // *key_resp_body* updates
    if (t >= 0.0 && key_resp_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_body.tStart = t;  // (not accounting for frame time here)
      key_resp_body.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_body.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_body.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_body.clearEvents(); });
    }

    if (key_resp_body.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_body.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _key_resp_body_allKeys = _key_resp_body_allKeys.concat(theseKeys);
      if (_key_resp_body_allKeys.length > 0) {
        key_resp_body.keys = _key_resp_body_allKeys[_key_resp_body_allKeys.length - 1].name;  // just the last key pressed
        key_resp_body.rt = _key_resp_body_allKeys[_key_resp_body_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *lt_text_body* updates
    if (t >= 0.0 && lt_text_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lt_text_body.tStart = t;  // (not accounting for frame time here)
      lt_text_body.frameNStart = frameN;  // exact frame index
      
      lt_text_body.setAutoDraw(true);
    }

    
    // *rt_text_body* updates
    if (t >= 0.0 && rt_text_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rt_text_body.tStart = t;  // (not accounting for frame time here)
      rt_text_body.frameNStart = frameN;  // exact frame index
      
      rt_text_body.setAutoDraw(true);
    }

    
    // *body_explanation* updates
    if (t >= 0.0 && body_explanation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_explanation.tStart = t;  // (not accounting for frame time here)
      body_explanation.frameNStart = frameN;  // exact frame index
      
      body_explanation.setAutoDraw(true);
    }

    
    // *body_progress* updates
    if (t >= 0.0 && body_progress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body_progress.tStart = t;  // (not accounting for frame time here)
      body_progress.frameNStart = frameN;  // exact frame index
      
      body_progress.setAutoDraw(true);
    }

    
    // *reset_rect* updates
    if (t >= 0.0 && reset_rect.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reset_rect.tStart = t;  // (not accounting for frame time here)
      reset_rect.frameNStart = frameN;  // exact frame index
      
      reset_rect.setAutoDraw(true);
    }

    
    // *reset_text* updates
    if (t >= 0.0 && reset_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reset_text.tStart = t;  // (not accounting for frame time here)
      reset_text.frameNStart = frameN;  // exact frame index
      
      reset_text.setAutoDraw(true);
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
    embody_qComponents.forEach( function(thisComponent) {
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


function embody_qRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'embody_q'-------
    embody_qComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    for (i=0;i<npoints;i++) {
        cx[i].setAutoDraw(false);
        }
    
    isdummyStart=false
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('mouse_body.x', mouse_body.x);
    psychoJS.experiment.addData('mouse_body.y', mouse_body.y);
    psychoJS.experiment.addData('mouse_body.leftButton', mouse_body.leftButton);
    psychoJS.experiment.addData('mouse_body.midButton', mouse_body.midButton);
    psychoJS.experiment.addData('mouse_body.rightButton', mouse_body.rightButton);
    psychoJS.experiment.addData('mouse_body.time', mouse_body.time);
    psychoJS.experiment.addData('mouse_body.clicked_name', mouse_body.clicked_name);
    
    psychoJS.experiment.addData('key_resp_body.keys', key_resp_body.keys);
    if (typeof key_resp_body.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_body.rt', key_resp_body.rt);
        routineTimer.reset();
        }
    
    key_resp_body.stop();
    // the Routine "embody_q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Question_AnxComponents;
function Question_AnxRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Question_Anx'-------
    t = 0;
    Question_AnxClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(12.000000);
    // update component parameters for each repeat
    if (q_trial.includes(tn)) {
        isQStart = true;
        } else {
            isQStart = false;
           }
    if (isQStart) {
        RatingEndCount=0;        
        }
    anxiety_rating.reset()
    if (condition==0) {
        condname = "safe";
        iscage = 1;
        cagecolor = [-1,-1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 0;
        //predcoord = [100,100];
        thn_c = thn_c0;    
        threatsize = [1/16,1/16];
        } else if (condition==1) {
        condname = "pre_encounter";
        iscage = 1;
        cagecolor = [-1,-1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 1/16;
        //predcoord = [Math.floor(randunif(7,9,1)[0]),Math.floor(randunif(7,9,1)[0])];
        thn_c = thn_c1;    
        threatsize = [1/16,1/16];
        } else if (condition==2) {
        condname = "post_encounter";
        iscage = 1;
        cagecolor = [-1,1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 1/16;
        //predcoord = [Math.floor(randunif(7,9,1)[0]),Math.floor(randunif(7,9,1)[0])];
        thn_c = thn_c2;         
        threatsize = [0,0];
        } else if (condition==3) {
        condname = "circa_strike";
        iscage = 0;
        cagecolor = [-1,-1,-1];
        cagethick = 0;
        cagesize = [0, 0];
        predsize = 1/16;
        //predcoord = [Math.floor(randunif(0,16,1)[0]),Math.floor(randunif(0,16,1)[0])];
        thn_c = thn_c3      
        threatsize = [1/16,1/16];
        } 
    cage_Q.setSize(cagesize);
    cage_Q.setLineColor(new util.Color(cagecolor));
    cage_Q.setLineWidth(cagethick);
    playerTIL_Q.setPos(playerTILpos);
    predator_Q.setPos(predpos);
    predator_Q.setSize(predsize);
    predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
    predator_Q.setPos(predpos);
    
    playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
    playerTIL_Q.setPos(playerTILpos);
    
    tlen = tlen_seq[tn];
    // keep track of which components have finished
    Question_AnxComponents = [];
    Question_AnxComponents.push(rt_text_anx);
    Question_AnxComponents.push(lt_text_anx);
    Question_AnxComponents.push(anxiety_rating);
    Question_AnxComponents.push(Question_Name);
    Question_AnxComponents.push(MouseClick);
    Question_AnxComponents.push(GRID_Q);
    Question_AnxComponents.push(cage_Q);
    Question_AnxComponents.push(playerTIL_Q);
    Question_AnxComponents.push(predator_Q);
    Question_AnxComponents.push(inform_next);
    
    Question_AnxComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Question_AnxRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Question_Anx'-------
    // get current time
    t = Question_AnxClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Check Confidence_rating for response to end routine
    if (anxiety_rating.getRating() !== undefined && anxiety_rating.status === PsychoJS.Status.STARTED) {
        RatingEndCount+=1;
        if (RatingEndCount>20) {
          continueRoutine = false; 
          }
      }
    if (!isQStart) {
        continueRoutine = false; 
        }
    
    // *rt_text_anx* updates
    if (t >= 2 && rt_text_anx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rt_text_anx.tStart = t;  // (not accounting for frame time here)
      rt_text_anx.frameNStart = frameN;  // exact frame index
      
      rt_text_anx.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rt_text_anx.status === PsychoJS.Status.STARTED || rt_text_anx.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rt_text_anx.setAutoDraw(false);
    }
    
    // *lt_text_anx* updates
    if (t >= 2 && lt_text_anx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lt_text_anx.tStart = t;  // (not accounting for frame time here)
      lt_text_anx.frameNStart = frameN;  // exact frame index
      
      lt_text_anx.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((lt_text_anx.status === PsychoJS.Status.STARTED || lt_text_anx.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      lt_text_anx.setAutoDraw(false);
    }
    
    // *anxiety_rating* updates
    if (t >= 2 && anxiety_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      anxiety_rating.tStart = t;  // (not accounting for frame time here)
      anxiety_rating.frameNStart = frameN;  // exact frame index
      
      anxiety_rating.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((anxiety_rating.status === PsychoJS.Status.STARTED || anxiety_rating.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      anxiety_rating.setAutoDraw(false);
    }
    
    // *Question_Name* updates
    if (t >= 2 && Question_Name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_Name.tStart = t;  // (not accounting for frame time here)
      Question_Name.frameNStart = frameN;  // exact frame index
      
      Question_Name.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Question_Name.status === PsychoJS.Status.STARTED || Question_Name.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Question_Name.setAutoDraw(false);
    }
    
    // *MouseClick* updates
    if (t >= 2 && MouseClick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MouseClick.tStart = t;  // (not accounting for frame time here)
      MouseClick.frameNStart = frameN;  // exact frame index
      
      MouseClick.setAutoDraw(true);
    }

    frameRemains = 2 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((MouseClick.status === PsychoJS.Status.STARTED || MouseClick.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      MouseClick.setAutoDraw(false);
    }
    
    // *GRID_Q* updates
    if (t >= 0.0 && GRID_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GRID_Q.tStart = t;  // (not accounting for frame time here)
      GRID_Q.frameNStart = frameN;  // exact frame index
      
      GRID_Q.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((GRID_Q.status === PsychoJS.Status.STARTED || GRID_Q.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      GRID_Q.setAutoDraw(false);
    }
    
    // *cage_Q* updates
    if (t >= 0.0 && cage_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cage_Q.tStart = t;  // (not accounting for frame time here)
      cage_Q.frameNStart = frameN;  // exact frame index
      
      cage_Q.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cage_Q.status === PsychoJS.Status.STARTED || cage_Q.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cage_Q.setAutoDraw(false);
    }
    
    // *playerTIL_Q* updates
    if (t >= 0.0 && playerTIL_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      playerTIL_Q.tStart = t;  // (not accounting for frame time here)
      playerTIL_Q.frameNStart = frameN;  // exact frame index
      
      playerTIL_Q.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((playerTIL_Q.status === PsychoJS.Status.STARTED || playerTIL_Q.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      playerTIL_Q.setAutoDraw(false);
    }
    
    // *predator_Q* updates
    if (t >= 0.0 && predator_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      predator_Q.tStart = t;  // (not accounting for frame time here)
      predator_Q.frameNStart = frameN;  // exact frame index
      
      predator_Q.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((predator_Q.status === PsychoJS.Status.STARTED || predator_Q.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      predator_Q.setAutoDraw(false);
    }
    
    // *inform_next* updates
    if (t >= 0.0 && inform_next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inform_next.tStart = t;  // (not accounting for frame time here)
      inform_next.frameNStart = frameN;  // exact frame index
      
      inform_next.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((inform_next.status === PsychoJS.Status.STARTED || inform_next.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      inform_next.setAutoDraw(false);
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
    Question_AnxComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Question_AnxRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Question_Anx'-------
    Question_AnxComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Question',isQStart);
    isQStart = false;
    psychoJS.experiment.addData('anxiety_rating.response', anxiety_rating.getRating());
    psychoJS.experiment.addData('anxiety_rating.rt', anxiety_rating.getRT());
    return Scheduler.Event.NEXT;
  };
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    predator_embody.setSize(0);
    predator.setSize(0);
    predator_Q.setSize(0);
    
    if (condition==0) {
        condname = "safe";
        iscage = 1;
        cagecolor = [-1,-1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 0;
        //predcoord = [100,100];
        thn_c = thn_c0;
        thn_c0 += 1;
        threatsize = [1/16,1/16];
        } else if (condition==1) {
        condname = "pre_encounter";
        iscage = 1;
        cagecolor = [-1,-1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 1/16;
        //predcoord = [Math.floor(randunif(7,9,1)[0]),Math.floor(randunif(7,9,1)[0])];
        thn_c = thn_c1;
        thn_c1 += 1;  
        threatsize = [1/16,1/16];
        } else if (condition==2) {
        condname = "post_encounter";
        iscage = 1;
        cagecolor = [-1,1,-1];
        cagethick = 10;
        cagesize = [2/16, 2/16];
        predsize = 1/16;
        //predcoord = [Math.floor(randunif(7,9,1)[0]),Math.floor(randunif(7,9,1)[0])];
        thn_c = thn_c2;
        thn_c2 += 1;        
        threatsize = [1/16,1/16];
        } else if (condition==3) {
        condname = "circa_strike";
        iscage = 0;
        cagecolor = [-1,-1,-1];
        cagethick = 0;
        cagesize = [0, 0];
        predsize = 1/16;
        //predcoord = [Math.floor(randunif(0,16,1)[0]),Math.floor(randunif(0,16,1)[0])];
        thn_c = thn_c3
        thn_c3 += 1;     
        threatsize = [0,0];
        } 
    
    
    threat.setPos(threatpos);
    threat.setSize([0, 0]);
    threat.setFillColor(new util.Color(threatcolor));
    stop_text.setText(stopmsg);
    caught_text.setText(caught_msg);
    cage.setSize(cagesize);
    cage.setLineColor(new util.Color(cagecolor));
    cage.setLineWidth(cagethick);
    playerTIL.setPos(playerTILpos);
    predator.setPos(predpos);
    predator.setSize(predsize);
    //// out of cage
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
    playerTILspd = playerTILspd0;
    predspawn = [[7,7],[7,8],[8,7],[8,8]];
    // if (caught_flag==1) {
    //     playerTILcoord=spawn[spawnseq[caught]];    
    //    predcoord = predspawn[predspawnseq[caught]];
    //    }
    
    caught_msg = "";
    caught_flag=0;
    
    trialpoint = 0;
    trialpoint_t = 10;
    
    predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
    predator.setPos(predpos);
    predator.setSize(predsize);
    
    if (sr>0.5) {
        level += 1;
        level = Math.min(level,12);    
        predspd = predspd_list[level];
        } else {
            level -= 1;
            level = Math.max(level,0);
            predspd = predspd_list[level];        
            }
    
    prev_attack_time = 0;
    
    playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
    playerTIL.setPos(playerTILpos);
    
    
    thmov_ind=0; // (each routine) 
    threatcoord = [movpt[condition][0][4*thn_c+thmov_ind],movpt[condition][1][4*thn_c+thmov_ind]] //(every update of threat position)
    threatpos = [threatcoord[0]*unit-0.5+unit/2, threatcoord[1]*unit-0.5+unit/2];
    
    threat.setPos(threatpos);
    
    attacktime = attacktimelist[tn]; //2+Math.floor(Math.random()*8)*2;
    get_threat = 0;
    
    stop_t = 0;
    stop_dur = 0;
    stop_flag = 0;        
    stopmsg = "";
    stopped = 0;
    
    stop_text.setText(stopmsg);
    caught_text.setText(caught_msg);
    
    playerTILx_t=[];
    playerTILy_t=[];
    predx_t=[];
    predy_t=[];
    threatpos_t=[];
    rewardpos_t=[];
    playerTILspd_t = [];
    predspd_t = [];
    
    trialtime = [];
    trialframe = [];
    
    outlen = 0;
    tlen = tlen_seq[tn]; 
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(GRID);
    trialComponents.push(threat);
    trialComponents.push(stop_text);
    trialComponents.push(caught_text);
    trialComponents.push(cage);
    trialComponents.push(playerTIL);
    trialComponents.push(predator);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *GRID* updates
    if (t >= 0.0 && GRID.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GRID.tStart = t;  // (not accounting for frame time here)
      GRID.frameNStart = frameN;  // exact frame index
      
      GRID.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((GRID.status === PsychoJS.Status.STARTED || GRID.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      GRID.setAutoDraw(false);
    }
    
    // *threat* updates
    if (t >= 0.0 && threat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      threat.tStart = t;  // (not accounting for frame time here)
      threat.frameNStart = frameN;  // exact frame index
      
      threat.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((threat.status === PsychoJS.Status.STARTED || threat.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      threat.setAutoDraw(false);
    }
    
    // *stop_text* updates
    if (t >= 0.0 && stop_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_text.tStart = t;  // (not accounting for frame time here)
      stop_text.frameNStart = frameN;  // exact frame index
      
      stop_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stop_text.status === PsychoJS.Status.STARTED || stop_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stop_text.setAutoDraw(false);
    }
    
    // *caught_text* updates
    if (t >= 0.0 && caught_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      caught_text.tStart = t;  // (not accounting for frame time here)
      caught_text.frameNStart = frameN;  // exact frame index
      
      caught_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((caught_text.status === PsychoJS.Status.STARTED || caught_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      caught_text.setAutoDraw(false);
    }
    
    // *cage* updates
    if (t >= 0.0 && cage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cage.tStart = t;  // (not accounting for frame time here)
      cage.frameNStart = frameN;  // exact frame index
      
      cage.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cage.status === PsychoJS.Status.STARTED || cage.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cage.setAutoDraw(false);
    }
    
    // *playerTIL* updates
    if (t >= 0.0 && playerTIL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      playerTIL.tStart = t;  // (not accounting for frame time here)
      playerTIL.frameNStart = frameN;  // exact frame index
      
      playerTIL.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((playerTIL.status === PsychoJS.Status.STARTED || playerTIL.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      playerTIL.setAutoDraw(false);
    }
    
    // *predator* updates
    if (t >= 0.0 && predator.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      predator.tStart = t;  // (not accounting for frame time here)
      predator.frameNStart = frameN;  // exact frame index
      
      predator.setAutoDraw(true);
    }

    frameRemains = 0.0 + tlen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((predator.status === PsychoJS.Status.STARTED || predator.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      predator.setAutoDraw(false);
    }
    // Threat related code
    if ((Nframe%60)==30) {
        threat.setSize([0,0]);
        } else if ((Nframe%60)==0) {        
            if (iscage==1) {
                threat.setSize(threatsize);
                }
            }
        
    if ((Nframe%2)==0) {
        playerTIL.setPos(playerTILpos);
        predator.setPos(predpos);
        threat.setPos(threatpos);
        
        caught_text.setText(caught_msg);
        stop_text.setText(stopmsg);
        playerTILx_t.push(playerTILcoord[0]);
        playerTILy_t.push(playerTILcoord[1]);
        
        predx_t.push(predcoord[0]);
        predy_t.push(predcoord[1]);
        threatpos_t.push(threatcoord);    
        
        playerTILspd_t.push(playerTILspd);
        predspd_t.push(predspd);    
        trialtime.push(trialClock.getTime());
        trialframe.push(Nframe);
        
        if ((playerTILcoord[0]==threatcoord[0])&&(playerTILcoord[1]==threatcoord[1])) {
            //trialpoint_t -= 1;
            if (iscage==1) {
                get_threat += 1;;
                }
            }
        }
    
    if (((playerTILcoord[0]==predcoord[0])&&(playerTILcoord[1]==predcoord[1])) && (condition>0)) {
        caught_flag=1;
        caught += 1;
        caught_msg = "";
        trialpoint_t -= 30;
        //
        continueRoutine = false;
        //
        }
    
    if (condition==2) {
        if (trialClock.getTime()>attacktime){
            iscage = 0;
            }
        }
    
    ////////////////// Insert Keyboard Input Code ///////////////////////////////////
    keyboardJS.bind('up', (e) => {
        ud_mov = 1;
        rl_mov = 0;
    }, (e) => {
        ud_mov = 0;
    });
    keyboardJS.bind('down', (e) => {
        ud_mov = -1;
        rl_mov = 0;
    }, (e) => {
        ud_mov = 0;
    });
    keyboardJS.bind('right', (e) => {
        rl_mov = 1;
        ud_mov = 0;
    }, (e) => {
        rl_mov = 0;
    });
    keyboardJS.bind('left', (e) => {
        rl_mov = -1;
        ud_mov = 0;
    }, (e) => {
        rl_mov = 0;
    });
    keyboardJS.bind('up+down', (e) => {
        rl_mov = 0;
        ud_mov = 0;
    }, (e) => {
        rl_mov = 0;
        ud_mov = 0;
    });
    keyboardJS.bind('right+left', (e) => {
        rl_mov = 0;
        ud_mov = 0;
    }, (e) => {
        rl_mov = 0;
        ud_mov = 0;
    });     
    
    if ((rl_mov===0) && (ud_mov===0)) {
        if (stop_flag === 0) {
            stop_t = trialClock.getTime();
            stop_flag = 1; 
            } else if (stop_flag === 1) {
                stop_dur = trialClock.getTime() - stop_t;
                if (stop_dur > stop_lim) {
                stopmsg ="Make Movement!";            
                    }
                }  
        }  else {
            if (stopmsg =="Make Movement!") {
                stopped += 1;
                }
            stop_flag = 0;        
            stopmsg = "";
            }
    
    
    
    if ((Nframe%playerTILspd)==(playerTILspd-1)) {
        playerTILcoord[1] += ud_mov;
        playerTILcoord[0] += rl_mov;   
        if ((playerTILcoord[0] >15) || (playerTILcoord[0] <0) || (playerTILcoord[1] >15) || (playerTILcoord[1] <0)) {
            playerTILcoord[1] -= ud_mov;
            playerTILcoord[0] -= rl_mov;
            }    
        }
    playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
    
    if ((iscage === 1)) {        
        if ((Nframe%(6*predspd))==(3*predspd-1)) {
            rorl = Math.floor(Math.random()*2);
            predcoord[0] = 7+Math.floor(Math.random()*2)*rorl;
            predcoord[1] = 7+Math.floor(Math.random()*2)*rorl;      
            }
        } else if ((iscage === 0)) {        
            if ((Nframe%predspd)==(predspd-1)) {
                temppredcoord = predcoord;
                cost0 = sumArrayElements(temppredcoord,playerTILcoord.map(function(x) { return x * -1; }));
                costxy = multifunc(Math.abs,sumArrayElements(cost0, [0, 1]));
                ucost = costxy[0]+costxy[1];
                costxy = multifunc(Math.abs,sumArrayElements(cost0, [0, -1]));
                dcost = costxy[0]+costxy[1];
                costxy = multifunc(Math.abs,sumArrayElements(cost0, [1, 0]));
                rcost = costxy[0]+costxy[1];
                costxy = multifunc(Math.abs,sumArrayElements(cost0, [-1, 0]));
                lcost = costxy[0]+costxy[1];    
                cost = [ucost, dcost, rcost, lcost];
                midx = findallind(cost,Math.min.apply(Math,cost));
                if (midx.length>1) {
                    midx = midx[Math.round(Math.random())];
                    }
                //midx = cost.indexOf(Math.min.apply(Math,cost));
                if ((midx == 0)) {
                    temppredcoord[1] += 1;
                    } else {
                        if ((midx == 1)) {
                            temppredcoord[1] -= 1;
                            } else {
                                if ((midx == 2)) {
                                    temppredcoord[0] += 1;
                                    } else {
                                        if ((midx == 3)) {
                                            temppredcoord[0] -= 1;
                                            }
                                        }
                                    }
                                predcoord = temppredcoord;
                                }
                            }
                        }
    predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
    
    if ((Nframe%240)==239) {
        thmov_ind += 1;
        threatcoord = [movpt[condition][0][4*thn_c+thmov_ind],movpt[condition][1][4*thn_c+thmov_ind]] //(every update of threat position)
        threatpos = [threatcoord[0]*unit-0.5+unit/2, threatcoord[1]*unit-0.5+unit/2];  
        }
    
    Nframe += 1;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
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


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (condition>1) {
        spawnnum+=1;
        if (caught_flag==1) {
            playerTILcoord=spawn[spawnseq[caught]];
            }    
        predcoord=predspawn[predspawnseq[spawnnum]];   
        freepred += 1;
        sr = 1 - (caught/freepred);
        }
    
    predpos = [predcoord[0]*unit-0.5+unit/2, predcoord[1]*unit-0.5+unit/2];
    playerTILpos = [playerTILcoord[0]*unit-0.5+unit/2, playerTILcoord[1]*unit-0.5+unit/2];
    
    if (tn==1) {    
        psychoJS.experiment.addData('qtrials',q_trial);    
        }
    
    
    next_time = 2;
    tn += 1;
    
    if (tn===Ntrial) {
        next_time = 0;
        }
    
    condition_next = condition_thisexp[tn];
    
    
    psychoJS.experiment.addData('trialnum',tn);
    psychoJS.experiment.addData('condition',condition);
    psychoJS.experiment.addData('playerTILx',playerTILx_t);
    psychoJS.experiment.addData('playerTILy',playerTILy_t);
    psychoJS.experiment.addData('predx',predx_t);
    psychoJS.experiment.addData('predy',predy_t);
    psychoJS.experiment.addData('threatpos',threatpos_t);
    psychoJS.experiment.addData('playerTILspd',playerTILspd_t );
    psychoJS.experiment.addData('predspd',predspd_t);
    psychoJS.experiment.addData('caught',caught);
    psychoJS.experiment.addData('caught_flag',caught_flag);
    psychoJS.experiment.addData('threat_get',get_threat);
    psychoJS.experiment.addData('attacktime',attacktime);
    psychoJS.experiment.addData('stopnum',stopped);
    psychoJS.experiment.addData('trialtime',trialtime);
    psychoJS.experiment.addData('trialframe',trialframe);
    psychoJS.experiment.addData('trialpoint',trialpoint_t);
    
    condition = condition_next;
    
    psychoJS.eventManager.clearEvents();
    psychoJS.eventManager.clearKeys();
    keyboardJS.reset();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _EOP_Key_allKeys;
var EndExpComponents;
function EndExpRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'EndExp'-------
    t = 0;
    EndExpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    EOP_Key.keys = undefined;
    EOP_Key.rt = undefined;
    _EOP_Key_allKeys = [];
    // keep track of which components have finished
    EndExpComponents = [];
    EndExpComponents.push(EOP);
    EndExpComponents.push(EOP_Key);
    
    EndExpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndExpRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'EndExp'-------
    // get current time
    t = EndExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *EOP* updates
    if (t >= 0.0 && EOP.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EOP.tStart = t;  // (not accounting for frame time here)
      EOP.frameNStart = frameN;  // exact frame index
      
      EOP.setAutoDraw(true);
    }

    
    // *EOP_Key* updates
    if (t >= 0.0 && EOP_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EOP_Key.tStart = t;  // (not accounting for frame time here)
      EOP_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { EOP_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { EOP_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { EOP_Key.clearEvents(); });
    }

    if (EOP_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = EOP_Key.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _EOP_Key_allKeys = _EOP_Key_allKeys.concat(theseKeys);
      if (_EOP_Key_allKeys.length > 0) {
        EOP_Key.keys = _EOP_Key_allKeys[_EOP_Key_allKeys.length - 1].name;  // just the last key pressed
        EOP_Key.rt = _EOP_Key_allKeys[_EOP_Key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    EndExpComponents.forEach( function(thisComponent) {
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


function EndExpRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'EndExp'-------
    EndExpComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('EOP_Key.keys', EOP_Key.keys);
    if (typeof EOP_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('EOP_Key.rt', EOP_Key.rt);
        routineTimer.reset();
        }
    
    EOP_Key.stop();
    // the Routine "EndExp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _embody_postexp_Start_Enter_allKeys;
var embody_postexp_ExplanationComponents;
function embody_postexp_ExplanationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'embody_postexp_Explanation'-------
    t = 0;
    embody_postexp_ExplanationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    embody_postexp_Start_Enter.keys = undefined;
    embody_postexp_Start_Enter.rt = undefined;
    _embody_postexp_Start_Enter_allKeys = [];
    // keep track of which components have finished
    embody_postexp_ExplanationComponents = [];
    embody_postexp_ExplanationComponents.push(embody_postexp_instruction);
    embody_postexp_ExplanationComponents.push(embody_postexp_Start_Enter);
    
    embody_postexp_ExplanationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function embody_postexp_ExplanationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'embody_postexp_Explanation'-------
    // get current time
    t = embody_postexp_ExplanationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *embody_postexp_instruction* updates
    if (t >= 0.0 && embody_postexp_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      embody_postexp_instruction.tStart = t;  // (not accounting for frame time here)
      embody_postexp_instruction.frameNStart = frameN;  // exact frame index
      
      embody_postexp_instruction.setAutoDraw(true);
    }

    
    // *embody_postexp_Start_Enter* updates
    if (t >= 0.0 && embody_postexp_Start_Enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      embody_postexp_Start_Enter.tStart = t;  // (not accounting for frame time here)
      embody_postexp_Start_Enter.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { embody_postexp_Start_Enter.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { embody_postexp_Start_Enter.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { embody_postexp_Start_Enter.clearEvents(); });
    }

    if (embody_postexp_Start_Enter.status === PsychoJS.Status.STARTED) {
      let theseKeys = embody_postexp_Start_Enter.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _embody_postexp_Start_Enter_allKeys = _embody_postexp_Start_Enter_allKeys.concat(theseKeys);
      if (_embody_postexp_Start_Enter_allKeys.length > 0) {
        embody_postexp_Start_Enter.keys = _embody_postexp_Start_Enter_allKeys[_embody_postexp_Start_Enter_allKeys.length - 1].name;  // just the last key pressed
        embody_postexp_Start_Enter.rt = _embody_postexp_Start_Enter_allKeys[_embody_postexp_Start_Enter_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    embody_postexp_ExplanationComponents.forEach( function(thisComponent) {
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


function embody_postexp_ExplanationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'embody_postexp_Explanation'-------
    embody_postexp_ExplanationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('embody_postexp_Start_Enter.keys', embody_postexp_Start_Enter.keys);
    if (typeof embody_postexp_Start_Enter.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('embody_postexp_Start_Enter.rt', embody_postexp_Start_Enter.rt);
        routineTimer.reset();
        }
    
    embody_postexp_Start_Enter.stop();
    // the Routine "embody_postexp_Explanation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_body_3_allKeys;
var embody_q_postexpComponents;
function embody_q_postexpRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'embody_q_postexp'-------
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


function embody_q_postexpRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'embody_q_postexp'-------
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
          _mouseXYs = mouse_body_3.getPos();
          mouse_body_3.x.push(_mouseXYs[0]);
          mouse_body_3.y.push(_mouseXYs[1]);
          mouse_body_3.leftButton.push(_mouseButtons[0]);
          mouse_body_3.midButton.push(_mouseButtons[1]);
          mouse_body_3.rightButton.push(_mouseButtons[2]);
          mouse_body_3.time.push(mouse_body_3.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [reset_rect_3]) {
            if (obj.contains(mouse_body_3)) {
              gotValidClick = true;
              mouse_body_3.clicked_name.push(obj.name)
            }
          }
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
  return function () {
    //------Ending Routine 'embody_q_postexp'-------
    embody_q_postexpComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    for (i=0;i<npoints;i++) {
        cx[i].setAutoDraw(false);
        }
    
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('mouse_body_3.x', mouse_body_3.x);
    psychoJS.experiment.addData('mouse_body_3.y', mouse_body_3.y);
    psychoJS.experiment.addData('mouse_body_3.leftButton', mouse_body_3.leftButton);
    psychoJS.experiment.addData('mouse_body_3.midButton', mouse_body_3.midButton);
    psychoJS.experiment.addData('mouse_body_3.rightButton', mouse_body_3.rightButton);
    psychoJS.experiment.addData('mouse_body_3.time', mouse_body_3.time);
    psychoJS.experiment.addData('mouse_body_3.clicked_name', mouse_body_3.clicked_name);
    
    psychoJS.experiment.addData('key_resp_body_3.keys', key_resp_body_3.keys);
    if (typeof key_resp_body_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_body_3.rt', key_resp_body_3.rt);
        routineTimer.reset();
        }
    
    key_resp_body_3.stop();
    // the Routine "embody_q_postexp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _DemoQ_Start_Enter_allKeys;
var DemoQ_ExplanationComponents;
function DemoQ_ExplanationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'DemoQ_Explanation'-------
    t = 0;
    DemoQ_ExplanationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    DemoQ_Start_Enter.keys = undefined;
    DemoQ_Start_Enter.rt = undefined;
    _DemoQ_Start_Enter_allKeys = [];
    // keep track of which components have finished
    DemoQ_ExplanationComponents = [];
    DemoQ_ExplanationComponents.push(DemoQ_Inst_Text);
    DemoQ_ExplanationComponents.push(DemoQ_Start_Enter);
    
    DemoQ_ExplanationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function DemoQ_ExplanationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'DemoQ_Explanation'-------
    // get current time
    t = DemoQ_ExplanationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DemoQ_Inst_Text* updates
    if (t >= 0.0 && DemoQ_Inst_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DemoQ_Inst_Text.tStart = t;  // (not accounting for frame time here)
      DemoQ_Inst_Text.frameNStart = frameN;  // exact frame index
      
      DemoQ_Inst_Text.setAutoDraw(true);
    }

    
    // *DemoQ_Start_Enter* updates
    if (t >= 0.0 && DemoQ_Start_Enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DemoQ_Start_Enter.tStart = t;  // (not accounting for frame time here)
      DemoQ_Start_Enter.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { DemoQ_Start_Enter.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { DemoQ_Start_Enter.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { DemoQ_Start_Enter.clearEvents(); });
    }

    if (DemoQ_Start_Enter.status === PsychoJS.Status.STARTED) {
      let theseKeys = DemoQ_Start_Enter.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _DemoQ_Start_Enter_allKeys = _DemoQ_Start_Enter_allKeys.concat(theseKeys);
      if (_DemoQ_Start_Enter_allKeys.length > 0) {
        DemoQ_Start_Enter.keys = _DemoQ_Start_Enter_allKeys[_DemoQ_Start_Enter_allKeys.length - 1].name;  // just the last key pressed
        DemoQ_Start_Enter.rt = _DemoQ_Start_Enter_allKeys[_DemoQ_Start_Enter_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    DemoQ_ExplanationComponents.forEach( function(thisComponent) {
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


function DemoQ_ExplanationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'DemoQ_Explanation'-------
    DemoQ_ExplanationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('DemoQ_Start_Enter.keys', DemoQ_Start_Enter.keys);
    if (typeof DemoQ_Start_Enter.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('DemoQ_Start_Enter.rt', DemoQ_Start_Enter.rt);
        routineTimer.reset();
        }
    
    DemoQ_Start_Enter.stop();
    // the Routine "DemoQ_Explanation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _DemoQ_key_resp_allKeys;
var DemoQRoutimeComponents;
function DemoQRoutimeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'DemoQRoutime'-------
    t = 0;
    DemoQRoutimeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    DemoQ_key_resp.keys = undefined;
    DemoQ_key_resp.rt = undefined;
    _DemoQ_key_resp_allKeys = [];
    modify = false;
    DemoQ_Answer.text = "";
    DemoQ_Text.setText(DemoQ);
    // keep track of which components have finished
    DemoQRoutimeComponents = [];
    DemoQRoutimeComponents.push(DemoQ_key_resp);
    DemoQRoutimeComponents.push(DemoQ_Instruction);
    DemoQRoutimeComponents.push(DemoQ_Answer);
    DemoQRoutimeComponents.push(DemoQ_Text);
    DemoQRoutimeComponents.push(Underline_DemoQ);
    DemoQRoutimeComponents.push(YourAnswer);
    
    DemoQRoutimeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var textAdd;
function DemoQRoutimeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'DemoQRoutime'-------
    // get current time
    t = DemoQRoutimeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DemoQ_key_resp* updates
    if (t >= 0.0 && DemoQ_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DemoQ_key_resp.tStart = t;  // (not accounting for frame time here)
      DemoQ_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { DemoQ_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { DemoQ_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { DemoQ_key_resp.clearEvents(); });
    }

    if (DemoQ_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = DemoQ_key_resp.getKeys({keyList: [], waitRelease: false});
      _DemoQ_key_resp_allKeys = _DemoQ_key_resp_allKeys.concat(theseKeys);
      if (_DemoQ_key_resp_allKeys.length > 0) {
        DemoQ_key_resp.keys = _DemoQ_key_resp_allKeys[_DemoQ_key_resp_allKeys.length - 1].name;  // just the last key pressed
        DemoQ_key_resp.rt = _DemoQ_key_resp_allKeys[_DemoQ_key_resp_allKeys.length - 1].rt;
      }
    }
    
    
    // *DemoQ_Instruction* updates
    if (t >= 0.0 && DemoQ_Instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DemoQ_Instruction.tStart = t;  // (not accounting for frame time here)
      DemoQ_Instruction.frameNStart = frameN;  // exact frame index
      
      DemoQ_Instruction.setAutoDraw(true);
    }

    
    // *DemoQ_Answer* updates
    if (t >= 0.0 && DemoQ_Answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DemoQ_Answer.tStart = t;  // (not accounting for frame time here)
      DemoQ_Answer.frameNStart = frameN;  // exact frame index
      
      DemoQ_Answer.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys();
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false;  // End routine (if that is what you want)
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'backspace') {
        DemoQ_Answer.text =  DemoQ_Answer.text.slice(0, -1);
        textAdd = undefined;
    } else if (['lshift', 'rshift'].includes(textAdd)) {
        modify = true;
    } else if (textAdd !== undefined) {
        if (modify) {
            DemoQ_Answer.text =  DemoQ_Answer.text + textAdd.toUpperCase();
            modify = false;
        } else {
            DemoQ_Answer.text =  DemoQ_Answer.text + textAdd
        }
        textAdd = undefined;
    }
    
    // *DemoQ_Text* updates
    if (t >= 0.0 && DemoQ_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DemoQ_Text.tStart = t;  // (not accounting for frame time here)
      DemoQ_Text.frameNStart = frameN;  // exact frame index
      
      DemoQ_Text.setAutoDraw(true);
    }

    
    // *Underline_DemoQ* updates
    if (t >= 0.0 && Underline_DemoQ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Underline_DemoQ.tStart = t;  // (not accounting for frame time here)
      Underline_DemoQ.frameNStart = frameN;  // exact frame index
      
      Underline_DemoQ.setAutoDraw(true);
    }

    
    // *YourAnswer* updates
    if (t >= 0.0 && YourAnswer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      YourAnswer.tStart = t;  // (not accounting for frame time here)
      YourAnswer.frameNStart = frameN;  // exact frame index
      
      YourAnswer.setAutoDraw(true);
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
    DemoQRoutimeComponents.forEach( function(thisComponent) {
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


function DemoQRoutimeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'DemoQRoutime'-------
    DemoQRoutimeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('DemoQ_key_resp.keys', DemoQ_key_resp.keys);
    if (typeof DemoQ_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('DemoQ_key_resp.rt', DemoQ_key_resp.rt);
        }
    
    DemoQ_key_resp.stop();
    psychoJS.experiment.addData("DemoQ_Answer",  DemoQ_Answer.text);
    DemoQ_Answer.setText("");  // empty the onscreen text ready for next input
    // the Routine "DemoQRoutime" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _STAI_inst_enter_allKeys;
var STAI_InstructionComponents;
function STAI_InstructionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'STAI_Instruction'-------
    t = 0;
    STAI_InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    STAI_inst_enter.keys = undefined;
    STAI_inst_enter.rt = undefined;
    _STAI_inst_enter_allKeys = [];
    // keep track of which components have finished
    STAI_InstructionComponents = [];
    STAI_InstructionComponents.push(STAI_inst_text);
    STAI_InstructionComponents.push(STAI_inst_enter);
    
    STAI_InstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function STAI_InstructionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'STAI_Instruction'-------
    // get current time
    t = STAI_InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *STAI_inst_text* updates
    if (t >= 0.0 && STAI_inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      STAI_inst_text.tStart = t;  // (not accounting for frame time here)
      STAI_inst_text.frameNStart = frameN;  // exact frame index
      
      STAI_inst_text.setAutoDraw(true);
    }

    
    // *STAI_inst_enter* updates
    if (t >= 0.0 && STAI_inst_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      STAI_inst_enter.tStart = t;  // (not accounting for frame time here)
      STAI_inst_enter.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { STAI_inst_enter.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { STAI_inst_enter.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { STAI_inst_enter.clearEvents(); });
    }

    if (STAI_inst_enter.status === PsychoJS.Status.STARTED) {
      let theseKeys = STAI_inst_enter.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _STAI_inst_enter_allKeys = _STAI_inst_enter_allKeys.concat(theseKeys);
      if (_STAI_inst_enter_allKeys.length > 0) {
        STAI_inst_enter.keys = _STAI_inst_enter_allKeys[_STAI_inst_enter_allKeys.length - 1].name;  // just the last key pressed
        STAI_inst_enter.rt = _STAI_inst_enter_allKeys[_STAI_inst_enter_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    STAI_InstructionComponents.forEach( function(thisComponent) {
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


function STAI_InstructionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'STAI_Instruction'-------
    STAI_InstructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('STAI_inst_enter.keys', STAI_inst_enter.keys);
    if (typeof STAI_inst_enter.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('STAI_inst_enter.rt', STAI_inst_enter.rt);
        routineTimer.reset();
        }
    
    STAI_inst_enter.stop();
    // the Routine "STAI_Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var STAI_RoutineComponents;
function STAI_RoutineRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'STAI_Routine'-------
    t = 0;
    STAI_RoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    STAI_slider.reset()
    STAI_Question_Text.setText(Question_STAIT);
     RatingEndCount = 0;
    // keep track of which components have finished
    STAI_RoutineComponents = [];
    STAI_RoutineComponents.push(Line_STAI);
    STAI_RoutineComponents.push(STAI_slider);
    STAI_RoutineComponents.push(STAI_Question_Text);
    STAI_RoutineComponents.push(MouseClick_11);
    
    STAI_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function STAI_RoutineRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'STAI_Routine'-------
    // get current time
    t = STAI_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Line_STAI* updates
    if (t >= 0.0 && Line_STAI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_STAI.tStart = t;  // (not accounting for frame time here)
      Line_STAI.frameNStart = frameN;  // exact frame index
      
      Line_STAI.setAutoDraw(true);
    }

    
    // *STAI_slider* updates
    if (t >= 0.0 && STAI_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      STAI_slider.tStart = t;  // (not accounting for frame time here)
      STAI_slider.frameNStart = frameN;  // exact frame index
      
      STAI_slider.setAutoDraw(true);
    }

    
    // *STAI_Question_Text* updates
    if (t >= 0.0 && STAI_Question_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      STAI_Question_Text.tStart = t;  // (not accounting for frame time here)
      STAI_Question_Text.frameNStart = frameN;  // exact frame index
      
      STAI_Question_Text.setAutoDraw(true);
    }

     if (STAI_slider.getRating() !== undefined &&STAI_slider.status === PsychoJS.Status.STARTED) {
        RatingEndCount+=1;
       if (RatingEndCount>20) {
          continueRoutine = false; 
          }
          }
    
    // *MouseClick_11* updates
    if (t >= 0.0 && MouseClick_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MouseClick_11.tStart = t;  // (not accounting for frame time here)
      MouseClick_11.frameNStart = frameN;  // exact frame index
      
      MouseClick_11.setAutoDraw(true);
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
    STAI_RoutineComponents.forEach( function(thisComponent) {
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


function STAI_RoutineRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'STAI_Routine'-------
    STAI_RoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('STAI_slider.response', STAI_slider.getRating());
    psychoJS.experiment.addData('STAI_slider.rt', STAI_slider.getRT());
    // the Routine "STAI_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _BISBAS_inst_enter_allKeys;
var BISBAS_InstructionComponents;
function BISBAS_InstructionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'BISBAS_Instruction'-------
    t = 0;
    BISBAS_InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    BISBAS_inst_enter.keys = undefined;
    BISBAS_inst_enter.rt = undefined;
    _BISBAS_inst_enter_allKeys = [];
    // keep track of which components have finished
    BISBAS_InstructionComponents = [];
    BISBAS_InstructionComponents.push(BISBAS_inst_text);
    BISBAS_InstructionComponents.push(BISBAS_inst_enter);
    
    BISBAS_InstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BISBAS_InstructionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'BISBAS_Instruction'-------
    // get current time
    t = BISBAS_InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BISBAS_inst_text* updates
    if (t >= 0.0 && BISBAS_inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BISBAS_inst_text.tStart = t;  // (not accounting for frame time here)
      BISBAS_inst_text.frameNStart = frameN;  // exact frame index
      
      BISBAS_inst_text.setAutoDraw(true);
    }

    
    // *BISBAS_inst_enter* updates
    if (t >= 0.0 && BISBAS_inst_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BISBAS_inst_enter.tStart = t;  // (not accounting for frame time here)
      BISBAS_inst_enter.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { BISBAS_inst_enter.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { BISBAS_inst_enter.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { BISBAS_inst_enter.clearEvents(); });
    }

    if (BISBAS_inst_enter.status === PsychoJS.Status.STARTED) {
      let theseKeys = BISBAS_inst_enter.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _BISBAS_inst_enter_allKeys = _BISBAS_inst_enter_allKeys.concat(theseKeys);
      if (_BISBAS_inst_enter_allKeys.length > 0) {
        BISBAS_inst_enter.keys = _BISBAS_inst_enter_allKeys[_BISBAS_inst_enter_allKeys.length - 1].name;  // just the last key pressed
        BISBAS_inst_enter.rt = _BISBAS_inst_enter_allKeys[_BISBAS_inst_enter_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    BISBAS_InstructionComponents.forEach( function(thisComponent) {
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


function BISBAS_InstructionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'BISBAS_Instruction'-------
    BISBAS_InstructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BISBAS_inst_enter.keys', BISBAS_inst_enter.keys);
    if (typeof BISBAS_inst_enter.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('BISBAS_inst_enter.rt', BISBAS_inst_enter.rt);
        routineTimer.reset();
        }
    
    BISBAS_inst_enter.stop();
    // the Routine "BISBAS_Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var BISBAS_RoutineComponents;
function BISBAS_RoutineRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'BISBAS_Routine'-------
    t = 0;
    BISBAS_RoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    BISBAS_slider.reset()
    BISBAS_Question_Text.setText(Question_bisbas);
     RatingEndCount = 0;
    // keep track of which components have finished
    BISBAS_RoutineComponents = [];
    BISBAS_RoutineComponents.push(Line_BISBAS);
    BISBAS_RoutineComponents.push(BISBAS_slider);
    BISBAS_RoutineComponents.push(BISBAS_Question_Text);
    BISBAS_RoutineComponents.push(MouseClick_10);
    
    BISBAS_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BISBAS_RoutineRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'BISBAS_Routine'-------
    // get current time
    t = BISBAS_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Line_BISBAS* updates
    if (t >= 0.0 && Line_BISBAS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_BISBAS.tStart = t;  // (not accounting for frame time here)
      Line_BISBAS.frameNStart = frameN;  // exact frame index
      
      Line_BISBAS.setAutoDraw(true);
    }

    
    // *BISBAS_slider* updates
    if (t >= 0.0 && BISBAS_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BISBAS_slider.tStart = t;  // (not accounting for frame time here)
      BISBAS_slider.frameNStart = frameN;  // exact frame index
      
      BISBAS_slider.setAutoDraw(true);
    }

    
    // *BISBAS_Question_Text* updates
    if (t >= 0.0 && BISBAS_Question_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BISBAS_Question_Text.tStart = t;  // (not accounting for frame time here)
      BISBAS_Question_Text.frameNStart = frameN;  // exact frame index
      
      BISBAS_Question_Text.setAutoDraw(true);
    }

     if (BISBAS_slider.getRating() !== undefined &&BISBAS_slider.status === PsychoJS.Status.STARTED) {
        RatingEndCount+=1;
       if (RatingEndCount>20) {
          continueRoutine = false; 
          }
          }
    
    // *MouseClick_10* updates
    if (t >= 0.0 && MouseClick_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MouseClick_10.tStart = t;  // (not accounting for frame time here)
      MouseClick_10.frameNStart = frameN;  // exact frame index
      
      MouseClick_10.setAutoDraw(true);
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
    BISBAS_RoutineComponents.forEach( function(thisComponent) {
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


function BISBAS_RoutineRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'BISBAS_Routine'-------
    BISBAS_RoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BISBAS_slider.response', BISBAS_slider.getRating());
    psychoJS.experiment.addData('BISBAS_slider.rt', BISBAS_slider.getRT());
    // the Routine "BISBAS_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _STICSA_inst_enter_allKeys;
var STICSA_InstructionComponents;
function STICSA_InstructionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'STICSA_Instruction'-------
    t = 0;
    STICSA_InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    STICSA_inst_enter.keys = undefined;
    STICSA_inst_enter.rt = undefined;
    _STICSA_inst_enter_allKeys = [];
    // keep track of which components have finished
    STICSA_InstructionComponents = [];
    STICSA_InstructionComponents.push(STICSA_inst_text);
    STICSA_InstructionComponents.push(STICSA_inst_enter);
    
    STICSA_InstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function STICSA_InstructionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'STICSA_Instruction'-------
    // get current time
    t = STICSA_InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *STICSA_inst_text* updates
    if (t >= 0.0 && STICSA_inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      STICSA_inst_text.tStart = t;  // (not accounting for frame time here)
      STICSA_inst_text.frameNStart = frameN;  // exact frame index
      
      STICSA_inst_text.setAutoDraw(true);
    }

    
    // *STICSA_inst_enter* updates
    if (t >= 0.0 && STICSA_inst_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      STICSA_inst_enter.tStart = t;  // (not accounting for frame time here)
      STICSA_inst_enter.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { STICSA_inst_enter.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { STICSA_inst_enter.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { STICSA_inst_enter.clearEvents(); });
    }

    if (STICSA_inst_enter.status === PsychoJS.Status.STARTED) {
      let theseKeys = STICSA_inst_enter.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _STICSA_inst_enter_allKeys = _STICSA_inst_enter_allKeys.concat(theseKeys);
      if (_STICSA_inst_enter_allKeys.length > 0) {
        STICSA_inst_enter.keys = _STICSA_inst_enter_allKeys[_STICSA_inst_enter_allKeys.length - 1].name;  // just the last key pressed
        STICSA_inst_enter.rt = _STICSA_inst_enter_allKeys[_STICSA_inst_enter_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    STICSA_InstructionComponents.forEach( function(thisComponent) {
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


function STICSA_InstructionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'STICSA_Instruction'-------
    STICSA_InstructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('STICSA_inst_enter.keys', STICSA_inst_enter.keys);
    if (typeof STICSA_inst_enter.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('STICSA_inst_enter.rt', STICSA_inst_enter.rt);
        routineTimer.reset();
        }
    
    STICSA_inst_enter.stop();
    // the Routine "STICSA_Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var STICSA_RoutineComponents;
function STICSA_RoutineRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'STICSA_Routine'-------
    t = 0;
    STICSA_RoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    STICSA_slider.reset()
    STICSA_Question_Text.setText(Question_STICSA);
     RatingEndCount = 0;
    // keep track of which components have finished
    STICSA_RoutineComponents = [];
    STICSA_RoutineComponents.push(Line_STICSA);
    STICSA_RoutineComponents.push(STICSA_slider);
    STICSA_RoutineComponents.push(STICSA_Question_Text);
    STICSA_RoutineComponents.push(MouseClick_7);
    
    STICSA_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function STICSA_RoutineRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'STICSA_Routine'-------
    // get current time
    t = STICSA_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Line_STICSA* updates
    if (t >= 0.0 && Line_STICSA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_STICSA.tStart = t;  // (not accounting for frame time here)
      Line_STICSA.frameNStart = frameN;  // exact frame index
      
      Line_STICSA.setAutoDraw(true);
    }

    
    // *STICSA_slider* updates
    if (t >= 0.0 && STICSA_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      STICSA_slider.tStart = t;  // (not accounting for frame time here)
      STICSA_slider.frameNStart = frameN;  // exact frame index
      
      STICSA_slider.setAutoDraw(true);
    }

    
    // *STICSA_Question_Text* updates
    if (t >= 0.0 && STICSA_Question_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      STICSA_Question_Text.tStart = t;  // (not accounting for frame time here)
      STICSA_Question_Text.frameNStart = frameN;  // exact frame index
      
      STICSA_Question_Text.setAutoDraw(true);
    }

     if (STICSA_slider.getRating() !== undefined &&STICSA_slider.status === PsychoJS.Status.STARTED) {
        RatingEndCount+=1;
       if (RatingEndCount>20) {
          continueRoutine = false; 
          }
          }
    
    // *MouseClick_7* updates
    if (t >= 0.0 && MouseClick_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MouseClick_7.tStart = t;  // (not accounting for frame time here)
      MouseClick_7.frameNStart = frameN;  // exact frame index
      
      MouseClick_7.setAutoDraw(true);
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
    STICSA_RoutineComponents.forEach( function(thisComponent) {
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


function STICSA_RoutineRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'STICSA_Routine'-------
    STICSA_RoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('STICSA_slider.response', STICSA_slider.getRating());
    psychoJS.experiment.addData('STICSA_slider.rt', STICSA_slider.getRT());
    // the Routine "STICSA_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _BPQ_inst_enter_allKeys;
var BPQ_instructionComponents;
function BPQ_instructionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'BPQ_instruction'-------
    t = 0;
    BPQ_instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    BPQ_inst_enter.keys = undefined;
    BPQ_inst_enter.rt = undefined;
    _BPQ_inst_enter_allKeys = [];
    // keep track of which components have finished
    BPQ_instructionComponents = [];
    BPQ_instructionComponents.push(BPQ_inst_text);
    BPQ_instructionComponents.push(BPQ_inst_enter);
    
    BPQ_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BPQ_instructionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'BPQ_instruction'-------
    // get current time
    t = BPQ_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BPQ_inst_text* updates
    if (t >= 0.0 && BPQ_inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPQ_inst_text.tStart = t;  // (not accounting for frame time here)
      BPQ_inst_text.frameNStart = frameN;  // exact frame index
      
      BPQ_inst_text.setAutoDraw(true);
    }

    
    // *BPQ_inst_enter* updates
    if (t >= 0.0 && BPQ_inst_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPQ_inst_enter.tStart = t;  // (not accounting for frame time here)
      BPQ_inst_enter.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { BPQ_inst_enter.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { BPQ_inst_enter.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { BPQ_inst_enter.clearEvents(); });
    }

    if (BPQ_inst_enter.status === PsychoJS.Status.STARTED) {
      let theseKeys = BPQ_inst_enter.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _BPQ_inst_enter_allKeys = _BPQ_inst_enter_allKeys.concat(theseKeys);
      if (_BPQ_inst_enter_allKeys.length > 0) {
        BPQ_inst_enter.keys = _BPQ_inst_enter_allKeys[_BPQ_inst_enter_allKeys.length - 1].name;  // just the last key pressed
        BPQ_inst_enter.rt = _BPQ_inst_enter_allKeys[_BPQ_inst_enter_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    BPQ_instructionComponents.forEach( function(thisComponent) {
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


function BPQ_instructionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'BPQ_instruction'-------
    BPQ_instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BPQ_inst_enter.keys', BPQ_inst_enter.keys);
    if (typeof BPQ_inst_enter.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('BPQ_inst_enter.rt', BPQ_inst_enter.rt);
        routineTimer.reset();
        }
    
    BPQ_inst_enter.stop();
    // the Routine "BPQ_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var BPQ_RoutineComponents;
function BPQ_RoutineRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'BPQ_Routine'-------
    t = 0;
    BPQ_RoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    BPQ_slider.reset()
    BPQ_Question_Text.setText(Question_BPQ);
     RatingEndCount = 0;
    // keep track of which components have finished
    BPQ_RoutineComponents = [];
    BPQ_RoutineComponents.push(Line_BPQ);
    BPQ_RoutineComponents.push(BPQ_slider);
    BPQ_RoutineComponents.push(BPQ_Question_Text);
    BPQ_RoutineComponents.push(BPQ_text2);
    BPQ_RoutineComponents.push(MouseClick_9);
    
    BPQ_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BPQ_RoutineRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'BPQ_Routine'-------
    // get current time
    t = BPQ_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Line_BPQ* updates
    if (t >= 0.0 && Line_BPQ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_BPQ.tStart = t;  // (not accounting for frame time here)
      Line_BPQ.frameNStart = frameN;  // exact frame index
      
      Line_BPQ.setAutoDraw(true);
    }

    
    // *BPQ_slider* updates
    if (t >= 0.0 && BPQ_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPQ_slider.tStart = t;  // (not accounting for frame time here)
      BPQ_slider.frameNStart = frameN;  // exact frame index
      
      BPQ_slider.setAutoDraw(true);
    }

    
    // *BPQ_Question_Text* updates
    if (t >= 0.0 && BPQ_Question_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPQ_Question_Text.tStart = t;  // (not accounting for frame time here)
      BPQ_Question_Text.frameNStart = frameN;  // exact frame index
      
      BPQ_Question_Text.setAutoDraw(true);
    }

     if (BPQ_slider.getRating() !== undefined &&BPQ_slider.status === PsychoJS.Status.STARTED) {
        RatingEndCount+=1;
       if (RatingEndCount>20) {
          continueRoutine = false; 
          }
          }
    
    // *BPQ_text2* updates
    if (t >= 0.0 && BPQ_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPQ_text2.tStart = t;  // (not accounting for frame time here)
      BPQ_text2.frameNStart = frameN;  // exact frame index
      
      BPQ_text2.setAutoDraw(true);
    }

    
    // *MouseClick_9* updates
    if (t >= 0.0 && MouseClick_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MouseClick_9.tStart = t;  // (not accounting for frame time here)
      MouseClick_9.frameNStart = frameN;  // exact frame index
      
      MouseClick_9.setAutoDraw(true);
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
    BPQ_RoutineComponents.forEach( function(thisComponent) {
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


function BPQ_RoutineRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'BPQ_Routine'-------
    BPQ_RoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BPQ_slider.response', BPQ_slider.getRating());
    psychoJS.experiment.addData('BPQ_slider.rt', BPQ_slider.getRT());
    // the Routine "BPQ_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _DASS21_inst_enter_allKeys;
var DASS21_InstructionComponents;
function DASS21_InstructionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'DASS21_Instruction'-------
    t = 0;
    DASS21_InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    DASS21_inst_enter.keys = undefined;
    DASS21_inst_enter.rt = undefined;
    _DASS21_inst_enter_allKeys = [];
    // keep track of which components have finished
    DASS21_InstructionComponents = [];
    DASS21_InstructionComponents.push(DASS21_inst_text);
    DASS21_InstructionComponents.push(DASS21_inst_enter);
    
    DASS21_InstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function DASS21_InstructionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'DASS21_Instruction'-------
    // get current time
    t = DASS21_InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DASS21_inst_text* updates
    if (t >= 0.0 && DASS21_inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DASS21_inst_text.tStart = t;  // (not accounting for frame time here)
      DASS21_inst_text.frameNStart = frameN;  // exact frame index
      
      DASS21_inst_text.setAutoDraw(true);
    }

    
    // *DASS21_inst_enter* updates
    if (t >= 0.0 && DASS21_inst_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DASS21_inst_enter.tStart = t;  // (not accounting for frame time here)
      DASS21_inst_enter.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { DASS21_inst_enter.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { DASS21_inst_enter.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { DASS21_inst_enter.clearEvents(); });
    }

    if (DASS21_inst_enter.status === PsychoJS.Status.STARTED) {
      let theseKeys = DASS21_inst_enter.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _DASS21_inst_enter_allKeys = _DASS21_inst_enter_allKeys.concat(theseKeys);
      if (_DASS21_inst_enter_allKeys.length > 0) {
        DASS21_inst_enter.keys = _DASS21_inst_enter_allKeys[_DASS21_inst_enter_allKeys.length - 1].name;  // just the last key pressed
        DASS21_inst_enter.rt = _DASS21_inst_enter_allKeys[_DASS21_inst_enter_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    DASS21_InstructionComponents.forEach( function(thisComponent) {
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


function DASS21_InstructionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'DASS21_Instruction'-------
    DASS21_InstructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('DASS21_inst_enter.keys', DASS21_inst_enter.keys);
    if (typeof DASS21_inst_enter.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('DASS21_inst_enter.rt', DASS21_inst_enter.rt);
        routineTimer.reset();
        }
    
    DASS21_inst_enter.stop();
    // the Routine "DASS21_Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var DASS21_RoutineComponents;
function DASS21_RoutineRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'DASS21_Routine'-------
    t = 0;
    DASS21_RoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    DASS21_slider.reset()
    DASS21_Question_Text.setText(Question_DASS21);
     RatingEndCount = 0;
    // keep track of which components have finished
    DASS21_RoutineComponents = [];
    DASS21_RoutineComponents.push(Line_DASS21);
    DASS21_RoutineComponents.push(DASS21_slider);
    DASS21_RoutineComponents.push(DASS21_Question_Text);
    
    DASS21_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function DASS21_RoutineRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'DASS21_Routine'-------
    // get current time
    t = DASS21_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Line_DASS21* updates
    if (t >= 0.0 && Line_DASS21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_DASS21.tStart = t;  // (not accounting for frame time here)
      Line_DASS21.frameNStart = frameN;  // exact frame index
      
      Line_DASS21.setAutoDraw(true);
    }

    
    // *DASS21_slider* updates
    if (t >= 0.0 && DASS21_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DASS21_slider.tStart = t;  // (not accounting for frame time here)
      DASS21_slider.frameNStart = frameN;  // exact frame index
      
      DASS21_slider.setAutoDraw(true);
    }

    
    // *DASS21_Question_Text* updates
    if (t >= 0.0 && DASS21_Question_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DASS21_Question_Text.tStart = t;  // (not accounting for frame time here)
      DASS21_Question_Text.frameNStart = frameN;  // exact frame index
      
      DASS21_Question_Text.setAutoDraw(true);
    }

     if (DASS21_slider.getRating() !== undefined &&DASS21_slider.status === PsychoJS.Status.STARTED) {
        RatingEndCount+=1;
       if (RatingEndCount>20) {
          continueRoutine = false; 
          }
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
    DASS21_RoutineComponents.forEach( function(thisComponent) {
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


function DASS21_RoutineRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'DASS21_Routine'-------
    DASS21_RoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('DASS21_slider.response', DASS21_slider.getRating());
    psychoJS.experiment.addData('DASS21_slider.rt', DASS21_slider.getRT());
    // the Routine "DASS21_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _MAIA_inst_enter_allKeys;
var MAIA_InstructionComponents;
function MAIA_InstructionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'MAIA_Instruction'-------
    t = 0;
    MAIA_InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    MAIA_inst_enter.keys = undefined;
    MAIA_inst_enter.rt = undefined;
    _MAIA_inst_enter_allKeys = [];
    // keep track of which components have finished
    MAIA_InstructionComponents = [];
    MAIA_InstructionComponents.push(MAIA_inst_text);
    MAIA_InstructionComponents.push(MAIA_inst_enter);
    
    MAIA_InstructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function MAIA_InstructionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'MAIA_Instruction'-------
    // get current time
    t = MAIA_InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *MAIA_inst_text* updates
    if (t >= 0.0 && MAIA_inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MAIA_inst_text.tStart = t;  // (not accounting for frame time here)
      MAIA_inst_text.frameNStart = frameN;  // exact frame index
      
      MAIA_inst_text.setAutoDraw(true);
    }

    
    // *MAIA_inst_enter* updates
    if (t >= 0.0 && MAIA_inst_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MAIA_inst_enter.tStart = t;  // (not accounting for frame time here)
      MAIA_inst_enter.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { MAIA_inst_enter.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { MAIA_inst_enter.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { MAIA_inst_enter.clearEvents(); });
    }

    if (MAIA_inst_enter.status === PsychoJS.Status.STARTED) {
      let theseKeys = MAIA_inst_enter.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _MAIA_inst_enter_allKeys = _MAIA_inst_enter_allKeys.concat(theseKeys);
      if (_MAIA_inst_enter_allKeys.length > 0) {
        MAIA_inst_enter.keys = _MAIA_inst_enter_allKeys[_MAIA_inst_enter_allKeys.length - 1].name;  // just the last key pressed
        MAIA_inst_enter.rt = _MAIA_inst_enter_allKeys[_MAIA_inst_enter_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    MAIA_InstructionComponents.forEach( function(thisComponent) {
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


function MAIA_InstructionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'MAIA_Instruction'-------
    MAIA_InstructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('MAIA_inst_enter.keys', MAIA_inst_enter.keys);
    if (typeof MAIA_inst_enter.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('MAIA_inst_enter.rt', MAIA_inst_enter.rt);
        routineTimer.reset();
        }
    
    MAIA_inst_enter.stop();
    // the Routine "MAIA_Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var MAIA_RoutineComponents;
function MAIA_RoutineRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'MAIA_Routine'-------
    t = 0;
    MAIA_RoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    MAIA_slider.reset()
    MAIA_Question_Text.setText(Question_MAIA);
     RatingEndCount = 0;
    // keep track of which components have finished
    MAIA_RoutineComponents = [];
    MAIA_RoutineComponents.push(Line_MAIA);
    MAIA_RoutineComponents.push(MAIA_slider);
    MAIA_RoutineComponents.push(MAIA_Question_Text);
    MAIA_RoutineComponents.push(MouseClick_8);
    
    MAIA_RoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function MAIA_RoutineRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'MAIA_Routine'-------
    // get current time
    t = MAIA_RoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Line_MAIA* updates
    if (t >= 0.0 && Line_MAIA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Line_MAIA.tStart = t;  // (not accounting for frame time here)
      Line_MAIA.frameNStart = frameN;  // exact frame index
      
      Line_MAIA.setAutoDraw(true);
    }

    
    // *MAIA_slider* updates
    if (t >= 0.0 && MAIA_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MAIA_slider.tStart = t;  // (not accounting for frame time here)
      MAIA_slider.frameNStart = frameN;  // exact frame index
      
      MAIA_slider.setAutoDraw(true);
    }

    
    // *MAIA_Question_Text* updates
    if (t >= 0.0 && MAIA_Question_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MAIA_Question_Text.tStart = t;  // (not accounting for frame time here)
      MAIA_Question_Text.frameNStart = frameN;  // exact frame index
      
      MAIA_Question_Text.setAutoDraw(true);
    }

     if (MAIA_slider.getRating() !== undefined &&MAIA_slider.status === PsychoJS.Status.STARTED) {
        RatingEndCount+=1;
       if (RatingEndCount>20) {
          continueRoutine = false; 
          }
          }
    
    // *MouseClick_8* updates
    if (t >= 0.0 && MouseClick_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MouseClick_8.tStart = t;  // (not accounting for frame time here)
      MouseClick_8.frameNStart = frameN;  // exact frame index
      
      MouseClick_8.setAutoDraw(true);
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
    MAIA_RoutineComponents.forEach( function(thisComponent) {
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


function MAIA_RoutineRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'MAIA_Routine'-------
    MAIA_RoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('MAIA_slider.response', MAIA_slider.getRating());
    psychoJS.experiment.addData('MAIA_slider.rt', MAIA_slider.getRT());
    // the Routine "MAIA_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var FinalScreenComponents;
function FinalScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'FinalScreen'-------
    t = 0;
    FinalScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    FinalScreenComponents = [];
    FinalScreenComponents.push(FinalText);
    
    FinalScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FinalScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'FinalScreen'-------
    // get current time
    t = FinalScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FinalText* updates
    if (t >= 0.0 && FinalText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FinalText.tStart = t;  // (not accounting for frame time here)
      FinalText.frameNStart = frameN;  // exact frame index
      
      FinalText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((FinalText.status === PsychoJS.Status.STARTED || FinalText.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      FinalText.setAutoDraw(false);
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
    FinalScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FinalScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'FinalScreen'-------
    FinalScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    TotalExpTime.push(TotalExpClock.getTime());
    psychoJS.experiment.addData('Time_EndExp',TotalExpClock.getTime());
    psychoJS.experiment.addData('Time_All',TotalExpTime);
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
