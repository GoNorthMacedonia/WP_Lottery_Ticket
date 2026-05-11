function createValues(){
    const cells = document.getElementsByClassName('cell');
    const values = ['50¢', '$1', '$1', '$1', '$1', '$1', '$2', '$2', '$2', '$3', '$3', '$4', '$5']
    
    for (let i = 0; i < 16; i++){
        let value_picker = Math.random() * 100;
        while (value_picker >= 12){
            value_picker = Math.random() * 100;
        }
        value_picker = Math.floor(value_picker);

        let value = values[value_picker];
        let money = document.createElement('h3');
        money.textContent = value;
        money.className = 'cell_text'
        cells[i].appendChild(money);
    }
}

function randomize_win(){
    const flag_pool = ['brunei', 'burundi', 'grenada', 'guyana', 'kuwait', 'kyrgyzstan',
        'liechtenstein', 'malawi', 'marshall_islands', 'north_macedonia',
        'sao_tome_and_principe', 'saint_kitts_and_nevis', 'the_gambia', 'timor_leste', 'vanuatu'
    ];
    const color_pool = ['#738678', 'slategray', 'gray'];

    const mult_pool = ['x0.5', 'x1', 'x1', 'x1', 'x1', 'x1', 'x2', 'x2', 'x2', 'x3', 'x3', 'x4', 'x5'];

    let tile_conditions = [];
    let win = false;

    let back_picker = Math.random() * 100;
    let mult_picker = Math.random() * 100;

    if (Math.floor(back_picker) > 80){
        if (Math.floor(back_picker) < 86){
            win = true;
        }
    }

    if (win == true){
        while (back_picker >= 15){
            back_picker = Math.random() * 100;
        }

        while (mult_picker >= 12){
            mult_picker = Math.random() * 100;
        }

        back_picker = Math.floor(back_picker);
        var background = flag_pool[back_picker];

        mult_picker = Math.floor(mult_picker);
        var mult = mult_pool[mult_picker];
    }

    else{
        if(back_picker < 31.3){
            var background = color_pool[0];
        }
        else if(back_picker > 62.6){
            var background = color_pool[1];
        }
        else{
            var background = color_pool[2];
        }

        var mult = 'x0';
    }

    tile_conditions.push(background, mult, win);

    return tile_conditions;
}

function scratch(cell_id, background, multiplier, win){
    const cell = document.getElementById(cell_id);
    const mult = document.createElement('h3');
    mult.textContent = multiplier;
    if (cell.style.backgroundColor == ''){
        cell.style.backgroundColor = 'rgb(67, 179, 174)'
    }
    console.log(cell.style.backgroundColor)

    if (cell.style.backgroundColor == 'rgb(67, 179, 174)'){
        cell.appendChild(mult);
        mult.className = 'cell_text'
        mult.id = 'mult'
        if (win == true){
            cell.style.backgroundImage = `url("resources/images/flags/${background}.png")`;
        }
        else{
            cell.style.backgroundColor = background;
        }
    }
}

createValues()