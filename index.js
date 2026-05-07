function randomize_win(){
    tile_conditions = []
    flag_pool = ['brunei', 'burundi', 'grenada', 'guyana', 'kuwait', 'kyrgyzstan',
        'liechtenstein', 'malawi', 'marshall_islands', 'north_macedonia',
        'sao_tome_and_principe', 'saint_kitts_and_nevis', 'the_gambia', 'timor_leste', 'vanuatu'
    ]
    color_pool = ['#738678', 'slate_gray', 'gray']

    mult_pool = ['x1', 'x1','x1', 'x1', 'x1', 'x2', 'x2', 'x2', 'x3', 'x3', 'x4', 'x5', ]

    win = False

    back_picker = Math.random() * 100;
    mult_picker = Math.random() * 100;

    if (Math.floor(back_picker) > 80){
        if (Math.floor(back_picker) < 86){
            win = True;
        }
    }

    if (win == True){
        while (back_picker >= 15){
            back_picker = Math.random() * 100;
        }

        back_picker = Math.floor(back_picker);
        background = flag_pool[back_picker]
    }

    else{
        if(back_picker < 31.3){
            background = color_pool[0]
        }
        else if(back_picker > 62.6){
            background = color_pool[1]
        }
        else{
            background = color_pool[2]
        }
    }

    tile_conditions.push(background, mult)

    return tile_conditions
}

function scratch(cell, background, multiplier){
    cell = document.getElementById(`${cell}`);
    mult = document.createElement('h5');
    mult.textContent = multiplier;
    try{
        cell.style.backgroundImage = background;
        cell.appendChild(mult);
        cell.style.justifyContent = 'spaceBetween';
    }

    catch{
        cell.style.background_color = background;
    }
}