async function getPosts() {
    const controller = new AbortController();

    setTimeout(() => {
        controller.abort();
    }, 2000);

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",
            {signal: controller.signal}
        );

        const posts = await response.json();

        console.log(`Total Posts: ${posts.length}`);
    } 
    catch (error) {
        if (error.name === "AbortError") {
            console.log("Request was cancelled.");
        } else {
            console.log(error.message);
        }
    }
}

getPosts();