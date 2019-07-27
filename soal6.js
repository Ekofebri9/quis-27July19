arkaFood = (harga, kodeVoucher, jarak, pajak) =>{
    let ongkir = 5000
        (pajak) ? Ppn = harga * 0.05 : Ppn
   if (pajak) PPN = harga * 0.05
        if (jarak > 1.5) {
        jarak = Math.ceil(jarak - 1.5) 
        ongkir = 5000 + 3000 * jarak 
        return ongkir
    }
    switch (kodeVoucher){
        case 'false':
            return harga
        case 'ARKAFOOD5':
            if (harga >= 50000){
                discount =  0.5 * harga
                hargaDiscount = harga - discount
                (hargaDiscount > 50000) ? harga = harga : harga = hargaDiscount
            }
            return harga
        case 'DITARAKTIRDEMY':
            if (harga >= 25000){
                discount =  0.6 * harga
                hargaDiscount = harga - discount
                (hargaDiscount > 30000) ? harga = harga : harga = hargaDiscount
            }
            return harga
    }
    // return harga + ongkir + PPN
    return harga
}
arkaFood(50000,'ARKAFOOD5',1.5,false)