let pageData = {
    productName: 'Book a Cruise to the Moon',
    productDescription: '到達月球的全新體驗,您可以觀察到外太空的奇異世界!!',
    imageSrc: [
        "asteroid.jpg",
        "fantasy.jpg",
        "space.jpg",
        "spaceship.jpg"
    ],
    h2ClassController: {
        centered: true,
        colorFont: false
    },
    pStyleController: {
        'margin-left': '50px',
        color: 'rgb(133, 104, 199)',
        'font-size': '30px',
        'font-style': 'italic'
        
    },
    imageStyleController: {
        margin: 'auto',
        display: 'block',
        width: '50%'
    },
    productClasses: [
        {
            name: 'Coach',
            price: 125000,
            seatsAvailable: 20,
            earlyBird: true
        },
        {
            name: 'Business',
            price: 275000,
            seatsAvailable: 6,
            earlyBird: true
        },
        {
            name: 'First',
            price: 430000,
            seatsAvailable: 2,
            earlyBird: false
        }
    ],
    imageAlt: "Photo from space"
};
const app = Vue.createApp({
    data() {
        return pageData;
    }
});
app.mount("#app");
