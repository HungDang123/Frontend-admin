"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChevronRight } from "lucide-react"

const requestsData = [
  { time: "00:00", value: 2400, status2xx: 2200, status4xx: 150, status5xx: 50 },
  { time: "04:00", value: 1800, status2xx: 1650, status4xx: 120, status5xx: 30 },
  { time: "08:00", value: 3200, status2xx: 2950, status4xx: 200, status5xx: 50 },
  { time: "12:00", value: 2800, status2xx: 2600, status4xx: 150, status5xx: 50 },
  { time: "16:00", value: 3600, status2xx: 3350, status4xx: 200, status5xx: 50 },
  { time: "20:00", value: 2200, status2xx: 2050, status4xx: 120, status5xx: 30 },
]

const dataTransferData = [
  { time: "00:00", outgoing: 45, incoming: 32 },
  { time: "04:00", outgoing: 38, incoming: 28 },
  { time: "08:00", outgoing: 52, incoming: 38 },
  { time: "12:00", outgoing: 48, incoming: 35 },
  { time: "16:00", outgoing: 55, incoming: 42 },
  { time: "20:00", outgoing: 42, incoming: 30 },
]

const performanceData = [
  { time: "00:00", consumed: 180, saved: 95 },
  { time: "04:00", consumed: 165, consumed: 88 },
  { time: "08:00", consumed: 195, saved: 102 },
  { time: "12:00", consumed: 188, saved: 98 },
  { time: "16:00", consumed: 202, saved: 108 },
  { time: "20:00", consumed: 172, saved: 92 },
]

const errorRateData = [
  { time: "00:00", error: 0.8, timeout: 0.3 },
  { time: "04:00", error: 0.6, timeout: 0.2 },
  { time: "08:00", error: 1.2, timeout: 0.4 },
  { time: "12:00", error: 0.9, timeout: 0.3 },
  { time: "16:00", error: 1.1, timeout: 0.5 },
  { time: "20:00", error: 0.7, timeout: 0.2 },
]

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-medium">Edge Requests</CardTitle>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-1" />
                <span className="text-xs text-muted-foreground">2XX</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-3" />
                <span className="text-xs text-muted-foreground">4XX</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span className="text-xs text-muted-foreground">5XX</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={requestsData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value / 1000}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--chart-1))"
                fillOpacity={1}
                fill="url(#colorValue)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-medium">Data Transfer</CardTitle>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-1" />
                <span className="text-xs text-muted-foreground">Outgoing</span>
                <span className="text-xs font-medium">102GB</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-3" />
                <span className="text-xs text-muted-foreground">Incoming</span>
                <span className="text-xs font-medium">3GB</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={dataTransferData}>
              <defs>
                <linearGradient id="colorOutgoing" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorIncoming" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}GB`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Area
                type="monotone"
                dataKey="outgoing"
                stroke="hsl(var(--chart-1))"
                fillOpacity={1}
                fill="url(#colorOutgoing)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="incoming"
                stroke="hsl(var(--chart-3))"
                fillOpacity={1}
                fill="url(#colorIncoming)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-medium">Performance Metrics</CardTitle>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-1" />
                <span className="text-xs text-muted-foreground">Consumed</span>
                <span className="text-xs font-medium">21.87 GB-hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span className="text-xs text-muted-foreground">Saved</span>
                <span className="text-xs font-medium">11.01 GB-hrs</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={performanceData}>
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Line type="monotone" dataKey="consumed" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="saved" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-medium">Error Rate</CardTitle>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span className="text-xs text-muted-foreground">Error</span>
                <span className="text-xs font-medium">0.9%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-chart-3" />
                <span className="text-xs text-muted-foreground">Timeout</span>
                <span className="text-xs font-medium">0.3%</span>
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={errorRateData}>
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Bar dataKey="error" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="timeout" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
