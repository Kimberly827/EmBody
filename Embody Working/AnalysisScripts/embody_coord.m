function dat=embody_coord(mx,my)
    dat=[(1:length(mx))' ceil((mx+0.5)*900+0.5)' ceil((0.5-my)*600)'];
end