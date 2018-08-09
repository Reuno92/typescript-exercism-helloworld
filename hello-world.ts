class HelloWorld {
    static hello(name: string = "World") {
        name = name;
        let say = "Hello, " + name + "!"; 

        return say;
    }
}

export default HelloWorld