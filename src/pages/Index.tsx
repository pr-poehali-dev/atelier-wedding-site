import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Scissors" size={24} className="text-gold" />
              <h1 className="text-2xl font-playfair font-bold text-charcoal">КУЛЬТРА</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8 font-lato">
              <a href="#services" className="text-charcoal hover:text-gold transition-colors">Услуги</a>
              <a href="#portfolio" className="text-charcoal hover:text-gold transition-colors">Портфолио</a>
              <a href="#wedding" className="text-charcoal hover:text-gold transition-colors">Свадебные платья</a>
              <a href="#custom" className="text-charcoal hover:text-gold transition-colors">Пошив на заказ</a>
              <a href="#prices" className="text-charcoal hover:text-gold transition-colors">Цены</a>
              <a href="#contact" className="text-charcoal hover:text-gold transition-colors">Контакты</a>
            </div>
            <Button className="bg-gold hover:bg-gold/90 text-white font-lato">
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">Свадебный салон</Badge>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight">
                Ваш стиль,<br />
                <span className="text-gold">наше мастерство</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-lato leading-relaxed">
                Свадебный салон КУЛЬТРА с более чем 15-летним опытом. 
                Создаем уникальные образы для особых моментов вашей жизни.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-white font-lato">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на примерку
                </Button>
                <Button size="lg" variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-lato">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть портфолио
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 rounded-3xl transform rotate-3"></div>
              <img 
                src="/img/f04dcf3d-b2b3-45ff-a417-cdbba38565fe.jpg" 
                alt="Свадебное платье" 
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 font-lato max-w-2xl mx-auto">
              Полный спектр услуг от консультации до создания уникального образа
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon name="Sparkles" size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">Свадебные платья</h3>
                <p className="text-gray-600 font-lato mb-6">Эксклюзивная коллекция и индивидуальный пошив свадебных платьев</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon name="Scissors" size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">Пошив на заказ</h3>
                <p className="text-gray-600 font-lato mb-6">Индивидуальное создание одежды по вашим меркам и пожеланиям</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon name="Shirt" size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">Ремонт одежды</h3>
                <p className="text-gray-600 font-lato mb-6">Профессиональная подгонка, ремонт и реставрация одежды</p>
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600 font-lato max-w-2xl mx-auto">
              Каждая работа — это история успеха и воплощение мечты наших клиентов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group overflow-hidden border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/f04dcf3d-b2b3-45ff-a417-cdbba38565fe.jpg" 
                    alt={`Работа ${item}`} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <Button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-charcoal hover:bg-gold hover:text-white">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Смотреть
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-charcoal mb-2">Свадебное платье {item}</h3>
                  <p className="text-gray-600 font-lato text-sm">Индивидуальный пошив, шелк и кружево</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">Мастерская</Badge>
              <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">Традиции и инновации</h2>
              <p className="text-lg text-gray-600 mb-6 font-lato leading-relaxed">
                В нашей мастерской традиционные техники пошива сочетаются с современными технологиями. 
                Каждое изделие создается с особым вниманием к деталям.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-gold mr-3" />
                  <span className="font-lato text-charcoal">Более 15 лет опыта</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-gold mr-3" />
                  <span className="font-lato text-charcoal">Индивидуальный подход</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-gold mr-3" />
                  <span className="font-lato text-charcoal">Качественные материалы</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/1bae1dd7-d5c3-4553-97d1-e310ab59f843.jpg" 
                alt="Мастерская" 
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">Запись на консультацию</h2>
              <p className="text-xl text-gray-600 font-lato">
                Оставьте заявку, и мы свяжемся с вами для назначения удобного времени
              </p>
            </div>
            
            <Card className="border-gray-100 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-6">Онлайн запись</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-lato font-medium text-charcoal mb-2">Ваше имя</label>
                        <Input placeholder="Введите ваше имя" className="border-gray-200 focus:border-gold" />
                      </div>
                      <div>
                        <label className="block text-sm font-lato font-medium text-charcoal mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" className="border-gray-200 focus:border-gold" />
                      </div>
                      <div>
                        <label className="block text-sm font-lato font-medium text-charcoal mb-2">Услуга</label>
                        <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                          <option>Выберите услугу</option>
                          <option>Свадебное платье</option>
                          <option>Пошив на заказ</option>
                          <option>Ремонт одежды</option>
                          <option>Консультация</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-lato font-medium text-charcoal mb-2">Комментарий</label>
                        <Textarea placeholder="Расскажите о ваших пожеланиях..." className="border-gray-200 focus:border-gold" />
                      </div>
                      <Button className="w-full bg-gold hover:bg-gold/90 text-white font-lato">
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить заявку
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-6">Контакты</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Icon name="MapPin" size={20} className="text-gold mr-3 mt-1" />
                        <div>
                          <p className="font-lato font-medium text-charcoal">Адрес</p>
                          <p className="text-gray-600 font-lato">ул. Примерная, 123, Москва</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Phone" size={20} className="text-gold mr-3 mt-1" />
                        <div>
                          <p className="font-lato font-medium text-charcoal">Телефон</p>
                          <p className="text-gray-600 font-lato">+7 (495) 123-45-67</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Clock" size={20} className="text-gold mr-3 mt-1" />
                        <div>
                          <p className="font-lato font-medium text-charcoal">Время работы</p>
                          <p className="text-gray-600 font-lato">Пн-Пт: 10:00-19:00<br />Сб: 10:00-17:00</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="Mail" size={20} className="text-gold mr-3 mt-1" />
                        <div>
                          <p className="font-lato font-medium text-charcoal">Email</p>
                          <p className="text-gray-600 font-lato">info@kultura-salon.ru</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scissors" size={24} className="text-gold" />
                <h3 className="text-xl font-playfair font-bold">КУЛЬТРА</h3>
              </div>
              <p className="text-gray-400 font-lato">
                Создаем уникальные образы для особых моментов вашей жизни
              </p>
            </div>
            
            <div>
              <h4 className="font-playfair font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 font-lato text-gray-400">
                <li><a href="#" className="hover:text-gold transition-colors">Свадебные платья</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Пошив на заказ</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Ремонт одежды</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Консультация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 font-lato text-gray-400">
                <li><a href="#" className="hover:text-gold transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-lato">
              © 2024 Свадебный салон КУЛЬТРА. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;