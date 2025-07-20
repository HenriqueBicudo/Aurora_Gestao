# Aurora Gestão - Landing Page

Uma landing page moderna e responsiva para a Aurora Gestão Condominial e Contábil, construída com React, TypeScript, Tailwind CSS e Shadcn/ui.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Modo Escuro/Claro**: Alternância entre temas com persistência local
- **Componentes Reutilizáveis**: Baseados em Shadcn/ui
- **Tipagem TypeScript**: Código tipado para maior robustez
- **Performance Otimizada**: Construído com Vite para desenvolvimento rápido

## 🛠️ Tecnologias Utilizadas

- **React 19**: Biblioteca de interface de usuário
- **TypeScript**: Superset tipado do JavaScript
- **Tailwind CSS**: Framework de CSS utilitário
- **Shadcn/ui**: Biblioteca de componentes acessíveis
- **Lucide React**: Ícones modernos e customizáveis
- **Vite**: Ferramenta de build rápida

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd aurora
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                 # Componentes base do Shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── theme-provider.tsx  # Provedor de tema
│   └── theme-toggle.tsx    # Botão de alternância de tema
├── lib/
│   └── utils.ts           # Utilidades (cn function)
├── App.tsx                # Componente principal
├── main.tsx              # Ponto de entrada
└── index.css             # Estilos globais e variáveis CSS

```

## 🎨 Design System

### Cores Primárias
- **Amarelo Aurora**: `#e58200` - Cor principal da marca
- **Tons de Amarelo**: Variações de 50 a 950 definidas no Tailwind

### Temas
- **Claro**: Fundo branco com texto escuro
- **Escuro**: Fundo escuro com texto claro
- **Sistema**: Segue a preferência do sistema operacional

## 📱 Seções da Landing Page

1. **Header**: Navegação com logo, menu e botão de tema
2. **Hero**: Título principal, descrição e call-to-actions
3. **Serviços**: Cards com os principais serviços oferecidos
4. **Sobre**: Benefícios e diferenciais da Aurora
5. **Depoimentos**: Avaliações de clientes satisfeitos
6. **Contato**: Informações de contato e formulário
7. **Footer**: Links úteis e informações da empresa

## 🔧 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Constrói a versão de produção
- `npm run preview`: Visualiza a versão de produção
- `npm run lint`: Executa o linter

## 📦 Construção para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

Aurora Gestão Condominial e Contábil
- Email: administrativo@auroragestao.com.br
- Website: [auroragestao.com.br](https://auroragestao.com.br)
