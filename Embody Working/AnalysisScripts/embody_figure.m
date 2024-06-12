function embody_figure(resmat,base2,labels,mask)
    NC = size(resmat,3);
    M=max(abs(resmat(:))); % max range for colorbar
    NumCol=64;
    hotmap=hot(NumCol);
    coldmap=flipud([hotmap(:,3) hotmap(:,2) hotmap(:,1) ]);
    hotcoldmap=[coldmap; hotmap];
    % note that - for statistical maps - if you want to hide non
    % significant values and show them as black, you need to tweak the
    % colormap so that you have more rows of black between around the
    % non-significant interval. 
    % As an example if we had a threshold, uncomment the below
    if(0)
        th=0.2*M; % just an example threshold, since this is not a statistical map 
        non_sig=round(th/M*NumCol); % proportion of non significant colors
        hotmap=hot(NumCol-non_sig);
        coldmap=flipud([hotmap(:,3) hotmap(:,2) hotmap(:,1) ]);
        hotcoldmap=[
            coldmap
            zeros(2*non_sig,3);
            hotmap
        ];
    end


    % visualize all responses for each subject into a grid of numcolumns
    plotcols = floor(NC/2)+1; %set as desired
    plotrows = ceil((NC+1)/plotcols); % number of rows is equal to number of conditions+1 (for the colorbar)

    % 
    figure;
    for n=1:NC            
        subplot(plotrows,plotcols,n)
        imagesc(base2);
        axis('off');
        set(gcf,'Color',[1 1 1]);
        hold on;
        over2=resmat(:,:,n);
        fh=imagesc(over2,[-M,M]);
        axis('off');
        axis equal
        colormap(hotcoldmap);
        set(fh,'AlphaData',mask)
        title(labels(n),'FontSize',20)
        if(n==NC) 
            subplot(plotrows,plotcols,n+1)
            fh=imagesc(ones(size(base2)),[-M,M]);
            axis('off');
            colorbar;
            % save a screenshot, useful for quality control (commented)                
%             saveas(gcf,savename)
        end
    end
end