%% Load Basic variables
clc
base=uint8(imread('base.png'));
base2=base(10:531,33:203,:); % single image base
labels_post={'Anger','Anxiety','Fear','Happiness','Depression','Safe','Sadness','Panic','Surprise','Shame','Neutral'};
mask=imread('mask.png');
vis=0; % visualized embody map
%% Load EmBody file
filename='650130_Embody_only_20240120_psychopy202225_2024-01-20_17h44.22.926.csv';
Z=detectImportOptions(filename);
X=readtable(filename,Z);
%% Change mouse click location to image matrix
em_Start=1; % Starting row in the table
em_End = em_Start+10; 
embody_row = em_Start:em_End; 
embody_data=[];
for i=1:length(embody_row)    
    if ~isempty(str2num(X.mouse_body_3_x{embody_row(i)}))
        mx=str2num(X.mouse_body_3_x{embody_row(i)});
        my=str2num(X.mouse_body_3_y{embody_row(i)});
        Subj.embody_post.data(i).paint=embody_coord(mx,my);
    else
        Subj.embody_post.data(i).paint=[nan nan nan];
    end
end
savename='test.mat';
% Subj.embody.resmat=embody_preproc(Subj.embody.data,base,base2,labels_exp,mask,vis,savename);    
% Subj.embody_concat.resmat=embody_preproc(Subj.embody_concat.data,base,base2,labels_concat,mask,vis,savename);            
Subj.embody_post.resmat=embody_preproc(Subj.embody_post.data,base,base2,labels_post,mask,vis,savename);   
%% Plot Image
resmat_post=Subj.embody_post.resmat;
labels_post={'Anger','Anxiety','Fear','Happiness','Depression','Safe','Sadness','Panic','Surprise','Shame','Neutral'};
embody_figure(resmat_post,base2,labels_post,mask);