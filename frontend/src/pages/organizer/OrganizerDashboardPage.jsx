import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { mockAnalyticsCards, mockChartData } from '@/mocks/db';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageHeader from '@/components/layout/PageHeader';
import PageSection from '@/components/layout/PageSection';

export default function OrganizerDashboardPage() {
  const cards = mockAnalyticsCards;
  const chartData = mockChartData;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Organizer Dashboard"
        description="Monitor your hackathon events and track key metrics"
      />

      <PageSection title="Key Metrics">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                {card.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : card.trend === 'down' ? (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                ) : null}
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="text-2xl font-bold tabular-nums">{card.value}</div>
                {card.change && (
                  <p className={`text-xs font-medium ${card.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                    {card.change} from last week
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <Card>
          <CardHeader>
            <CardTitle>Participation Trend</CardTitle>
            <CardDescription>Daily participant registrations over the past week</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(var(--border))" />
                <XAxis 
                  dataKey="label" 
                  stroke="oklch(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="oklch(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'oklch(var(--card))',
                    border: '1px solid oklch(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="oklch(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'oklch(var(--primary))', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </PageSection>
    </div>
  );
}
