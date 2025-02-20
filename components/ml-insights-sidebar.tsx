import { AlertTriangle, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MLInsightsSidebar() {
  return (
    <div className="w-80 bg-steel-gray p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">ML Insights</h2>

      <Card className="mb-4 bg-lt-blue text-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-4 w-4 text-caution-orange" />
            Material Shortage Risk
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">High risk of cement shortage in the next 2 weeks.</p>
        </CardContent>
      </Card>

      <Card className="mb-4 bg-lt-blue text-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-4 w-4 text-safety-green" />
            Supplier Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Supplier A has improved delivery times by 15% this month.</p>
        </CardContent>
      </Card>

      <Card className="mb-4 bg-lt-blue text-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingDown className="mr-2 h-4 w-4 text-error-red" />
            Inventory Alert
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Steel rebar inventory is below reorder threshold.</p>
        </CardContent>
      </Card>
    </div>
  )
}

