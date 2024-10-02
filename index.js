const laptops = [
    {
        model: 'ASUS',
        qiymet: 2500,
        yaddas: '256GB',
        stokveziyyeti: false
    },
    
    {
        model: 'ACER',
        qiymet: 2700,
        yaddas: '1TB',
        stokveziyyeti: true 
    }
]





for (i=0; i < laptops.length; i++) {
    document.querySelector('table thead,tbody').innerHTML 
    +=
   `
   <tr class="area">
    
    <td id ="model">
        ${laptops[i].model}
    </td>
    <td id ="qiymet">
        ${laptops[i].qiymet}
    </td>
    <td id ="yaddas">
        ${laptops[i].yaddas}
    </td>
    <td id ="stokkveziyyeti">
        ${laptops[i].stokveziyyeti}
    </td>
    

   </tr>
   `
   

}

//ikinci hisse
// if(stokveziyyeti>0){
//     stokveziyyeti.innerHTML='stokda var'
// }
// else{
//     stokveziyyeti.innerHTML='stokda yoxdur'
// }