const { hash } = window.location;
const message = atob(hash.replace('#',''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h4').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event=>{
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);//parsing to base64

    const link = document.querySelector('#link-input');
    link.value = `${window.location}#${encrypted}`;

    document.querySelector('#copy').addEventListener('click',function(){
        link.select();
        document.execCommand("copy");
    });
});