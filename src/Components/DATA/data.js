import dress from "../../assets/dress.jpg"
import dress1 from "/src/assets/productsimages/maxidress1.jpg"
import dress2 from "/src/assets/productsimages/maxidress2.jpg"
import dress3 from "/src/assets/productsimages/maxidress3.jpg"
import dress4 from "/src/assets/productsimages/maxidress4.jpg"
import tops from "../../assets/top.jpg"
import top1 from "/src/assets/productsimages/top1.jpg"
import top2 from "/src/assets/productsimages/top2.jpg"
import top3 from "/src/assets/productsimages/top3.jpg"
import top4 from "/src/assets/productsimages/top4.jpg"
import cord from "../../assets/cord-set.jpg"
import cord1 from "/src/assets/productsimages/yellowcord1.jpg"
import cord2 from "/src/assets/productsimages/yellowcord2.jpg"
import cord3 from "/src/assets/productsimages/yellowcord3.jpg"
import cordset1 from "/src/assets/productsimages/cordset1.jpg"
import cordset2 from "/src/assets/productsimages/cordset2.jpg"
import cordset3 from "/src/assets/productsimages/cordset3.jpg"
import cordset4 from "/src/assets/productsimages/cordset1.jpg"
import pinkdress1 from "/src/assets/productsimages/pinkdress1.jpg"
import pinkdress2 from "/src/assets/productsimages/pinkdress2.jpg"
import pinkdress3 from "/src/assets/productsimages/pinkdress3.jpg"
import pinkdress4 from "/src/assets/productsimages/pinkdress4.jpg"


export const featuredCollections = [
     {
        id: 1,
        title: "Premium Cord Set",
        subtitle: "Comfortable and Stylish",
        price: "$89.99",
        image: cord,
        images: [cord, cord1, cord2, cord3],
        alt: "Premium Cord Set",
        shortDescription: "A comfortable and stylish cord set perfect for casual wear.",
        description: "Made from high-quality fabric, this cord set offers both comfort and style for everyday wear.",
        specifications: {
            Material: "Cotton Blend",
            Style: "Casual",
            CareInstructions: "Machine Washable"
        },
        availability: "In Stock",
        category: "cord-set"
    },
    {
        id: 2,
        title: "Designer Top",
        subtitle: "Elegant and Versatile",
        price: "$59.99",
        image: tops,
        images: [tops, tops, tops, tops],
        alt: "Designer Top",
        shortDescription: "An elegant top that can be dressed up or down.",
        description: "This versatile top is perfect for both casual outings and formal occasions.",
        specifications: {
            Material: "Silk Blend",
            Style: "Versatile",
            CareInstructions: "Dry Clean Only"
        },
        availability: "In Stock",
        category: "tops-blouses"
    },
    {
        id: 3,
        title: "Maxi Dress",
        subtitle: "Graceful and Sophisticated",
        price: "$129.99",
        image: dress,
        images: [dress1, dress2, dress3, dress4],
        alt: "Evening Dress",
        shortDescription: "A graceful evening dress for special occasions.",
        description: "This sophisticated dress is perfect for formal events and special occasions.",
        specifications: {
            Material: "Satin",
            Style: "Formal",
            CareInstructions: "Dry Clean Only"
        },
        availability: "In Stock",
        category: "dresses"
    },
    {
        id: 4,
        title: "Casual Cord Set",
        subtitle: "Everyday Comfort",
        price: "$79.99",
        image: cordset1,
        images: [cordset1, cordset2, cordset3, cordset4],
        alt: "Casual Cord Set",
        shortDescription: "Perfect for everyday casual wear.",
        description: "Comfortable cord set for daily use.",
        specifications: {
            Material: "Cotton",
            Style: "Casual",
            CareInstructions: "Machine Washable"
        },
        availability: "In Stock",
        category: "cord-set"
    },
    {
        id: 5,
        title: "White T-Shirt Blouse",
        subtitle: "Light and Airy",
        price: "$49.99",
        image: top1,
        images: [top1, top2, top3, top4],
        alt: "Summer Blouse",
        shortDescription: "Light and airy blouse for summer.",
        description: "Perfect summer blouse for warm weather.",
        specifications: {
            Material: "Linen",
            Style: "Summer",
            CareInstructions: "Hand Wash"
        },
        availability: "In Stock",
        category: "tops-blouses"
    },
    {
        id: 6,
        title: "Pink Long Dress",
        subtitle: "Party Ready",
        price: "$99.99",
        image: pinkdress1,
        images: [pinkdress1, pinkdress2, pinkdress3, pinkdress4],
        alt: "Cocktail Dress",
        shortDescription: "Perfect for parties and events.",
        description: "Elegant cocktail dress for special occasions.",
        specifications: {
            Material: "Chiffon",
            Style: "Cocktail",
            CareInstructions: "Dry Clean Only"
        },
        availability: "In Stock",
        category: "dresses"
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Fashion Designer",
        text: "Working with Frolic Exports transformed my design vision into reality. Their attention to detail and quality craftsmanship is exceptional.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"

    },
    {
        id: 2,
        name: "Michael Chen",
        position: "Brand Owner",
        text: "The quality and precision in every piece exceeded my expectations. Frolic Exports truly understands luxury fashion manufacturing.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        position: "Boutique Owner",
        text: "Their sustainable practices and ethical manufacturing align perfectly with our brand values. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
];

export const partners = [
    {
        id: 1,
        logo: "https://via.placeholder.com/150x60/ffffff/000000?text=Brand+1",
        alt: "Brand 1"
    },
    {
        id: 2,
        logo: "https://via.placeholder.com/150x60/ffffff/000000?text=Brand+2",
        alt: "Brand 2"
    },
    {
        id: 3,
        logo: "https://via.placeholder.com/150x60/ffffff/000000?text=Brand+3",
        alt: "Brand 3"
    },
    {
        id: 4,
        logo: "https://via.placeholder.com/150x60/ffffff/000000?text=Brand+4",
        alt: "Brand 4"
    },
    {
        id: 5,
        logo: "https://via.placeholder.com/150x60/ffffff/000000?text=Brand+5",
        alt: "Brand 5"
    }
];