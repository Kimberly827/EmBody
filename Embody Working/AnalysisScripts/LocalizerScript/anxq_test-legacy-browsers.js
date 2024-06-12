/****************** 
 * Anxq_Test Test *
 ******************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'anxq_test';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
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
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'DASS21.xlsx', 'path': 'DASS21.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


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
  
  return Scheduler.Event.NEXT;
}


var DASS21_RoutineClock;
var Line_DASS21;
var DASS21_slider;
var DASS21_Question_Text;
var RatingEndCount;
var text;
var trialClock;
var anxiety_rating;
var lt_text_anx;
var rt_text_anx;
var Question_Name;
var MouseClick;
var globalClock;
var routineTimer;
function experimentInit() {
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
    labels: ["Never", "", "", "", "", "Always"], ticks: [0, 1, 2, 3, 4, 5],
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
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
   RatingEndCount = 0;
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'During most situations I am aware of:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  anxiety_rating = new visual.Slider({
    win: psychoJS.window, name: 'anxiety_rating',
    size: [1.0, 0.05], pos: [0, (- 0.3)], units: 'norm',
    labels: ["1", "2", "3", "4", "5", "6", "7"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 0, style: [visual.Slider.Style.RATING, visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('white'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  lt_text_anx = new visual.TextStim({
    win: psychoJS.window,
    name: 'lt_text_anx',
    text: 'no sense of anxiety',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.22)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  rt_text_anx = new visual.TextStim({
    win: psychoJS.window,
    name: 'rt_text_anx',
    text: 'highly anxious',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.22)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  Question_Name = new visual.TextStim({
    win: psychoJS.window,
    name: 'Question_Name',
    text: 'How anxious are you now?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  MouseClick = new visual.TextStim({
    win: psychoJS.window,
    name: 'MouseClick',
    text: 'Click on the scale to rate the score',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'DASS21.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(DASS21_RoutineRoutineBegin(snapshot));
    trialsLoopScheduler.add(DASS21_RoutineRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(DASS21_RoutineRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
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
    DASS21_RoutineComponents.push(text);
    
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


var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    anxiety_rating.reset()
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(anxiety_rating);
    trialComponents.push(lt_text_anx);
    trialComponents.push(rt_text_anx);
    trialComponents.push(Question_Name);
    trialComponents.push(MouseClick);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *anxiety_rating* updates
    if (t >= 0 && anxiety_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      anxiety_rating.tStart = t;  // (not accounting for frame time here)
      anxiety_rating.frameNStart = frameN;  // exact frame index
      
      anxiety_rating.setAutoDraw(true);
    }

    frameRemains = 0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((anxiety_rating.status === PsychoJS.Status.STARTED || anxiety_rating.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      anxiety_rating.setAutoDraw(false);
    }
    
    // *lt_text_anx* updates
    if (t >= 0.0 && lt_text_anx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lt_text_anx.tStart = t;  // (not accounting for frame time here)
      lt_text_anx.frameNStart = frameN;  // exact frame index
      
      lt_text_anx.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((lt_text_anx.status === PsychoJS.Status.STARTED || lt_text_anx.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      lt_text_anx.setAutoDraw(false);
    }
    
    // *rt_text_anx* updates
    if (t >= 0.0 && rt_text_anx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rt_text_anx.tStart = t;  // (not accounting for frame time here)
      rt_text_anx.frameNStart = frameN;  // exact frame index
      
      rt_text_anx.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((rt_text_anx.status === PsychoJS.Status.STARTED || rt_text_anx.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      rt_text_anx.setAutoDraw(false);
    }
    
    // *Question_Name* updates
    if (t >= 0 && Question_Name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_Name.tStart = t;  // (not accounting for frame time here)
      Question_Name.frameNStart = frameN;  // exact frame index
      
      Question_Name.setAutoDraw(true);
    }

    frameRemains = 0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Question_Name.status === PsychoJS.Status.STARTED || Question_Name.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Question_Name.setAutoDraw(false);
    }
    
    // *MouseClick* updates
    if (t >= 0 && MouseClick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MouseClick.tStart = t;  // (not accounting for frame time here)
      MouseClick.frameNStart = frameN;  // exact frame index
      
      MouseClick.setAutoDraw(true);
    }

    frameRemains = 0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((MouseClick.status === PsychoJS.Status.STARTED || MouseClick.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      MouseClick.setAutoDraw(false);
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
    trialComponents.forEach( function(thisComponent) {
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


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('anxiety_rating.response', anxiety_rating.getRating());
    psychoJS.experiment.addData('anxiety_rating.rt', anxiety_rating.getRT());
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
