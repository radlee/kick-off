USE kick_off;

DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  event_name CHAR (100) NOT NULL,
  event_date CHAR(100) NOT NULL,
);
