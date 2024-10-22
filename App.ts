// Part 1: Classes and Object-Oriented Programming
class Product {
  name: string;
  price: number;
  category: string;

  // ตัวแปรสถิติสำหรับนับจำนวนผลิตภัณฑ์
  static productCount: number = 0;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;

    // เพิ่มค่าจำนวนผลิตภัณฑ์ทุกครั้งที่สร้างอ็อบเจ็กต์ใหม่
    Product.productCount++;
  }

  updatePrice(newPrice: number): void {
    this.price = newPrice;
  }

  getProductInfo(): string {
    return `ชื่อสินค้า: ${this.name}, ราคา: ${this.price}, หมวดหมู่: ${this.category}`;
  }

  // Static method สำหรับคืนค่าจำนวนผลิตภัณฑ์ทั้งหมด
  static totalProducts(): number {
    return Product.productCount;
  }
}

const productA = new Product("สินค้า A", 100, "หมวดหมู่ 1");
const productB = new Product("สินค้า B", 200, "หมวดหมู่ 2");

// Access product information
console.log(productA.getProductInfo());
console.log(productB.getProductInfo());

// Update price of a product
productA.updatePrice(150);
console.log(productA.getProductInfo()); // Output: ชื่อสินค้า: สินค้า A, ราคา: 150, หมวดหมู่: หมวดหมู่ 1

// Get total number of products created
console.log(`จำนวนผลิตภัณฑ์ทั้งหมด: ${Product.totalProducts()}`);

// Part 2: Inheritance and Polymorphism
// คลาส DiscountedProduct ที่สืบทอดจาก Product
class DiscountedProduct extends Product {
  discountRate: number; // อัตราส่วนลดเป็นเปอร์เซ็นต์

  constructor(
    name: string,
    price: number,
    category: string,
    discountRate: number
  ) {
    super(name, price, category); // เรียกใช้ constructor ของคลาส Product
    this.discountRate = discountRate;
  }

  // คำนวณราคาหลังหักส่วนลด
  calculateDiscountedPrice(): number {
    return this.price - (this.price * this.discountRate) / 100;
  }

  // Override เมธอด getProductInfo() เพื่อแสดงข้อมูลพร้อมส่วนลด
  getProductInfo(): string {
    const discountedPrice = this.calculateDiscountedPrice();
    return `ชื่อสินค้า: ${this.name}, ราคาเดิม: ${this.price}, ประเภท: ${this.category}, ส่วนลด: ${this.discountRate}%, ราคาหลังส่วนลด: ${discountedPrice}`;
  }
}

// Create an instance of DiscountedProduct
const discountedProduct = new DiscountedProduct(
  "สินค้า C",
  300,
  "หมวดหมู่ 3",
  20
);

// Accessing product information with discount
console.log(discountedProduct.getProductInfo());
// Output: ชื่อสินค้า: สินค้า C, ราคาเดิม: 300, ประเภท: หมวดหมู่ 3, ส่วนลด: 20%, ราคาหลังส่วนลด: 240

// Calculating the discounted price directly
const discountedPrice = discountedProduct.calculateDiscountedPrice();
console.log(`ราคาหลังส่วนลด: ${discountedPrice}`); // Output: ราคาหลังส่วนลด: 240

// Part 3: Type Annotations and Interfaces
// ประกาศอินเตอร์เฟส Order ซึ่งเป็นผลิตภัณฑ์แต่ละชิ้น
interface Order {
  name: string;
  price: number;
  category: string;
}

// ประกาศอินเตอร์เฟส Customer ซึ่งมีคุณสมบัติที่กำหนด
interface Customer {
  name: string;
  email: string;
  orders: Order[];
}

// ฟังก์ชันสำหรับแสดงข้อมูลลูกค้า
function getCustomerInfo(customer: Customer): void {
  console.log(`ชื่อ: ${customer.name}`);
  console.log(`อีเมล: ${customer.email}`);
  console.log(`จำนวนคำสั่งซื้อ: ${customer.orders.length}`);
}

