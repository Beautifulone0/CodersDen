/*Question 1 Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
 YYY-MM-DD HH:mm eg. 20120-01-02 07:*/
  const now = new Date();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let hour = now.getHours();
  let minutes = now.getMinutes();
     console.log(
      `${year}-${month.toLocaleString().padStart(2, 0)}-${date
      .toLocaleString()
      .padStart(2, 0)} ${hour.toLocaleString().padStart(2, 0)}:${minutes
      .toLocaleString()
      .padStart(2, 0)} `
  );