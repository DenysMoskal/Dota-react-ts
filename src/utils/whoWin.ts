export const whoWin = (radiant: boolean, radiant_win: boolean) => {
  if (radiant) {
    if (radiant_win) {
      return true;
    }
    return false;
  } else {
    if (radiant_win) {
      return false;
    }
    return true;
  }
};
