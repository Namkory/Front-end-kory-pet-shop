export const handleAddProduct = async (data, render) => {
    const dataLocal = await JSON.parse(localStorage.getItem('products'));
    if (dataLocal) {
        //localstorage ton tai 1 san pham
        const exits = dataLocal.find((item) => {
            return item.id === data.id;
        });
        if (exits) {
            dataLocal.forEach((item) => {
                if (item.id === data.id) {
                    return (item.quantity = item.quantity + 1);
                }
            });
            localStorage.setItem('products', JSON.stringify(dataLocal));
        } else {
            localStorage.setItem(
                'products',
                JSON.stringify([
                    ...dataLocal,
                    { id: data.id, name: data.title, image: data.thumbnail, quantity: 1, price: data.price },
                ]),
            );
        }
    } else {
        //add new
        localStorage.setItem(
            'products',
            JSON.stringify([{ id: data.id, name: data.title, image: data.thumbnail, quantity: 1, price: data.price }]),
        );
    }
    render();
};
