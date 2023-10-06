
console.log("Start")

async function getProducts() {
    const response = await fetch("http://localhost:5241/Product");

    const reader = response.body?.getReader();

    if (!reader) {
        console.log("READER FINISHED");

        return;
    }

    while (true) {
        console.log("The reading is continue");
        
        const { done, value } = await reader.read();

        if (done)
            break;

    }

};

getProducts();