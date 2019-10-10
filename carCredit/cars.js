let car = {
    car1: {
        name: 'Range Rover',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car2: {
        name: 'Mercedes C-class',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car3: {
        name: 'BMW 320',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car4: {
        name: 'Toyota Camry',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 345,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car5: {
        name: 'Hyundai Grandeur',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car6: {
        name: 'Range Rover',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car7: {
        name: 'Range Rover',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car8: {
        name: 'Range Rover',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car9: {
        name: 'Range Rover',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car10: {
        name: 'Range Rover',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car11: {
        name: 'Range Rover',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car12: {
        name: 'Range Rover',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
    car13: {
        name: 'Range Rover',
        img: 'img/1331495_discovery_silicon_silver_003.jpg',
        price: 50000,
        creditPrice: 25000,
        year: 2015,
        probeg: 83000,
        date: '10 okt 2019'
    },
}

let dom = {
    createElement: function (tagName, className, cssProps) {
        //create dom element
        let element = document.createElement(tagName);
        //check if this element is valid html element
        if (element != null) {
            //if so, then validate classname existance
            if (this._isValidValue(className)) {
                element.className = className;
            }

            //enumerate all css properties given as  object
            for (let f in cssProps) {
                //check if object key is valid attribute
                if (this._isValidAttr(f)) {
                    //then use it as attribute
                    element[f] = cssProps[f];
                }
                //otherwise,it is just style.Use it as style..
                else {
                    element.style[f] = cssProps[f];
                }
            }
        }
        return element;
    },
    _isValidValue: function (val) {
        return (typeof (val) !== "undefined" && val)
    },
    _isValidAttr: function (attr) {
        return (attr == 'src' || attr == 'href' || attr == 'innerText' || attr == 'id');
    }
}

