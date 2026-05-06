function randomize_win(cell){
    flag_pool = ['brunei', 'burundi', 'grenada', 'guyana', 'kuwait', 'kyrgyzstan',
        'liechtenstein', 'malawi', 'marshall_islands', 'north_macedonia',
        'sao_tome_and_principe', 'saint_kitts_and_nevis', 'the_gambia', 'timor_leste', 'vanuatu'
    ]
    color_pool = ['#738678', 'slate_gray', 'gray']

    win = False

    picker = Math.random() * 100;

    if (Math.floor(picker) > 80){
        if (Math.floor(picker) < 86){
            win = True;
        }
    }

    if (win == True){
        while (picker >= 15){
            picker = Math.random() * 100;
        }

        picker = Math.floor(picker);
        background = flag_pool[picker]
    }



    cell = document.getElementById(cell)


}

function scratch(cell, background = None, multiplier = None){
    cell = document.getElementById(`${cell}`);
    if (background != None){
        mult = document.createElement('h5');
        mult.textContent = multiplier;

        cell.style.backgroundImage = 'background';
        cell.appendChild(mult);
        cell.style.justifyContent = 'spaceBetween';
    }

    else{
        cell.style.background_color = '#738678';
    }
}