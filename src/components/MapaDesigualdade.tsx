"use client"

import React, { useState, useRef, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { scaleQuantile } from 'd3-scale'
import { motion } from 'framer-motion'

const geoUrl = 'https://raw.githubusercontent.com/giuliano-macedo/geodata-br-states/refs/heads/main/geojson/br_states.json'

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

const colorScaleINDG = scaleQuantile<string>()
  .domain(dados.map(d => d.INDG))
  .range([
    "#f7fbff", "#deebf7", "#c6dbef",
    "#9ecae1", "#6baed6", "#4292c6",
    "#2171b5", "#08519c", "#08306b"
  ])

const colorScaleIMDG = scaleQuantile<string>()
  .domain(dados.map(d => d.IMDG))
  .range([
    "#fff5f0", "#fee0d2", "#fcbba1",
    "#fc9272", "#fb6a4a", "#ef3b2c",
    "#cb181d", "#a50f15", "#67000d"
  ])

const MapaDesigualdade: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState<'INDG' | 'IMDG'>('INDG')
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height: height - 80 }) // Subtracting 80px for the buttons and legend
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const getEstadoData = (geoId: string) => {
    if (!geoId) return null
    return dados.find(d => d.id.toLowerCase() === geoId.toLowerCase())
  }

  const renderMap = (index: 'INDG' | 'IMDG') => {
    return (
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 700 }}
        width={dimensions.width}
        height={dimensions.height}
      >
        <ZoomableGroup center={[-55, -15]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const cur = getEstadoData(geo.id)
                if (!cur) {
                  console.log(`No data found for: ${geo.id}`)
                }
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={cur ? (index === 'INDG' ? colorScaleINDG(cur.INDG) : colorScaleIMDG(cur.IMDG)) : "#EEE"}
                    stroke="#FFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#F53" },
                      pressed: { outline: "none" },
                    }}
                    onMouseEnter={() => {
                      setSelectedState(cur ? cur.nome : null)
                    }}
                    onMouseLeave={() => {
                      setSelectedState(null)
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    )
  }

  return (
    <div className="flex flex-col h-full" ref={containerRef}>
      <div className="mb-4 flex space-x-2 sm:space-x-4">
        <button
          className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-200 ${
            activeIndex === 'INDG'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveIndex('INDG')}
        >
          INDG
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-200 ${
            activeIndex === 'IMDG'
              ? 'bg-red-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveIndex('IMDG')}
        >
          IMDG
        </button>
      </div>
      <div className="relative flex-grow">
        {renderMap(activeIndex)}
        {selectedState && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-0 left-0 bg-white p-2 rounded shadow text-sm sm:text-base"
          >
            <p className="font-bold">{selectedState}</p>
            <p>INDG: {dados.find(d => d.nome === selectedState)?.INDG.toFixed(4)}</p>
            <p>IMDG: {dados.find(d => d.nome === selectedState)?.IMDG.toFixed(4)}</p>
          </motion.div>
        )}
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="flex justify-center space-x-1 sm:space-x-2 mb-2">
          {(activeIndex === 'INDG' ? colorScaleINDG : colorScaleIMDG).range().map((color, i) => (
            <div key={i} style={{ backgroundColor: color, width: '12px', height: '12px' }} className="sm:w-4 sm:h-4" />
          ))}
        </div>
        <p className="text-xs sm:text-sm text-center">
          {activeIndex === 'INDG' ? 'INDG: Menor ← Maior' : 'IMDG: Menor ← Maior'}
        </p>
      </div>
    </div>
  )
}

export default MapaDesigualdade

