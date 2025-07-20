import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setIsFormOpen(false);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Scissors" size={24} className="text-gold" />
            <span className="text-2xl font-playfair font-bold">КУЛЬТРА</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="font-lato hover:text-gold transition-colors">Услуги</a>
            <a href="#about" className="font-lato hover:text-gold transition-colors">О нас</a>
            <a href="#gallery" className="font-lato hover:text-gold transition-colors">Галерея</a>
            <a href="#contact" className="font-lato hover:text-gold transition-colors">Контакты</a>
          </div>
          
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gold hover:bg-gold/90 text-black font-semibold">
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white font-playfair">Записаться на консультацию</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Оставьте заявку и мы свяжемся с вами для уточнения деталей
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-gray-800 border-gray-600 text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-gray-800 border-gray-600 text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white">Интересующая услуга</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="wedding-dress">Свадебное платье</option>
                    <option value="evening-dress">Вечернее платье</option>
                    <option value="tailoring">Пошив на заказ</option>
                    <option value="alteration">Ремонт/подгонка</option>
                    <option value="consultation">Консультация</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-gray-800 border-gray-600 text-white"
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-black font-semibold">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1594736797933-d0402e7091bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")',
          }}
        ></div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            Ателье & Свадебный салон
            <span className="block text-gold">КУЛЬТРА</span>
          </h1>
          <p className="text-xl md:text-2xl font-lato mb-8 text-gray-200">
            Пошив на заказ и свадебные платья мечты
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Badge variant="secondary" className="bg-gold/20 text-gold border-gold">
              <Icon name="Scissors" size={16} className="mr-2" />
              Пошив на заказ
            </Badge>
            <Badge variant="secondary" className="bg-gold/20 text-gold border-gold">
              <Icon name="Heart" size={16} className="mr-2" />
              Свадебные платья
            </Badge>
            <Badge variant="secondary" className="bg-gold/20 text-gold border-gold">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Премиум качество
            </Badge>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold" onClick={() => setIsFormOpen(true)}>
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <a href="#gallery">Посмотреть работы</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-black mb-4">Наши услуги</h2>
            <p className="text-gray-600 font-lato max-w-2xl mx-auto">
              Два направления в одном месте: ателье индивидуального пошива и свадебный салон
            </p>
          </div>
          
          {/* Atelier Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-playfair font-bold text-center mb-8 text-black">
              <Icon name="Scissors" size={24} className="inline mr-2 text-gold" />
              Ателье — Пошив на заказ
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shirt" size={28} className="text-gold" />
                  </div>
                  <CardTitle className="font-playfair">Повседневная одежда</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-lato">Платья, костюмы, блузки и другая одежда для повседневной носки</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Sparkles" size={28} className="text-gold" />
                  </div>
                  <CardTitle className="font-playfair">Вечерние наряды</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-lato">Элегантные платья для торжественных мероприятий и особых случаев</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Settings" size={28} className="text-gold" />
                  </div>
                  <CardTitle className="font-playfair">Ремонт и подгонка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-lato">Подгонка по фигуре, укорачивание, замена фурнитуры</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Wedding Services */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-center mb-8 text-black">
              <Icon name="Heart" size={24} className="inline mr-2 text-gold" />
              Свадебный салон
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Crown" size={28} className="text-gold" />
                  </div>
                  <CardTitle className="font-playfair">Свадебные платья</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-lato">Индивидуальный пошив свадебных платьев по эксклюзивным эскизам</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={28} className="text-gold" />
                  </div>
                  <CardTitle className="font-playfair">Наряды для гостей</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-lato">Элегантные платья для мам молодоженов и гостей торжества</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Package" size={28} className="text-gold" />
                  </div>
                  <CardTitle className="font-playfair">Свадебные аксессуары</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-lato">Фата, перчатки, накидки и другие аксессуары для невесты</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6">О КУЛЬТРЕ</h2>
              <p className="text-gray-300 font-lato mb-6 leading-relaxed">
                КУЛЬТРА — это уникальное сочетание ателье индивидуального пошива и свадебного салона. 
                Более 15 лет мы создаем неповторимые образы для повседневной жизни и самых важных моментов.
              </p>
              <p className="text-gray-300 font-lato mb-6 leading-relaxed">
                Наши мастера — это команда профессионалов с многолетним опытом, которые воплощают в жизнь 
                ваши мечты об идеальном наряде. От повседневного платья до свадебного платья мечты.
              </p>
              <p className="text-gray-300 font-lato mb-8 leading-relaxed">
                Мы гордимся тем, что каждое изделие создается индивидуально, с учетом ваших пожеланий, 
                особенностей фигуры и стиля жизни.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-playfair font-bold text-gold mb-2">800+</div>
                  <div className="text-gray-400 font-lato text-sm">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-playfair font-bold text-gold mb-2">15</div>
                  <div className="text-gray-400 font-lato text-sm">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-playfair font-bold text-gold mb-2">200+</div>
                  <div className="text-gray-400 font-lato text-sm">Свадебных платьев</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Мастерская КУЛЬТРА" 
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-black mb-4">Галерея работ</h2>
            <p className="text-gray-600 font-lato max-w-2xl mx-auto">
              От повседневных нарядов до свадебных платьев — каждое изделие создано с особой любовью
            </p>
          </div>
          
          {/* Wedding Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-playfair font-bold text-center mb-8 text-black">
              Свадебные платья
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group cursor-pointer relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0402e7091bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Классическое свадебное платье" 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-playfair font-semibold">Классическое А-силуэт</p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Кружевное свадебное платье" 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-playfair font-semibold">Кружевное платье</p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Минималистичное свадебное платье" 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-playfair font-semibold">Минималистичный стиль</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Atelier Gallery */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-center mb-8 text-black">
              Пошив на заказ
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group cursor-pointer relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1566479179817-763e8eade0f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Вечернее платье" 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-playfair font-semibold">Вечернее платье</p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Деловой костюм" 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-playfair font-semibold">Деловой костюм</p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1566150902-4c2d2b3c91a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Повседневное платье" 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-playfair font-semibold">Повседневный стиль</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-300 font-lato max-w-2xl mx-auto">
              Готовы воплотить ваши мечты в реальность? Запишитесь на консультацию
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={20} className="text-gold" />
                  <div>
                    <p className="font-lato text-gray-300">г. Москва, ул. Примерная, д. 123</p>
                    <p className="font-lato text-gray-400 text-sm">метро Центральная</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={20} className="text-gold" />
                  <div>
                    <p className="font-lato text-gray-300">+7 (123) 456-78-90</p>
                    <p className="font-lato text-gray-400 text-sm">ежедневно с 10:00 до 20:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={20} className="text-gold" />
                  <p className="font-lato text-gray-300">info@kultura-atelier.ru</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-playfair font-semibold mb-4">Режим работы</h4>
                <div className="space-y-2 font-lato text-gray-300">
                  <p>Понедельник - Пятница: 10:00 - 20:00</p>
                  <p>Суббота: 10:00 - 18:00</p>
                  <p>Воскресенье: 12:00 - 17:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-playfair font-bold mb-6">Записаться на консультацию</h3>
              <Button 
                className="w-full bg-gold hover:bg-gold/90 text-black font-semibold mb-4"
                onClick={() => setIsFormOpen(true)}
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Оставить заявку
              </Button>
              <p className="text-gray-400 font-lato text-sm text-center">
                Консультация бесплатно • Индивидуальный подход • Гарантия качества
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scissors" size={24} className="text-gold" />
                <h3 className="text-xl font-playfair font-bold">КУЛЬТРА</h3>
              </div>
              <p className="text-gray-400 font-lato">
                Ателье индивидуального пошива и свадебный салон — создаем уникальные образы для особых моментов вашей жизни
              </p>
            </div>
            
            <div>
              <h4 className="font-playfair font-semibold mb-4">Услуги ателье</h4>
              <ul className="space-y-2 font-lato text-gray-400">
                <li><a href="#" className="hover:text-gold transition-colors">Повседневная одежда</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Вечерние платья</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Деловые костюмы</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Ремонт и подгонка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-semibold mb-4">Свадебный салон</h4>
              <ul className="space-y-2 font-lato text-gray-400">
                <li><a href="#" className="hover:text-gold transition-colors">Свадебные платья</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Наряды для мам</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Платья для гостей</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Аксессуары</a></li>
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
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-lato">
              © 2024 Ателье и свадебный салон КУЛЬТРА. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;