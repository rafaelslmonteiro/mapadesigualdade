import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users } from 'lucide-react'

export default function SobreOsIndicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">Sobre os Índices de Desigualdade de Gênero</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-semibold text-blue-800">INDG</CardTitle>
              <BarChart className="h-8 w-8 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 px-6 pb-6">
            <h3 className="text-xl font-bold text-blue-900">
              Índice Nacional de Desigualdade de Gênero
            </h3>
            <p className="text-blue-800 leading-relaxed">
              Proposto por Cardoso (2012), o INDG mede as disparidades de gênero entre os estados brasileiros, considerando economia, educação, política e saúde.
            </p>
            <h4 className="text-lg font-semibold text-blue-900">Áreas analisadas:</h4>
            <ul className="list-disc pl-5 text-blue-800">
              <li>Economia: Participação no mercado de trabalho, rendimentos e acesso a recursos econômicos.</li>
              <li>Educação: Níveis de escolaridade, acesso à educação e taxas de alfabetização.</li>
              <li>Política: Representação feminina em cargos eletivos e posições de liderança.</li>
              <li>Saúde: Expectativa de vida, saúde reprodutiva e acesso a serviços de saúde.</li>
            </ul>
            <h4 className="text-lg font-semibold text-blue-900">Dados Utilizados:</h4>
            <ul className="list-disc pl-5 text-blue-800">
              <li>PNAD 2009: Pesquisa Nacional por Amostra de Domicílios realizada pelo IBGE</li>
              <li>IBGE - Síntese de Indicadores Sociais 2010</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-blue-900">Referência:</h4>
              <p className="text-blue-800">
                Cardoso, L. A. (2012). A mensuração da desigualdade de gênero: Um Índice para os estados brasileiros. In: XIX Prêmio Corecon-DF de Economia, Brasília, p. 225–285. ISSN 2179-4979.
              </p>
              <a href="https://www.corecondf.org.br/wp-content/uploads/2021/09/XIX-Premio-Corecon-DF-de-Economia-2012.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Disponível em PDF
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-semibold text-purple-800">IMDG</CardTitle>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 px-6 pb-6">
            <h3 className="text-xl font-bold text-purple-900">
              Índice de Medição da Desigualdade de Gênero
            </h3>
            <p className="text-purple-800 leading-relaxed">
              Desenvolvido por Lima et al. (2015), o IMDG aprofunda a análise das desigualdades de gênero com uma abordagem espacial, identificando padrões regionais e locais.
            </p>
            <h4 className="text-lg font-semibold text-purple-900">Dimensões consideradas:</h4>
            <ul className="list-disc pl-5 text-purple-800">
              <li>Educação: Taxas de alfabetização e níveis de instrução.</li>
              <li>Mercado de Trabalho: Participação feminina na força de trabalho e diferenças salariais.</li>
              <li>Rendimento: Disparidades nos ganhos financeiros entre homens e mulheres.</li>
              <li>Participação Política: Presença de mulheres em cargos políticos e posições decisórias.</li>
            </ul>
            <h4 className="text-lg font-semibold text-purple-900">Dados Utilizados:</h4>
            <ul className="list-disc pl-5 text-purple-800">
              <li>PNAD 2009: Pesquisa Nacional por Amostra de Domicílios realizada pelo IBGE</li>
              <li>IBGE - Censo Demográfico 2010</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-purple-900">Referência:</h4>
              <p className="text-purple-800">
                Lima, P. V. P. S., Freire, F. S., & Almeida, M. E. B. (2015). Distribuição espacial da desigualdade de gênero no Brasil. INTERthesis: Revista Internacional Interdisciplinar, 12(1), 292-320.
              </p>
              <a href="https://periodicos.ufsc.br/index.php/interthesis/article/view/1807-1384.2015v12n1p292" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                Acesso ao artigo
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

