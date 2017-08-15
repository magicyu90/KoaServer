const promiseFn = (): Promise<string> => {
    return Promise.resolve("Hello World");
}


const asyncFn = async () => {
    const text = await promiseFn();
    console.log(text);
}


