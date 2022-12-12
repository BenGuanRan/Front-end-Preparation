Object.myCreate = function (obj) {
    function a() { }
    a.prototype = obj
    return new a()
}

function myCreate(obj) {
    function a() {

    }
    a.prototype = obj
    return new a()
}