import ProductCard from "./shared/ProductCard";

const products = [
  {
    image: "https://images.unsplash.com/photo-1633891120687-1a228941e6b0?w=500&auto=format&fit=crop&q=60",
    productName: "iPhone 13 Pro Max",
    description: "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features.",
    specialPrice: 720,
    price: 780,
    rating: 4.8
  },
  {
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60",
    productName: "Samsung Galaxy S21",
    description: "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display and powerful camera.",
    specialPrice: 699,
    price: 799,
    rating: 4.6
  },
  {
    image: "https://images.unsplash.com/photo-1633891120241-cbdb5e85ca7e?w=500&auto=format&fit=crop&q=60",
    productName: "Google Pixel 6",
    description: "The Google Pixel 6 boasts cutting-edge AI features and exceptional photo quality.",
    price: 599,
    specialPrice: 400,
    rating: 4.5
  }
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Our Store
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our story and what makes us different
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="lg:w-1/2">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to our e-commerce store! We are dedicated to providing the best products 
              and services to our customers. Our mission is to offer a seamless shopping 
              experience while ensuring the highest quality of our offerings.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Quality products from trusted brands</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Fast and reliable shipping</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Exceptional customer service</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=60"
            alt="Our store"
            className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully selected items that meet our high standards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              image={product.image}
              productName={product.productName}
              description={product.description}
              specialPrice={product.specialPrice}
              price={product.price}
              rating={product.rating}
              className="hover:shadow-xl transition-shadow duration-300"
            />
          ))}
        </div>
      </div>

      {/* Team Section (Optional) */}
      <div className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate people behind our success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alex Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=60" },
            { name: "Sarah Williams", role: "Product Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=60" },
            { name: "Michael Chen", role: "Customer Support", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=60" }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;