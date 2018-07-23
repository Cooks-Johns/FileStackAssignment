
'use strict';


window.addEventListener('DOMContentLoaded', function () {
    const apikey = 'ASkdROusXR2KK14hNk11Kz';
    const client = filestack.init(apikey);
    const options = {
        maxFiles: 5,
        uploadInBackground: false,
        display: inline,
        onUploadDon: (res) => console.log(res)

    };






    const picker = ()=> {

        client.pick({maxFiles: 5, })
            .then( (results)=> {
                displayUploads(results);

            })};


    client.picker(options).open();

    photoPicker.addEventListener("click", picker, false);

});

