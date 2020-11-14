export type Ninja = {
  name: string;
  email: string;
  phoneNumber: string | null;
  office: Office;
  tagLine: null;
  mainText: string | null;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string | null;
  imageBodyUrl: string | null;
  imageWallOfLeetUrl: string | null;
  highlighted: boolean;
};

export enum Office {
  Borlänge = 'Borlänge',
  Helsingborg = 'Helsingborg',
  Ljubljana = 'Ljubljana',
  Lund = 'Lund',
  Stockholm = 'Stockholm',
}
