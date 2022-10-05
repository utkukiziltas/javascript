let input = document.getElementById("fileinput"),
    wraper = document.querySelector(".wrapper"),
    sizerange = document.getElementById("sizerange"),
    sizerangep = document.getElementById("sizerangep"),
    imgType = document.getElementById("imgType");


sizerange.addEventListener("input",()=>{
    sizerangep.innerHTML = sizerange.value;
})


input.addEventListener("change", (event) => {

    const WIDTH = 200;
    const SIZERATIO = parseInt(sizerange.value);
    const TYPE = imgType.options[imgType.selectedIndex].value;


    let files = event.target.files;

    for (let i = 0; i < files.length; i++) {

        const reader = new FileReader;
        let image_file = files[i];
        let newnamearr = files[i].name.split(".");
        let file_name = newnamearr[0] + "." + TYPE;
        reader.readAsDataURL(image_file);




        reader.onload = (e) => {
            let image_url = e.target.result;


            // create image
            let image = document.createElement("img");
            image.src = image_url;

            image.onload = (event) => {
                let canvas = document.createElement("canvas")

                // Re sizing
                let ratio = WIDTH / event.target.width;

                canvas.width = image.width;
                canvas.height = image.height;


                const context = canvas.getContext("2d")
                context.drawImage(image, 0, 0, canvas.width, canvas.height)
                let new_image_url = context.canvas.toDataURL("image/" + TYPE, SIZERATIO);


                //parent div
                let parent = document.createElement("div")
                parent.classList.add("col")

                // yükle linki
                let dowloadurl = document.createElement("a");
                dowloadurl.href = new_image_url;
                dowloadurl.innerHTML = "download";
                dowloadurl.setAttribute("download", file_name);
                parent.appendChild(dowloadurl)

                //fotoğraf
                let new_image = document.createElement("img");
                new_image.src = new_image_url;
                new_image.width = WIDTH;
                new_image.height = event.target.height * ratio;
                parent.appendChild(new_image);


                //first and last size
                let p = document.createElement("p");
                let p2 = document.createElement("p");
                p.innerHTML = formatBytes(files[i].size);
                parent.appendChild(p)
                p2.innerHTML = formatBytes(files[i].size - (files[i].size * SIZERATIO / 100))
                parent.appendChild(p2)
                wraper.appendChild(parent)
            }

        }
    }


})

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

