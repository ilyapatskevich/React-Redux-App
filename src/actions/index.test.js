const index = require("./index")
// @ponicode
describe("index.menuLoaded", () => {
    test("0", () => {
        let callFunction = () => {
            index.menuLoaded("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.menuLoaded("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.menuLoaded("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.menuLoaded("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.menuLoaded("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.menuLoaded(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.menuRequested", () => {
    test("0", () => {
        let callFunction = () => {
            index.menuRequested()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.menuError", () => {
    test("0", () => {
        let callFunction = () => {
            index.menuError()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.addedToCart", () => {
    test("0", () => {
        let callFunction = () => {
            index.addedToCart("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.addedToCart(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.addedToCart(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.addedToCart(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.addedToCart("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.addedToCart(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.deleteFromCart", () => {
    test("0", () => {
        let callFunction = () => {
            index.deleteFromCart(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.deleteFromCart("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.deleteFromCart(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.deleteFromCart("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.deleteFromCart(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.deleteFromCart(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
