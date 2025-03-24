

interface BaseUser  {
  id: number,
  username: string,
  email: string,
  city?: string,
  country?: string
}

interface GuestUser  extends BaseUser {
  guestSessionId : string
}

interface RegisteredUser extends BaseUser {
  profile : string;
 lastLogin: Date
}

type User = GuestUser | RegisteredUser;

// פונקציה 
function displayUserInfo(user: User): void {
  if ("guestSessionId" in user) {
    // המשתמש הוא GuestUser
    console.log("Guest Session ID: " + user.guestSessionId);
  } else {
    // המשתמש הוא RegisteredUser
    console.log ("Profile:" + user.profile);
  }
}

// דוגמה לשימוש
const guestUser: GuestUser = {
  id: 1001,
  username: "guest123",
  email: "guest@example.com",
  guestSessionId: "session_ABC123"
};

displayUserInfo(guestUser);


// פונקציה לבדיקה אם user הוא RegisteredUser
function isRegisteredUser(user: User): user is RegisteredUser {
  return "profile" in user && "lastLogin" in user;
}


// פונקציה לעדכון פרופיל - מעדכנת אך ורק RegisteredUser
function updateUserProfile(user: User, newProfile: string): User {
  if (!isRegisteredUser(user)) {
    console.log("Error: Cannot update profile for GuestUser.");
    return user; // מחזירים את המשתמש ללא שינוי
  }

  return {...user, profile: newProfile};
}

// בדיקות:
const guest: GuestUser = {
  id: 1,
  username: "guest123",
  email: "guest@example.com",
  guestSessionId: "session_XYZ123",
};

const registered: RegisteredUser = {
  id: 2,
  username: "john_doe",
  email: "john@example.com",
  profile: "Software Developer",
  lastLogin: new Date(),
};

// ניסיון לעדכן GuestUser (צריך להיכשל)
const updatedGuest = updateUserProfile(guest, "Updated Profile");
console.log(updatedGuest); // מחזיר את אותו GuestUser ללא שינוי

// עדכון RegisteredUser (אמור להצליח)
const updatedRegistered = updateUserProfile(registered, "New Profile Info");
console.log(updatedRegistered); // מחזיר RegisteredUser עם פרופיל מעודכן ו-lastLogin חדש
