/**
 * Profile Image Metadata
 * Centralized image URLs for astrologers and reviews
 */

export const PROFILE_IMAGES = {
  female: 'https://i.ibb.co/SqG6yht/woman.png',
  male: 'https://i.ibb.co/Z638wTVM/boy.png',
} as const;

/**
 * Helper function to determine gender based on name
 */
export function getProfileImage(name: string): string {
  const femaleNames = [
    'Meera',
    'Lakshmi',
    'Radha',
    'Anjali',
    'Priya',
    'Anita',
    'Priya Sharma',
    'Anita Desai',
    'Meera Iyer',
  ];

  const firstName = name.split(' ')[0];
  const isFemale = femaleNames.some(
    (femaleName) =>
      name.toLowerCase().includes(femaleName.toLowerCase()) ||
      firstName.toLowerCase().includes(femaleName.toLowerCase())
  );

  return isFemale ? PROFILE_IMAGES.female : PROFILE_IMAGES.male;
}
