
'use strict';


window.addEventListener('DOMContentLoaded', function () {
    const apikey = 'ASkdROusXR2KK14hNk11Kz';
    const client = filestack.init(apikey);
    const container = document.getElementById('displayPics');

    const options = {
        displayMode: 'inlineDisplay',
        container: '#inlineDisplay',
        maxFiles: 5,
        uploadInBackground: false,
        onUploadDone: (res) => console.log(res)
    };





    const picker = client.picker(options);
    const openBtn = document.getElementById('openPicker');

    openBtn.addEventListener('click', () => picker.open());




});

