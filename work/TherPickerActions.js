
'use strict';


window.addEventListener('DOMContentLoaded', function () {
    const apikey = 'ASkdROusXR2KK14hNk11Kz';
    const client = filestack.init(apikey);
    const options = {
        maxFiles: 20,
        uploadInBackground: false,
        onOpen: () => console.log('opened!'),
        onUploadDone: (res) => console.log(res),
    };
    client.picker(options).open();
});
