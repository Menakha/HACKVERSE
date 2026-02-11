import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, Users } from 'lucide-react';
import { mockEvents } from '@/mocks/db';
import PageHeader from '@/components/layout/PageHeader';
import InteractiveCard from '@/components/layout/InteractiveCard';
import { EmptyState } from '@/components/theme/LoadingStates';

export default function EventListPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const navigate = useNavigate();

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'default';
      case 'upcoming': return 'secondary';
      case 'ended': return 'outline';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Hackathon Events"
        description="Discover and join exciting hackathons from around the world"
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search events..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10 h-11"
          />
        </div>
        <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value)}>
          <SelectTrigger className="w-full sm:w-[180px] h-11">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="ended">Ended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredEvents.length === 0 ? (
        <Card>
          <CardContent className="pt-12 pb-12">
            <EmptyState
              icon={Calendar}
              title="No Events Found"
              description="No events match your search criteria. Try adjusting your filters or search terms."
            />
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            <InteractiveCard 
              key={event.id} 
              onClick={() => navigate({ to: `/events/${event.id}` })}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <Badge variant={getStatusColor(event.status)} className="capitalize">
                    {event.status}
                  </Badge>
                  <Badge variant="outline" className="font-normal">
                    {event.participantCount} participants
                  </Badge>
                </div>
                <div className="space-y-2">
                  <CardTitle className="line-clamp-2 text-xl">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="truncate">
                      {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4 flex-shrink-0" />
                    Max team size: {event.maxTeamSize}
                  </div>
                </div>
                <Button className="w-full" variant="outline" size="sm">
                  View Details
                </Button>
              </CardContent>
            </InteractiveCard>
          ))}
        </div>
      )}
    </div>
  );
}