// ตัวอย่างการใช้งาน
const customer1: Customer = {
  name: "สมชาย ใจดี",
  email: "somchai@example.com",
  orders: [
    { name: "โน๊ตบุ๊ค", price: 1000, category: "อิเล็กทรอนิกส์" },
    { name: "สมาร์ทโฟน", price: 700, category: "อิเล็กทรอนิกส์" },
  ],
};

// เรียกใช้งานฟังก์ชันเพื่อแสดงข้อมูลลูกค้า
getCustomerInfo(customer1);

// Part 4: Generics
// คลาส Inventory ที่ใช้ Generics
class Inventory<T> {
  private items: T[] = [];

  // เมธอดเพิ่มสินค้าในคลังสินค้า
  addItem(item: T): void {
    this.items.push(item);
  }

  // เมธอดแสดงสินค้าทั้งหมดในคลังสินค้า
  listItems(): T[] {
    return this.items;
  }
}

// ตัวอย่างการใช้งาน
const productInventory = new Inventory<Product>();
const discountedProductInventory = new Inventory<DiscountedProduct>();

// เพิ่มสินค้าใน inventory สำหรับ Product
productInventory.addItem(new Product("แล็ปท็อป", 1200, "อิเล็กทรอนิกส์"));
productInventory.addItem(new Product("เมาส์", 50, "อุปกรณ์เสริม"));

// เพิ่มสินค้าใน inventory สำหรับ DiscountedProduct
discountedProductInventory.addItem(
  new DiscountedProduct("สมาร์ทโฟน", 1000, "อิเล็กทรอนิกส์", 15)
);

// แสดงรายการสินค้าจาก productInventory
console.log("รายการสินค้าทั้งหมดในคลังสินค้า Product:");
productInventory
  .listItems()
  .forEach((product) => console.log(product.getProductInfo()));

// แสดงรายการสินค้าจาก discountedProductInventory
console.log("\nรายการสินค้าทั้งหมดในคลังสินค้า DiscountedProduct:");
discountedProductInventory
  .listItems()
  .forEach((product) => console.log(product.getProductInfo()));

// Part 5: Functions and Higher-Order Functions
// Higher-Order Function สำหรับการคูณราคา
function createPriceMultiplier(multiplier: number) {
  return function (price: number): number {
    return price * multiplier;
  };
}

// ฟังก์ชัน applyTax ที่ใช้ createPriceMultiplier เพื่อเพิ่มภาษี 7%
const applyTax = createPriceMultiplier(1.07); // คูณราคาด้วย 1.07 เพื่อเพิ่มภาษี 7%

// Test prices
const originalPrice1 = 100; // Price of product 1
const originalPrice2 = 200; // Price of product 2

// Calculate prices after tax
const priceAfterTax1 = applyTax(originalPrice1);
const priceAfterTax2 = applyTax(originalPrice2);

// Output the results
console.log(`ราคาหลังภาษีของสินค้า 1: ${priceAfterTax1.toFixed(2)} บาท`); // Output: ราคาหลังภาษีของสินค้า 1: 107.00 บาท
console.log(`ราคาหลังภาษีของสินค้า 2: ${priceAfterTax2.toFixed(2)} บาท`); // Output: ราคาหลังภาษีของสินค้า 2: 214.00 บาท

// Part 6: Asynchronous Programming
async function fetchProductData(): Promise<Product> {
  // จำลองการทำงานของ API โดยใช้ Promise
  return new Promise((resolve, reject) => {
    // จำลองการเลื่อนเวลาในการดึงข้อมูล (เช่น 2 วินาที)
    setTimeout(() => {
      // สร้างข้อมูลผลิตภัณฑ์
      const productData = new Product("สินค้า A", 100, "หมวดหมู่ 1");
      // ใช้ resolve เพื่อส่งข้อมูลที่ได้
      resolve(productData);
    }, 2000);
  });
}

