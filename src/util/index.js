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
export const handleGetDetail = async (data) => {
    // console.log('check data', data);
    const localProductDetail = JSON.parse(localStorage.getItem('productDetail'));
    if (localProductDetail == null) {
        localStorage.setItem(
            'productDetail',
            JSON.stringify([
                {
                    id: data.id,
                    name: data.title,
                    image: data.thumbnail,
                    quantity: 1,
                    price: data.price,
                    description: data.description,
                },
            ]),
        );
    } else {
        // Xóa item có tên là "myArrayData" trong localStorage
        localStorage.removeItem('productDetail');
        localStorage.setItem(
            'productDetail',
            JSON.stringify([
                {
                    id: data.id,
                    name: data.title,
                    image: data.thumbnail,
                    quantity: 1,
                    price: data.price,
                    description: data.description,
                },
            ]),
        );
    }
};
