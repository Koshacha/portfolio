export interface DateInfo {
  seasonEmoji: string;
  season: string;
  quarter: number;
  year: string;
}

export default function analyzeDate(dateString: string): DateInfo {
  const dateComponents = dateString.split('-').map(Number);
  const [year, month] = dateComponents;

  let seasonEmoji: string;
  let season: string;
  if (month >= 3 && month <= 5) {
    seasonEmoji = '🌼';
    season = 'spring';
  } else if (month >= 6 && month <= 8) {
    seasonEmoji = '🌞';
    season = 'summer';
  } else if (month >= 9 && month <= 11) {
    seasonEmoji = '🍂';
    season = 'autumn';
  } else {
    seasonEmoji = '❄️';
    season = 'winter';
  }

  const quarter = Math.floor((month - 1) / 3) + 1;

  const dateInfo: DateInfo = {
    seasonEmoji,
    season,
    quarter,
    year: year.toString().slice(2)
  };

  return dateInfo;
}
