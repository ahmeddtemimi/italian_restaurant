import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

export default function HomePage() {
  const featuredDishes = [
    {
      name: "Spaghetti Carbonara",
      description: "Classic Roman pasta with guanciale, eggs, and pecorino",
      price: "$24",
      image: "/spaghetti-carbonara-pasta-italian-food.jpg",
    },
    {
      name: "Osso Buco",
      description: "Braised veal shanks with saffron risotto",
      price: "$42",
      image: "/osso-buco-veal-italian-dish.jpg",
    },
    {
      name: "Margherita Pizza",
      description: "San Marzano tomatoes, mozzarella, and fresh basil",
      price: "$18",
      image: "/margherita-pizza-italian.jpg",
    },
    {
      name: "Tiramisu",
      description: "Layered espresso-soaked ladyfingers with mascarpone",
      price: "$12",
      image: "/tiramisu-italian-dessert.jpg",
    },
    {
      name: "Saltimbocca",
      description: "Veal cutlets with prosciutto and sage",
      price: "$38",
      image: "/saltimbocca-veal-italian.jpg",
    },
    {
      name: "Panna Cotta",
      description: "Silky vanilla cream with berry compote",
      price: "$10",
      image: "/panna-cotta-italian-dessert.jpg",
    },
  ]

  const galleryImages = [
    "/italian-restaurant-interior-elegant.jpg",
    "/italian-pasta-fresh-handmade.jpg",
    "/italian-wine-bottles-cellar.jpg",
    "/italian-chef-cooking-kitchen.jpg",
    "/italian-food-plating-elegant.jpg",
    "/italian-restaurant-dining-ambiance.jpg",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/italian-restaurant-interior-elegant-dining.jpg')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">Authentic Italian Cuisine</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-balance">
            Experience the timeless flavors of Italy in an atmosphere of elegance and warmth
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            Book a Table
          </Button>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Dishes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our signature dishes, crafted with the finest ingredients and traditional techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <Card key={index} className="overflow-hidden group fade-in-delay-1">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold">{dish.name}</h3>
                  <span className="text-accent font-semibold text-lg">{dish.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Story/About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img src="/italian-chef-traditional-restaurant.jpg" alt="Our Story" className="w-full h-[500px] object-cover" />
            </div>
            <div className="fade-in-delay-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                For over three generations, La Cucina has been serving authentic Italian cuisine with recipes passed
                down through our family. What began as a small trattoria in Rome has grown into a beloved destination
                for those seeking the true taste of Italy.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Every dish we prepare is a celebration of Italian culinary tradition, made with passion, care, and the
                finest ingredients sourced from local farms and imported from Italy. We invite you to join us and
                experience la dolce vita.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground text-lg">A glimpse into our restaurant and culinary artistry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-72 overflow-hidden group fade-in-delay-2">
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <Clock size={48} className="mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Opening Hours</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-card p-8 border border-border">
                <h3 className="text-xl font-serif font-semibold mb-4 text-accent">Weekdays</h3>
                <div className="space-y-2 text-lg">
                  <p className="font-semibold">Monday - Friday</p>
                  <p className="text-muted-foreground">Lunch: 11:00 AM - 3:00 PM</p>
                  <p className="text-muted-foreground">Dinner: 5:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="bg-card p-8 border border-border">
                <h3 className="text-xl font-serif font-semibold mb-4 text-accent">Weekends</h3>
                <div className="space-y-2 text-lg">
                  <p className="font-semibold">Saturday - Sunday</p>
                  <p className="text-muted-foreground">Brunch: 10:00 AM - 3:00 PM</p>
                  <p className="text-muted-foreground">Dinner: 5:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <MapPin size={48} className="mx-auto mb-6 text-accent" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Visit Us</h2>
          <p className="text-muted-foreground text-lg mb-2">123 Via Roma, Italian Quarter</p>
          <p className="text-muted-foreground text-lg">City 12345</p>
        </div>

        <div className="max-w-5xl mx-auto fade-in-delay-1">
          <div className="w-full h-96 bg-muted border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
