//получаем файлы
function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        var jsonData = JSON.parse(reader.result);
        switch (jsonData){
            case "input":
                createInput(elem[jsonData]);
                break;
            default:
                console.log(jsonData)
                break;
        }

    };
    reader.onerror = function() {
        console.log(reader.error);
    };
}


