selectWay2=function(){

    let way=[
        {val : 1, text: 'Személyi pályaudvar'},
        {val : 2, text : 'Európa-liget'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);

    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
};

selectWay3F=function(){

    let way=[
        {val : 1, text: 'Tarján'},
        {val : 2, text : 'Fonógyári út'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);

    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
};

selectWay4=function(){

    let way=[
        {val : 1, text: 'Tarján'},
        {val : 2, text : 'Kecskés'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);

    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
};

selectWay70=function(){

    let way=[
        {val : 1, text: 'Mars-tér'},
        {val : 2, text : 'Füvészkert'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);

    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
};

let selectWay71A=function(){

    let way=[
        {val : 1, text: 'Mars-tér'},
        {val : 2, text : 'Napfényfürdő'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);

    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
};

let selectWay90H=function(){
    let way=[
        {val : 1, text: 'Szegedi Ipari Logisztikai Központ'},
        {val : 2, text : 'Lugas utca'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);
    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
};

let selectWay8=function(){
    let way=[
        {val : 1, text: 'Makkosház'},
        {val : 2, text : 'Klinikák'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);
    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
}


let selectWay10=function(){
    let way=[
        {val : 1, text: 'Víztorony-tér'},
        {val : 2, text : 'Klinikák'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);
    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
}


let selectWay19=function(){

    let way=[
        {val : 1, text: 'Szegedi Ipari Logisztikai Központ'},
        {val : 2, text : 'Lugas utca'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);
    
    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
};