export function GoldHEN() {
    fetch('./payloads/GoldHEN.bin').then(res => {
        res.arrayBuffer().then(arr => {
            window.pld = new Uint32Array(arr);
            setTimeout(() => {
            window.location.reload();
            }, 3000); // 3 seconds delay
        })
    });   
}

