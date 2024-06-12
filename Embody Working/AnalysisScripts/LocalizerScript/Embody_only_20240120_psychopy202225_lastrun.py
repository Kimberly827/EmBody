#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.3),
    on March 27, 2024, at 18:42
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# Store info about the experiment session
psychopyVersion = '2023.2.3'
expName = 'Embody_only_20240120_psychopy202225'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date': data.getDateStr(),  # add a simple timestamp
    'expName': expName,
    'psychopyVersion': psychopyVersion,
}


def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # temporarily remove keys which the dialog doesn't need to show
    poppedKeys = {
        'date': expInfo.pop('date', data.getDateStr()),
        'expName': expInfo.pop('expName', expName),
        'psychopyVersion': expInfo.pop('psychopyVersion', psychopyVersion),
    }
    # show participant info dialog
    dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # restore hidden keys
    expInfo.update(poppedKeys)
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\louis\\OneDrive\\Desktop\\Embody\\LocalizerScript\\Embody_only_20240120_psychopy202225_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(logging.EXP)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=logging.EXP)
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=(1024, 768), fullscr=True, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height'
        )
        if expInfo is not None:
            # store frame rate of monitor if we can measure it
            expInfo['frameRate'] = win.getActualFrameRate()
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    win.mouseVisible = False
    win.hideMessage()
    return win


def setupInputs(expInfo, thisExp, win):
    """
    Setup whatever inputs are available (mouse, keyboard, eyetracker, etc.)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    dict
        Dictionary of input devices by name.
    """
    # --- Setup input devices ---
    inputs = {}
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
    # return inputs dict
    return {
        'ioServer': ioServer,
        'defaultKeyboard': defaultKeyboard,
        'eyetracker': eyetracker,
    }

