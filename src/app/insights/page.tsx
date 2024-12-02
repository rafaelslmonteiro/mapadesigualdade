"use client"

import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line, ScatterChart, Scatter, ZAxis, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, BarChart2, MapPin } from 'lucide-react'

const dados = [
  { id: "AC", nome: "Acre", INDG: 0.73953, IMDG: 0.0565 },
  { id: "AL", nome: "Alagoas", INDG: 0.70787, IMDG: 0.0976 },
  { id: "AP", nome: "Amapá", INDG: 0.75201, IMDG: 0.0373 },
  { id: "AM", nome: "Amazonas", INDG: 0.73265, IMDG: 0.0763 },
  { id: "BA", nome: "Bahia", INDG: 0.72288, IMDG: 0.0821 },
  { id: "CE", nome: "Ceará", INDG: 0.70627, IMDG: 0.0648 },
  { id: "DF", nome: "Distrito Federal", INDG: 0.71585, IMDG: 0.0608 },
  { id: "ES", nome: "Espírito Santo", INDG: 0.72649, IMDG: 0.0857 },
  { id: "GO", nome: "Goiás", INDG: 0.69616, IMDG: 0.1556 },
  { id: "MA", nome: "Maranhão", INDG: 0.76858, IMDG: 0.0809 },
  { id: "MT", nome: "Mato Grosso", INDG: 0.69300, IMDG: 0.0833 },
  { id: "MS", nome: "Mato Grosso do Sul", INDG: 0.72011, IMDG: 0.0771 },
  { id: "MG", nome: "Minas Gerais", INDG: 0.71342, IMDG: 0.1300 },
  { id: "PA", nome: "Pará", INDG: 0.72491, IMDG: 0.0689 },
  { id: "PB", nome: "Paraíba", INDG: 0.73621, IMDG: 0.0682 },
  { id: "PR", nome: "Paraná", INDG: 0.68193, IMDG: 0.1016 },
  { id: "PE", nome: "Pernambuco", INDG: 0.70733, IMDG: 0.1298 },
  { id: "PI", nome: "Piauí", INDG: 0.72375, IMDG: 0.0433 },
  { id: "RJ", nome: "Rio de Janeiro", INDG: 0.72770, IMDG: 0.0507 },
  { id: "RN", nome: "Rio Grande do Norte", INDG: 0.77953, IMDG: 0.0762 },
  { id: "RS", nome: "Rio Grande do Sul", INDG: 0.73836, IMDG: 0.0628 },
  { id: "RO", nome: "Rondônia", INDG: 0.72092, IMDG: 0.0735 },
  { id: "RR", nome: "Roraima", INDG: 0.77617, IMDG: 0.0893 },
  { id: "SC", nome: "Santa Catarina", INDG: 0.67630, IMDG: 0.0776 },
  { id: "SP", nome: "São Paulo", INDG: 0.71782, IMDG: 0.0859 },
  { id: "SE", nome: "Sergipe", INDG: 0.74184, IMDG: 0.0625 },
  { id: "TO", nome: "Tocantins", INDG: 0.72714, IMDG: 0.0585 }
]

const comparisonContent = `
## Análise Comparativa entre o INDG e o IMDG

### Correlação entre os Índices

- Coeficiente de Correlação de Pearson: Aproximadamente **-0,22**.
- Interpretação: Correlação negativa fraca, indicando que não há uma relação linear forte entre os dois índices.

### Estados com Discrepâncias Notáveis

#### Estados com Alto INDG e Baixo IMDG

- **Rio Grande do Norte (RN):** INDG 0,77953, IMDG 0,0762
- **Roraima (RR):** INDG 0,77617, IMDG 0,0893
- **Amapá (AP):** INDG 0,75201, IMDG 0,0373

#### Estados com Baixo INDG e Alto IMDG

- **Goiás (GO):** INDG 0,69616, IMDG 0,1556
- **Minas Gerais (MG):** INDG 0,71342, IMDG 0,1300
- **Paraná (PR):** INDG 0,68193, IMDG 0,1016

### Conclusão Geral

- O INDG sugere menor desigualdade de gênero nos estados do Norte e Nordeste.
- O IMDG mostra uma distribuição menos regionalizada da desigualdade.
- A análise comparativa revela que não há uma correlação forte entre os índices, sugerindo que cada um captura aspectos distintos da desigualdade de gênero.
`

const indgContent = `
## Análise do INDG (Índice Nacional de Desigualdade de Gênero)

O **INDG** busca medir a desigualdade de gênero nos estados brasileiros, considerando diversas dimensões como economia, educação, política e saúde.

### Estados com Menor Desigualdade de Gênero (INDG mais alto)

1. **Rio Grande do Norte (RN):** 0,77953
2. **Roraima (RR):** 0,77617
3. **Maranhão (MA):** 0,76858
4. **Amapá (AP):** 0,75201
5. **Sergipe (SE):** 0,74184

### Estados com Maior Desigualdade de Gênero (INDG mais baixo)

1. **Santa Catarina (SC):** 0,67630
2. **Paraná (PR):** 0,68193
3. **Mato Grosso (MT):** 0,69300
4. **Goiás (GO):** 0,69616
5. **Ceará (CE):** 0,70627

### Distribuição Regional

- **Região Norte:** Maioria dos estados com INDG alto.
- **Região Nordeste:** Vários estados com INDG alto.
- **Região Sudeste:** Valores de INDG variam de moderados a altos.
- **Região Sul:** Estados com INDG mais baixo em comparação com outras regiões.
- **Região Centro-Oeste:** Valores variados, com Goiás apresentando um dos menores INDG.
`

