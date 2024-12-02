import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, BookOpen, Link } from 'lucide-react'

const teamMembers = [
  {
    name: 'Ana Carolina Cebin Pereira',
    image: '/Ana.png',
    education: 'Formada em Sistemas de Informação com pós-graduação em Gestão de Produtos',
    occupation: 'Product Manager na EASYB2B',
    research: 'Marketplaces B2B e B2C, metodologias ágeis, transformação digital',
    bio: 'Como Product Manager na EASYB2B, minha jornada envolve colaboração com equipes diversificadas onde emprego minha visão estratégica e experiência em metodologias ágeis para entregar soluções inovadoras e de alto valor. Possuo expertise em Marketplaces B2B e B2C, respaldada por formação em Sistemas de Informação e uma pós-graduação em Gestão de Produtos. Essa combinação me proporciona uma visão completa e criativa das oportunidades e desafios no mercado de produtos digitais. Meu propósito é impulsionar a transformação digital em diversos setores, usando a inovação e a tecnologia para gerar impacto positivo. Sou entusiasta do aprendizado contínuo, da colaboração e da troca de conhecimento, sempre em busca de novos desafios para meu crescimento profissional.',
    lattes: 'https://www.linkedin.com/in/ana-carolina-cebin-pereira-223883169/',
},
  {
    name: 'Izabela Dolores Cebin Bassani',
    image: '/Izabela.jpeg',
    education: 'Doutora em Geografia pela Universidade Federal do Espírito Santo (2020)',
    occupation: 'Professora efetiva na Secretaria de Estado da Educação do Espírito Santo',
    research: 'Geografia Urbana, reestruturação imobiliária, centro-periferia, condomínios industriais, loteamento urbano e renda da terra',
    bio: 'Possui graduação em Geografia pela Universidade Federal do Espírito Santo (2013), mestrado em Geografia pela mesma instituição (2016) e doutorado em Geografia pela Universidade Federal do Espírito Santo (2020). Atualmente é professor efetivo na Secretaria de Estado da Educação do Espírito Santo. Tem experiência na área de Geografia, com ênfase em Geografia Urbana, atuando principalmente nos seguintes temas: reestruturação imobiliária, centro-periferia, condomínios industriais, loteamento urbano e renda da terra.',
    lattes: 'http://lattes.cnpq.br/1234567890',
  },
  {
    name: 'Rafael Santos da Luz Monteiro',
    image: '/Rafa.jpg',
    education: 'Doutor em Geografia pela Universidade Federal do Espírito Santo',
    occupation: 'Professor efetivo da rede estadual de Ensino Médio no estado do Espírito Santo',
    research: 'Geografia Urbana, Produção Imobiliária, Renda da Terra e Financeirização do Capital',
    bio: 'Licenciado pleno em Geografia pela UFES em 2008. Professor do quadro efetivo da rede estadual de Ensino Médio no estado do Espírito Santo desde agosto de 2009. Mestre em Geografia pelo PPGG/UFES. Doutor em Geografia na área de Produção Imobiliária pelo PPGG/UFES. Áreas de interesse: Geografia Urbana, Produção Imobiliária, Renda da Terra e Financeirização do Capital.',
    lattes: 'http://lattes.cnpq.br/0987654321',
  },
]
export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre o Projeto</h1>
      
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Mapa de Desigualdade de Gênero no Brasil</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              O projeto "Mapa de Desigualdade de Gênero no Brasil" visa apresentar de forma visual e interativa os índices de desigualdade de gênero em diferentes estados brasileiros. Utilizando o Índice Nacional de Desigualdade de Gênero (INDG) e o Índice Multidimensional de Desigualdade de Gênero (IMDG), este projeto busca facilitar a compreensão das disparidades de gênero existentes no país, fornecendo uma ferramenta valiosa para pesquisadores, formuladores de políticas e o público em geral.
            </p>
          </CardContent>
        </Card>
      </section>

      <h2 className="text-3xl font-bold mb-6">Equipe do Projeto</h2>
      
      {teamMembers.map((member, index) => (
        <section key={index} className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={100} 
                  height={100} 
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.occupation}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  <p>{member.education}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                  <p>{member.occupation}</p>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <p>{member.research}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Biografia</h4>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link className="h-5 w-5 text-muted-foreground" />
                  <a href={member.lattes} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Currículo Lattes
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}
    </div>
  )
}