def pauseExperiment(thisExp, inputs=None, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # make sure we have a keyboard
        if inputs is None:
            inputs = {
                'defaultKeyboard': keyboard.Keyboard(backend='ioHub')
            }
        # check for quit (typically the Esc key)
        if inputs['defaultKeyboard'].getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win, inputs=inputs)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, inputs=inputs, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, inputs, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    inputs : dict
        Dictionary of input devices by name.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = inputs['ioServer']
    defaultKeyboard = inputs['defaultKeyboard']
    eyetracker = inputs['eyetracker']
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "embody_q_postexp" ---
    body_image_3 = visual.ImageStim(
        win=win,
        name='body_image_3', 
        image='base.png', mask=None, anchor='center',
        ori=0, pos=(0, 0), size=(1,1),
        color=[1,1,1], colorSpace='rgb', opacity=1,
        flipHoriz=False, flipVert=False,
        texRes=128, interpolate=True, depth=0.0)
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
    # Run 'Begin Experiment' code from main_code
    import numpy as np
    
    unit = 1/16
    tlen = 5
    p1coord = [np.random.randint(0,16), np.random.randint(0,16)]
    threatcoord = [np.random.randint(0,16), np.random.randint(0,16)]
    
    p1pos = np.array(p1coord)*unit-0.5+unit/2
    threatpos = np.array(threatcoord)*unit-0.5+unit/2
    
    predspd = 1/20
    iscage=0
    
    ## within cage
    nstep = int(1/predspd)
    predcwsx = np.concatenate((np.linspace(0,1,nstep),np.ones(nstep),np.linspace(1,predspd,nstep),np.zeros(nstep)))+7
    predcwsy = np.concatenate((np.ones(nstep),np.linspace(1,predspd,nstep),np.zeros(nstep),np.linspace(0,1,nstep)))+7
    predccwsx = predcwsx[::-1]
    predccwsy = predcwsy[::-1]
    currentdir = 1
    predstart = np.random.randint(0,len(predcwsx))
    predcoord = [predcwsx[predstart],predcwsy[predstart]]
    ## out of cage
    Nframe = 0
    npos = 0
    
    predpos = np.array(predcoord)*unit-0.5+unit/2
    
    # create some handy timers
    if globalClock is None:
        globalClock = core.Clock()  # to track the time since experiment started
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6)
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('feel_word_list.xlsx'),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    
    for thisTrial in trials:
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "embody_q_postexp" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('embody_q_postexp.started', globalClock.getTime())
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
        # Run 'Begin Routine' code from main_code
        Nframe = 0
        npos = 0
        midx = 0
        iscage=0
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
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *body_image_3* updates
            
            # if body_image_3 is starting this frame...
            if body_image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                body_image_3.frameNStart = frameN  # exact frame index
                body_image_3.tStart = t  # local t and not account for scr refresh
                body_image_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(body_image_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'body_image_3.started')
                # update status
                body_image_3.status = STARTED
                body_image_3.setAutoDraw(True)
            
            # if body_image_3 is active this frame...
            if body_image_3.status == STARTED:
                # update params
                pass
            # *mouse_body_3* updates
            
            # if mouse_body_3 is starting this frame...
            if mouse_body_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_body_3.frameNStart = frameN  # exact frame index
                mouse_body_3.tStart = t  # local t and not account for scr refresh
                mouse_body_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_body_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse_body_3.started', t)
                # update status
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
                        clickableList = environmenttools.getFromNames(reset_rect_3, namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
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
            
            # if key_resp_body_3 is starting this frame...
            if key_resp_body_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_body_3.frameNStart = frameN  # exact frame index
                key_resp_body_3.tStart = t  # local t and not account for scr refresh
                key_resp_body_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_body_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_body_3.started')
                # update status
                key_resp_body_3.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_body_3.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_body_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_body_3.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_body_3.getKeys(keyList=['return','space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_body_3_allKeys.extend(theseKeys)
                if len(_key_resp_body_3_allKeys):
                    key_resp_body_3.keys = _key_resp_body_3_allKeys[-1].name  # just the last key pressed
                    key_resp_body_3.rt = _key_resp_body_3_allKeys[-1].rt
                    key_resp_body_3.duration = _key_resp_body_3_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # *lt_text_body_3* updates
            
            # if lt_text_body_3 is starting this frame...
            if lt_text_body_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                lt_text_body_3.frameNStart = frameN  # exact frame index
                lt_text_body_3.tStart = t  # local t and not account for scr refresh
                lt_text_body_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(lt_text_body_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'lt_text_body_3.started')
                # update status
                lt_text_body_3.status = STARTED
                lt_text_body_3.setAutoDraw(True)
            
            # if lt_text_body_3 is active this frame...
            if lt_text_body_3.status == STARTED:
                # update params
                pass
            
            # *rt_text_body_3* updates
            
            # if rt_text_body_3 is starting this frame...
            if rt_text_body_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rt_text_body_3.frameNStart = frameN  # exact frame index
                rt_text_body_3.tStart = t  # local t and not account for scr refresh
                rt_text_body_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rt_text_body_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rt_text_body_3.started')
                # update status
                rt_text_body_3.status = STARTED
                rt_text_body_3.setAutoDraw(True)
            
            # if rt_text_body_3 is active this frame...
            if rt_text_body_3.status == STARTED:
                # update params
                pass
            
            # *body_explanation_3* updates
            
            # if body_explanation_3 is starting this frame...
            if body_explanation_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                body_explanation_3.frameNStart = frameN  # exact frame index
                body_explanation_3.tStart = t  # local t and not account for scr refresh
                body_explanation_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(body_explanation_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'body_explanation_3.started')
                # update status
                body_explanation_3.status = STARTED
                body_explanation_3.setAutoDraw(True)
            
            # if body_explanation_3 is active this frame...
            if body_explanation_3.status == STARTED:
                # update params
                pass
            
            # *body_progress_3* updates
            
            # if body_progress_3 is starting this frame...
            if body_progress_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                body_progress_3.frameNStart = frameN  # exact frame index
                body_progress_3.tStart = t  # local t and not account for scr refresh
                body_progress_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(body_progress_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'body_progress_3.started')
                # update status
                body_progress_3.status = STARTED
                body_progress_3.setAutoDraw(True)
            
            # if body_progress_3 is active this frame...
            if body_progress_3.status == STARTED:
                # update params
                pass
            
            # *reset_rect_3* updates
            
            # if reset_rect_3 is starting this frame...
            if reset_rect_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                reset_rect_3.frameNStart = frameN  # exact frame index
                reset_rect_3.tStart = t  # local t and not account for scr refresh
                reset_rect_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reset_rect_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'reset_rect_3.started')
                # update status
                reset_rect_3.status = STARTED
                reset_rect_3.setAutoDraw(True)
            
            # if reset_rect_3 is active this frame...
            if reset_rect_3.status == STARTED:
                # update params
                pass
            
            # *reset_text_3* updates
            
            # if reset_text_3 is starting this frame...
            if reset_text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                reset_text_3.frameNStart = frameN  # exact frame index
                reset_text_3.tStart = t  # local t and not account for scr refresh
                reset_text_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reset_text_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'reset_text_3.started')
                # update status
                reset_text_3.status = STARTED
                reset_text_3.setAutoDraw(True)
            
            # if reset_text_3 is active this frame...
            if reset_text_3.status == STARTED:
                # update params
                pass
            
            # *feeling_words* updates
            
            # if feeling_words is starting this frame...
            if feeling_words.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feeling_words.frameNStart = frameN  # exact frame index
                feeling_words.tStart = t  # local t and not account for scr refresh
                feeling_words.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feeling_words, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'feeling_words.started')
                # update status
                feeling_words.status = STARTED
                feeling_words.setAutoDraw(True)
            
            # if feeling_words is active this frame...
            if feeling_words.status == STARTED:
                # update params
                pass
            # Run 'Each Frame' code from main_code
            ## Player movement
            keys = event.getKeys(keyList=['up','down','left','right'])
            if len(keys)>0:
                if keys[-1] == 'up':
                    p1coord[1] += 1
                elif keys[-1] == 'down':
                    p1coord[1] -= 1
                elif keys[-1] == 'left':
                    p1coord[0] -= 1
                elif keys[-1] == 'right':
                    p1coord[0] += 1
            
            p1pos = np.array(p1coord)*unit-0.5+unit/2
            
            ## Predator movement - Within cage
            if iscage ==1:
                npos = np.remainder(npos, len(predcwsx))
                if np.random.rand() < 0.005:
                    currentdir  = abs(1-currentdir)
                    npos = len(predcwsx)-npos-1
                if currentdir == 1:
                    predcoord = [predcwsx[npos],predcwsy[npos]]
                else:
                    predcoord = [predccwsx[npos],predccwsy[npos]]
                npos += 1
            
            ## Predator movement -  Out of cage
            if iscage ==0:
                temppredcoord = predcoord
                cost0 = np.array(temppredcoord)- np.array(p1coord);
                cost = np.array([sum(np.abs(cost0+np.array([0, predspd]))),sum(np.abs(cost0+np.array([0, -predspd]))),sum(np.abs(cost0+np.array([predspd,0]))),sum(np.abs(cost0+np.array([-predspd,0])))])
                midx = np.argmin(cost)
                
                if midx==0:
                    temppredcoord[1]+=predspd
                elif midx==1:    
                    temppredcoord[1]-=predspd
                elif midx==2:    
                    temppredcoord[0]+=predspd    
                elif midx==3:    
                    temppredcoord[0]-=predspd        
            
                while (((temppredcoord[0]-np.floor(temppredcoord[0]))>(predspd-0.00001)) and ((temppredcoord[1]-np.floor(temppredcoord[1]))>(predspd-0.00001))):
                    cost[midx] = 100000
                    midx = np.argmin(cost)
                    temppredcoord = predcoord    
                    if midx==0:
                        temppredcoord[1]+=predspd
                    elif midx==1:    
                        temppredcoord[1]-=predspd
                    elif midx==2:    
                        temppredcoord[0]+=predspd    
                    elif midx==3:    
                            temppredcoord[0]-=predspd
                    if sum(cost) == 400000:        
                        break
                        
                if sum(cost) == 400000:
                    temppredcoord = predcoord         
                predcoord = temppredcoord
                
            predpos = np.array(predcoord)*unit-0.5+unit/2    
            Nframe += 1
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
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
        thisExp.addData('embody_q_postexp.stopped', globalClock.getTime())
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
            trials.addData('key_resp_body_3.duration', key_resp_body_3.duration)
        # the Routine "embody_q_postexp" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1.0 repeats of 'trials'
    
    
    # mark experiment as finished
    endExperiment(thisExp, win=win, inputs=inputs)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, inputs=None, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()


def quit(thisExp, win=None, inputs=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    inputs : dict
        Dictionary of input devices by name.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    inputs = setupInputs(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win, 
        inputs=inputs
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win, inputs=inputs)
