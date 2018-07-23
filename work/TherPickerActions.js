
'use strict';


window.addEventListener('DOMContentLoaded', function () {
    const apikey = 'ASkdROusXR2KK14hNk11Kz';


    const client = filestack.init(apikey);




    const options = {
        maxFiles: 5,
        uploadInBackground: false,


    };
    const picker = ()=> {

        client.pick({maxFiles: 5, })
            .then( (results)=> {
                displayUploads(results);

            })};


    client.picker(options).open();

    photoPicker.addEventListener("click", picker, false);

});

