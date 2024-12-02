import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from 'lucide-react'

const insights = [
  "Correlação positiva moderada entre INDG e IMDG",
  "Amapá: alto INDG (0.75201), menor IMDG (0.0373)",
  "Goiás: maior IMDG (0.1556), INDG relativamente baixo (0.69616)",
  "Região Norte: altos valores de INDG, variação significativa em IMDG",
  "Rio de Janeiro: IMDG baixo (0.0507) apesar de forte economia",
  "Análise temporal necessária para identificar tendências",
  "Disparidades entre desenvolvimento e eficiência da gestão pública",
  "Necessidade de políticas específicas para cada estado",
  "Importância de considerar fatores externos na análise",
  "Potencial para melhorias tanto em gestão quanto em desenvolvimento"
]

const Insights = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lightbulb className="mr-2 h-6 w-6" />
          Principais Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="text-sm text-muted-foreground">{insight}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Insights

