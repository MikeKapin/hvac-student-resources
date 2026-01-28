/**
 * Valid student and employee access codes
 * Mike Kapin HVAC Student Resources
 */

export const VALID_ACCESS_CODES = [
  // First Year Students
  '1197478', // Graydon Graat
  '1203094', // (New Student)
  '1132756', // Allan Selim
  '1319368', // Amari Thompson
  '1333721', // Bennet Smibert
  '1333274', // Brendan Devries
  '0719098', // Brian Sharp / Benjamin Sharp
  '1278078', // Cameron Fox
  '1333780', // Cody Gordon
  '1334062', // Colby Nigh
  '1326652', // Dawson Kuhn
  '1329782', // Declan Callaghan
  '1306825', // Dylan Dyer
  '1314297', // Eric Dunkley
  '1330893', // Ethan Kemp
  '1330935', // Grayson Mcallister
  '1329797', // Jack Huisman
  '1334013', // Jacob Puchala
  '1305766', // Jake Keillor
  '1333836', // Jaxon Biehn
  '1333845', // Jimmy Schelter
  '1330891', // Jonathon Thrasher
  '1330951', // Joseph Hoeks
  '1333865', // Kaden Flear
  '1333838', // Koen VanBeselaere
  '1325919', // Landon Evans
  '1333869', // Logan Lamarche
  '1295336', // Lucas Morgan
  '1330945', // Mason Vandenheuvel
  '1315388', // Michael Hartman
  '1333882', // Noah Hale
  '1333887', // Owen Allan
  '1331102', // Rowan Baran
  '1288086', // Samuel Hayden
  '1333894', // Sean Lafreniere
  '1330953', // Sean Skuce
  '1330865', // Stefan Apostol
  '1316530', // Tristan Patchett-Marble
  '1333909', // Tyler Eling
  '1334066', // Zachary Roch

  // Second Year Students
  '1281499', // Aiden Cahill
  '0828407', // Alex Baptista
  '1281518', // Brett Finkbeiner
  '1282267', // Coley Bos
  '1281506', // Drew Skuce
  '1282263', // Dustin Mcintosh
  '0931262', // Jarrett Sauvé
  '1282287', // Jordon Stephens
  '1281511', // Kameron Mcphee
  '1250690', // Kyle Degroot
  '1281562', // Landon Dayman
  '1281543', // Logan Waite
  '1281569', // Marshall Jackson
  '1282294', // Mitchel Vanderwerf
  '1282300', // Nathan Lalonde
  '1281553', // Noah Farber
  '1281585', // Quinn Paquette
  '1244969', // Shawn Mcphee

  // Winter 2026 Students (Added Jan 28, 2026)
  '1333721', // A. Barney
  '1333274', // B. Judson
  '1278078', // B. Zhang
  '1320032', // B. Redekop
  '1332280', // C. Chafee
  '1354368', // C. Allison
  '1321749', // D. O'Brien
  '1338146', // D. Carosoriano
  '1325231', // H. Gibson
  '1299023', // J. Bos
  '1326431', // J. Hans
  '1331026', // J. Heywood
  '1327141', // J. Vanwolde
  '1327626', // J. Vanarragon
  '1323128', // K. Zhang
  '1327714', // L. Liu
  '1310445', // M. Akwitti
  '1325845', // M. Akcay
  '1288808', // M. Wang
  '1331586', // M. Lynds
  '1004922', // M. Brown
  '1258250', // M. Thomson
  '1314901', // M. Sadonoja
  '0162684', // N. Abbasey
  '1177589', // N. Verma
  '1309271', // J. Zhang
  '0978363', // R. Bogaert
  '1331376', // S. Reiter
  '1248345', // T. Sleegers
  '1194403', // W. Slemin
  '1099635', // X. Han
  '1250376', // Y. Liu
  '1282231', // Z. Alashmouti
  '1292860', // Z. Than
  '0840616', // (New Student)

  // Faculty
  '0436277', // Mike Kapin
];

/**
 * Validate an access code
 */
export function validateAccessCode(code: string): boolean {
  const trimmedCode = code.trim();
  return VALID_ACCESS_CODES.includes(trimmedCode);
}

/**
 * Check if access is still valid (within 7 days)
 */
export function checkAccessValidity(): boolean {
  if (typeof window === 'undefined') return false;

  const accessData = localStorage.getItem('hvac_access');
  if (!accessData) return false;

  try {
    const { code, timestamp } = JSON.parse(accessData);
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    if (now - timestamp > sevenDaysInMs) {
      // Access expired
      localStorage.removeItem('hvac_access');
      return false;
    }

    // Verify the code is still valid
    return validateAccessCode(code);
  } catch (error) {
    localStorage.removeItem('hvac_access');
    return false;
  }
}

/**
 * Grant access and store in localStorage
 */
export function grantAccess(code: string): void {
  if (typeof window === 'undefined') return;

  const accessData = {
    code: code.trim(),
    timestamp: Date.now()
  };

  localStorage.setItem('hvac_access', JSON.stringify(accessData));
}

/**
 * Revoke access (logout)
 */
export function revokeAccess(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('hvac_access');
}
