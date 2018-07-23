
'use strict';


window.addEventListener('DOMContentLoaded', function () {
    const apikey = 'ASkdROusXR2KK14hNk11Kz';
    const client = filestack.init(apikey);
    const options = {
        displayMode: 'inlineDisplay',
        container: '#inlineDisplay',
        maxFiles: 5,
        uploadInBackground: false,
        onUploadDone: (res) => console.log(res),
    };





    const picker = client.picker(options);
    const openBtn = document.getElementById('openPicker');
    const closeBtn = document.getElementById('close');
    openBtn.addEventListener('click', () => picker.open());
    closeBtn.addEventListener('click', () => picker.close());

});