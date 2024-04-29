function uno (dos) {
    console.log("uno")
    setTimeout(dos, 2000)
};

function dos () {
    console.log("dos")
};

setTimeout(() => uno (dos), 5000)


