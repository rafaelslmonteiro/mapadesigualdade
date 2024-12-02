import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users } from 'lucide-react'
import Link from 'next/link'

interface IndiceResumoProps {
  titulo: string
  descricao: string
  icon: 'INDG' | 'IMDG'
}

const IndiceResumo: React.FC<IndiceResumoProps> = ({ titulo, descricao, icon }) => {
  const bgColor = icon === 'INDG' ? 'from-blue-50 to-blue-100' : 'from-purple-50 to-purple-100'
  const textColor = icon === 'INDG' ? 'text-blue-800' : 'text-purple-800'
  const buttonColor = icon === 'INDG' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'

  return (
    <Card className={`overflow-hidden border-0 bg-gradient-to-br ${bgColor}`}>
      <CardHeader className="space-y-1 pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className={`text-xl font-semibold ${textColor}`}>{titulo}</CardTitle>
          {icon === 'INDG' ? (
            <BarChart className="h-8 w-8 text-blue-600" />
          ) : (
            <Users className="h-8 w-8 text-purple-600" />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-2 px-6 pb-4">
        <p className={`text-sm ${textColor} leading-relaxed`}>{descricao}</p>
        <Link href="/indices" className={`inline-block mt-2 px-4 py-2 ${buttonColor} text-white rounded-md transition-colors`}>
          Saiba mais
        </Link>
      </CardContent>
    </Card>
  )
}

export default IndiceResumo

