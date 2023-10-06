
console.log("Start")

async function getProducts() {
    const response = await fetch("http://localhost:5241/Product");

    const reader = response.body?.getReader();

    if (!reader) {
        console.log("READER FINISHED");

        return;
    }

    const d = new TextDecoder();


    while (true) {
        const { done, value } = await reader.read();

        if (done)
            break;

        var product = d.decode(value);
        console.log("Before replace", product);

        product = product.replace(/\[|]/g, '').replace(/^,/, '');
        console.log("After replace", product);

        objProduct = JSON.parse(product);

        let productListSelector = document.querySelector("#productList");
        console.log(productListSelector)

        productListSelector.innerHTML += `
            <tr>
                <td>${objProduct.id}</td>
                <td>${objProduct.name}</td>
                <td>${objProduct.price}</td>
                <td>${objProduct.count}</td>
            </tr>
        `;
        console.log("*********************")
    }
    reader.releaseLock();
};

getProducts();