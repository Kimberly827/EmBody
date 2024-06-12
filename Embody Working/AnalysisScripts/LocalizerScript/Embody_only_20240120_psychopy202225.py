#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on 1월 20, 2024, at 16:41
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'Embody_only_20240120_psychopy202225'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
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
    originPath='E:\\Dropbox\\2020_project\\Templeton_Project\\TIL\\TIL_V0_2021_Sarah\\Embody_only_20240120_psychopy202225.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "embody_q_postexp" ---
body_image_3 = visual.ImageStim(
    win=win,
    name='body_image_3', 
    image='base.png', mask=None, anchor='center',
    ori=0, pos=(0, 0), size=(1,1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
mouse_body_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_body_3.mouseClock = core.Clock()
key_resp_body_3 = keyboard.Keyboard()
lt_text_body_3 = visual.TextStim(win=win, name='lt_text_body_3',
    text='for this body, color the regions\nwhose activity you feel \nincreasing or getting stronger',
    font='Arial',
    pos=(-0.33, -0.45), height=0.025, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
rt_text_body_3 = visual.TextStim(win=win, name='rt_text_body_3',
    text='for this body, color the regions\nwhose activity you feel \ndecreasing or getting weaker',
    font='Arial',
    pos=(+0.33, -0.45), height=0.025, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
body_explanation_3 = visual.TextStim(win=win, name='body_explanation_3',
    text='Use the pictures to \nindicate the bodily sensations \nyou experience when you feel:',
    font='Arial',
    pos=(0, 0.2), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
body_progress_3 = visual.TextStim(win=win, name='body_progress_3',
    text="Press 'Enter' to go to the next page",
    font='Arial',
    pos=(0, -0.1), height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
reset_rect_3 = visual.Rect(
    win=win, name='reset_rect_3',
    width=(0.1, 0.05)[0], height=(0.1, 0.05)[1],
    ori=0, pos=(0, -0.4), anchor='center',
    lineWidth=5,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[1,1,0],
    opacity=1, depth=-8.0, interpolate=True)
reset_text_3 = visual.TextStim(win=win, name='reset_text_3',
    text='RESET',
    font='Arial',
    pos=(0, -0.4), height=0.02, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
feeling_words = visual.TextStim(win=win, name='feeling_words',
    text='',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('E:/Dropbox/2020_project/Templeton_Project/TIL/TIL_V0_2021_Sarah/feel_word_list.xlsx'),
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
    
    # --- Prepare to start Routine "embody_q_postexp" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_body_3
    mouse_body_3.x = []
    mouse_body_3.y = []
    mouse_body_3.leftButton = []
    mouse_body_3.midButton = []
    mouse_body_3.rightButton = []
    mouse_body_3.time = []
    mouse_body_3.clicked_name = []
    gotValidClick = False  # until a click is received
    key_resp_body_3.keys = []
    key_resp_body_3.rt = []
    _key_resp_body_3_allKeys = []
    feeling_words.setText(feel_word)
    # keep track of which components have finished
    embody_q_postexpComponents = [body_image_3, mouse_body_3, key_resp_body_3, lt_text_body_3, rt_text_body_3, body_explanation_3, body_progress_3, reset_rect_3, reset_text_3, feeling_words]
    for thisComponent in embody_q_postexpComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "embody_q_postexp" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *body_image_3* updates
        if body_image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            body_image_3.frameNStart = frameN  # exact frame index
            body_image_3.tStart = t  # local t and not account for scr refresh
            body_image_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(body_image_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'body_image_3.started')
            body_image_3.setAutoDraw(True)
        # *mouse_body_3* updates
        if mouse_body_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_body_3.frameNStart = frameN  # exact frame index
            mouse_body_3.tStart = t  # local t and not account for scr refresh
            mouse_body_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_body_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_body_3.started', t)
            mouse_body_3.status = STARTED
            mouse_body_3.mouseClock.reset()
            prevButtonState = mouse_body_3.getPressed()  # if button is down already this ISN'T a new click
        if mouse_body_3.status == STARTED:  # only update if started and not finished!
            buttons = mouse_body_3.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(reset_rect_3)
                        clickableList = reset_rect_3
                    except:
                        clickableList = [reset_rect_3]
                    for obj in clickableList:
                        if obj.contains(mouse_body_3):
                            gotValidClick = True
                            mouse_body_3.clicked_name.append(obj.name)
                    x, y = mouse_body_3.getPos()
                    mouse_body_3.x.append(x)
                    mouse_body_3.y.append(y)
                    buttons = mouse_body_3.getPressed()
                    mouse_body_3.leftButton.append(buttons[0])
                    mouse_body_3.midButton.append(buttons[1])
                    mouse_body_3.rightButton.append(buttons[2])
                    mouse_body_3.time.append(mouse_body_3.mouseClock.getTime())
        
        # *key_resp_body_3* updates
        waitOnFlip = False
        if key_resp_body_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_body_3.frameNStart = frameN  # exact frame index
            key_resp_body_3.tStart = t  # local t and not account for scr refresh
            key_resp_body_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_body_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_body_3.started')
            key_resp_body_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_body_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_body_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_body_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_body_3.getKeys(keyList=['return','space'], waitRelease=False)
            _key_resp_body_3_allKeys.extend(theseKeys)
            if len(_key_resp_body_3_allKeys):
                key_resp_body_3.keys = _key_resp_body_3_allKeys[-1].name  # just the last key pressed
                key_resp_body_3.rt = _key_resp_body_3_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *lt_text_body_3* updates
        if lt_text_body_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            lt_text_body_3.frameNStart = frameN  # exact frame index
            lt_text_body_3.tStart = t  # local t and not account for scr refresh
            lt_text_body_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(lt_text_body_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'lt_text_body_3.started')
            lt_text_body_3.setAutoDraw(True)
        
        # *rt_text_body_3* updates
        if rt_text_body_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rt_text_body_3.frameNStart = frameN  # exact frame index
            rt_text_body_3.tStart = t  # local t and not account for scr refresh
            rt_text_body_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rt_text_body_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'rt_text_body_3.started')
            rt_text_body_3.setAutoDraw(True)
        
        # *body_explanation_3* updates
        if body_explanation_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            body_explanation_3.frameNStart = frameN  # exact frame index
            body_explanation_3.tStart = t  # local t and not account for scr refresh
            body_explanation_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(body_explanation_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'body_explanation_3.started')
            body_explanation_3.setAutoDraw(True)
        
        # *body_progress_3* updates
        if body_progress_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            body_progress_3.frameNStart = frameN  # exact frame index
            body_progress_3.tStart = t  # local t and not account for scr refresh
            body_progress_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(body_progress_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'body_progress_3.started')
            body_progress_3.setAutoDraw(True)
        
        # *reset_rect_3* updates
        if reset_rect_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            reset_rect_3.frameNStart = frameN  # exact frame index
            reset_rect_3.tStart = t  # local t and not account for scr refresh
            reset_rect_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reset_rect_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'reset_rect_3.started')
            reset_rect_3.setAutoDraw(True)
        
        # *reset_text_3* updates
        if reset_text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            reset_text_3.frameNStart = frameN  # exact frame index
            reset_text_3.tStart = t  # local t and not account for scr refresh
            reset_text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reset_text_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'reset_text_3.started')
            reset_text_3.setAutoDraw(True)
        
        # *feeling_words* updates
        if feeling_words.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feeling_words.frameNStart = frameN  # exact frame index
            feeling_words.tStart = t  # local t and not account for scr refresh
            feeling_words.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feeling_words, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'feeling_words.started')
            feeling_words.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in embody_q_postexpComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "embody_q_postexp" ---
    for thisComponent in embody_q_postexpComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for trials (TrialHandler)
    trials.addData('mouse_body_3.x', mouse_body_3.x)
    trials.addData('mouse_body_3.y', mouse_body_3.y)
    trials.addData('mouse_body_3.leftButton', mouse_body_3.leftButton)
    trials.addData('mouse_body_3.midButton', mouse_body_3.midButton)
    trials.addData('mouse_body_3.rightButton', mouse_body_3.rightButton)
    trials.addData('mouse_body_3.time', mouse_body_3.time)
    trials.addData('mouse_body_3.clicked_name', mouse_body_3.clicked_name)
    # check responses
    if key_resp_body_3.keys in ['', [], None]:  # No response was made
        key_resp_body_3.keys = None
    trials.addData('key_resp_body_3.keys',key_resp_body_3.keys)
    if key_resp_body_3.keys != None:  # we had a response
        trials.addData('key_resp_body_3.rt', key_resp_body_3.rt)
    # the Routine "embody_q_postexp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
