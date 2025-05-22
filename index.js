const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log('Escanea este código QR con WhatsApp para iniciar sesión.');
});

client.on('ready', () => {
    console.log('Cliente WhatsApp listo!');
});

client.on('message', message => {
    if(message.body === 'menu') {
        message.reply(`*Menú Valle de San Juan*\n
1. Ver catálogo Valle de San Juan
2. Ayuda para realizar un pedido
3. Consultas sobre envíos y puntos de retiro
4. Estado de su pedido
5. Consultas sobre facturación
6. Atención personalizada
7. Argentina Factica
\nEscribí el número de la opción que querés.`);
    } else if (['1','2','3','4','5','6','7'].includes(message.body)) {
        switch(message.body) {
            case '1':
                message.reply('Aquí va el catálogo de Valle de San Juan: https://link-al-catalogo.com');
                break;
            case '2':
                message.reply('Para hacer un pedido, podés seguir estos pasos...');
                break;
            case '3':
                message.reply('Consultas sobre envíos y puntos de retiro...');
                break;
            case '4':
                message.reply('Para saber el estado de tu pedido...');
                break;
            case '5':
                message.reply('Consultas sobre facturación...');
                break;
            case '6':
                message.reply('Te conectaremos con un asesor, por favor espera...');
                break;
            case '7':
                message.reply('Información sobre Argentina Factica...');
                break;
        }
    } else {
        message.reply('Por favor escribí "menu" para ver las opciones disponibles.');
    }
});

client.initialize();

