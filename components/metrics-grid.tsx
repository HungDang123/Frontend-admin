import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Activity, Users, Database, Zap } from "lucide-react"

const metrics = [
  {
    title: "Total Requests",
    value: "289K",
    change: "+12.5%",
    trend: "up",
    icon: Activity,
  },
  {
    title: "Active Users",
    value: "12,458",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Data Transfer",
    value: "496GB",
    change: "-3.1%",
    trend: "down",
    icon: Database,
  },
  {
    title: "Response Time",
    value: "142ms",
    change: "-5.4%",
    trend: "up",
    icon: Zap,
  },
]

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const isPositive = metric.trend === "up"
        const TrendIcon = isPositive ? ArrowUp : ArrowDown

        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <Icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{metric.value}</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendIcon className={`w-3 h-3 ${isPositive ? "text-chart-2" : "text-destructive"}`} />
                <span className={`text-xs font-medium ${isPositive ? "text-chart-2" : "text-destructive"}`}>
                  {metric.change}
                </span>
                <span className="text-xs text-muted-foreground">vs last period</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
