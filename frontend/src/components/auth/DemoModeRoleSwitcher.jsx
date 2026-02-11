import { useSession } from '@/features/auth/useSession';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function DemoModeRoleSwitcher() {
  const { session, setRole } = useSession();

  if (!session) return null;

  const handleRoleChange = (value) => {
    setRole(value);
  };

  return (
    <Select value={session.role} onValueChange={handleRoleChange}>
      <SelectTrigger className="w-[140px] h-9 text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="participant">Participant</SelectItem>
        <SelectItem value="organizer">Organizer</SelectItem>
        <SelectItem value="judge">Judge</SelectItem>
      </SelectContent>
    </Select>
  );
}
