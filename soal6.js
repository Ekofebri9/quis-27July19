function arkaFood(harga, kodeVoucher, jarak, pajak) {
    let ongkir = 5000
    let ppn = 0
    if (jarak > 1.5) {
        jarak = Math.ceil(jarak - 1.5)
        ongkir = ongkir + 3000 * jarak
    }
    if (pajak){
        ppn = harga * 0.05
    }
    switch(kodeVoucher) {
        case 'ARKAFOOD5':
            if (harga >= 50000){
                let discount = harga * 0.5
                let hargaDiscount =  harga - discount
                if (hargaDiscount <= 50000) {
                    harga = hargaDiscount
                }
            }
            break
        case 'DITARAKTIRDEMY':
            if (harga >= 25000){
                let discount = harga * 0.6
                let hargaDiscount =  harga - discount
                if (hargaDiscount <= 30000) {
                    harga = hargaDiscount
                }
            }
            break
    }
    return harga + ongkir + ppn
}
console.log(arkaFood(75000, 'ARKAFOOD5', 5, false))
console.log(arkaFood(25000, 'DITARAKTIRDEMY', 7, true))