import { useLanguage } from '../i18n/LanguageContext';
import { Clock } from 'lucide-react';

interface HoursRowProps {
  day: string;
  hours: string;
  isToday: boolean;
}

function HoursRow({ day, hours, isToday }: HoursRowProps) {
  return (
    <div
      className={`flex justify-between items-center py-3 px-4 rounded-lg ${
        isToday ? 'bg-primary/10 border border-primary/20' : ''
      }`}
    >
      <span className={`font-medium ${isToday ? 'text-primary' : 'text-foreground'}`}>
        {day}
      </span>
      <span className={`${isToday ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
        {hours}
      </span>
    </div>
  );
}

export function OpeningHours() {
  const { t } = useLanguage();

  // Get current day (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();

  const schedule = [
    { day: t.hours.monday, hours: '14:00 - 19:00', dayIndex: 1 },
    { day: t.hours.tuesday, hours: '14:00 - 19:00', dayIndex: 2 },
    { day: t.hours.wednesday, hours: '14:00 - 19:00', dayIndex: 3 },
    { day: t.hours.thursday, hours: '14:00 - 19:00', dayIndex: 4 },
    { day: t.hours.friday, hours: '14:00 - 19:00', dayIndex: 5 },
    { day: t.hours.saturday, hours: '08:00 - 13:00', dayIndex: 6 },
    { day: t.hours.sunday, hours: t.hours.closed, dayIndex: 0 },
  ];

  return (
    <section id="hours" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.hours.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>

        {/* Hours Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            {/* Clock icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-2">
              {schedule.map((item, index) => (
                <HoursRow
                  key={index}
                  day={item.day}
                  hours={item.hours}
                  isToday={item.dayIndex === today}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
