'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Calendar1 } from 'lucide-react';

type Props = {
  value: Date;
  onChange: (date: Date) => void;
};

export function DateTimePicker24h({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date>(value);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const updated = new Date(selectedDate);
      updated.setHours(date.getHours());
      updated.setMinutes(date.getMinutes());
      setDate(updated);
      onChange(updated);
    }
  };

  const handleTimeChange = (type: 'hour' | 'minute', val: string) => {
    const updated = new Date(date);
    if (type === 'hour') {
      updated.setHours(parseInt(val));
    } else {
      updated.setMinutes(parseInt(val));
    }
    setDate(updated);
    onChange(updated);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <Calendar1 className="mr-2 h-4 w-4" />
          {date ? format(date, 'MM/dd/yyyy HH:mm') : <span>Pick date & time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="sm:flex">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
          <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {hours.map((hour) => (
                  <Button
                    key={hour}
                    size="icon"
                    variant={date.getHours() === hour ? 'default' : 'ghost'}
                    className="sm:w-full shrink-0 aspect-square"
                    onClick={() => handleTimeChange('hour', hour.toString())}
                  >
                    {hour}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {minutes.map((minute) => (
                  <Button
                    key={minute}
                    size="icon"
                    variant={date.getMinutes() === minute ? 'default' : 'ghost'}
                    className="sm:w-full shrink-0 aspect-square"
                    onClick={() => handleTimeChange('minute', minute.toString())}
                  >
                    {minute.toString().padStart(2, '0')}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
