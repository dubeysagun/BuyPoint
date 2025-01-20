import img1 from './img1.jpeg'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'
import img7 from './img7.png'
import img8 from './img8.png'
import img9 from './img9.png'
import img10 from './img10.png'
import img11 from './img11.png'
import img12 from './img12.png'
import img13 from './img13.png'
import img14 from './img14.png'
import img15 from './img15.png'
import img16 from './img16.png'
import img17 from './img17.png'
import logo from './logo.png';
import hero_img from './hero_img.jpg';
import cart_icon from './cart_icon.png';
import dropdown_icon from './dropdown_icon.png';
import exchange_icon from './exchange_icon.png';
import profile_icon from './profile_icon.png';
import quality_icon from './quality_icon.png';
import search_icon from './search_icon.png';
import star_dull_icon from './star_dull_icon.png';
import star_icon from './star_icon.png';
import bin_icon from './bin_icon.png';
import support_img from './support_img.png';
import menu_icon from './menu_icon.png';
import about_img from './about_img.webp';
import contact_img from './contact_img.jpeg';
import razorpay_logo from './razorpay_logo.png';
import stripe_logo from './stripe_logo.png';
import cross_icon from './cross_icon.png';


export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon

}

export const products = [
    {
        _id: "1",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knit garment worn on the upper body.",
        price: 500,
        image: [img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },

    {
        _id: "2",
        name: "Women Cotton shirt",
        description: "A stylish cotton shirt perfect for both formal and casual occasions.",
        price: 100,
        image: [img2],
        category: "Women",
        subCategory: "Shirts",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
 
    {
        _id: "4",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, knit garment worn on the upper body, suitable for casual outings or everyday wear.",
        price: 500,
        image: [img3,img4 , img5],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "6",
        name: "Casual Regular Sleeves Color Block Women Purple, Black Top",
        description: "A casual top featuring a color block pattern, perfect for everyday wear.",
        price: 250,
        image: [img6,img7,img8],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    
    
    {
        _id: "9",
        name: "Women casual shirt",
        description: "A versatile casual shirt perfect for everyday wear.",
        price: 700,
        image: [img9],
        category: "Women",
        subCategory: "Shirts",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false
    },

    {
        _id: "10",
        name: "Men Solid Polo Neck Cotton Blend Pink T-Shirt",
        description: "A classic polo t-shirt made of a comfortable cotton blend.",
        price: 450,
        image: [img10],
        category: "Men",
        subCategory: "T-Shirts",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "11",
        name: "Men Solid Polo Neck Cotton Blend Purple T-Shirt",
        description: "A stylish purple polo neck t-shirt made with premium cotton blend.",
        price: 500,
        image: [img11],
        category: "Men",
        subCategory: "T-Shirts",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "12",
        name: "Roadster Men Printed Round Neck Pure Cotton Gold T-Shirt",
        description: "A trendy gold t-shirt made of pure cotton for ultimate comfort.",
        price: 600,
        image: [img12],
        category: "Men",
        subCategory: "T-Shirts",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "13",
        name: "Men Polo Shirt",
        description: "A casual polo shirt ideal for both formal and casual occasions.",
        price: 400,
        image: [img13],
        category: "Men",
        subCategory: "Shirts",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "14",
        name: "Men Beige Cotton Blend Trousers",
        description: "Beige cotton blend trousers offering both comfort and style.",
        price: 700,
        image: [img14],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["30", "32", "34", "36"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "15",
        name: "Men Regular Fit Black Lycra Blend Trousers",
        description: "Black trousers made of lycra blend for a sleek and comfortable fit.",
        price: 900,
        image: [img15],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["30", "32", "34", "36"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "16",
        name: "Men Regular Fit Black Lycra Blend Trousers",
        description: "Stylish black trousers offering a blend of comfort and elegance.",
        price: 900,
        image: [img16],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["30", "32", "34", "36"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "17",
        name: "Women blue shirt",
        description: "A vibrant blue shirt perfect for casual or semi-formal wear.",
        price: 600,
        image: [img17],
        category: "Women",
        subCategory: "Shirts",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false
    },

];
