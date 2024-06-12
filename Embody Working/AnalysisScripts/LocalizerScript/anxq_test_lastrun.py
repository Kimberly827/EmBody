#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.10),
    on 2월 12, 2021, at 14:13
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.10'
expName = 'anxq_test'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Dropbox\\2020_project\\Templeton_Project\\TIL\\TIL_V0_2021\\anxq_test_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "DASS21_Routine"
DASS21_RoutineClock = core.Clock()
Line_DASS21 = visual.Line(
    win=win, name='Line_DASS21',units='norm', 
    start=(-(1, 1)[0]/2.0, 0), end=(+(1, 1)[0]/2.0, 0),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
DASS21_slider = visual.Slider(win=win, name='DASS21_slider',
    size=(1.0, 0.04), pos=(0, 0), units='norm',
    labels=['Does not apply to me at all','Applies to me to some degree, \n or some of the time','Applies to me to a considerable degree,\n or a good part of the time','Applies to me very much,\n or most of the time'], ticks=(1, 2, 3, 4),
    granularity=1, style=['rating', 'radio'],
    color='LightGray', font='HelveticaBold',
    flip=False, depth=-1)
DASS21_Question_Text = visual.TextStim(win=win, name='DASS21_Question_Text',
    text='default text',
    font='Arial',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
text = visual.TextStim(win=win, name='text',
    text='During most situations I am aware of:',
    font='Arial',
    pos=(0, 0.3), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
anxiety_rating = visual.Slider(win=win, name='anxiety_rating',
    size=(1.0, 0.05), pos=(0, -0.3), units='norm',
    labels=['1','2','3','4','5','6','7'], ticks=(1, 2, 3, 4, 5,6,7),
    granularity=0, style=['rating', 'triangleMarker'],
    color='white', font='HelveticaBold',
    flip=False, depth=0)
lt_text_anx = visual.TextStim(win=win, name='lt_text_anx',
    text='no sense of anxiety',
    font='Arial',
    pos=(-0.45, -0.22), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
rt_text_anx = visual.TextStim(win=win, name='rt_text_anx',
    text='highly anxious',
    font='Arial',
    pos=(0.45, -0.22), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
Question_Name = visual.TextStim(win=win, name='Question_Name',
    text='How anxious are you now?',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
MouseClick = visual.TextStim(win=win, name='MouseClick',
    text='Click on the scale to rate the score',
    font='Arial',
    pos=(0, -0.4), height=0.02, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('DASS21.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "DASS21_Routine"-------
    continueRoutine = True
    # update component parameters for each repeat
    DASS21_slider.reset()
    DASS21_Question_Text.setText(Question_DASS21)
    # keep track of which components have finished
    DASS21_RoutineComponents = [Line_DASS21, DASS21_slider, DASS21_Question_Text, text]
    for thisComponent in DASS21_RoutineComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    DASS21_RoutineClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "DASS21_Routine"-------
    while continueRoutine:
        # get current time
        t = DASS21_RoutineClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=DASS21_RoutineClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Line_DASS21* updates
        if Line_DASS21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Line_DASS21.frameNStart = frameN  # exact frame index
            Line_DASS21.tStart = t  # local t and not account for scr refresh
            Line_DASS21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Line_DASS21, 'tStartRefresh')  # time at next scr refresh
            Line_DASS21.setAutoDraw(True)
        
        # *DASS21_slider* updates
        if DASS21_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            DASS21_slider.frameNStart = frameN  # exact frame index
            DASS21_slider.tStart = t  # local t and not account for scr refresh
            DASS21_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(DASS21_slider, 'tStartRefresh')  # time at next scr refresh
            DASS21_slider.setAutoDraw(True)
        
        # *DASS21_Question_Text* updates
        if DASS21_Question_Text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            DASS21_Question_Text.frameNStart = frameN  # exact frame index
            DASS21_Question_Text.tStart = t  # local t and not account for scr refresh
            DASS21_Question_Text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(DASS21_Question_Text, 'tStartRefresh')  # time at next scr refresh
            DASS21_Question_Text.setAutoDraw(True)
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in DASS21_RoutineComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "DASS21_Routine"-------
    for thisComponent in DASS21_RoutineComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('Line_DASS21.started', Line_DASS21.tStartRefresh)
    trials.addData('Line_DASS21.stopped', Line_DASS21.tStopRefresh)
    trials.addData('DASS21_slider.response', DASS21_slider.getRating())
    trials.addData('DASS21_slider.rt', DASS21_slider.getRT())
    trials.addData('DASS21_slider.started', DASS21_slider.tStartRefresh)
    trials.addData('DASS21_slider.stopped', DASS21_slider.tStopRefresh)
    trials.addData('DASS21_Question_Text.started', DASS21_Question_Text.tStartRefresh)
    trials.addData('DASS21_Question_Text.stopped', DASS21_Question_Text.tStopRefresh)
    trials.addData('text.started', text.tStartRefresh)
    trials.addData('text.stopped', text.tStopRefresh)
    # the Routine "DASS21_Routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "trial"-------
continueRoutine = True
routineTimer.add(10.000000)
# update component parameters for each repeat
anxiety_rating.reset()
# keep track of which components have finished
trialComponents = [anxiety_rating, lt_text_anx, rt_text_anx, Question_Name, MouseClick]
for thisComponent in trialComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "trial"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = trialClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=trialClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *anxiety_rating* updates
    if anxiety_rating.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        anxiety_rating.frameNStart = frameN  # exact frame index
        anxiety_rating.tStart = t  # local t and not account for scr refresh
        anxiety_rating.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(anxiety_rating, 'tStartRefresh')  # time at next scr refresh
        anxiety_rating.setAutoDraw(True)
    if anxiety_rating.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > anxiety_rating.tStartRefresh + 10-frameTolerance:
            # keep track of stop time/frame for later
            anxiety_rating.tStop = t  # not accounting for scr refresh
            anxiety_rating.frameNStop = frameN  # exact frame index
            win.timeOnFlip(anxiety_rating, 'tStopRefresh')  # time at next scr refresh
            anxiety_rating.setAutoDraw(False)
    
    # *lt_text_anx* updates
    if lt_text_anx.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        lt_text_anx.frameNStart = frameN  # exact frame index
        lt_text_anx.tStart = t  # local t and not account for scr refresh
        lt_text_anx.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(lt_text_anx, 'tStartRefresh')  # time at next scr refresh
        lt_text_anx.setAutoDraw(True)
    if lt_text_anx.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > lt_text_anx.tStartRefresh + 10-frameTolerance:
            # keep track of stop time/frame for later
            lt_text_anx.tStop = t  # not accounting for scr refresh
            lt_text_anx.frameNStop = frameN  # exact frame index
            win.timeOnFlip(lt_text_anx, 'tStopRefresh')  # time at next scr refresh
            lt_text_anx.setAutoDraw(False)
    
    # *rt_text_anx* updates
    if rt_text_anx.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        rt_text_anx.frameNStart = frameN  # exact frame index
        rt_text_anx.tStart = t  # local t and not account for scr refresh
        rt_text_anx.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(rt_text_anx, 'tStartRefresh')  # time at next scr refresh
        rt_text_anx.setAutoDraw(True)
    if rt_text_anx.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > rt_text_anx.tStartRefresh + 10-frameTolerance:
            # keep track of stop time/frame for later
            rt_text_anx.tStop = t  # not accounting for scr refresh
            rt_text_anx.frameNStop = frameN  # exact frame index
            win.timeOnFlip(rt_text_anx, 'tStopRefresh')  # time at next scr refresh
            rt_text_anx.setAutoDraw(False)
    
    # *Question_Name* updates
    if Question_Name.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        Question_Name.frameNStart = frameN  # exact frame index
        Question_Name.tStart = t  # local t and not account for scr refresh
        Question_Name.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Question_Name, 'tStartRefresh')  # time at next scr refresh
        Question_Name.setAutoDraw(True)
    if Question_Name.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > Question_Name.tStartRefresh + 10-frameTolerance:
            # keep track of stop time/frame for later
            Question_Name.tStop = t  # not accounting for scr refresh
            Question_Name.frameNStop = frameN  # exact frame index
            win.timeOnFlip(Question_Name, 'tStopRefresh')  # time at next scr refresh
            Question_Name.setAutoDraw(False)
    
    # *MouseClick* updates
    if MouseClick.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        MouseClick.frameNStart = frameN  # exact frame index
        MouseClick.tStart = t  # local t and not account for scr refresh
        MouseClick.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(MouseClick, 'tStartRefresh')  # time at next scr refresh
        MouseClick.setAutoDraw(True)
    if MouseClick.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > MouseClick.tStartRefresh + 10-frameTolerance:
            # keep track of stop time/frame for later
            MouseClick.tStop = t  # not accounting for scr refresh
            MouseClick.frameNStop = frameN  # exact frame index
            win.timeOnFlip(MouseClick, 'tStopRefresh')  # time at next scr refresh
            MouseClick.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "trial"-------
for thisComponent in trialComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('anxiety_rating.response', anxiety_rating.getRating())
thisExp.addData('anxiety_rating.rt', anxiety_rating.getRT())
thisExp.addData('anxiety_rating.started', anxiety_rating.tStartRefresh)
thisExp.addData('anxiety_rating.stopped', anxiety_rating.tStopRefresh)
thisExp.addData('lt_text_anx.started', lt_text_anx.tStartRefresh)
thisExp.addData('lt_text_anx.stopped', lt_text_anx.tStopRefresh)
thisExp.addData('rt_text_anx.started', rt_text_anx.tStartRefresh)
thisExp.addData('rt_text_anx.stopped', rt_text_anx.tStopRefresh)
thisExp.addData('Question_Name.started', Question_Name.tStartRefresh)
thisExp.addData('Question_Name.stopped', Question_Name.tStopRefresh)
thisExp.addData('MouseClick.started', MouseClick.tStartRefresh)
thisExp.addData('MouseClick.stopped', MouseClick.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
