// models/pastConferenceModel.js

const pastConferences = [];

class PastConference {
  constructor(name, venue, date, details) {
    this.name = name;
    this.venue = venue;
    this.date = date;
    this.details = details;
    this.status = 'past';
  }

  static getAllPastConferences() {
    return pastConferences;
  }

  static addPastConference(conference) {
    pastConferences.push(conference);
  }

  static markConferenceAsUpcoming(index) {
    pastConferences[index].status = 'upcoming';
  }
}

module.exports = PastConference;
