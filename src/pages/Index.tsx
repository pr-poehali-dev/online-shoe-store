import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Urban Classic",
      price: "8 490 ₽",
      originalPrice: "12 990 ₽",
      image: "/img/90b51782-6fb5-45ae-a41a-0d2fd6b4c52b.jpg",
      category: "Кроссовки",
      discount: "-35%"
    },
    {
      id: 2,
      name: "Premium Leather",
      price: "15 990 ₽",
      originalPrice: "",
      image: "/img/0becdce9-0dfe-4b57-831b-cd709ead95b0.jpg",
      category: "Ботинки",
      discount: ""
    },
    {
      id: 3,
      name: "Sport Elite",
      price: "6 990 ₽",
      originalPrice: "9 990 ₽",
      image: "/img/f7e90d0f-466d-4e32-9d41-4e1fd31d1ba5.jpg",
      category: "Кроссовки",
      discount: "-30%"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">SHOE STORE</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Мужская</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Женская</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Детская</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Распродажа</a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Поиск обуви..." 
                className="w-64 pl-10 border-gray-200"
              />
            </div>
            
            <Button variant="ghost" size="icon">
              <Icon name="Heart" className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingBag" className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent">3</Badge>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-white py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent text-white font-medium px-4 py-2">Новая коллекция 2025</Badge>
              <h1 className="text-6xl font-bold tracking-tight leading-tight">
                Стиль.<br />
                Комфорт.<br />
                <span className="text-accent">Качество.</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-md">
              Откройте для себя идеальную пару обуви для каждого случая. 
              Премиальное качество по доступным ценам.
            </p>
            
            <div className="flex space-x-4">
              <Button className="bg-primary text-white px-8 py-3 text-lg font-medium hover:bg-primary/90">
                Купить сейчас
              </Button>
              <Button variant="outline" className="px-8 py-3 text-lg font-medium border-2">
                Смотреть каталог
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full transform rotate-12"></div>
            <img 
              src="/img/90b51782-6fb5-45ae-a41a-0d2fd6b4c52b.jpg" 
              alt="Hero shoe"
              className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <Icon name="Zap" className="h-16 w-16 text-blue-500 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-bold text-lg text-gray-900">Кроссовки</h3>
                    <p className="text-sm text-gray-600">От 4 990 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <Icon name="Shield" className="h-16 w-16 text-gray-700 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-bold text-lg text-gray-900">Ботинки</h3>
                    <p className="text-sm text-gray-600">От 8 990 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center">
                  <Icon name="Star" className="h-16 w-16 text-accent group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-bold text-lg text-gray-900">Премиум</h3>
                    <p className="text-sm text-gray-600">От 12 990 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Хиты продаж</h2>
            <Button variant="outline">Смотреть все</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gray-50 rounded-t-lg">
                    {product.discount && (
                      <Badge className="absolute top-4 left-4 z-10 bg-accent text-white">
                        {product.discount}
                      </Badge>
                    )}
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
                    >
                      <Icon name="Heart" className="h-4 w-4" />
                    </Button>
                    
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {product.category}
                      </Badge>
                      <h3 className="font-bold text-lg">{product.name}</h3>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-xl">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Добавить в корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Будьте в курсе новинок</h2>
            <p className="text-gray-400 text-lg">
              Подпишитесь на нашу рассылку и получайте информацию о скидках и новых коллекциях
            </p>
          </div>
          
          <div className="flex max-w-md mx-auto space-x-4">
            <Input 
              placeholder="Ваш email" 
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-accent hover:bg-accent/90 px-8">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-xl font-bold">SHOE STORE</div>
            <p className="text-gray-600 text-sm">
              Качественная обувь для современных людей. Стиль и комфорт в каждой паре.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Каталог</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Мужская обувь</p>
              <p>Женская обувь</p>
              <p>Детская обувь</p>
              <p>Аксессуары</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Помощь</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Доставка и оплата</p>
              <p>Возврат товара</p>
              <p>Размерная сетка</p>
              <p>Контакты</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>8 800 123 45 67</p>
              <p>info@shoestore.ru</p>
              <p>Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>© 2025 Shoe Store. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}