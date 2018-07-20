
'use strict';



const client = filestack.init('ASkdROusXR2KK14hNk11Kz');




var imageHandle = '';

function openPhotoPicker() {
    console.log("open Photo Picker");
    client.pick({
        maxFiles: 5,
    }).then(function(result) {
        console.log(JSON.stringify(result));
        imageHandle = result.filesUploaded[0].handle;
        console.log(imageHandle);
    })

}
