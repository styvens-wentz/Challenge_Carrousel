function left() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box vers_la_gauche";

    setTimeout(function() {
        if (boxes.length > 5) {
            tmpNode.classList.add("box_cacher");
            boxes[5].className = "box vers-position5-gauche";
        }
        boxes[1].className = "box vers-position1-gauche";
        boxes[2].className = "box vers-position2-gauche";
        boxes[3].className = "box vers-position3-gauche";
        boxes[4].className = "box vers-position4-gauche";
        boxes[0].remove();

        document.querySelector(".conteneur_carte").appendChild(tmpNode);

    }, 500);

}

function right() {
    const boxes = document.querySelectorAll(".box");
    boxes[4].className = "box vers_la_droite";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 4) {
            boxes[4].className = "box box_cacher";
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box_cacher");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".conteneur_carte");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box vers-position1-droite";
        boxes[0].className = "box vers-position2-droite";
        boxes[1].className = "box vers-position3-droite";
        boxes[2].className = "box vers-position4-droite";
        boxes[3].className = "box vers-position5-droite";
    }, 500);

}