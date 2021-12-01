        function changeImage(image) {
            if (image.src.match("../image/svg/plus.svg")) {
                image.src = "../image/svg/check.svg";
            }
            else {
                image.src = "../image/svg/plus.svg";
            }
        }