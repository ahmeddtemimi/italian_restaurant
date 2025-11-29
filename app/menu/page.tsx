import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function MenuPage() {
  const menuCategories = [
    {
      title: "Starters",
      items: [
        {
          name: "Bruschetta al Pomodoro",
          description: "Toasted bread with fresh tomatoes, garlic, and basil",
          price: "$12",
        },
        { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and parmesan", price: "$16" },
        { name: "Calamari Fritti", description: "Crispy fried calamari with lemon aioli", price: "$14" },
        { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil with balsamic", price: "$13" },
        { name: "Arancini", description: "Sicilian rice balls with meat ragu", price: "$11" },
        { name: "Antipasto Misto", description: "Selection of Italian cured meats and cheeses", price: "$18" },
      ],
    },
    {
      title: "Main Dishes",
      items: [
        { name: "Spaghetti Carbonara", description: "Classic Roman pasta with guanciale and eggs", price: "$24" },
        { name: "Osso Buco", description: "Braised veal shanks with saffron risotto", price: "$42" },
        { name: "Bistecca alla Fiorentina", description: "Grilled T-bone steak, Tuscan style", price: "$48" },
        { name: "Risotto ai Funghi", description: "Creamy mushroom risotto with truffle oil", price: "$26" },
        { name: "Branzino al Forno", description: "Oven-roasted sea bass with herbs", price: "$36" },
        { name: "Lasagna della Nonna", description: "Traditional layered pasta with bolognese", price: "$22" },
      ],
    },
    {
      title: "Desserts",
      items: [
        { name: "Tiramisu", description: "Classic coffee-flavored Italian dessert", price: "$12" },
        { name: "Panna Cotta", description: "Vanilla cream with berry compote", price: "$10" },
        { name: "Cannoli Siciliani", description: "Crispy shells filled with sweet ricotta", price: "$11" },
        { name: "Gelato Assortito", description: "Selection of artisan Italian ice cream", price: "$9" },
        { name: "Affogato", description: "Vanilla gelato drowned in espresso", price: "$8" },
        { name: "Torta della Nonna", description: "Grandmother's custard tart with pine nuts", price: "$10" },
      ],
    },
    {
      title: "Drinks",
      items: [
        { name: "Espresso", description: "Single shot of Italian espresso", price: "$4" },
        { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "$5" },
        { name: "Aperol Spritz", description: "Italian aperitif cocktail", price: "$12" },
        { name: "House Wine (Glass)", description: "Red or white Italian wine", price: "$10" },
        { name: "Limoncello", description: "Traditional lemon liqueur", price: "$8" },
        { name: "San Pellegrino", description: "Sparkling mineral water", price: "$6" },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/italian-menu-food-table-elegant.jpg')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-balance">Discover the authentic flavors of Italy</p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 container mx-auto px-4">
        <div className="space-y-20">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="fade-in">
              <h2 className="text-4xl font-serif font-bold text-center mb-12 text-accent">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-semibold">{item.name}</h3>
                      <span className="text-accent font-semibold text-lg ml-4">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