const imdgContent = `
## Análise do IMDG (Índice de Medição da Desigualdade de Gênero)

O **IMDG** foca na medição da desigualdade de gênero, possivelmente com diferentes indicadores e metodologias em relação ao INDG.

### Estados com Maior Desigualdade de Gênero (IMDG mais alto)

1. **Goiás (GO):** 0,1556
2. **Minas Gerais (MG):** 0,1300
3. **Pernambuco (PE):** 0,1298
4. **Paraná (PR):** 0,1016
5. **Alagoas (AL):** 0,0976

### Estados com Menor Desigualdade de Gênero (IMDG mais baixo)

1. **Amapá (AP):** 0,0373
2. **Piauí (PI):** 0,0433
3. **Rio de Janeiro (RJ):** 0,0507
4. **Acre (AC):** 0,0565
5. **Tocantins (TO):** 0,0585

### Distribuição Regional

- **Região Norte:** Grande variação nos valores do IMDG.
- **Região Nordeste:** Pernambuco e Alagoas com altos valores, Piauí com baixo IMDG.
- **Região Sudeste:** Minas Gerais com alto IMDG, Rio de Janeiro com baixo IMDG.
- **Região Sul:** Paraná com alto IMDG, outros estados com valores moderados.
- **Região Centro-Oeste:** Goiás com o maior IMDG, Distrito Federal com baixo IMDG.
`

export default function InsightsPage() {
  const sortedByINDG = [...dados].sort((a, b) => b.INDG - a.INDG)
  const sortedByIMDG = [...dados].sort((a, b) => b.IMDG - a.IMDG)

  const renderChart = (data: any[], dataKey: string, fill: string) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nome" angle={-45} textAnchor="end" height={100} interval={0} fontSize={10} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill={fill} />
      </BarChart>
    </ResponsiveContainer>
  )

  const renderScatterPlot = () => (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid />
        <XAxis type="number" dataKey="INDG" name="INDG" domain={[0.65, 0.8]} />
        <YAxis type="number" dataKey="IMDG" name="IMDG" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Estados" data={dados} fill="#8884d8">
          {dados.map((entry, index) => (
            <Scatter key={`scatter-${index}`} name={entry.nome} fill="#8884d8" />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  )

  return (
    <div className="px-4 py-8 bg-gradient-to-br from-purple-100 to-blue-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">Insights sobre Desigualdade de Gênero no Brasil</h1>
      
      <Tabs defaultValue="comparison" className="w-full">
        <TabsList className="flex justify-center mb-8 bg-white rounded-lg p-1 shadow-md">
          <TabsTrigger 
            value="comparison" 
            className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Comparação
          </TabsTrigger>
          <TabsTrigger 
            value="indg" 
            className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            INDG
          </TabsTrigger>
          <TabsTrigger 
            value="imdg" 
            className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            IMDG
          </TabsTrigger>
        </TabsList>

        <TabsContent value="comparison">
          <Card className="bg-white shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700">Comparação entre INDG e IMDG</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                {renderScatterPlot()}
              </div>
              <ReactMarkdown className="prose max-w-none">{comparisonContent}</ReactMarkdown>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="indg">
          <Card className="bg-white shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700">Distribuição do INDG</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                {renderChart(sortedByINDG, "INDG", "#8884d8")}
              </div>
              <ReactMarkdown className="prose max-w-none">{indgContent}</ReactMarkdown>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="imdg">
          <Card className="bg-white shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700">Distribuição do IMDG</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                {renderChart(sortedByIMDG, "IMDG", "#82ca9d")}
              </div>
              <ReactMarkdown className="prose max-w-none">{imdgContent}</ReactMarkdown>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-700 flex items-center">
            <MapPin className="mr-2" />
            Destaques Regionais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'].map((regiao) => (
              <Card key={regiao} className="bg-gradient-to-br from-purple-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">{regiao}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    {regiao === 'Norte' && "Maioria dos estados com INDG alto, variação significativa no IMDG."}
                    {regiao === 'Nordeste' && "Vários estados com INDG alto, IMDG variado."}
                    {regiao === 'Centro-Oeste' && "Goiás com maior IMDG, valores de INDG variados."}
                    {regiao === 'Sudeste' && "INDG moderado a alto, IMDG variado entre estados."}
                    {regiao === 'Sul' && "Estados com INDG mais baixo, IMDG moderado a alto."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

