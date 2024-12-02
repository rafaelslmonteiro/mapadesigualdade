"use client"

import { useState } from 'react'
import MapaDesigualdade from '@/components/MapaDesigualdade'
import IndiceResumo from '@/components/IndiceResumo'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'

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
  { id: "RR", nome: "Roraima",INDG: 0.77617, IMDG: 0.0893 },
  { id: "SC", nome: "Santa Catarina", INDG: 0.67630, IMDG: 0.0776 },
  { id: "SP", nome: "São Paulo", INDG: 0.71782, IMDG: 0.0859 },
  { id: "SE", nome: "Sergipe", INDG: 0.74184, IMDG: 0.0625 },
  { id: "TO", nome: "Tocantins", INDG: 0.72714, IMDG: 0.0585 }
]

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-12 sm:py-20 min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 relative z-10 pb-16 sm:pb-24">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-poppins">
              Mapa de Desigualdade de Gênero no Brasil
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              Explore os índices de desigualdade de gênero em diferentes estados brasileiros através de mapas interativos e dados detalhados.
            </p>
            <a href="#explore" className="bg-white text-indigo-800 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:bg-indigo-100 transition duration-300">
              Explorar Dados
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,165.3C672,181,768,171,864,154.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8" id="explore">
        <motion.section 
          className="mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800 font-poppins">Entenda os Índices de Desigualdade</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Nossos mapas e dados oferecem uma visão abrangente da desigualdade de gênero no Brasil, permitindo uma análise detalhada por estado. Explore os mapas interativos e compare os índices INDG e IMDG para cada estado brasileiro.
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <IndiceResumo 
            titulo="INDG"
            descricao="O Índice Nacional de Desigualdade de Gênero (INDG) mede as disparidades de gênero entre os estados brasileiros, considerando economia, educação, política e saúde."
            icon="INDG"
          />
          <IndiceResumo 
            titulo="IMDG"
            descricao="O Índice de Medição da Desigualdade de Gênero (IMDG) aprofunda a análise das desigualdades de gênero com uma abordagem espacial, identificando padrões regionais e locais."
            icon="IMDG"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-lg h-[700px]">
              <CardContent className="p-2 sm:p-4 h-full">
                <MapaDesigualdade />
              </CardContent>
            </Card>
          </div>
          <div className="w-full">
            <Card className="bg-white shadow-lg h-[700px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-800">Índices por Estado</CardTitle>
              </CardHeader>
              <CardContent className="h-[calc(100%-70px)] overflow-y-auto">
                <Table>
                  <TableCaption>Índices de Desigualdade de Gênero por Estado</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Estado</TableHead>
                      <TableHead>INDG</TableHead>
                      <TableHead>IMDG</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dados.map((estado) => (
                      <TableRow key={estado.id}>
                        <TableCell>{estado.nome}</TableCell>
                        <TableCell>{estado.INDG.toFixed(4)}</TableCell>
                        <TableCell>{estado.IMDG.toFixed(4)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Aprofunde-se nos Dados</h2>
        <p className="mb-6">Explore análises detalhadas e insights sobre a desigualdade de gênero no Brasil.</p>
        <Link href="/insights" className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-purple-700 transition duration-300">
          Ver Insights
        </Link>
      </section>
    </>
  )
}

