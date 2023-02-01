let arr = ["Kéo", "Búa", "Bao"];

while (true) {
    let result = Math.floor(Math.random() * arr.length);

    let input = prompt("Oẳn tù tì ra cái gì hihi: ");
    if (input == "Kéo") {
        if (result == 0) {
            alert("Máy ra: " + arr[result] + "\n" + "Bạn ra: " + "Kéo" + "\n" + "Hòa");
        } else if (result == 1) {
            alert("Máy ra: " + arr[result] + "\n" + "Bạn ra: " + "Kéo" + "\n" + "Bạn thua");
        } else if (result == 2) {
            alert("Máy ra: " + arr[result] + "\n" + "Bạn ra: " + "Kéo" + "\n" + "Bạn thắng");
            break;
        }
    }
    else if (input == "Búa") {
        if (result == 0) {
            alert("Máy ra: " + arr[result] + "\n" + "Bạn ra: " + "Búa" + "\n" + "Bạn thắng");
            break;
        } else if (result == 1) {
            alert("Máy ra: " + arr[result] + "\n" + "Bạn ra: " + "Búa" + "\n" + "Hòa");
        } else if (result == 2) {
            alert("Máy ra: " + arr[result] + "\n" + "Bạn ra: " + "Búa" + "\n" + "Bạn thua");
        }
    }
    else if (input == "Bao") {
        if (result == 0) {
            alert("Máy ra: " + arr[result] + "\n" + "Bạn ra: " + "Bao" + "\n" + "Bạn thua");
        } else if (result == 1) {
            alert("Máy ra: " + arr[result] + "\n" + "Bạn ra: " + "Bao" + "\n" + "Bạn thắng");
            break;
        } else if (result == 2) {
            alert("Máy ra: " + arr[result] + "\n" + "Bạn ra: " + "Bao" + "\n" + "Hòa");
        }
    }
    else if(!input){
        break;
    }
    else{
        alert("Không hợp lệ");
    }
}


