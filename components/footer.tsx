import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">La Cucina</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience authentic Italian cuisine in an elegant atmosphere. We bring the flavors of Italy to your table
              with recipes passed down through generations.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Via Roma, Italian Quarter, City 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@lacucina.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 uppercase tracking-wider">Opening Hours</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary-foreground">Monday - Friday</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary-foreground">Saturday - Sunday</p>
                  <p>10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} La Cucina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
