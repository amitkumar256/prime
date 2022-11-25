const myFunc=()=>{
    const val = document.getElementById("input").value;

    if(val>0)
    {
    let b=true;

    
    for(let i=2;i<=val/2;i++)
    {
        if(val%i==0)
        {
            b=false;
        }

    }
    if(b  && val!=1)
    {
    document.getElementById("para").innerHTML="PRIME NUMBER";
    }
    else{
        document.getElementById("para").innerHTML="NOT A PRIME NUMBER";

    }
}
else{
    document.getElementById("para").innerHTML="ENTER A NUMBER GREATER THAN 0";

}
}