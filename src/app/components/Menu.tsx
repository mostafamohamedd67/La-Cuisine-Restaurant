import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuItems = {
  starters: [
    {
      name: "Fresh Seafood Platter",
      description: "Assortment of oysters, prawns, and crab with lemon aioli",
      price: "$28",
      image: "https://images.unsplash.com/photo-1758184665571-6c64f6d19db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNlYWZvb2QlMjBwbGF0dGVyfGVufDF8fHx8MTc3NjE5NjQwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Soup of the Day",
      description: "Chef's seasonal creation with artisan bread",
      price: "$14",
      image: ""
    },
    {
      name: "Burrata Salad",
      description: "Creamy burrata, heirloom tomatoes, basil, balsamic reduction",
      price: "$18",
      image: ""
    }
  ],
  mains: [
    {
      name: "Grilled Wagyu Steak",
      description: "Premium wagyu beef, truffle butter, seasonal vegetables",
      price: "$68",
      image: "https://images.unsplash.com/photo-1774806288349-3d910c6a9334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBwbGF0ZXxlbnwxfHx8fDE3NzYyMzYzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Truffle Carbonara",
      description: "Fresh pasta, pecorino romano, crispy pancetta, black truffle",
      price: "$32",
      image: "https://images.unsplash.com/photo-1627207644206-a2040d60ecad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYSUyMGRpc2h8ZW58MXx8fHwxNzc2MjQ1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Pan-Seared Sea Bass",
      description: "Wild-caught sea bass, lemon butter sauce, herb risotto",
      price: "$42",
      image: ""
    }
  ],
  desserts: [
    {
      name: "Chocolate Fondant",
      description: "Dark chocolate lava cake with vanilla ice cream",
      price: "$16",
      image: "https://images.unsplash.com/photo-1736840334919-aac2d5af73e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NzYyMDkyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Crème Brûlée",
      description: "Classic French custard with caramelized sugar",
      price: "$14",
      image: ""
    },
    {
      name: "Tiramisu",
      description: "Traditional Italian dessert with espresso and mascarpone",
      price: "$15",
      image: ""
    }
  ]
};

function MenuSection({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-serif mb-6 text-amber-700">{title}</h3>
      <div className="grid gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            {item.image && (
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <span className="text-amber-700 ml-4">{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated dishes featuring the finest seasonal ingredients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <MenuSection title="Starters" items={menuItems.starters} />
          <MenuSection title="Main Courses" items={menuItems.mains} />
          <MenuSection title="Desserts" items={menuItems.desserts} />
        </div>
      </div>
    </section>
  );
}
