import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Building2, 
  Calculator, 
  FileText, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Menu,
  X,
  Clock,
  Award,
  TrendingUp,
  Calendar,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  LogIn,
  MessageCircle
} from "lucide-react"
import { useState, useEffect } from "react"

interface BlogPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  link: string;
  content: {
    rendered: string;
  };
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [currentTab, setCurrentTab] = useState<'home' | 'blog-post'>('home')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  // Função para buscar posts da API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://auroragestao.com.br/wp-json/wp/v2/posts')
        const posts = await response.json()
        setBlogPosts(posts)
      } catch (error) {
        console.error('Erro ao buscar posts:', error)
        // Em caso de erro, usar dados estáticos como fallback
        setBlogPosts([
          {
            id: 1,
            title: { rendered: "Como reduzir custos em seu condomínio" },
            excerpt: { rendered: "Descubra estratégias eficazes para otimizar gastos e manter a qualidade dos serviços no seu condomínio." },
            date: "2024-03-15T10:00:00",
            link: "#",
            content: { rendered: "" }
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Função para limpar HTML tags do excerpt
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  // Função para formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Função para navegar para uma notícia específica
  const openPost = (post: BlogPost) => {
    setSelectedPost(post)
    setCurrentTab('blog-post')
  }

  // Função para voltar para a home
  const goToHome = () => {
    setCurrentTab('home')
    setSelectedPost(null)
  }

  // Função para enviar mensagem via WhatsApp
  const handleSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const nome = formData.get('nome') as string
    const email = formData.get('email') as string
    const telefone = formData.get('telefone') as string
    const mensagem = formData.get('mensagem') as string
    
    // Validação básica
    if (!nome || !email || !telefone || !mensagem) {
      alert('Por favor, preencha todos os campos.')
      return
    }
    
    // Template da mensagem para WhatsApp
    const template = `*Solicitação de Orçamento - Aurora Gestão*

📋 *Dados do Cliente:*
• Nome: ${nome}
• Email: ${email}
• Telefone: ${telefone}

💬 *Mensagem:*
${mensagem}

_Mensagem enviada através do site Aurora Gestão_`
    
    // Codificar a mensagem para URL
    const mensagemCodificada = encodeURIComponent(template)
    
    // Número do WhatsApp (sem símbolos, apenas números)
    const numeroWhatsapp = '5541991567448'
    
    // URL da API do WhatsApp
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`
    
    // Abrir WhatsApp em nova aba
    window.open(urlWhatsapp, '_blank')
  }

  const services = [
    {
      icon: Building2,
      title: "Gestão Condominial",
      description: "Administração completa do seu condomínio com transparência e eficiência total."
    },
    {
      icon: Calculator,
      title: "Gestão Contábil", 
      description: "Serviços contábeis especializados para condomínios e empresas com precisão."
    },
    {
      icon: FileText,
      title: "Relatórios Financeiros",
      description: "Relatórios detalhados e transparentes sobre as finanças do seu condomínio."
    },
    {
      icon: Shield,
      title: "Segurança Jurídica",
      description: "Assessoria jurídica especializada em direito condominial e empresarial."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado", 
      description: "Equipe dedicada para atender às necessidades específicas do seu condomínio."
    },
    {
      icon: TrendingUp,
      title: "Consultoria Estratégica",
      description: "Análise e otimização de processos para melhor gestão e redução de custos."
    }
  ]

  const features = [
    {
      icon: CheckCircle,
      title: "Transparência Total",
      description: "Acesso completo a relatórios e demonstrativos financeiros com clareza absoluta."
    },
    {
      icon: Award,
      title: "Excelência Comprovada",
      description: "Anos de experiência e resultados excepcionais na gestão condominial."
    },
    {
      icon: Clock,
      title: "Disponibilidade Garantida",
      description: "Atendimento rápido e eficiente sempre que você precisar."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {currentTab === 'home' && (
        <>
          {/* Header */}
          <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-yellow-400 flex items-center justify-center">
                    <img src="/Logo.png" alt="Logo" className="h-8 w-8 rounded-lg" />
                  </div>
                  <span className="text-xl font-bold text-yellow-400">Aurora Gestão</span>
                </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors">Início</a>
              <a href="#services" className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors">Serviços</a>
              <a href="#about" className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors">Sobre</a>
              <a href="#blog" className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors">Blog</a>
              <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors">Contato</a>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="outline" className="hidden md:inline-flex border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                <LogIn className="h-4 w-4 mr-2" />
                Área do Cliente
              </Button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-300 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-slate-900 border-t border-slate-700">
              <a href="#home" className="block py-2 text-sm font-medium text-gray-300 hover:text-yellow-400">Início</a>
              <a href="#services" className="block py-2 text-sm font-medium text-gray-300 hover:text-yellow-400">Serviços</a>
              <a href="#about" className="block py-2 text-sm font-medium text-gray-300 hover:text-yellow-400">Sobre</a>
              <a href="#blog" className="block py-2 text-sm font-medium text-gray-300 hover:text-yellow-400">Blog</a>
              <a href="#contact" className="block py-2 text-sm font-medium text-gray-300 hover:text-yellow-400">Contato</a>
              <Button size="sm" variant="outline" className="w-full mt-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                <LogIn className="h-4 w-4 mr-2" />
                Área do Cliente
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('/bg-home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-yellow-400">Modernidade</span> e{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Confiança</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
            você encontra na Aurora Gestão e Contabilidade
          </p>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Especialistas em gestão condominial e contábil com soluções modernas e personalizadas para o seu condomínio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 shadow-md">
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Nossos <span className="text-yellow-400">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluções completas em gestão condominial e contábil para sua tranquilidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 border-gray-700 hover:border-yellow-400/50 bg-slate-900/50 backdrop-blur">
                <CardHeader>
                  <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg w-fit mb-4 group-hover:from-yellow-400/30 group-hover:to-yellow-500/30 transition-colors shadow-sm border border-yellow-400/30">
                    <service.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl text-yellow-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Sobre a <span className="text-yellow-400">Aurora</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Com anos de experiência no mercado, oferecemos serviços de gestão condominial e contábil 
                com modernidade, confiança e total transparência. Nossa equipe especializada garante 
                eficiência em todos os aspectos da administração.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg shadow-sm border border-yellow-400/30">
                      <feature.icon className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-yellow-300">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-yellow-400/10 via-yellow-500/10 to-yellow-600/10 rounded-2xl flex items-center justify-center shadow-lg border border-yellow-400/20">
                <img src="/Escritorio.png" alt="Escritório Aurora" className="object-cover rounded-2xl w-full h-full" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-yellow-400">Blog</span> e Artigos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mantenha-se atualizado com as últimas novidades, dicas e tendências do mercado condominial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="overflow-hidden bg-slate-900/50 backdrop-blur border-gray-700">
                  <div className="aspect-video bg-gray-700 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2 animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              blogPosts.slice(0, 6).map((post) => (
                <Card key={post.id} className="group hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 overflow-hidden bg-slate-900/50 backdrop-blur border-gray-700">
                  <div className="aspect-video bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 flex items-center justify-center border-b border-gray-700">
                    <BookOpen className="h-16 w-16 text-yellow-400/70" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 text-yellow-400 rounded-full shadow-sm border border-yellow-400/30">
                        Blog
                      </span>
                      <span className="text-xs text-gray-400 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        5 min
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-yellow-300 group-hover:text-yellow-400 transition-colors line-clamp-2">
                      {stripHtml(post.title.rendered)}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-yellow-400 hover:text-yellow-300 p-0 h-auto hover:bg-yellow-400/10"
                        onClick={() => openPost(post)}
                      >
                        Ler mais
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-700">
                      <p className="text-xs text-gray-400">Por Aurora Gestão</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 shadow-md">
              Ver todos os artigos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Entre em <span className="text-yellow-400">Contato</span>
            </h2>
            <p className="text-xl text-gray-300">
              Estamos prontos para atender você
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Fale Conosco</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg shadow-sm border border-yellow-400/30">
                    <Mail className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-300">Email</p>
                    <p className="text-gray-300">administrativo@auroragestao.com.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg shadow-sm border border-yellow-400/30">
                    <Phone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-300">Telefone</p>
                    <p className="text-gray-300">(043) 3367-4371</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg shadow-sm border border-yellow-400/30">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-300">Localização</p>
                    <a 
                      href="https://www.google.com/maps/place/Aurora+gest%C3%A3o+condominial+e+cont%C3%A1bil/@-23.3106773,-51.1581308,17.75z/data=!4m6!3m5!1s0x94eb4323fc15e525:0xbf105e7eb1e57f2f!8m2!3d-23.311439!4d-51.1574172!16s%2Fg%2F11q95kvzk7?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-yellow-400 transition-colors underline"
                    >
                      Londrina, PR - Ver no Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-gray-700 bg-slate-900/50 backdrop-blur shadow-lg">
              <CardHeader>
                <CardTitle className="text-yellow-300">Solicite um Orçamento</CardTitle>
                <CardDescription className="text-gray-300">
                  Preencha o formulário e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmitContact}>
                  <div>
                    <label className="text-sm font-medium text-yellow-300">Nome</label>
                    <Input
                      type="text"
                      name="nome"
                      required
                      className="mt-1 border-gray-600 focus:border-yellow-400 bg-slate-800 text-white placeholder:text-gray-400"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-yellow-300">Email</label>
                    <Input
                      type="email"
                      name="email"
                      required
                      className="mt-1 border-gray-600 focus:border-yellow-400 bg-slate-800 text-white placeholder:text-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-yellow-300">Telefone</label>
                    <Input
                      type="tel"
                      name="telefone"
                      required
                      className="mt-1 border-gray-600 focus:border-yellow-400 bg-slate-800 text-white placeholder:text-gray-400"
                      placeholder="(43) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-yellow-300">Mensagem</label>
                    <Textarea
                      name="mensagem"
                      required
                      className="mt-1 border-gray-600 focus:border-yellow-400 bg-slate-800 text-white placeholder:text-gray-400"
                      rows={4}
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-semibold shadow-lg shadow-yellow-400/25">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
            {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Aurora</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Soluções administrativas e financeiras para o crescimento do seu negócio.
              </p>
              <div className="flex space-x-4">
                <div className="p-2 bg-slate-800 rounded-lg hover:bg-yellow-400/20 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="p-2 bg-slate-800 rounded-lg hover:bg-yellow-400/20 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5 text-yellow-400" />
                </div>
                <a 
                  href="https://www.google.com/maps/place/Aurora+gest%C3%A3o+condominial+e+cont%C3%A1bil/@-23.3106773,-51.1581308,17.75z/data=!4m6!3m5!1s0x94eb4323fc15e525:0xbf105e7eb1e57f2f!8m2!3d-23.311439!4d-51.1574172!16s%2Fg%2F11q95kvzk7?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-yellow-400/20 transition-colors cursor-pointer"
                >
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Consultoria Financeira</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Gestão Administrativa</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Planejamento Estratégico</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Análise de Dados</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">Sobre</a></li>
                <li><a href="#blog" className="hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Carreiras</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Aurora Gestão. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
        </>
      )}

      {/* Página da Notícia */}
      {currentTab === 'blog-post' && selectedPost && (
        <div className="min-h-screen bg-slate-900">
          {/* Header simplificado para a página da notícia */}
          <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-yellow-400 flex items-center justify-center">
                    <img src="/Logo.png" alt="Logo" className="h-8 w-8 rounded-lg" />
                  </div>
                  <span className="text-xl font-bold text-yellow-400">Aurora Gestão</span>
                </div>

                {/* Botão Voltar */}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={goToHome}
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Site
                </Button>
              </div>
            </div>
          </header>

          {/* Conteúdo da Notícia */}
          <main className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <article className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                {/* Header do artigo */}
                <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 p-8 border-b border-slate-700">
                  <div className="flex items-center space-x-2 mb-4">
                    <BookOpen className="h-6 w-6 text-yellow-400" />
                    <span className="text-sm font-medium text-yellow-400">
                      Publicado em {formatDate(selectedPost.date)}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {stripHtml(selectedPost.title.rendered)}
                  </h1>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Por Aurora Gestão
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>5 min de leitura</span>
                    </div>
                  </div>
                </div>

                {/* Conteúdo do artigo */}
                <div className="p-8">
                  <div className="prose prose-invert prose-yellow max-w-none">
                    <div 
                      className="text-gray-300 leading-relaxed text-lg"
                      dangerouslySetInnerHTML={{ 
                        __html: selectedPost.content.rendered 
                      }}
                    />
                  </div>
                </div>

                {/* Footer do artigo */}
                <div className="bg-slate-900/50 p-6 border-t border-slate-700">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">
                        Gostou deste artigo? Compartilhe com seus amigos!
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                          Compartilhar
                        </Button>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={goToHome}
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Voltar ao Blog
                    </Button>
                  </div>
                </div>
              </article>

              {/* Navegação entre posts */}
              <div className="mt-8 flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    const currentIndex = blogPosts.findIndex(post => post.id === selectedPost.id);
                    if (currentIndex > 0) {
                      openPost(blogPosts[currentIndex - 1]);
                    }
                  }}
                  disabled={blogPosts.findIndex(post => post.id === selectedPost.id) === 0}
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 disabled:opacity-30"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Post Anterior
                </Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    const currentIndex = blogPosts.findIndex(post => post.id === selectedPost.id);
                    if (currentIndex < blogPosts.length - 1) {
                      openPost(blogPosts[currentIndex + 1]);
                    }
                  }}
                  disabled={blogPosts.findIndex(post => post.id === selectedPost.id) === blogPosts.length - 1}
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 disabled:opacity-30"
                >
                  Próximo Post
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}

export default App
