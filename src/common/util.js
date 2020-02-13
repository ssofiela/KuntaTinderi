export const answerValueToBoolean = answer => {
  switch (answer) {
    case 0:
      return false;
    case 1:
      return true;
    default:
      return undefined;
  }
};
