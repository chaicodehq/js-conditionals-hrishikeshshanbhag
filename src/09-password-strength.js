/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  var totalCriteriaFullfilled = 0;
  if (typeof password !== "string" || password.length <= 0) {
    return "weak";
  }
  if (password.length >= 8) {
    totalCriteriaFullfilled++;
  }
  var lowerCasePresence = false;
  var uppercasePresence = false;
  for (var index = "a".charCodeAt(0); index <= "z".charCodeAt(0); index++) {
    if (password.includes(String.fromCharCode(index))) {
      lowerCasePresence = true;
    }
    if (password.includes(String.fromCharCode(index).toUpperCase())) {
      uppercasePresence = true;
    }
  }
  if (lowerCasePresence) {
    totalCriteriaFullfilled++;
  }
  if (uppercasePresence) {
    totalCriteriaFullfilled++;
  }
  var numberPresence = false;
  for (var index = 0; index <= 9; index++) {
    if (password.includes(index.toString())) {
      numberPresence = true;
    }
  }
  if (numberPresence) {
    totalCriteriaFullfilled++;
  }
  var regxForSpecialChars = /[-!@#$%^&*()_+=\[\]{}|;:,.<>?]/;
  if (regxForSpecialChars.test(password)) {
    totalCriteriaFullfilled++;
  }
  if (totalCriteriaFullfilled <= 1) {
    return "weak";
  } else if (totalCriteriaFullfilled > 1 && totalCriteriaFullfilled <= 3) {
    return "medium";
  } else if (totalCriteriaFullfilled == 4) {
    return "strong";
  } else if (totalCriteriaFullfilled >= 5) {
    return "very strong";
  } else {
    return "weak";
  }
}
