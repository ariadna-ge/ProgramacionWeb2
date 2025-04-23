function enviarMensaje(){
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();

    if (input1 === '' || input2 === '') {
        alert("Requiere llenar los campos");
    } else {
        let numero = input1;
        let mensaje = input2;
        let urlWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank'); // Abre la URL en una nueva pestaña
    }
}