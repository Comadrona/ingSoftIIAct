
if(navigator.userAgent.match(/Android|webOS|iPhone|iWindos Phone/i)){
    //Detectado escritorio 
    alert("Dispositivo movil" + navigator.userAgent)
}else{
    keyused=[];
    level=0;
    bandera=0;
    frase="simulacion de datos";
    $(document).ready(function(){
        $("input").keyup(function(){
            key=$("input").val().toLowerCase();
            
            if(keyused.includes(key)){
                level++;
                changeImage(level)
            }else{
                if(frase.includes(key)){
                    array=agregarLetra(key);
                    bandera+=array.length;
                    if(bandera===19)alert("Ganaste :3")
                    keyused.push(key)
                }else{
                    level++;
                    changeImage(level);
                }
            }
            $("input").val('');
        });
      });
}

function changeImage(level){
    if(level>8){
        alert("YA NO HAY MAS VIDAS")
    }else{
        $("#imagen").attr("src","imagenes/parte"+level+".png");
    }
    return;
}

function agregarLetra(letra){
    if(letra===' ')letra="space";
    mapa = {
        s:[0,18],
        i:[1,7],
        m:[2],
        u:[3],
        l:[4],
        a:[5,15],
        c:[6],
        o:[8,17],
        n:[9],
        space:[10,13],
        d:[11,14],
        e:[12],
        t:[16]
    }
    for(elemento of mapa[letra]){
        if(letra==="space")$("#letter"+elemento).html("&nbsp;");
        else $("#letter"+elemento).html(letra.toUpperCase());
    }
    return mapa[letra];
}