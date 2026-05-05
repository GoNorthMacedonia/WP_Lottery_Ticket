function randomize_win(){
    flag_pool = ['brunei', 'burundi', 'grenada', 'guyana', 'kuwait', 'kyrgyzstan',
        'liechtenstein', 'malawi', 'marshall_islands', 'north_macedonia',
        'sao_tome_and_principe', 'the_gambia', 'timor_leste', 'vanuatu'
    ]

    color_pool = ['#738678', 'slate_gray', 'gray']
}

function scratch(cell, background){
    cell = document.getElementById(`${cell}`);
    if (background /*check if background is an image*/){
        cell.style.backgroundImage = background;
    }

    else{
        cell.style.background_color
    }
}