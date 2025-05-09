using ECommerceWebApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace ECommerceWebApp.Data
{
    public class DbInitializer
    {
        public static async Task InitDb(WebApplication app)
        {
            using var scope = app.Services.CreateScope();

            var context = scope.ServiceProvider.GetRequiredService<StoreContext>()
                ?? throw new InvalidOperationException("Failed to retrieve store context");

           await SeedData(context);
        }

        private static async Task SeedData(StoreContext context)
        {
            context.Database.Migrate();

            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new() {
                    Name = "iPhone 14 Pro Max",
                    Description = "6.7-inch Super Retina XDR display, A16 Bionic chip, and Pro camera system for stunning photos and videos.",
                    Price = 79999,
                    PictureUrl = "/images/products/iphone14promax.png",
                    Brand = "Apple",
                    Type = "Electronics",
                    QuantityInStock = 50
                },
                new() {
                    Name = "Nike Air Max 270",
                    Description = "Breathable sneakers with Max Air cushioning for all-day comfort and style.",
                    Price = 7495,
                    PictureUrl = "/images/products/nike270.png",
                    Brand = "Nike",
                    Type = "Footwear",
                    QuantityInStock = 100
                },
                new() {
                    Name = "Samsung Galaxy Tab S9",
                    Description = "11-inch AMOLED tablet with Snapdragon Gen 2, ideal for both work and entertainment.",
                    Price = 55990,
                    PictureUrl = "/images/products/galaxytabs9.png",
                    Brand = "Samsung",
                    Type = "Electronics",
                    QuantityInStock = 40
                },
                new() {
                    Name = "JBL Flip 6 Bluetooth Speaker",
                    Description = "Waterproof portable speaker with deep bass and 12-hour battery life.",
                    Price = 6995,
                    PictureUrl = "/images/products/jblflip6.png",
                    Brand = "JBL",
                    Type = "Audio",
                    QuantityInStock = 85
                },
                new() {
                    Name = "Fossil Gen 6 Smartwatch",
                    Description = "Stainless steel smartwatch with health monitoring, GPS, and Alexa built-in.",
                    Price = 12995,
                    PictureUrl = "/images/products/fossilgen6.png",
                    Brand = "Fossil",
                    Type = "Wearables",
                    QuantityInStock = 70
                },
                new() {
                    Name = "Uniqlo Dry-EX Crew Neck T-Shirt",
                    Description = "Moisture-wicking shirt designed for athletic performance and comfort.",
                    Price = 590,
                    PictureUrl = "/images/products/uniqlo-dryex.png",
                    Brand = "Uniqlo",
                    Type = "Apparel",
                    QuantityInStock = 200
                },
                new() {
                    Name = "ASUS ROG Strix G16 Laptop",
                    Description = "High-performance gaming laptop with RTX 4070 GPU and Intel Core i9.",
                    Price = 134999,
                    PictureUrl = "/images/products/asusrogstrixg16.png",
                    Brand = "ASUS",
                    Type = "Electronics",
                    QuantityInStock = 30
                },
                new() {
                    Name = "Anker PowerCore 20000mAh",
                    Description = "Fast-charging, high-capacity power bank compatible with USB-C devices.",
                    Price = 2995,
                    PictureUrl = "/images/products/anker20000.png",
                    Brand = "Anker",
                    Type = "Accessories",
                    QuantityInStock = 150
                },
                new() {
                    Name = "Ray-Ban Original Wayfarer",
                    Description = "Timeless sunglasses with UV protection and durable frames.",
                    Price = 7590,
                    PictureUrl = "/images/products/raybanwayfarer.png",
                    Brand = "Ray-Ban",
                    Type = "Eyewear",
                    QuantityInStock = 90
                },
                new() {
                    Name = "The Ordinary Niacinamide 10%",
                    Description = "Serum for reducing blemishes and balancing sebum production.",
                    Price = 540,
                    PictureUrl = "/images/products/niacinamide.png",
                    Brand = "The Ordinary",
                    Type = "Beauty & Skincare",
                    QuantityInStock = 300
                },
                new() {
                    Name = "Sony WH-1000XM5 Headphones",
                    Description = "Industry-leading noise canceling wireless headphones with immersive sound.",
                    Price = 19995,
                    PictureUrl = "/images/products/sonywh1000xm5.png",
                    Brand = "Sony",
                    Type = "Audio",
                    QuantityInStock = 60
                },
                new() {
                    Name = "Fitbit Charge 5",
                    Description = "Fitness tracker with built-in GPS, heart rate monitor, and sleep tracking.",
                    Price = 8990,
                    PictureUrl = "/images/products/fitbitcharge5.png",
                    Brand = "Fitbit",
                    Type = "Wearables",
                    QuantityInStock = 120
                },
                new() {
                    Name = "Adidas Ultraboost 22",
                    Description = "Running shoes with responsive cushioning and Primeknit upper.",
                    Price = 8800,
                    PictureUrl = "/images/products/adidasultraboost22.png",
                    Brand = "Adidas",
                    Type = "Footwear",
                    QuantityInStock = 110
                },
                new() {
                    Name = "Canon EOS M50 Mark II",
                    Description = "Mirrorless camera with 4K video recording and fast autofocus.",
                    Price = 38995,
                    PictureUrl = "/images/products/canoneosm50.png",
                    Brand = "Canon",
                    Type = "Electronics",
                    QuantityInStock = 25
                },
                new() {
                    Name = "Herschel Little America Backpack",
                    Description = "Stylish and spacious backpack for everyday carry and travel.",
                    Price = 4990,
                    PictureUrl = "/images/products/herschellittleamerica.png",
                    Brand = "Herschel",
                    Type = "Bags",
                    QuantityInStock = 80
                },
                new() {
                    Name = "Logitech MX Master 3S Mouse",
                    Description = "Advanced wireless mouse with ultra-fast scrolling and ergonomic design.",
                    Price = 4995,
                    PictureUrl = "/images/products/mxmaster3s.png",
                    Brand = "Logitech",
                    Type = "Accessories",
                    QuantityInStock = 90
                },
                new() {
                    Name = "Dyson Supersonic Hair Dryer",
                    Description = "Fast-drying hair dryer with intelligent heat control for shine protection.",
                    Price = 23999,
                    PictureUrl = "/images/products/dysonsupersonic.png",
                    Brand = "Dyson",
                    Type = "Beauty & Skincare",
                    QuantityInStock = 35
                },
                new() {
                    Name = "Xiaomi Mi Smart Band 7",
                    Description = "Affordable fitness tracker with AMOLED display and SpO2 monitoring.",
                    Price = 1795,
                    PictureUrl = "/images/products/miband7.png",
                    Brand = "Xiaomi",
                    Type = "Wearables",
                    QuantityInStock = 250
                },
                new() {
                    Name = "GoPro HERO11 Black",
                    Description = "Action camera with 5.3K video, HyperSmooth stabilization, and waterproof design.",
                    Price = 24990,
                    PictureUrl = "/images/products/goprohero11.png",
                    Brand = "GoPro",
                    Type = "Electronics",
                    QuantityInStock = 45
                },
                new() {
                    Name = "Apple Magic Keyboard",
                    Description = "Rechargeable wireless keyboard with numeric keypad and sleek design.",
                    Price = 7490,
                    PictureUrl = "/images/products/magickeyboard.png",
                    Brand = "Apple",
                    Type = "Accessories",
                    QuantityInStock = 70
                },
                new() {
                    Name = "Levi's 511 Slim Fit Jeans",
                    Description = "Classic slim-fit jeans made with stretch denim for comfort and style.",
                    Price = 3895,
                    PictureUrl = "/images/products/levis511.png",
                    Brand = "Levi's",
                    Type = "Apparel",
                    QuantityInStock = 130
                }

            };

            context.Products.AddRange(products);

            context.SaveChanges();
        }
    }
}
