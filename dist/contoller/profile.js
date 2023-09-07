"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileDetails = void 0;
const getProfileDetails = (req, res, next) => {
    const { slack_name } = req.query;
    const { track } = req.query;
    // Function to pad single digits with leading zeros
    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    // Get the current UTC time
    const currentUTC = new Date();
    const utcYear = currentUTC.getUTCFullYear();
    const utcMonth = padZero(currentUTC.getUTCMonth() + 1); // Months are zero-indexed
    const utcDay = padZero(currentUTC.getUTCDate());
    const utcHours = padZero(currentUTC.getUTCHours());
    const utcMinutes = padZero(currentUTC.getUTCMinutes());
    const utcSeconds = padZero(currentUTC.getUTCSeconds());
    const currentDateTime = `${utcYear}-${utcMonth}-${utcDay}T${utcHours}:${utcMinutes}:${utcSeconds}Z`;
    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentUTC.getUTCDay()];
    const slackProfile = {
        slack_name: slack_name,
        current_day: currentDayOfWeek,
        utc_time: currentDateTime,
        track: track,
        github_file_url: `https://github.com/fesimaxu/slackProfileApi/blob/main/src/app.ts`,
        github_repo_url: `https://github.com/fesimaxu/slackProfileApi`,
        status_code: 200,
    };
    try {
        res.send(slackProfile);
    }
    catch (error) {
        next(error);
    }
};
exports.getProfileDetails = getProfileDetails;