// ฟังก์ชันหลักในการเรียกใช้ fetchProductData
async function main() {
  try {
    const product = await fetchProductData(); // รอผลลัพธ์จาก fetchProductData
    console.log(product.getProductInfo()); // แสดงข้อมูลผลิตภัณฑ์
    const priceWithTax = applyTax(product.price); // คำนวณราคาหลังจากเพิ่มภาษี
    console.log(`ราคาหลังจากเพิ่มภาษี 7%: ${priceWithTax}`);
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการดึงข้อมูลผลิตภัณฑ์:", error);
  }
}

// เรียกใช้งานฟังก์ชันหลัก
main();

// Part 7
const products: Product[] = [
  new Product("สินค้า A", 150, "หมวดหมู่ 1"),
  new Product("สินค้า B", 80, "หมวดหมู่ 2"),
  new Product("สินค้า C", 200, "หมวดหมู่ 1"),
  new Product("สินค้า D", 50, "หมวดหมู่ 3"),
  new Product("สินค้า E", 120, "หมวดหมู่ 2"),
];

// ใช้ filter() เพื่อเลือกสินค้าที่มีราคาสูงกว่า 100
const filteredProducts = products.filter((product) => product.price > 100);
console.log(
  "ผลิตภัณฑ์ที่มีราคาสูงกว่า 100:",
  filteredProducts.map((p) => p.getProductInfo())
);

// ใช้ map() เพื่อสร้างอาร์เรย์ของชื่อผลิตภัณฑ์
const productNames = products.map((product) => product.name);
console.log("ชื่อผลิตภัณฑ์ทั้งหมด:", productNames);

// ใช้ reduce() เพื่อคำนวณรวมราคาทั้งหมดของผลิตภัณฑ์
const totalCost = products.reduce(
  (accumulator, product) => accumulator + product.price,
  0
);
console.log(`รวมราคาของผลิตภัณฑ์ทั้งหมด: ${totalCost}`);

// Part 8
// ฟังก์ชันสำหรับแปลงข้อมูลผลิตภัณฑ์จากสตริง JSON
function parseProductData(jsonData: string): Product[] | string {
  try {
    const products: Product[] = JSON.parse(jsonData); // พยายามแปลง JSON
    // ตรวจสอบว่าข้อมูลที่แปลงมีโครงสร้างเป็นอาร์เรย์ของผลิตภัณฑ์หรือไม่
    if (!Array.isArray(products)) {
      throw new Error("ข้อมูลไม่ถูกต้อง: ต้องเป็นอาร์เรย์ของผลิตภัณฑ์");
    }
    return products; // คืนค่าอาร์เรย์ของผลิตภัณฑ์
  } catch (error) {
    // จัดการข้อผิดพลาดในการแปลง JSON
    return `เกิดข้อผิดพลาดในการแปลงข้อมูล: ${
      error instanceof Error ? error.message : "ข้อผิดพลาดไม่รู้จัก"
    }`;
  }
}

// ตัวอย่างการใช้งาน
const validJson =
  '[{"name":"สินค้า A","price":150,"category":"หมวดหมู่ 1"},{"name":"สินค้า B","price":80,"category":"หมวดหมู่ 2"}]';
const invalidJson =
  '[{"name":"สินค้า A","price":150,"category":"หมวดหมู่ 1"{"name":"สินค้า B","price":80,"category":"หมวดหมู่ 2"}]';

const parsedProducts = parseProductData(validJson);
console.log("ผลลัพธ์สำหรับ JSON ที่ถูกต้อง:", parsedProducts);

const parsedError = parseProductData(invalidJson);
console.log("ผลลัพธ์สำหรับ JSON ที่ไม่ถูกต้อง:", parsedError);

// แสดงจำนวนผลิตภัณฑ์ทั้งหมด
console.log(`จำนวนผลิตภัณฑ์ทั้งหมด: ${Product.totalProducts()}`);
